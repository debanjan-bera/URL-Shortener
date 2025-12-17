import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link2,
  Copy,
  Trash2,
  Edit2,
  Search,
  Filter,
  Grid,
  List,
  ExternalLink,
  MoreVertical,
  X,
  Check,
  ArrowUpRight,
} from "lucide-react";
import CustomButton from "../../components/ui/CustomButton";
import DashboardKPI from "../../components/dashboard/KPI";
import { Link } from "react-router-dom";
import MyLinksList from "../../components/LinkList";

const RecentLinks = () => {
  const searchRef = useRef(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  //   const [selectedLink, setSelectedLink] = useState(null);
  //   const [deleteConfirm, setDeleteConfirm] = useState(null);
  //   const [editingId, setEditingId] = useState(null);
  //   const [editName, setEditName] = useState("");
  //   const [sidebarOpen, setSidebarOpen] = useState(false);
  //   const { user, logout } = useAuth();

  const [links, setLinks] = useState([
    {
      id: "1",
      name: "Company Website",
      shortUrl: "localhost:4000/abc123",
      originalUrl: "https://example.com/very-long-url-path",
      clicks: 1234,
      created: "Dec 1, 2024",
    },
    {
      id: "2",
      name: "Product Launch",
      shortUrl: "localhost:4000/prod01",
      originalUrl: "https://example.com/products/new-launch-2024",
      clicks: 567,
      created: "Nov 28, 2024",
    },
    {
      id: "3",
      name: "Blog Post",
      shortUrl: "localhost:4000/blog99",
      originalUrl: "https://example.com/blog/amazing-article",
      clicks: 234,
      created: "Nov 25, 2024",
    },
    {
      id: "4",
      name: "Event Registration",
      shortUrl: "localhost:4000/event1",
      originalUrl: "https://example.com/events/registration",
      clicks: 890,
      created: "Nov 20, 2024",
    },
    {
      id: "5",
      name: "Newsletter Signup",
      shortUrl: "localhost:4000/news22",
      originalUrl: "https://example.com/newsletter",
      clicks: 456,
      created: "Nov 15, 2024",
    },
    {
      id: "6",
      name: "Social Campaign",
      shortUrl: "localhost:4000/social",
      originalUrl: "https://example.com/campaign/social-media",
      clicks: 321,
      created: "Nov 10, 2024",
    },
  ]);
  const handleSearch = () => {
    setSearchQuery(searchRef.current.value);
  };

  const clearSearch = () => {
    searchRef.current.value = "";
    setSearchQuery("");
  };

  const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0);

  // { label: "My Links", icon: Link2, href: "/my-links", active: true },

  const filteredLinks = searchQuery
    ? links.filter((url) => 
        url.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        )
    : links;

  return (
    <div className="min-h-screen bg-background">
      <main className="lg:ml-64 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
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

          {/* Controls */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <input
                type="text"
                placeholder="Search links..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <btton variant="outline" className="gap-2">
                <Filter size={18} />
                <span className="hidden sm:inline">Filter</span>
              </btton>
              <div className="flex rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 transition-colors ${
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card hover:bg-accent/10"
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 transition-colors ${
                    viewMode === "list"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card hover:bg-accent/10"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-stretch gap-4 mb-6"
          >
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                ref={searchRef}
                type="text"
                placeholder="Search by name or URL..."
                onChange={handleSearch}
                className="w-full h-11 pl-11 pr-10 rounded-xl border border-border bg-card 
                 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />

              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              {/* Filter Button */}
              <button
                className="h-11 px-4 rounded-xl border border-border bg-card 
                 hover:bg-accent/10 flex items-center gap-2"
              >
                <Filter size={18} />
                <span className="hidden sm:inline">Filter</span>
              </button>

              {/* Grid/List Toggle */}
              <div className="flex rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`h-11 w-11 flex items-center justify-center transition
          ${
            viewMode === "grid"
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent/10"
          }`}
                >
                  <Grid size={18} />
                </button>

                <button
                  onClick={() => setViewMode("list")}
                  className={`h-11 w-11 flex items-center justify-center transition
          ${
            viewMode === "list"
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent/10"
          }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </motion.div>
          <div>
                      <MyLinksList
            filteredLinks={filteredLinks}
            // startEdit={startEdit}
            // copyToClipboard={copyToClipboard}
            // setDeleteConfirm={setDeleteConfirm}
          />
          </div>
          {/* Links Grid/List */}

          {/* Empty State */}
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
    </div>
  );
};

export default RecentLinks;
