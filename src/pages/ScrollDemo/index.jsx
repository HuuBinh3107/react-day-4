import { useState, useEffect } from "react";
import scrollStyles from "./ScrollDemo.module.scss";
import goTopStyles from "../../components/GoToTop/GoToTop.module.scss";


function ScrollDemo() {
  const [showButton, setShowButton] = useState(false);

  const paragraphs = Array.from({ length: 20 }, (_, i) => (
    <p style={{ color: "white" }} key={i}>Xin chao !</p>
  ));

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={scrollStyles.scrollDemoWrapper}>
      <div className={scrollStyles.scrollDemo}>
        <div className={scrollStyles.header}>
          <h2>Scroll Demo Page</h2>
        </div>
        <div className={scrollStyles.content}>{paragraphs}</div>
      </div>

      {/* Nút GoToTop */}
      <button
        className={`${goTopStyles.goToTop} ${
          showButton ? goTopStyles.show : ""
        }`}
        onClick={scrollToTop}
      >
        ▲
      </button>
    </div>
  );
}

export default ScrollDemo;
