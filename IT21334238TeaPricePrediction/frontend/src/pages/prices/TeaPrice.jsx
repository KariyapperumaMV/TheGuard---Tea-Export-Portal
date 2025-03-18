/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import DatePicker from "react-datepicker";
import background from "./../../assets/public/background.png";


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

// Set default values
const defaultRegionCategory = "High Grown";
const defaultRegion = "NUWARA ELIYA";
const defaultSubRegion = "NUWARA ELIYA";
const defaultStartDate = new Date("2023-08-01");
const defaultEndDate = new Date("2024-08-01");

const TeaPrice = () => {
  // Initialize state with default values
  const [regionCategory, setRegionCategory] = useState(defaultRegionCategory);
  const [selectedRegion, setSelectedRegion] = useState(defaultRegion);
  const [subRegions, setSubRegions] = useState(
    regionCategories[defaultRegionCategory].regions
  );
  const [selectedSubRegion, setSelectedSubRegion] = useState(defaultSubRegion);
  const [teaData, setTeaData] = useState([]);
  const [loading, setLoading] = useState(false);
  // Date state
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  // Fetch data based on the selected region, subregion, and date range
  const fetchTeaData = async () => {
    if (!selectedRegion || !selectedSubRegion) {
      return; // Don't fetch data if region or subregion is not selected
    }
    setLoading(true);
    try {
      // Prepare payload with region and date filtering
      const payload = {
        TeaRegion: selectedRegion,
        SubDistrict: selectedSubRegion,
      };

      // Format the dates to "YYYY-MM" format if they are provided
      if (startDate) {
        payload.startDate = startDate.toISOString().slice(0, 7); // "YYYY-MM"
      }
      if (endDate) {
        payload.endDate = endDate.toISOString().slice(0, 7);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}teaprice/getTeaPrice`,
        payload
      );
      setTeaData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch data on mount with default values
  useEffect(() => {
    fetchTeaData();
  }, []);

  // Handle region category change
  const handleRegionCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setRegionCategory(selectedCategory);
    setSelectedRegion("");
    setSubRegions(regionCategories[selectedCategory]?.regions || []);
  };

  // Handle region change
  const handleRegionChange = (e) => {
    const selected = e.target.value;
    setSelectedRegion(selected);
    setSelectedSubRegion(""); // Reset subregion on region change
  };

  // Handle subregion change
  const handleSubRegionChange = (e) => {
    setSelectedSubRegion(e.target.value);
  };

  // Handle date change
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div
      className="min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
        Tea Price Details
      </h2>
      <hr className="border-b-1 border-green-600 mx-auto mb-6" />
      <div className="flex flex-col md:flex-row w-full  mx-auto gap-6">
        {/* Left Column: Selection Controls */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/4 h-auto">
          <div className="flex flex-col">
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
              className="p-2 mt-2 border rounded-md"
            >
              <option value="">Select Category</option>
              {Object.keys(regionCategories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {regionCategory && (
            <div className="flex flex-col mt-4">
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
                className="p-2 mt-2 border rounded-md"
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

          {selectedRegion && (
            <>
              <div className="flex flex-col mt-4">
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
                  className="p-2 mt-2 border rounded-md"
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

              <div className="flex flex-col mt-4">
                <label className="text-lg font-semibold text-green-600">
                  Start Date:
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  dateFormat="yyyy/MM/dd"
                  className="p-2 mt-2 border rounded-md w-full"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label className="text-lg font-semibold text-green-600">
                  End Date:
                </label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  dateFormat="yyyy/MM/dd"
                  className="p-2 mt-2 border rounded-md w-full"
                />
              </div>

              <button
                onClick={fetchTeaData}
                className="bg-green-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-green-600 w-full"
              >
                Get Tea Price Details
              </button>
            </>
          )}
        </div>

        {/* Right Column: Chart and Data */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
          {loading && <p className="text-center mt-4">Loading...</p>}
          <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
            Previous Price Chart
          </h2>
          {teaData.length > 0 && (
            <>
              <div className="mb-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={teaData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="MonthPrice"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="CumulativePrice"
                      stroke="#82ca9d"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="overflow-x-auto">
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeaPrice;
