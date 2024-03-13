import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBed, FaBath, FaRuler, FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function HouseContent() {
  const [luxuryHomes, setLuxuryHomes] = useState([]);

  useEffect(() => {
    const fetchLuxuryHomes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/luxuryhomes');
        console.log('Response data:', response.data);
        if (Array.isArray(response.data)) {
          setLuxuryHomes(response.data);
        } else {
          console.error('Invalid response format. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching luxury homes:', error);
      }
    };

    fetchLuxuryHomes();
  }, []);

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 mb-10">
      {Array.isArray(luxuryHomes) && luxuryHomes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {luxuryHomes.map((home) => (
            <div key={home.id} className="bg-white rounded-lg shadow-md">
              <img
                src={home.imageUrl}
                alt={home.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{home.title}</h3>
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
}