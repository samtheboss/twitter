import { HiOutlineEmojiHappy, HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { FaPollH } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { useSession, signOut } from "next-auth/react";
import { useRef, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/firebaseconfigs";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Inputs() {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const sendPost = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      name: session.user.name,
      username: session.user.username,
      userImg: session.user.image,
      // img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      text: input,
      timestamp: serverTimestamp(),
    });
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          img: downloadUrl,
        });
      });
    }
    setSelectedFile(null);
    setInput("");
    setLoading(false);
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-700 p-3 space-x-3">
          <img
            src={session.user.image}
            height="50"
            width="50"
            onClick={signOut}
            className="rounded-full h-10 w-10 lg:mr-2 cursor-pointer hover:brightness-95"
            alt=""
          />
          <div className="w-full divide-y divide-gray-200">
            <div>
              <textarea
                className="w-full border-none focus:ring-0 text-lg 
          placeholder-gray-700 tracking-wide  text-gray-700 min-h-[50px]:"
                rows="2"
                placeholder="What is Happening"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
            {selectedFile && (
              <div className="relative">
                <XMarkIcon
                  onClick={() => setSelectedFile(null)}
                  className="h-8 text-white absolute cursor-pointer
                   shadow-orange-100 bg-slate-600 rounded-full"
                />
                <img
                  src={selectedFile}
                  alt=""
                  className={`${loading && "rounded-lg animate-pulse"}`}
                />
              </div>
            )}
            <div className="flex items-center justify-between">
              {!loading && (
                <>
                  <div className="flex gap-2">
                    <div
                      className=""
                      onClick={() => filePickerRef.current.click()}
                    >
                      <MdOutlineAddAPhoto className="h-5 w-5 text-sky-500 hover:text-sky-100 cursor-pointer  " />
                      <input
                        type="file"
                        hidden
                        ref={filePickerRef}
                        onChange={addImageToPost}
                      />
                    </div>
                    <HiOutlineEmojiHappy className="h-5 w-5 text-sky-500   hover:text-sky-100 cursor-pointer " />
                    <FaPollH className="h-5 w-5 text-sky-500   hover:text-sky-100 cursor-pointer " />
                    <BsCalendar2Date className="h-5 w-5 text-sky-500   hover:text-sky-200 cursor-pointer " />
                    <GoLocation className="h-5 w-5 text-sky-500   hover:text-sky-200 cursor-pointer " />
                  </div>
                  <button
                    onClick={sendPost}
                    disabled={!input.trim()}
                    className="bg-blue-400
             text-white px-4 py-1.5 rounded-full shadow-md
             hover:brightness-95 disabled:opacity-50 "
                  >
                    Tweet
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
