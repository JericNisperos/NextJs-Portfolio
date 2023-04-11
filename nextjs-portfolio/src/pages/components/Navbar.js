import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faHome, faMoon, faPaperPlane, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const useScrollDirection = () => {
    const THRESHOLD = 0;
    const [scrollDirection, setScrollDirection] = useState("up");

    const blocking = useRef(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
      prevScrollY.current = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
          const newScrollDirection = scrollY > prevScrollY.current ? "down" : "up";

          setScrollDirection(newScrollDirection);

          prevScrollY.current = scrollY > 0 ? scrollY : 0;
        }

        blocking.current = false;
      };

      const onScroll = () => {
        if (!blocking.current) {
          blocking.current = true;
          window.requestAnimationFrame(updateScrollDirection);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDirection]);

    return scrollDirection;
  };

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollDirection = useScrollDirection(0);

  const mode = currentTheme === "dark" ? "DarkMode" : "LightMode";
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

  function NavItems({ href, icon, title, clicked }) {
    return (
      <AnimatePresence>
        <span className="has-tooltip flex">
          <motion.span whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }} initial={{ scale: 1.0 }}>
            <Link href={href} className={`${router.pathname === href ? "text-cyan-500" : ""}`} >
              <FontAwesomeIcon icon={icon} id={title} onClick={clicked} className=" px-2 hover:text-cyan-500 hover:dark:text-cyan-500 cursor-pointer" />
            </Link>
          </motion.span>
          <span className="tooltip text-xs rounded text-black dark:text-white bg-white dark:bg-gray-700 shadow-lg p-1 flex-none -mt-8 z-60 ease-in-out">
           {title}
          </span>
        </span>
      </AnimatePresence>
    );
  }
  return (
    <motion.div
      className="fixed sm:bottom-4 bottom-8 mx-auto z-50 left-0 right-0 flex justify-center items-end "
      variants={containerVariants}
      animate={isScrolling ? "visible" : "hidden"}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="scale-[1.5] sm:scale-[1.2] dark:bg-white bg-zinc-900 shadow-md p-2 rounded-full ease-in-out duration-500 flex ">
        <p className="dark:text-black text-white flex">
          <NavItems href="/" title="Home" icon={faHome} />
          <NavItems href="/about" title="About" icon={faUser} />
          <NavItems href="/projects" title="Projects" icon={faFolder} />
          <NavItems href="/contact" title="Contact" icon={faPaperPlane} />
        </p>
        <p className="text-white dark:text-black cursor-default">{/* │ */}</p>

        <div className="has-tooltip text-white dark:text-black px-2 hover:text-cyan-500 hover:dark:text-cyan-500 ">
          <div className="tooltip text-xs rounded text-black dark:text-white bg-white dark:bg-gray-700 shadow-lg p-1 flex-none -mt-8 z-60 ease-in-out">
            <div>Darkmode</div>
          </div>
          <span className="flex ">
            <motion.span whileHover={{ scale: 1.6, duration: 0.2 }} transition={{ duration: 0.5 }} whileTap={{ rotate: -1200 }} initial={{ scale: 1.0 }} className="origin-[50%_45%]">
              <FontAwesomeIcon icon={currentTheme === "dark" ? faSun : faMoon} id="DarkMode" onClick={(e) => setTheme(currentTheme === "dark" ? "light" : "dark")} className=" hover:text-cyan-500 hover:dark:text-cyan-500 cursor-pointer" />
            </motion.span>
          </span>
        </div>
      </div>

      
    </motion.div>
  );
};

export default Navbar;
