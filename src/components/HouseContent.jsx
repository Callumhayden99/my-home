import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaBed,
  FaBath,
  FaRuler,
  FaCalendar,
  FaTrashAlt,
  FaEdit,
  FaPlusCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HouseContent = ({ filters }) => {
  const [luxuryHomes, setLuxuryHomes] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [filteredHomes, setFilteredHomes] = useState([]);

  useEffect(() => {
    const fetchLuxuryHomes = async () => {
      try {
        const response = await axios.get("https://my-home-server-production.up.railway.app/api/luxuryhomes");
        console.log("Response data:", response.data);
        if (Array.isArray(response.data)) {
          setLuxuryHomes(response.data);
          setFilteredHomes(response.data);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      } catch (error) {
        console.error("Error fetching luxury homes:", error);
      }
    };
    fetchLuxuryHomes();

    // Check if the user is an admin
    const token = localStorage.getItem("token");
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    const filterHomes = () => {
      let filtered = luxuryHomes;

      if (filters.houseType) {
        filtered = filtered.filter(
          (home) => home.homeType.toLowerCase() === filters.houseType
        );
      }

      if (filters.price) {
        const [minPrice, maxPrice] = filters.price.split("-");
        filtered = filtered.filter(
          (home) =>
            home.price >= parseInt(minPrice) &&
            home.price < parseInt(maxPrice)
        );
      }

      if (filters.bedrooms) {
        filtered = filtered.filter(
          (home) => home.bedrooms.toString() === filters.bedrooms
        );
      }

      if (filters.bathrooms) {
        filtered = filtered.filter(
          (home) => home.bathrooms.toString() === filters.bathrooms
        );
      }

      if (filters.garden !== "") {
        filtered = filtered.filter(
          (home) => home.hasGarden.toString() === filters.garden
        );
      }

      if (filters.garage !== "") {
        filtered = filtered.filter(
          (home) => home.hasGarage.toString() === filters.garage
        );
      }

      if (filters.country) {
        filtered = filtered.filter(
          (home) => home.country.toLowerCase() === filters.country.toLowerCase()
        );
      }

      setFilteredHomes(filtered);
    };

    filterHomes();
  }, [luxuryHomes, filters]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/luxuryhomes/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setLuxuryHomes(luxuryHomes.filter((home) => home.id !== id));
      setFilteredHomes(filteredHomes.filter((home) => home.id !== id));
    } catch (error) {
      console.error("Error deleting luxury home:", error);
    }
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 mb-10">
      {isAdmin && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Admin Actions</h2>
          <Link to="/admin/create-home">
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
              <FaPlusCircle className="mr-2" /> Add New Property
            </button>
          </Link>
        </div>
      )}
      {Array.isArray(filteredHomes) && filteredHomes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredHomes.map((home) => (
            <div key={home.id} className="bg-white rounded-lg shadow-md">
              <img
                src={home.imageUrl}
                alt={home.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{home.title}</h3>
                  {isAdmin && (
                    <div className="flex items-center">
                      <Link to={`/admin/edit-home/${home.id}`}>
                        <FaEdit className="text-blue-500 hover:text-blue-700 cursor-pointer mr-2" />
                      </Link>
                      <FaTrashAlt
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        onClick={() => handleDelete(home.id)}
                      />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{home.description}</p>
                <p className="text-gray-800 font-semibold mb-2">
                  Price: ${home.price.toLocaleString()}
                </p>
                <div className="flex items-center mb-2">
                  <FaBed className="mr-2" />
                  <p className="text-gray-600">{home.bedrooms} Bedrooms</p>
                </div>
                <div className="flex items-center mb-2">
                  <FaBath className="mr-2" />
                  <p className="text-gray-600">{home.bathrooms} Bathrooms</p>
                </div>
                <div className="flex items-center mb-2">
                  <FaRuler className="mr-2" />
                  <p className="text-gray-600">{home.sqftArea} sqft</p>
                </div>
                <div className="flex items-center mb-4">
                  <FaCalendar className="mr-2" />
                  <p className="text-gray-600">Built in {home.yearBuilt}</p>
                </div>
                <p className="text-gray-600 mb-4">
                  {home.address}, {home.city}, {home.country}
                </p>
                <Link to={`/homes/${home.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No luxury homes found.</p>
      )}
    </div>
  );
};

HouseContent.propTypes = {
  filters: PropTypes.shape({
    houseType: PropTypes.string,
    price: PropTypes.string,
    bedrooms: PropTypes.string,
    bathrooms: PropTypes.string,
    garden: PropTypes.string,
    garage: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default HouseContent;
