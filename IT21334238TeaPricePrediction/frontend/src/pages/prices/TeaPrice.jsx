/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import background from "./../../assets/background.png";


// Define region categories with their associated subregions
const regionCategories = {
  "High Grown": {
    regions: ["NUWARA ELIYA", "DIMBULA", "UDAPUSSELLAWA"],
    subRegions: {
      "NUWARA ELIYA": ["NUWARA ELIYA"],
      DIMBULA: [
        "RAMBODA",
        "PUNDALUOYA",
        "AGARAPATANA",
        "NANUOYA/LINDULA/TALAWAKELE",
        "PATANA/KOTAGALA",
        "HATTON/DICKOYA",
        "BOGAWANTALAWA",
        "UPCOT/MASKELIYA",
        "WATAWALA/GINIGATHHENA/NORTON",
      ],
      UDAPUSSELLAWA: ["UDAPUSSELLAWA/HALGRANOYA", "MATURATA"],
    },
  },
  "Medium Grown": {
    regions: ["KANDY", "UVA"],
    subRegions: {
      KANDY: [
        "KANDY/MATALE/KURUNEGALA",
        "PUSSELLAWA/HEWAHETA",
        "KOTMALE",
        "GAMPOLA/NAWALAPITIYA/DOLOSBAGE",
        "NILAMBE/HANTANE/GALAHA",
        "KADUGANNAWA",
        "MADULKELLE/KNUCKLES/RANGALA",
        "HUNASGIRIYA/MATALE/YAKDESSA",
      ],
      UVA: [
        "MADULSIMA",
        "PASSARA/LUNUGALLA",
        "ELLA/NAMUNUKULA",
        "DEMODARA/HALIELLA/BADULLA",
        "MALWATTE/WELIMADA",
        "BANDARAWELA/POONAGALLA",
        "HAPUTALE",
        "KOSLANDA/HALDUMULLA",
      ],
    },
  },
  "Low Grown": {
    regions: ["RUHUNA", "SABARAGAMUWA"],
    subRegions: {
      RUHUNA: ["MORAWAKA", "MATARA", "DENIYAYA", "GALLE", "KALUTARA"],
      SABARAGAMUWA: [
        "BALANGODA",
        "RATNAPURA",
        "KELANI VALLEY",
        "KEGALLE",
        "BALANGODA/RAKWANA",
      ],
    },
  },
};

const TeaPrice = () => {
  const [regionCategory, setRegionCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [subRegions, setSubRegions] = useState([]);
  const [selectedSubRegion, setSelectedSubRegion] = useState("");
  const [teaData, setTeaData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle region category change
  const handleRegionCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setRegionCategory(selectedCategory);
    setSelectedRegion("");
    setSubRegions(regionCategories[selectedCategory]?.regions || []);
  };

  // Handle region change
  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setSelectedRegion(selectedRegion);
    setSelectedSubRegion(""); // Reset subregion on region change
  };

  // Handle subregion change
  const handleSubRegionChange = (e) => {
    setSelectedSubRegion(e.target.value);
  };

  // Fetch data based on the selected region and subregion
  const fetchTeaData = async () => {
    if (!selectedRegion || !selectedSubRegion) {
      return; // Don't fetch data if region or subregion is not selected
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}teaprice/getTeaPrice`,
        {
          TeaRegion: selectedRegion,
          SubDistrict: selectedSubRegion,
        }
      );

      setTeaData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen p-4 flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
        Tea Price Details
      </h2>

      {/* Dropdown for Region Category */}
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="flex flex-col mb-6 w-96">
          <label
            className="text-lg font-semibold text-green-600"
            htmlFor="regionCategory"
          >
            Select Region Category:
          </label>
          <select
            id="regionCategory"
            value={regionCategory}
            onChange={handleRegionCategoryChange}
            className="p-2 mt-2 border rounded-md w-full"
          >
            <option value="">Select Category</option>
            {Object.keys(regionCategories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for Region */}
        {regionCategory && (
          <div className="flex flex-col mb-6 w-96">
            <label
              className="text-lg font-semibold text-green-600"
              htmlFor="region"
            >
              Select Region:
            </label>
            <select
              id="region"
              value={selectedRegion}
              onChange={handleRegionChange}
              className="p-2 mt-2 border rounded-md w-full"
            >
              <option value="">Select Region</option>
              {regionCategories[regionCategory]?.regions.map((region) => (
                <option key={region} value={region}>
                  {region.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Dropdown for Subregion */}
        {selectedRegion && (
          <div>
            <div className="flex flex-col mb-6 w-96">
              <label
                className="text-lg font-semibold text-green-600"
                htmlFor="subRegion"
              >
                Select Subregion:
              </label>
              <select
                id="subRegion"
                value={selectedSubRegion}
                onChange={handleSubRegionChange}
                className="p-2 mt-2 border rounded-md w-full"
              >
                <option value="">Select Subregion</option>
                {regionCategories[regionCategory]?.subRegions[
                  selectedRegion
                ]?.map((subRegion) => (
                  <option key={subRegion} value={subRegion}>
                    {subRegion}
                  </option>
                ))}
              </select>
            </div>
            {/* Button to fetch data */}
            <div className="text-center">
              <button
                onClick={fetchTeaData}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Get Tea Price Details
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Loading State */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Displaying Data */}
      {teaData.length > 0 && (
        <div className="mt-6">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border p-2">Year</th>
                <th className="border p-2">Tea Region</th>
                <th className="border p-2">Sub District</th>
                <th className="border p-2">Month Price (Rs)</th>
                <th className="border p-2">Cumulative Price (Rs)</th>
              </tr>
            </thead>
            <tbody>
              {teaData.map((data) => (
                <tr key={data._id}>
                  <td className="border p-2">{data.Year}</td>
                  <td className="border p-2">{data.TeaRegion}</td>
                  <td className="border p-2">{data.SubDistrict}</td>
                  <td className="border p-2">{data.MonthPrice}</td>
                  <td className="border p-2">{data.CumulativePrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TeaPrice;
