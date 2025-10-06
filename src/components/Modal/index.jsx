import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.scss";


Modal.setAppElement("#root");

function CustomModal({
  isOpen,
  imageUrl,
  onClose,
  animation = false,                  // bật/tắt animation
  closeOnOverlayClick = false,        // bật/tắt đóng khi click overlay
  closeOnEsc = false,                 // bật/tắt đóng khi nhấn Esc
  customClass = "",                   // override className
  onAfterOpen = () => console.log("Modal mở"),
  onAfterClose = () => console.log("Modal đóng"),
}) {
  // Lớp CSS cho animation
  const overlayClass = animation
    ? { base: styles.overlay, afterOpen: styles.overlayAfterOpen, beforeClose: styles.overlayBeforeClose }
    : styles.overlay;

  const modalClass = animation
    ? { base: `${styles.modal} ${customClass}`, afterOpen: styles.modalAfterOpen, beforeClose: styles.modalBeforeClose }
    : `${styles.modal} ${customClass}`;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={overlayClass}
      className={modalClass}
      shouldCloseOnOverlayClick={closeOnOverlayClick}
      shouldCloseOnEsc={closeOnEsc}
      closeTimeoutMS={animation ? 300 : 0}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      style={{
        content: {
          position: "relative",
          inset: "auto",
        },
      }}
    >
      {/* Nút đóng góc trên bên phải */}
      <button onClick={onClose} className={styles.closeBtn}>
        ×
      </button>

      {/* Tiêu đề */}
      <h3 className={styles.title}>Avatar xem trước</h3>

      {/* Ảnh */}
      {imageUrl && (
        <img src={imageUrl} alt="Xem trước" className={styles.modalImage} />
      )}
    </Modal>
  );
}

export default CustomModal;
