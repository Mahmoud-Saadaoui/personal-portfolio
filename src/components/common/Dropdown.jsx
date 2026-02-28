import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const Dropdown = ({
  trigger,
  items,
  value,
  onChange,
  className = "",
  isRTL = false,
}) => {
  const [open, setOpen] = useState(false);
  const { ref: dropdownRef, btnRef } = useClickOutside(() => setOpen(false), open);

  const handleSelect = (itemValue) => {
    onChange(itemValue);
    setOpen(false);
  };

  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Trigger Button */}
      <div ref={btnRef}>{trigger({ open, setOpen })}</div>

      {/* Dropdown Menu */}
      {open && (
        <div
          ref={dropdownRef}
          className={`
            absolute mt-2 w-36 rounded-xl shadow-lg overflow-hidden
            border border-[var(--color-border-subtle)]
            bg-[var(--color-surface)]
            z-[var(--z-dropdown)] animate-fade-slide
            ${isRTL ? "left-0" : "right-0"}
          `}
        >
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => handleSelect(item.value)}
              className={`
                w-full px-4 py-2 flex items-center gap-2
                hover:bg-[var(--color-background)]
                transition-all
                ${isRTL ? "text-right" : "text-left"}
                ${value === item.value
                  ? "font-semibold text-[var(--color-primary)]"
                  : "text-[var(--color-text-main)]"
                }
              `}
            >
              {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
