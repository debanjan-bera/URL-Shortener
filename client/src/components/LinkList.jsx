import { ArrowUpRight, ExternalLink } from "lucide-react";
import { memo, useState } from "react";
import { motion } from "framer-motion";
import Dropdown from "./DropDown";

const MyLinksList = ({ filteredLinks, isDashboard }) => {
  const [openId, setOpenId] = useState(null);
  return (
    <>
      <motion.div
        key="list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`bg-card w-full ${
          !isDashboard && "border border-border rounded-xl"
        } `}
      >
        <div className=""></div>
        <table className="w-full ">
          <thead className="bg-muted/30">
            <tr>
              <th
                className={`text-left px-4 py-3 text-sm font-medium text-muted-foreground ${
                  isDashboard ? "hidden" : "hidden sm:table-cell"
                } `}
              >
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
                <td
                  className={`px-4 py-3 ${
                    isDashboard ? "hidden" : "hidden sm:table-cell"
                  } `}
                >
                  <span className="font-medium text-foreground">
                    {link?.urlTitle}
                  </span>
                </td>
                <td className="px-4 py-3 relative">
                  {/* <div className="flex items-center gap-1 relative"> */}
                  <span className="text-primary font-medium text-sm flex items-center gap-1">
                    {link?.shortUrl}
                    <ExternalLink size={12} />
                  </span>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className="text-muted-foreground hover:text-foreground  text-sm">
                    {link?.originalUrl.slice(0, 28)}...
                  </span>
                </td>
                <td className="px-4 py-3 text-foreground">
                  {link?.clicks.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-foreground items-center justify-center hidden md:flex">
                  {
                  !link?.qrCode ? "-" : 
                  (<img
                    src={link?.qrCode}
                    alt=""
                    className="h-10 aspect-square rounded-sm"
                  />)
                  }
                  
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                  {link?.created}
                </td>
                <td className="px-4 py-3 relative">
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
                    <div className="flex items-center gap-1 relative">
                      <Dropdown
                        isOpen={openId === link.id}
                        link={link}
                        onToggle={() =>
                          setOpenId(openId === link.id ? null : link.id)
                        }
                        onClose={() => setOpenId(null)}
                      />
                    </div>
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
