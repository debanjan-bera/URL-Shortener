import { Copy, Edit2, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

function ItemBox({ link }) {
  const [copiedId, setCopiedId] = useState(null);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://${link.shortUrl}`);
    setCopiedId(link.id);
    setTimeout(() => setCopiedId(null), 2000);
  };
  //   const copyToClipboard = (text, id) => {
  //   navigator.clipboard.writeText(text);

  //
  //right-0 mt-1right: 1rem;
  // top: -7rem;
  // };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-lg shadow-lg z-50"

        // className="absolute right-4 -top-30 mt-1 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[120px] z-10"
      >
        <button
          // onClick={() => startEdit(link)}
          className="w-full px-3 py-2 text-left text-sm hover:bg-accent/10 flex items-center gap-2"
        >
          <Edit2 size={14} /> Edit
        </button>
        <button
          onClick={() => copyToClipboard()}
          className={`w-full px-3 py-2 text-left text-sm hover:bg-accent/10 flex items-center gap-2
                           ${copiedId === link.id ? "text-green-500" : ""}
                          `}
          // className=""
        >
          <Copy size={14} /> Copy
        </button>
        <button
          // onClick={() => setDeleteConfirm(link.id)}
          className="w-full px-3 py-2 text-left text-sm hover:bg-red-500/10 text-red-500 flex items-center gap-2"
        >
          <Trash2 size={14} /> Delete
        </button>
      </motion.div>
    </>
  );
}

export default ItemBox;
