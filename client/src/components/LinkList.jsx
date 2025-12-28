import { ArrowUpRight} from "lucide-react";
import { memo, useState } from "react";
import { motion } from "framer-motion";
import Dropdown from "./DropDown";

const MyLinksList = ({ filteredLinks, isDashboard }) => {
  const [openId, setOpenId] = useState(null);
  const tableCells = [
    {
      label: "Name",
      className: "hidden sm:table-cell",
    },
    {
      label: "Short URL",
      className: "table-cell",
    },
    {
      label: "Original URL",
      className: "hidden md:table-cell",
    },
    {
      label: "Clicks",
      className: "table-cell ",
    },
    {
      label: "QR Code",
      className: "table-cell",
    },
    {
      label: "Created",
      className: "hidden lg:table-cell",
    },
    {
      label: "Actions",
      className: "table-cell",
    },
  ];

  return (
    <>
      <motion.div
        key="list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`bg-card w-full  ${
          !isDashboard && "border border-border rounded-xl"
        }`}
      >
        <table className="w-full table-fixed">
          <thead className="bg-muted/30">
            <tr className="align-middle">
              {tableCells.map((e) => {
                return (
                  <th
                    key={e.label}
                    className={`px-4 py-3 text-center text-sm font-medium text-muted-foreground ${e.className} `}
                  >
                    {e.label}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {filteredLinks.map((link) => (
              <tr
                key={link.id}
                className="hover:bg-muted/10 transition-colors align-middle"
              >
                <td className={`px-4 py-3 align-middle  hidden sm:table-cell`}>
                  <span className="font-medium text-foreground truncate block">
                    {link?.urlTitle}
                  </span>
                </td>

                <td className="px-4 py-3 align-middle">
                  {/* <div className="flex  gap-1 text-primary text-sm font-medium truncate max-w-[260px]">
                    {link?.shortUrl}
                    
                  </div> */}
                  <span className=" text-primary text-sm truncate block max-w-[260px]">
                    {link?.shortUrl}
                  </span>
                </td>

                <td className="px-4 py-3 hidden md:table-cell align-middle">
                  <span className="text-muted-foreground text-sm truncate block max-w-[260px]">
                    {link?.originalUrl}
                  </span>
                </td>

                <td className="px-4 py-3 align-middle text-foreground text-sm text-center">
                  {link?.clicks.toLocaleString()}
                </td>

                <td className="px-4 py-3 table-cell align-middle">
                  <div className="flex justify-center">
                    {!link?.qrCode ? (
                      <span className="text-muted-foreground">—</span>
                    ) : (
                      <img src={link.qrCode} alt="QR Code" className="h-10 w-10 rounded-sm object-contain" />
                    )}
                  </div>
                </td>

                <td className="px-4 py-3 hidden lg:table-cell align-middle text-sm text-muted-foreground text-center">
                  {link?.created}
                </td>

                <td className="px-4 py-3 align-middle">
                  <div className="flex justify-center items-center gap-1">
                    <a
                      href={`https://${link.shortUrl}`}
                      target="_blank" rel="noopener noreferrer"
                      className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Open link" >
                      <ArrowUpRight size={16} className="text-primary" />
                    </a>

                    <Dropdown isOpen={openId === link.id} link={link}
                      onToggle={() => setOpenId(openId === link.id ? null : link.id)}
                      onClose={() => setOpenId(null)}
                    />
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

export default memo(MyLinksList);
