import React, { useState, useEffect } from "react";

function TopScroll() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const handleScroll = (e) => {
    // debugger
    const body = document.getElementById("root");
    body.scrollBy({
      top: 0,
      behavior: "instant",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible, () => {});

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  // window.addEventListener("scroll", toggleVisible);

  return ( 
      <button
        className="scroll-top"
        onClick={handleScroll}
        style={{ display: visible ? "inline" : "none" }}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
  );
}
export default TopScroll;
