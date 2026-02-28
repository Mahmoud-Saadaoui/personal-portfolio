import { useEffect, useRef } from "react";

/**
 * Custom hook to detect clicks outside a component
 * @param {Function} callback - Function to call when clicking outside
 * @param {Boolean} isOpen - State tracking if element is open
 */
const useClickOutside = (callback, isOpen = true) => {
  const ref = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [callback, isOpen]);

  return { ref, btnRef };
};

export default useClickOutside;
