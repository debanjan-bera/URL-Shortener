import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Copy,
  Edit2,
  ExternalLink,
  MoreVertical,
  Trash2,
} from "lucide-react";
import ItemBox from "./ItemBox";
import { useState } from "react";

const MyLinksList = ({ filteredLinks }) => {
  const [selectedLink, setSelectedLink] = useState(null);

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(`https://${url}`);
  };
  return (
    <>
      <motion.div
        key="list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-card w-full border border-border rounded-xl overflow-hidden "
      >
        <div className="overflow-x-auto">

        </div>
        <table className="w-full overflow-x-auto">
          <thead className="bg-muted/30">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden sm:table-cell">
                Name
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                Short URL
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">
                Original URL
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                Clicks
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">
                QR Code
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden lg:table-cell">
                Created
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredLinks.map((link) => (
              <tr key={link.id} className="hover:bg-muted/10 transition-colors">
                <td className="px-4 py-3 hidden sm:table-cell">
                  {/* {editingId === link.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="h-8 text-sm w-32"
                      />
                      <button
                        onClick={() => handleEdit(link.id, editName)}
                        className="text-green-500"
                      >

                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-muted-foreground"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <span className="font-medium text-foreground">
                      {link.name}
                    </span>
                  )} */}
                  <span className="font-medium text-foreground">
                    {link.name}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-primary font-medium text-sm flex items-center gap-1">
                    {link.shortUrl}
                    <ExternalLink size={12} />
                  </span>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className="text-muted-foreground hover:text-foreground  text-sm">
                    {link.originalUrl.slice(0, 28)}...
                  </span>
                </td>
                <td className="px-4 py-3 text-foreground">
                  {link.clicks.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-foreground  justify-center hidden md:table-cell">
                  <img
                    src={`${link?.qrcode || "logo.png"}`}
                    alt=""
                    className="h-10 aspect-square rounded-sm"
                  />
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                  {link.created}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <a
                      href={`https://${link.shortUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-primary/10 rounded-lg transition-colors "
                      title="Open link"
                    >
                      <ArrowUpRight size={16} className="text-primary" />
                    </a>
                    <div className="relative">
                      <button
                        className="p-2 rounded-2xl hover:bg-neutral-300/30 transition-colors "
                        onClick={() =>
                          setSelectedLink(
                            selectedLink === link.id ? null : link.id
                          )
                        }
                      >
                        <MoreVertical size={16} className="relative" />
                      </button>
                        {selectedLink === link.id && (
                          <ItemBox link={filteredLinks} />
                        )}

                    </div>

                    <button
                      // onClick={() => startEdit(link)}
                      className="p-2 hover:bg-accent/10 rounded-lg transition-colors hidden"
                    >
                      <Edit2 size={16} className="text-muted-foreground" />
                    </button>
                    <button
                      onClick={() => copyToClipboard(link.shortUrl)}
                      className="p-2 hover:bg-accent/10 rounded-lg transition-colors hidden"
                    >
                      <Copy size={16} className="text-muted-foreground" />
                    </button>
                    <button
                      // onClick={() => setDeleteConfirm(link.id)}
                      className="p-2 hover:bg-red-500/10 rounded-lg transition-colors hidden"
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </>
  );
};

export default MyLinksList;
