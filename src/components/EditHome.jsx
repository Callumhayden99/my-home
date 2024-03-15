import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditHome() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    address: "",
    city: "",
    country: "",
    homeType: "APARTMENT",
    bedrooms: "",
    bathrooms: "",
    hasGarden: false,
    hasGarage: false,
    sqftArea: "",
    yearBuilt: "",
    imageUrl: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLuxuryHome = async () => {
      try {
        const response = await axios.get(`https://my-home-server-production.up.railway.app/api/luxuryhomes/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching luxury home:", error);
      }
    };
    fetchLuxuryHome();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://my-home-server-production.up.railway.app/api/luxuryhomes/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      navigate("/houses");
    } catch (error) {
      console.error("Error updating luxury home:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Edit Home</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-xl font-semibold mb-2 text-gray-800">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-xl font-semibold mb-2 text-gray-800">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-xl font-semibold mb-2 text-gray-800">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="address" className="block text-xl font-semibold mb-2 text-gray-800">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-xl font-semibold mb-2 text-gray-800">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="country" className="block text-xl font-semibold mb-2 text-gray-800">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="homeType" className="block text-xl font-semibold mb-2 text-gray-800">
              Home Type
            </label>
            <select
              id="homeType"
              name="homeType"
              value={formData.homeType}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="APARTMENT">Apartment</option>
              <option value="HOUSE">House</option>
              <option value="VILLA">Villa</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="bedrooms" className="block text-xl font-semibold mb-2 text-gray-800">
                Bedrooms
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="bathrooms" className="block text-xl font-semibold mb-2 text-gray-800">
                Bathrooms
              </label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasGarden"
                name="hasGarden"
                checked={formData.hasGarden}
                onChange={handleCheckboxChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="hasGarden" className="ml-2 text-xl font-semibold text-gray-800">
                Has Garden
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasGarage"
                name="hasGarage"
                checked={formData.hasGarage}
                onChange={handleCheckboxChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="hasGarage" className="ml-2 text-xl font-semibold text-gray-800">
                Has Garage
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="sqftArea" className="block text-xl font-semibold mb-2 text-gray-800">
              Square Footage
            </label>
            <input
              type="number"
              id="sqftArea"
              name="sqftArea"
              value={formData.sqftArea}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="yearBuilt" className="block text-xl font-semibold mb-2 text-gray-800">
              Year Built
            </label>
            <input
              type="number"
              id="yearBuilt"
              name="yearBuilt"
              value={formData.yearBuilt}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="imageUrl" className="block text-xl font-semibold mb-2 text-gray-800">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-xl font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}