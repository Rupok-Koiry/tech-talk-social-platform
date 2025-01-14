import React, { useState } from "react";
import { useCategories } from "@/hooks/categories/useCategories";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { BiChevronDown } from "react-icons/bi";

const SearchFilter = () => {
  const { categories } = useCategories();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [upvotes, setUpvotes] = useState(searchParams.get("sort") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [debouncedSearch] = useDebounce(search, 500);

  const handleSubmit = () => {
    const params = new URLSearchParams();
    if (debouncedSearch) params.set("search", debouncedSearch);
    if (category) params.set("category", category);
    if (upvotes) params.set("sort", upvotes);
    const queryString = params.toString();
    router.push(`?${queryString}`);
  };

  const handleReset = () => {
    setSearch("");
    setUpvotes("");
    setCategory("");
    router.push(`?`);
  };

  const isFilterApplied = search || category || upvotes;

  return (
    <div className="bg-secondary-background p-4 rounded-lg shadow">
      <div className="relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-0.5 rounded-md shadow focus:border-primary-blue border outline-none py-1.5 lg:py-2 pl-3 pr-12 bg-primary-background border-transparent"
          />
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-primary-blue  rounded-md transition-colors"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <BiChevronDown className="text-primary-background" size={20} />
            </motion.div>
          </button>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="space-y-2 w-full sm:w-1/2">
                    <select
                      className="w-full border-secondary-grey rounded-md shadow focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3 bg-primary-background border-transparent"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">All</option>
                      {categories?.map(
                        (category: { _id: string; name: string }) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="space-y-2 w-full sm:w-1/2">
                    <select
                      className="w-full border-secondary-grey rounded-md shadow focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3 bg-primary-background border-transparent"
                      value={upvotes}
                      onChange={(e) => setUpvotes(e.target.value)}
                    >
                      <option value="">Select an Option</option>
                      <option value="upvotes">Upvoted Post - Ascending</option>
                      <option value="-upvotes">
                        Upvoted Post - Descending
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex gap-3 mt-3">
          <Button onClick={handleSubmit} className="text-sm">
            Apply Filters
          </Button>
          {isFilterApplied && (
            <Button onClick={handleReset} className="text-sm">
              Reset Filters
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
