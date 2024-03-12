
import manor from "../assets/manor.jpg";
import cabin from "../assets/cabin.jpg";
import front from '../assets/front.jpg';
import apartment from '../assets/apartment.jpg';
import cottage from '../assets/cottage.jpg';
import urban from '../assets/urban.jpg';
import family from '../assets/family.jpg';
import penthouse from '../assets/penthouse.jpg';
import bungalow from '../assets/bungalow.jpg';

export default function Luxury() {
  const soldHomes = [
    {
      id: 1,
      image: manor,
      title: 'Elegant Manor',
      description: 'This elegant manor has been sold to a lucky owner.',
    },
    {
      id: 2,
      image: cabin,
      title: 'Countryside Retreat',
      description: 'A stunning countryside retreat has found its new owners.',
    },
    {
      id: 3,
      image: front,
      title: 'Oceanfront Villa',
      description: 'This breathtaking oceanfront villa has been sold.',
    },
  ];

  const rentedHomes = [
    {
      id: 1,
      image: apartment,
      title: 'Modern Apartment',
      description: 'Experience luxury living in this modern rented apartment.',
    },
    {
      id: 2,
      image: cottage,
      title: 'Cozy Cottage',
      description: 'Enjoy a cozy and comfortable stay in this rented cottage.',
    },
    {
      id: 3,
      image: urban,
      title: 'Urban Loft',
      description: 'Live in style in this trendy rented urban loft.',
    },
  ];

  const readyToBuyHomes = [
    {
      id: 1,
      image: family,
      title: 'Spacious Family Home',
      description: 'Discover this spacious family home, ready for you to buy.',
    },
    {
      id: 2,
      image: penthouse,
      title: 'Luxury Penthouse',
      description: 'Own this luxurious penthouse with stunning city views.',
    },
    {
      id: 3,
      image: bungalow,
      title: 'Charming Bungalow',
      description: 'Fall in love with this charming bungalow, available for purchase.',
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Luxury Homes</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sold Homes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {soldHomes.map((home) => (
              <div key={home.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={home.image} alt={home.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{home.title}</h4>
                  <p className="text-gray-600">{home.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rented Homes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentedHomes.map((home) => (
              <div key={home.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={home.image} alt={home.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{home.title}</h4>
                  <p className="text-gray-600">{home.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Buy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {readyToBuyHomes.map((home) => (
              <div key={home.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={home.image} alt={home.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{home.title}</h4>
                  <p className="text-gray-600">{home.description}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}