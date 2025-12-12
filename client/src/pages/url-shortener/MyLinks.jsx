import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
  MousePointerClick,
  LinkIcon,
  ArrowUpRight,
} from "lucide-react";
import CustomButton from "../../components/ui/CustomButton";

const MyLinks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedLink, setSelectedLink] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  //   const [sidebarOpen, setSidebarOpen] = useState(false);
  //   const { user, logout } = useAuth();

  const [links, setLinks] = useState([
    {
      id: "1",
      name: "Company Website",
      shortUrl: "link.app/abc123",
      originalUrl: "https://example.com/very-long-url-path",
      clicks: 1234,
      created: "Dec 1, 2024",
    },
    {
      id: "2",
      name: "Product Launch",
      shortUrl: "link.app/prod01",
      originalUrl: "https://example.com/products/new-launch-2024",
      clicks: 567,
      created: "Nov 28, 2024",
    },
    {
      id: "3",
      name: "Blog Post",
      shortUrl: "link.app/blog99",
      originalUrl: "https://example.com/blog/amazing-article",
      clicks: 234,
      created: "Nov 25, 2024",
    },
    {
      id: "4",
      name: "Event Registration",
      shortUrl: "link.app/event1",
      originalUrl: "https://example.com/events/registration",
      clicks: 890,
      created: "Nov 20, 2024",
    },
    {
      id: "5",
      name: "Newsletter Signup",
      shortUrl: "link.app/news22",
      originalUrl: "https://example.com/newsletter",
      clicks: 456,
      created: "Nov 15, 2024",
    },
    {
      id: "6",
      name: "Social Campaign",
      shortUrl: "link.app/social",
      originalUrl: "https://example.com/campaign/social-media",
      clicks: 321,
      created: "Nov 10, 2024",
    },
  ]);

  const totalLinks = links.length;
  const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0);

  const filteredLinks = links.filter(
    (link) =>
      link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.shortUrl.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.originalUrl.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setLinks(links.filter((link) => link.id !== id));
    setDeleteConfirm(null);
  };

  const handleEdit = (id, newName) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, name: newName } : link))
    );
    setEditingId(null);
  };

  const startEdit = (link) => {
    setEditingId(link.id);
    setEditName(link.name);
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(`https://${url}`);
  };

  // { label: "My Links", icon: Link2, href: "/my-links", active: true },

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Menu Button */}

      {/* Sidebar */}

      {/* Main Content */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <LinkIcon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Total Links
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">
                    {totalLinks}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <MousePointerClick size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Total Clicks
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">
                    {totalClicks.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div
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
          </motion.div>

          {/* Links Grid/List */}
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
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
                            setSelectedLink(
                              selectedLink === link.id ? null : link.id
                            )
                          }
                          className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                        >
                          <MoreVertical size={16} />
                        </button>
                        {selectedLink === link.id && (
                          <div className="absolute right-0 mt-1 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[120px] z-10">
                            <button
                              onClick={() => startEdit(link)}
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
                              onClick={() => setDeleteConfirm(link.id)}
                              className="w-full px-3 py-2 text-left text-sm hover:bg-red-500/10 text-red-500 flex items-center gap-2"
                            >
                              <Trash2 size={14} /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      {editingId === link.id ? (
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
                      ) : (
                        <h3 className="font-semibold text-foreground mb-1">
                          {link.name}
                        </h3>
                      )}
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
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <table className="w-full">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
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
                      <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden sm:table-cell">
                        Created
                      </th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredLinks.map((link) => (
                      <tr
                        key={link.id}
                        className="hover:bg-muted/10 transition-colors"
                      >
                        <td className="px-4 py-3">
                          {editingId === link.id ? (
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
                                <Check size={16} />
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
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-primary font-medium text-sm">
                            {link.shortUrl}
                          </span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <span className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm">
                            {link.originalUrl.slice(0, 28)}...
                            <ExternalLink size={12} />
                          </span>
                        </td>
                        <td className="px-4 py-3 text-foreground">
                          {link.clicks.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">
                          {link.created}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <a
                              href={`https://${link.shortUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                              title="Open link"
                            >
                              <ArrowUpRight
                                size={16}
                                className="text-primary"
                              />
                            </a>
                            <button
                              onClick={() => startEdit(link)}
                              className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                            >
                              <Edit2
                                size={16}
                                className="text-muted-foreground"
                              />
                            </button>
                            <button
                              onClick={() => copyToClipboard(link.shortUrl)}
                              className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                            >
                              <Copy
                                size={16}
                                className="text-muted-foreground"
                              />
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(link.id)}
                              className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
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
            )}
          </AnimatePresence>

          {/* Empty State */}
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

          {/* Delete Confirmation Modal */}
          <AnimatePresence>
            {deleteConfirm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                onClick={() => setDeleteConfirm(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-card border border-border rounded-xl p-6 max-w-sm w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Delete Link?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    This action cannot be undone. The link will be permanently
                    deleted.
                  </p>
                  <div className="flex gap-3">
                    <button
                      variant="outline"
                      onClick={() => setDeleteConfirm(null)}
                      className="flex-1"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDelete(deleteConfirm)}
                      className="flex-1 bg-red-500 hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
    </div>
  );
};

export default MyLinks;
