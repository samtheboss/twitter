import Head from "next/head";
import { Inter } from "next/font/google";
import Sidebar from "@/Components/Sidebar";
import Feed from "@/Components/Feed";
import Widgets from "@/Components/Widgets";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ newResults, whotofollow }) {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          newResults={newResults.articles}
          whotofollow={whotofollow.results}
        />
      </main>
    </div>
  );
}
//https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  try {
    const newResults = await fetch(
      "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
    ).then((res) => res.json());
    const whotofollow = await fetch(
      "https://randomuser.me/api/?results=50&inc=name,login,picture"
    ).then((res) => res.json());
    return {
      props: {
        newResults,
        whotofollow,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        newResults: [],
        whotofollow: [],
      },
    };
  }
}
