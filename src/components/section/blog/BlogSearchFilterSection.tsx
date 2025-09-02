'use client';

import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlogSearchFilterSectionProps {
  onSearchChange?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
  onTagChange?: (tag: string) => void;
}

const BlogSearchFilterSection: React.FC<BlogSearchFilterSectionProps> = ({
  onSearchChange,
  onCategoryChange,
  onTagChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data - replace with your actual categories and tags
  const categories = ['Technology', 'Design', 'Development', 'Business', 'Tutorial'];
  const tags = ['React', 'Next.js', 'TypeScript', 'UI/UX', 'Frontend', 'Backend', 'API'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  const handleCategoryChange = (category: string) => {
    const newCategory = category === selectedCategory ? '' : category;
    setSelectedCategory(newCategory);
    onCategoryChange?.(newCategory);
  };

  const handleTagChange = (tag: string) => {
    const newTag = tag === selectedTag ? '' : tag;
    setSelectedTag(newTag);
    onTagChange?.(newTag);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTag('');
    onSearchChange?.('');
    onCategoryChange?.('');
    onTagChange?.('');
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedTag;

  return (
    <div className="w-full space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 py-3 pl-12 pr-4 text-slate-200 placeholder-slate-400 backdrop-blur-sm transition-all duration-200 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
        />
      </div>

      {/* Filter Toggle & Clear */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 rounded-lg bg-slate-800/50 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm transition-all duration-200 hover:bg-slate-700/50"
        >
          <Filter className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <span className="ml-1 rounded-full bg-purple-600 px-2 py-0.5 text-xs text-white">
              {[searchQuery, selectedCategory, selectedTag].filter(Boolean).length}
            </span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition-all duration-200 hover:text-slate-200"
          >
            <X className="h-4 w-4" />
            Clear all
          </button>
        )}
      </div>

      {/* Expandable Filters */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.25, 0.1, 0.25, 1],
              height: { duration: 0.4 }
            }}
            className="overflow-hidden"
          >
            <div className="space-y-6 rounded-lg border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <h3 className="mb-3 text-sm font-medium text-slate-200">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.2 + index * 0.05, 
                        duration: 0.2,
                        type: "spring",
                        stiffness: 300
                      }}
                      onClick={() => handleCategoryChange(category)}
                      className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h3 className="mb-3 text-sm font-medium text-slate-200">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <motion.button
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.3 + index * 0.04, 
                        duration: 0.2,
                        type: "spring",
                        stiffness: 300
                      }}
                      onClick={() => handleTagChange(tag)}
                      className={`rounded-full px-3 py-1.5 text-sm transition-all duration-200 ${
                        selectedTag === tag
                          ? 'bg-purple-600/20 text-purple-300 ring-1 ring-purple-500/50'
                          : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/40 hover:text-slate-300'
                      }`}
                    >
                      #{tag}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-400">Active filters:</span>
          {searchQuery && (
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
              Search: "{searchQuery}"
              <button
                onClick={() => {
                  setSearchQuery('');
                  onSearchChange?.('');
                }}
                className="ml-1 hover:text-purple-200"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          {selectedCategory && (
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
              {selectedCategory}
              <button
                onClick={() => handleCategoryChange('')}
                className="ml-1 hover:text-purple-200"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          {selectedTag && (
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
              #{selectedTag}
              <button
                onClick={() => handleTagChange('')}
                className="ml-1 hover:text-purple-200"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogSearchFilterSection;