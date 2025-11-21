"use client";

import { useMemo, useState } from "react";
import PropertyCard from "../components/PopertyCard";
import Navbar from "../components/Navbar";
import { properties, categories } from "../lib/data";

const categoryButtonData = [
  { label: "All", value: "all" },
  ...categories.map((category) => ({
    label: category.title,
    value: category.title,
  })),
];

const PropertiesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProperties = useMemo(() => {
    if (activeCategory === "all") {
      return properties;
    }

    const selectedCategory = categories.find(
      (category) => category.title === activeCategory
    );

    if (!selectedCategory) {
      return properties;
    }

    const selectedIds = new Set(selectedCategory.id);
    return properties.filter((property) => selectedIds.has(property.id));
  }, [activeCategory]);

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
            Choose a category to quickly zero-in on the properties that fit your
            goals.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {categoryButtonData.map((category) => {
            const isActive = activeCategory === category.value;
            return (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
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

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
          <p className="text-lg font-semibold text-gray-900">
            {activeCategory === "all" ? "All Properties" : activeCategory}
          </p>
          <p className="text-sm text-gray-500">
            Showing {filteredProperties.length}{" "}
            {filteredProperties.length === 1 ? "listing" : "listings"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              images={property.images}
              price={property.price}
              size={property.size}
            />
          ))}
        </div>
        </div>
      </div>
    </main>
  );
};

export default PropertiesPage;