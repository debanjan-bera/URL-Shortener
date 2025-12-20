import { Copy, Edit2, Trash2 } from "lucide-react";
import React from "react";

function ItemBox({link}) {
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(`https://${url}`);
  };
  return (
    <>
      <div className="absolute right-0 mt-1 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[120px] z-10">
        <button
          // onClick={() => startEdit(link)}
          className="w-full px-3 py-2 text-left text-sm hover:bg-accent/10 flex items-center gap-2"
        >
          <Edit2 size={14} /> Edit
        </button>
        <button
          onClick={() => copyToClipboard(link.shortUrl)}
          className="w-full px-3 py-2 text-left text-sm hover:bg-accent/10 flex items-center gap-2"
        >
          <Copy size={14} /> Copy
        </button>
        <button
          // onClick={() => setDeleteConfirm(link.id)}
          className="w-full px-3 py-2 text-left text-sm hover:bg-red-500/10 text-red-500 flex items-center gap-2"
        >
          <Trash2 size={14} /> Delete
        </button>
      </div>
    </>
  );
}

export default ItemBox;
