import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaRuler,
  FaCalendar,
  FaTree,
  FaCar,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaHome,
  FaDollarSign,
} from "react-icons/fa";

export default function HouseDetails() {
  const { id } = useParams();
  const [luxuryHome, setLuxuryHome] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLuxuryHome = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/luxuryhomes/${id}`
        );
        console.log("Response data:", response.data);
        setLuxuryHome(response.data);
      } catch (error) {
        console.error("Error fetching luxury home:", error);
      }
    };
    fetchLuxuryHome();
  }, [id]);

  if (!luxuryHome) {
    return <p>Loading...</p>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto py-8 px-8 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          {luxuryHome.title}
        </h2>
        <button
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
          onClick={handleGoBack}
        >
          <FaArrowLeft className="mr-2" /> Go Back
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={luxuryHome.imageUrl}
            alt={luxuryHome.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-4">
              <FaHome className="text-gray-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">
                About This Home
              </h3>
            </div>
            <p className="text-gray-600">{luxuryHome.description}</p>
          </section>
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-4">
              <FaDollarSign className="text-gray-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">Price</h3>
            </div>
            <p className="text-gray-800 font-semibold text-xl">
              ${luxuryHome.price.toLocaleString()}
            </p>
          </section>
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-gray-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">Location</h3>
            </div>
            <p className="text-gray-600 mb-2">
              Home Type: {luxuryHome.homeType}
            </p>
            <p className="text-gray-600 mb-2">Address: {luxuryHome.address}</p>
            <p className="text-gray-600 mb-2">City: {luxuryHome.city}</p>
            <p className="text-gray-600">Country: {luxuryHome.country}</p>
          </section>
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaBed className="mr-2 text-gray-600" />
                <p className="text-gray-600">{luxuryHome.bedrooms} Bedrooms</p>
              </div>
              <div className="flex items-center">
                <FaBath className="mr-2 text-gray-600" />
                <p className="text-gray-600">
                  {luxuryHome.bathrooms} Bathrooms
                </p>
              </div>
              <div className="flex items-center">
                <FaRuler className="mr-2 text-gray-600" />
                <p className="text-gray-600">{luxuryHome.sqftArea} sqft</p>
              </div>
              <div className="flex items-center">
                <FaCalendar className="mr-2 text-gray-600" />
                <p className="text-gray-600">Built in {luxuryHome.yearBuilt}</p>
              </div>
              <div className="flex items-center">
                <FaTree className="mr-2 text-gray-600" />
                <p className="text-gray-600">
                  {luxuryHome.hasGarden ? "Has a Garden" : "No Garden"}
                </p>
              </div>
              <div className="flex items-center">
                <FaCar className="mr-2 text-gray-600" />
                <p className="text-gray-600">
                  {luxuryHome.hasGarage ? "Has a Garage" : "No Garage"}
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Disclaimer
              </h3>
              <p className="text-gray-600 mb-2">
                The information provided on this website, including property
                descriptions, prices, and images, is for general informational
                purposes only and is subject to change without notice. While we
                strive to ensure the accuracy of the information, we do not
                guarantee its completeness, currency, or suitability for any
                particular purpose.
              </p>
              <p className="text-gray-600 mb-2">
                The properties featured on this website are not intended to
                constitute an offer or solicitation to purchase or sell real
                estate. Actual property details, including but not limited to
                square footage, lot size, and amenities, may differ from those
                shown on our website. Please verify all information with the
                appropriate professionals before making any decisions.
              </p>
              <p className="text-gray-600">
                All images and descriptions are provided for illustrative
                purposes only and may not reflect the current condition of the
                property. We recommend scheduling a personal viewing to assess
                the property's suitability for your needs.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}