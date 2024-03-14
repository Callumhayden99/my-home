import { useState } from 'react';
import HouseContent from './HouseContent';
import { FaFilter } from 'react-icons/fa';

export default function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    houseType: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    garden: '',
    garage: '',
    country: '',
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="flex justify-end px-4 py-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          onClick={toggleFilter}
        >
          <FaFilter className="mr-2" />
          Filter
        </button>
      </div>
      {/* Filter Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isFilterOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
          <h2 className="text-lg font-semibold text-white">Filter</h2>
          <button
            className="text-white focus:outline-none"
            onClick={toggleFilter}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 py-6">
          {/* Filter options */}
          <div className="mb-4">
            <label htmlFor="houseType" className="block text-gray-700 font-semibold mb-2">
              House Type
            </label>
            <select
              id="houseType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.houseType}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">
              Price Range
            </label>
            <select
              id="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.price}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="0-100000">$0 - $100,000</option>
              <option value="100000-200000">$100,000 - $200,000</option>
              <option value="200000-300000">$200,000 - $300,000</option>
              <option value="300000-400000">$300,000 - $400,000</option>
              <option value="400000+">$400,000+</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="bedrooms" className="block text-gray-700 font-semibold mb-2">
              Bedrooms
            </label>
            <select
              id="bedrooms"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.bedrooms}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="bathrooms" className="block text-gray-700 font-semibold mb-2">
              Bathrooms
            </label>
            <select
              id="bathrooms"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.bathrooms}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="garden" className="block text-gray-700 font-semibold mb-2">
              Garden
            </label>
            <select
              id="garden"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.garden}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="garage" className="block text-gray-700 font-semibold mb-2">
              Garage
            </label>
            <select
              id="garage"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.garage}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">
              Country
            </label>
            <select
              id="country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.country}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
              <option value="australia">Australia</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <HouseContent filters={filters} />
    </div>
  );
}