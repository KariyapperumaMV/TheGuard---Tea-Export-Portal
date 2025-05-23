/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const regionCategories = {
  "High Grown": ["nuwara_eliya", "dimbula", "udapussellawa"],
  "Medium Grown": ["kandy", "uva"],
  "Low Grown": ["ruhuna", "sabaragamuwa"],
};

const PredictionFilter = ({ prediction, setFilteredData, downloadPDF }) => {
  // Accept downloadPDF as prop
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  useEffect(() => {
    if (!isFilteringDisabled) {
      filterData();
    }
  }, [selectedPeriod, selectedCategory, selectedRegion]);

  const filterData = () => {
    const now = new Date("2024-08-31");

    let filtered = prediction.data.filter((region) => {
      if (
        selectedCategory !== "all" &&
        !regionCategories[selectedCategory]?.includes(region.region)
      ) {
        return false;
      }
      if (selectedRegion !== "all" && region.region !== selectedRegion) {
        return false;
      }
      return true;
    });

    filtered = filtered.map((region) => {
      const filteredRegionData = region.data.filter((p) => {
        const date = new Date(p.date);

        switch (selectedPeriod) {
          case "1month":
            return date - now <= 30 * 24 * 60 * 60 * 1000 && date >= now;
          case "3months":
            return date - now <= 4 * 30 * 24 * 60 * 60 * 1000 && date >= now;
          case "6months":
            return date - now <= 7 * 30 * 24 * 60 * 60 * 1000 && date >= now;
          default:
            return true;
        }
      });

      return { ...region, data: filteredRegionData };
    });

    setFilteredData(filtered);
  };

  // Determine the latest endDate in the dataset
  const allDates = prediction.data.flatMap((region) =>
    region.data.map((p) => new Date(p.date))
  );
  const endDate = allDates.length ? new Date(Math.max(...allDates)) : null;
  const now = new Date();
  const isFilteringDisabled = endDate && endDate < now; // Only affects period buttons

  return (
    <div className="mb-6">
      {/* Disable filtering message */}
      {isFilteringDisabled && (
        <div className="mb-4 p-3 bg-red-500 text-white rounded-md text-center">
          Time-based filtering is disabled because the prediction period has
          ended.
        </div>
      )}

      {/* Period Selection (Disable buttons but keep UI visible) */}
      <div className="flex justify-between gap-4 mb-4">
        <div className="flex gap-4">
          {[
            { label: "1 Month", value: "1month" },
            { label: "3 Months", value: "3months" },
            { label: "6 Months", value: "6months" },
            { label: "All", value: "all" },
          ].map(({ label, value }) => (
            <button
              key={value}
              onClick={() => !isFilteringDisabled && setSelectedPeriod(value)}
              className={`px-4 py-2 rounded-lg ${
                selectedPeriod === value ? "bg-green-700" : "bg-green-500"
              } text-white ${
                isFilteringDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-600"
              }`}
              disabled={isFilteringDisabled}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="">
          {/* Download Report Button */}
          <div className="text-center">
            <button
              onClick={downloadPDF} // Use the downloadPDF passed as prop
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Download Report as PDF
            </button>
          </div>
        </div>
      </div>

      {/* Region Category Selection (Dropdown stays enabled) */}
      <div className="mb-4">
        <label className="text-black font-semibold block mb-1">
          Filter by Region Category:
        </label>
        <select
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedRegion("all");
          }}
          className="w-full rounded-md border border-gray-300 p-2"
        >
          <option value="all">All</option>
          {Object.keys(regionCategories).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Specific Region Selection (Dropdown stays enabled) */}
      {selectedCategory !== "all" && (
        <div className="mb-4">
          <label className="text-black font-semibold block mb-1">
            Select Region:
          </label>
          <select
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          >
            <option value="all">All</option>
            {regionCategories[selectedCategory].map((region, index) => (
              <option key={index} value={region}>
                {region
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default PredictionFilter;
