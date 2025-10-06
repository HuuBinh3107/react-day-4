import { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import CustomModal from "../../components/Modal";


function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(
    "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
  );
  const [saved, setSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!avatar) return;

    const objectUrl = URL.createObjectURL(avatar);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [avatar]);

  return (
    <div className={styles.profile}>
      <h2>Profile Page</h2>

      <div
        className={`${styles.preview} ${
          saved ? styles.savedBorder : styles.defaultBorder
        }`}
      >
        <img
          src={previewUrl}
          alt="Avatar"
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: "pointer" }}
        />
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setAvatar(e.target.files[0])}
      />

      <button className={styles.saveBtn} onClick={() => setSaved(true)}>
        Lưu ảnh
      </button>

      <CustomModal
        isOpen={isModalOpen}
        imageUrl={previewUrl}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Profile;
