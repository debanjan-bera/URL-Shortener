import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Edit2, Link2, MoreVertical, Trash2 } from "lucide-react";
import ItemBox from "./ItemBox";

export default function BoxQRList({filteredLinks}) {
      const [selectedLink, setSelectedLink] = useState(null);
    
  return (
    <motion.div
      key="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {filteredLinks.map((link, index) => (
        <motion.div
          key={link.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-card border border-border rounded-xl p-4 group"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Link2 size={20} className="text-primary" />
            </div>
            <div className="relative">
              <button
                onClick={() =>
                  setSelectedLink(selectedLink === link.id ? null : link.id)
                }
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
              >
                <MoreVertical size={16} />
              </button>
              {selectedLink === link.id && (
              <ItemBox link={link}/>
                // <div className="absolute right-0 mt-1 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[120px] z-10">
                //   <button
                //     // onClick={() => startEdit(link)}
                //     className="w-full px-3 py-2 text-left text-sm hover:bg-accent/10 flex items-center gap-2"
                //   >
                //     <Edit2 size={14} /> Edit
                //   </button>
                //   <button
                //     // onClick={() => copyToClipboard(link.shortUrl)}
                //     className="w-full px-3 py-2 text-left text-sm hover:bg-accent/10 flex items-center gap-2"
                //   >
                //     <Copy size={14} /> Copy
                //   </button>
                //   <button
                //     // onClick={() => setDeleteConfirm(link.id)}
                //     className="w-full px-3 py-2 text-left text-sm hover:bg-red-500/10 text-red-500 flex items-center gap-2"
                //   >
                //     <Trash2 size={14} /> Delete
                //   </button>
                // </div>
              )}
            </div>
          </div>
          <div>
            {/* {editingId === link.id ? (
              <div className="flex items-center gap-2 mb-1">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="h-8 text-sm"
                />
                <button
                  onClick={() => handleEdit(link.id, editName)}
                  className="p-1 text-green-500"
                >
                  <Check size={16} />
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="p-1 text-muted-foreground"
                >
                  <X size={16} />
                </button>
              </div>
            ) : ( */}
              <h3 className="font-semibold text-foreground mb-1">
                {link.name}
              </h3>
            {/* )} */}
            <p className="text-sm text-primary font-medium mb-1">
              {link.shortUrl}
            </p>
            <p className="text-xs text-muted-foreground truncate mb-3">
              {link.originalUrl}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                <span>{link.clicks.toLocaleString()} clicks</span>
                <span className="mx-2">•</span>
                <span>{link.created}</span>
              </div>
              <a
                href={`https://${link.shortUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ArrowUpRight size={14} />
                Open
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
