import { memo, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardKPI from "../../components/dashboard/KPI";
import MyLinksList from "../../components/LinkList";
import BoxQRList from "../../components/BoxQRList";
import SearchBar from "../../components/serachBar";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/ui/CustomButton";
import { toggleAddTaskForm } from "../../components/features/UI/uiReducers";

const MyLinks = () => {
  const searchRef = useRef(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  // const links = useMemo(
  //   () => [
  //     {
  //       id: "1",
  //       name: "Company Website",
  //       shortUrl: "localhost:4000/abc123",
  //       originalUrl: "https://example.com",
  //       clicks: 1234,
  //       created: "Dec 1, 2024",
  //     },
  //   ],
  //   []
  // );

  const links = useSelector((state )=> state.url.shortUrl)
  const totalClicks = useMemo(
    () => links.reduce((sum, link) => sum + link.clicks, 0),
    [links]
  );

  const filteredLinks = useMemo(() => {
    if (!searchQuery) return links;
    return links.filter(
      (l) =>
        l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.shortUrl.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.originalUrl.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [links, searchQuery]);

  return (
    <>
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
          {/* <Link to="/create-link"> */}
            <CustomButton className="gap-2" 
            onClick={()=> dispatch(toggleAddTaskForm())}
            >
              <Link2 size={18} />
              Create Link
            </CustomButton>
          {/* </Link> */}
        </div>
      </motion.div>

      <DashboardKPI
        grid={2}
        totalClicks={totalClicks}
        totalLinks={links.length}
      />

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchRef={searchRef}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {filteredLinks.length !== 0 && (viewMode === "list" ? (
        <MyLinksList filteredLinks={filteredLinks} />
      ) : (
        <BoxQRList filteredLinks={filteredLinks} />
      ))}
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
            <button className="text-sm text-neutral-700">Create Link</button>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default memo(MyLinks);
