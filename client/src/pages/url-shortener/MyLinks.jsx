import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import CustomButton from "../../components/ui/CustomButton";
import DashboardKPI from "../../components/dashboard/KPI";
import { Link } from "react-router-dom";
import MyLinksList from "../../components/LinkList";
import BoxQRList from "../../components/BoxQRList";
import SerachBar from "../../components/serachBar";

const MyLinks = () => {
  const searchRef = useRef(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const [links, setLinks] = useState([
    {
      id: "1",
      name: "Company Website",
      shortUrl: "localhost:4000/abc123",
      originalUrl: "https://example.com/very-long-url-path",
      qrcode:
        "https://quickchart.io/qr?text=http%3A%2F%2Flocalhost%3A5173%2Fmy-link&light=000000&dark=ff0000&margin=2&size=500",
      clicks: 1234,
      created: "Dec 1, 2024",
    },
  ]);

  const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0);

  const filteredLinks = searchQuery
    ? links.filter(
        (url) =>
          url.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
          url.originalUrl.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
          url.shortUrl.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))  : links;
  return (
    <>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              My Links
            </h1>
            <p className="text-muted-foreground mt-1">
              View, edit, and organize your shortened links.
            </p>
          </div>
          <Link to="/create-link">
            <CustomButton className="bg-primary gap-2">
              <Link2 size={18} />
              Create Link
            </CustomButton>
          </Link>
        </div>
      </motion.div>
      {/* KPIs */}
      <DashboardKPI
        grid={2}
        totalClicks={totalClicks}
        totalLinks={links.length}
      />

      <SerachBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchRef={searchRef}
        setViewMode={setViewMode}
        viewMode={viewMode}
      />
      <div>
        {viewMode === "list" ? (
          <MyLinksList filteredLinks={filteredLinks} />
        ) : (
          <BoxQRList filteredLinks={filteredLinks} />
        )}
        {filteredLinks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Link2 size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No links found
            </h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery
                ? "Try a different search term"
                : "Create your first link to get started"}
            </p>
            <Link to="/create-link">
              <button>Create Link</button>
            </Link>
          </motion.div>
        )}
      </div>
      {/* Links Grid/List */}

      {/* Empty State */}

    </>
  );
};

export default MyLinks;
