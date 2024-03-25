import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CreateHome = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    address: "",
    city: "",
    country: "",
    homeType: "",
    bedrooms: "",
    bathrooms: "",
    hasGarden: false,
    hasGarage: false,
    sqftArea: "",
    yearBuilt: "",
    imageUrl: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onCreate(formData);
      navigate("/houses");
    } catch (error) {
      console.error("Error creating luxury home:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Create New Home</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="homeType" className="block text-gray-700 font-bold mb-2">
            Home Type
          </label>
          <select
            id="homeType"
            name="homeType"
            value={formData.homeType}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Home Type</option>
            <option value="APARTMENT">Apartment</option>
            <option value="HOUSE">House</option>
            <option value="VILLA">Villa</option>
            <option value="PENTHOUSE">Penthouse</option>
            <option value="BUNGALOW">Bungalow</option>
            <option value="MANSION">Mansion</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="bedrooms" className="block text-gray-700 font-bold mb-2">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bathrooms" className="block text-gray-700 font-bold mb-2">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="hasGarden"
            name="hasGarden"
            checked={formData.hasGarden}
            onChange={handleCheckboxChange}
            className="mr-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="hasGarden" className="text-gray-700 font-bold">
            Has Garden
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="hasGarage"
            name="hasGarage"
            checked={formData.hasGarage}
            onChange={handleCheckboxChange}
            className="mr-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="hasGarage" className="text-gray-700 font-bold">
            Has Garage
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="sqftArea" className="block text-gray-700 font-bold mb-2">
            Square Footage
          </label>
          <input
            type="number"
            id="sqftArea"
            name="sqftArea"
            value={formData.sqftArea}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="yearBuilt" className="block text-gray-700 font-bold mb-2">
            Year Built
          </label>
          <input
            type="number"
            id="yearBuilt"
            name="yearBuilt"
            value={formData.yearBuilt}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

CreateHome.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateHome;