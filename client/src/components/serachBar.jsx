import React from "react";
import { Filter, Grid, List, Search, X } from "lucide-react";
import { motion} from "framer-motion";

export default function SerachBar({searchQuery,setSearchQuery,searchRef,setViewMode,viewMode}) {
      const handleSearch = () => {
    setSearchQuery(searchRef.current.value);
  };

  const clearSearch = () => {
    searchRef.current.value = "";
    setSearchQuery("");
  };
  return (
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
  );
}
