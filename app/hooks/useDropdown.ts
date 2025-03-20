// hooks/useDropdown.ts
import { useState, useEffect, useRef } from "react";

export function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close with a Longer Delay on Mouse Leave
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 900); // Increased from 300ms to 500ms
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { isOpen, toggleDropdown, handleMouseEnter, handleMouseLeave, dropdownRef };
}
