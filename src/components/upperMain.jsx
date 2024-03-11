import home from "../assets/home.jpg";

export default function UpperMain() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-20 mb-10 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-y-8">
          <div>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left leading-tight mb-6 text-gray-800">
              Discover Your Ideal Home
            </h1>
            <p className="text-xl text-center lg:text-left mt-4 text-gray-600">
              Find properties that perfectly match your preferences and needs. Let us assist you in your search for your dream home.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-800 text-white py-3 px-8 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out text-lg">
              Buy
            </button>
            <button className="bg-gray-800 text-white py-3 px-8 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out text-lg">
              Rent
            </button>
            <button className="bg-gray-800 text-white py-3 px-8 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out text-lg">
              Sell
            </button>
          </div>
          <div>
            <div className="flex gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <p className="text-4xl font-bold text-gray-800 mb-2">9K+</p>
                <p className="text-xl font-semibold text-gray-600">Premium Properties</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <p className="text-4xl font-bold text-gray-800 mb-2">5K+</p>
                <p className="text-xl font-semibold text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <p className="text-4xl font-bold text-gray-800 mb-2">58+</p>
                <p className="text-xl font-semibold text-gray-600">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="rounded-lg shadow-lg"
            src={home}
            alt="Modern luxury home"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}