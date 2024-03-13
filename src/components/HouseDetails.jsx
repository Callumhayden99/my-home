import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaBed, FaBath, FaRuler, FaCalendar, FaTree, FaCar, FaArrowLeft } from 'react-icons/fa';

export default function HouseDetails() {
  const { id } = useParams();
  const [luxuryHome, setLuxuryHome] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLuxuryHome = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/luxuryhomes/${id}`);
        console.log('Response data:', response.data);
        setLuxuryHome(response.data);
      } catch (error) {
        console.error('Error fetching luxury home:', error);
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
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">{luxuryHome.title}</h2>
        <button
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleGoBack}
        >
          <FaArrowLeft className="mr-2" />
          Go Back
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img src={luxuryHome.imageUrl} alt={luxuryHome.title} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div>
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Description</h3>
            <p className="text-gray-600">{luxuryHome.description}</p>
          </section>
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Price</h3>
            <p className="text-gray-800 font-semibold text-xl">${luxuryHome.price.toLocaleString()}</p>
          </section>
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaBed className="mr-2" />
                <p className="text-gray-600">{luxuryHome.bedrooms} Bedrooms</p>
              </div>
              <div className="flex items-center">
                <FaBath className="mr-2" />
                <p className="text-gray-600">{luxuryHome.bathrooms} Bathrooms</p>
              </div>
              <div className="flex items-center">
                <FaRuler className="mr-2" />
                <p className="text-gray-600">{luxuryHome.sqftArea} sqft</p>
              </div>
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                <p className="text-gray-600">Built in {luxuryHome.yearBuilt}</p>
              </div>
              <div className="flex items-center">
                <FaTree className="mr-2" />
                <p className="text-gray-600">{luxuryHome.hasGarden ? 'Has a Garden' : 'No Garden'}</p>
              </div>
              <div className="flex items-center">
                <FaCar className="mr-2" />
                <p className="text-gray-600">{luxuryHome.hasGarage ? 'Has a Garage' : 'No Garage'}</p>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Location</h3>
            <p className="text-gray-600 mb-2">Home Type: {luxuryHome.homeType}</p>
            <p className="text-gray-600 mb-2">Address: {luxuryHome.address}</p>
            <p className="text-gray-600 mb-2">City: {luxuryHome.city}</p>
            <p className="text-gray-600">Country: {luxuryHome.country}</p>
          </section>
        </div>
      </div>
    </div>
  );
}