import {  useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Link2 } from "lucide-react";
import React from "react";
import DropDown from "./DropDown";

const BoxQRList = React.memo(({ filteredLinks }) => {
  // const [selectedId, setSelectedId] = useState(null);
  const [openId, setOpenId] = useState(null);

  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredLinks.map((link) => (
        <motion.div key={link.id} className="bg-card border rounded-xl p-4">
          <div className="flex justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded">
              <Link2 size={20} className="text-primary" />
            </div>

            <div className="flex items-center gap-1 relative">
              <DropDown
                isOpen={openId === link.id}
                link={link}
                onToggle={() => setOpenId(openId === link.id ? null : link.id)}
                onClose={() => setOpenId(null)}
              />
            </div>
          </div>

          <h3 className="font-semibold">{link?.urlTitle}</h3>
          <p className="text-primary">{link?.shortUrl}</p>

          <div className="flex justify-between mt-3">
            <span className="text-xs">{link?.clicks} clicks</span>
            <a
              href={`https://${link?.shortUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
});

export default BoxQRList;
