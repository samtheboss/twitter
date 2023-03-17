import { useState } from "react";

function DialogBox({ onCancel, onConfirm }) {
  const [showDialog, setShowDialog] = useState(true);

  function handleCancel() {
    setShowDialog(false);
    onCancel();
  }

  function handleConfirm() {
    setShowDialog(false);
    onConfirm();
  }

  return (
    <div
      className="dialog-box"
      style={{ display: showDialog ? "block" : "none" }}
    >
      <div className="dialog-box__backdrop" onClick={handleCancel}></div>
      <div className="dialog-box__container">
        <div className="dialog-box__message">
          Are you sure you want to remove the post?
        </div>
        <div className="dialog-box__actions">
          <button
            className="dialog-box__button dialog-box__button--cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="dialog-box__button dialog-box__button--confirm"
            onClick={handleConfirm}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
