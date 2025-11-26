"use client";

import { useMemo, useState } from "react";
import PropertyCard from "../components/PopertyCard";
import Navbar from "../components/Navbar";
import { properties, newCategories } from "../lib/data";

const PropertiesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubCategory, setActiveSubCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const categoryButtonData = [
    { label: "All", value: "all" },
    ...newCategories.map((category) => ({
      label: category.name,
      value: category.name,
    })),
  ];

  const subCategoryButtonData = useMemo(() => {
    if (activeCategory === "all") return [];
    const category = newCategories.find((c) => c.name === activeCategory);
    if (!category) return [];
    return [
      { label: "All", value: "all" },
      ...category.subCategories.map((sub) => ({
        label: sub.name,
        value: sub.name,
      })),
    ];
  }, [activeCategory]);

  const filteredProperties = useMemo(() => {
    let filtered = properties;

    if (activeCategory !== "all") {
      const selectedCategory = newCategories.find(
        (category) => category.name === activeCategory
      );

      if (selectedCategory) {
        const selectedIds = new Set<number>();

        if (activeSubCategory === "all") {
          selectedCategory.subCategories.forEach((sub) => {
            sub.ids.forEach((id) => selectedIds.add(id));
          });
        } else {
          const sub = selectedCategory.subCategories.find(
            (s) => s.name === activeSubCategory
          );
          if (sub) {
            sub.ids.forEach((id) => selectedIds.add(id));
          }
        }

        filtered = filtered.filter((property) => selectedIds.has(property.id));
      }
    }

    if (minPrice !== "") {
      filtered = filtered.filter(
        (property) => property.price >= Number(minPrice)
      );
    }

    if (maxPrice !== "") {
      filtered = filtered.filter(
        (property) => property.price <= Number(maxPrice)
      );
    }

    return filtered;
  }, [activeCategory, activeSubCategory, minPrice, maxPrice]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Explore Listings
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Find Properties by Category
            </h1>
            <p className="text-gray-500 text-base sm:text-lg">
              Choose a category to quickly zero-in on the properties that fit
              your goals.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            {/* Main Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categoryButtonData.map((category) => {
                const isActive = activeCategory === category.value;
                return (
                  <button
                    key={category.value}
                    onClick={() => {
                      setActiveCategory(category.value);
                      setActiveSubCategory("all");
                    }}
                    className={`px-4 py-2 rounded-full border text-sm sm:text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      isActive
                        ? "bg-gray-900 text-white border-gray-900 shadow-lg focus-visible:outline-2 focus-visible:outline-gray-900"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-gray-500"
                    }`}
                    aria-pressed={isActive}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Sub Categories */}
            {activeCategory !== "all" && subCategoryButtonData.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center animate-fadeIn">
                {subCategoryButtonData.map((sub) => {
                  const isActive = activeSubCategory === sub.value;
                  return (
                    <button
                      key={sub.value}
                      onClick={() => setActiveSubCategory(sub.value)}
                      className={`px-3 py-1.5 rounded-full border text-xs sm:text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-100 text-blue-800 border-blue-200"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {sub.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Price Filter Section */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="w-full sm:w-auto flex-1">
                <label
                  htmlFor="min-price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Min Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    id="min-price"
                    placeholder="0"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow"
                  />
                </div>
              </div>
              <div className="hidden sm:block text-gray-400 font-medium">-</div>
              <div className="w-full sm:w-auto flex-1">
                <label
                  htmlFor="max-price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Max Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    id="max-price"
                    placeholder="Any"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
            <p className="text-lg font-semibold text-gray-900">
              {activeCategory === "all"
                ? "All Properties"
                : `${activeCategory}${
                    activeSubCategory !== "all" ? ` - ${activeSubCategory}` : ""
                  }`}
            </p>
            <p className="text-sm text-gray-500">
              Showing {filteredProperties.length}{" "}
              {filteredProperties.length === 1 ? "listing" : "listings"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  images={property.images}
                  price={property.price}
                  size={property.size}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No properties found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setActiveSubCategory("all");
                    setMinPrice("");
                    setMaxPrice("");
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertiesPage;
