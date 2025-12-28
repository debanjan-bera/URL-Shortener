import { memo, useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Edit2, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteUrl } from "./features/URL/urlReducers";
import { toggleDrawer } from "./features/UI/uiReducers";

const Dropdown = ({ link, isOpen, onToggle, onClose }) => {
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const [position, setPosition] = useState("bottom");
  const [copiedId, setCopiedId] = useState(null);
  const dispatch = useDispatch()

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(`https://${link.shortUrl}`);

    setCopiedId(link.id);

    setTimeout(() => {
      setCopiedId(null);
      onClose();
    }, 1200);
  }, [link.shortUrl, link.id, onClose]);
const handleDelete = () => {
    dispatch(deleteUrl(link.id));
    onClose();
  };

  // 🔁 Auto flip
  useEffect(() => {
    if (!isOpen) return;

    const calculatePosition = () => {
      if (!btnRef.current || !menuRef.current) return;

      const btnRect = btnRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - btnRect.bottom;

      setPosition(
        spaceBelow < menuRef.current.offsetHeight + 8 ? "top" : "bottom"
      );
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);
    window.addEventListener("scroll", calculatePosition, true);

    return () => {
      window.removeEventListener("resize", calculatePosition);
      window.removeEventListener("scroll", calculatePosition, true);
    };
  }, [isOpen]);

  // ❌ Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !btnRef.current?.contains(e.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={onToggle}
        className="px-2 py-1 rounded hover:bg-muted"
      >
        ⋮
      </button>

      {/* ✅ REQUIRED FOR EXIT ANIMATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute right-0 w-40 bg-card border border-border rounded-lg shadow-lg z-50
              ${position === "bottom" ? "top-full mt-2" : "bottom-full mb-2"}
            `}
          >
            <div className="px-4 py-2 text-sm hover:bg-muted/60 flex items-center gap-2 cursor-pointer">
              <Edit2 size={14} /> Edit
            </div>
            <div className="px-4 py-2 text-sm hover:bg-muted/60 flex items-center gap-2 cursor-pointer"
            onClick={()=> dispatch(toggleDrawer())}
            >
              <Edit2 size={14} /> Info
            </div>

            <button
              onClick={copyToClipboard}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-muted/60 flex items-center gap-2
                ${copiedId === link.id ? "text-green-500" : ""}
              `}
            >
              <Copy size={14} /> Copy
            </button>

            <button
            onClick={handleDelete}
            className="px-3 py-2 text-sm flex items-center gap-2 hover:bg-red-500/10 text-red-500 cursor-pointer">
              <Trash2 size={14} /> Delete
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(Dropdown);
