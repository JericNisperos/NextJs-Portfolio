import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollDirection } from "../hooks/ScrollDirection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faHome, faMoon, faPaperPlane, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
// import lottie from "lottie-web";
// import { defineElement } from "lord-icon-element";

// defineElement(lottie.loadAnimation);

const Navbar = () => {
  // defineElement(lottie.animation);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollDirection = useScrollDirection(0);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const containerVariants = {
    hidden: { y: 0 },
    visible: () => {
      if (scrollDirection === "down") {
        return { y: isScrolling ? -20 : 0 };
      } else if (scrollDirection === "up") {
        return { y: isScrolling ? 20 : 0 };
      }
    },
  };

  return (
    <motion.div className=" fixed bottom-4 mx-auto z-50 left-0 right-0 flex justify-center items-end" variants={containerVariants} animate={isScrolling ? "visible" : "hidden"} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
      <div className="dark:bg-white bg-zinc-900 shadow-md p-2 rounded-full ease-in-out duration-500 flex ">
        <p className="dark:text-black text-white">
          <FontAwesomeIcon icon={faHome} className="px-2" />
          <FontAwesomeIcon icon={faUser} className="px-2" />
          <FontAwesomeIcon icon={faFolder} className="px-2" />
          <FontAwesomeIcon icon={faPaperPlane} className="px-2" />
        </p>
        <p className="text-white dark:text-black cursor-default">┃</p>

        <div className="has-tooltip text-white dark:text-black px-2 ">
          <div className="tooltip rounded text-black dark:text-white shadow-lg p-1 -mt-12 z-60 ease-in-out">Toggle Dark Mode</div>

          {currentTheme === "dark" ? (
            <button onClick={(e) => setTheme("light")}>
              <FontAwesomeIcon icon={faMoon} />
            </button>
          ) : (
            <button onClick={(e) => setTheme("dark")}>
              <FontAwesomeIcon icon={faSun} />
            </button>
          )}

{/* <lord-icon src="https://cdn.lordicon.com/slduhdil.json" trigger="morph" colors="primary:#121331" state="morph-2" style={"width: 250px;height: 250px"}></lord-icon> */}

        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
