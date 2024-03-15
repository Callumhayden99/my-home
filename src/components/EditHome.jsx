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
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit Home</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block font-semibold">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block font-semibold">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block font-semibold">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block font-semibold">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="homeType" className="block font-semibold">
            Home Type
          </label>
          <select
            id="homeType"
            name="homeType"
            value={formData.homeType}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          >
            <option value="APARTMENT">Apartment</option>
            <option value="HOUSE">House</option>
            <option value="VILLA">Villa</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="bedrooms" className="block font-semibold">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bathrooms" className="block font-semibold">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hasGarden" className="block font-semibold">
            Has Garden
          </label>
          <input
            type="checkbox"
            id="hasGarden"
            name="hasGarden"
            checked={formData.hasGarden}
            onChange={handleCheckboxChange}
            className="border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hasGarage" className="block font-semibold">
            Has Garage
          </label>
          <input
            type="checkbox"
            id="hasGarage"
            name="hasGarage"
            checked={formData.hasGarage}
            onChange={handleCheckboxChange}
            className="border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sqftArea" className="block font-semibold">
            Square Footage
          </label>
          <input
            type="number"
            id="sqftArea"
            name="sqftArea"
            value={formData.sqftArea}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="yearBuilt" className="block font-semibold">
            Year Built
          </label>
          <input
            type="number"
            id="yearBuilt"
            name="yearBuilt"
            value={formData.yearBuilt}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block font-semibold">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}