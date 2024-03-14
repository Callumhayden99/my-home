import Value from "./Value";
import { useState } from "react";

export default function Service() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?luxury-villa')",
          }}
        >
          <div className="bg-black bg-opacity-60 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-extrabold text-white sm:text-6xl sm:tracking-tight lg:text-7xl">
                Luxury Home Buying & Renting
              </h1>
              <p className="mt-6 max-w-3xl text-2xl text-gray-300">
                Experience the finest in luxury living with our curated
                selection of high-end properties. Whether you're looking to buy,
                rent, or sell, we've got you covered.
              </p>
            </div>
          </div>
        </div>

        {/* Buying Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                  Luxury Home Buying
                </h2>
                <p className="mt-3 max-w-3xl text-xl text-gray-700">
                  Discover your dream home with our exclusive collection of
                  luxury properties. Our team of experts will guide you through
                  every step of the buying process, ensuring a seamless and
                  stress-free experience.
                </p>
                <div className="mt-10 sm:flex">
                  <a
                    href="#"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    Browse Homes
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-10">
                <img
                  className="mx-auto rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                  src="https://source.unsplash.com/800x600/?luxury-home"
                  alt="Luxury Home"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Renting Section */}
        <div className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                  Luxury Home Renting
                </h2>
                <p className="mt-3 max-w-3xl text-xl text-gray-300">
                  Indulge in the ultimate luxury living experience with our
                  curated selection of high-end rental properties. Enjoy the
                  finest amenities and personalized service tailored to your
                  lifestyle.
                </p>
                <div className="mt-10 sm:flex">
                  <a
                    href="#"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    View Rentals
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-10">
                <img
                  className="mx-auto rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                  src="https://source.unsplash.com/800x600/?luxury-apartment"
                  alt="Luxury Apartment"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Selling Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                  Luxury Home Selling
                </h2>
                <p className="mt-3 max-w-3xl text-xl text-gray-700">
                  Trust our experienced team to showcase your luxury property to
                  the right buyers. Our cutting-edge marketing strategies and
                  extensive network will ensure your home receives the attention
                  it deserves.
                </p>
                <div className="mt-10 sm:flex">
                  <a
                    href="#"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    List Your Home
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-10">
                <img
                  className="mx-auto rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                  src="https://source.unsplash.com/800x600/?luxury-real-estate"
                  alt="Luxury Real Estate"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-10">
              What Our Clients Say
            </h2>
            <div className="mt-10 space-y-10">
              <blockquote>
                <div className="max-w-3xl mx-auto text-center text-3xl leading-9 font-medium text-gray-300">
                  <p>
                    &ldquo;The team at Luxury Homes went above and beyond to
                    find us the perfect property. Their attention to detail and
                    personalized service made the entire process a
                    breeze.&rdquo;
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      <img
                        className="mx-auto h-12 w-12 rounded-full"
                        src="https://source.unsplash.com/100x100/?profile"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-300">
                        John Doe
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>

              <blockquote>
                <div className="max-w-3xl mx-auto text-center text-3xl leading-9 font-medium text-gray-300">
                  <p>
                    &ldquo;Luxury Homes made finding our dream rental property a
                    seamless and enjoyable experience. Their expertise and
                    professionalism were truly impressive.&rdquo;
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      <img
                        className="mx-auto h-12 w-12 rounded-full"
                        src="https://source.unsplash.com/100x100/?profile-2"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-300">
                        Jane Smith
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>

              <blockquote>
                <div className="max-w-3xl mx-auto text-center text-3xl leading-9 font-medium text-gray-300">
                  <p>
                    &ldquo;Selling our luxury home with Luxury Homes was a
                    seamless and profitable experience. Their marketing
                    strategies and network attracted the right buyers, resulting
                    in a successful sale.&rdquo;
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      <img
                        className="mx-auto h-12 w-12 rounded-full"
                        src="https://source.unsplash.com/100x100/?profile-3"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-300">
                        Michael Johnson
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl text-center mb-10">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">
                <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 transition duration-500 ease-in-out transform hover:rotate-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Consultation
                </h3>
                <p className="text-xl text-gray-700">
                  We start by understanding your needs and preferences through a
                  personal consultation.
                </p>
              </div>
              <div className="text-center transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">
                <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 transition duration-500 ease-in-out transform hover:rotate-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Property Search
                </h3>
                <p className="text-xl text-gray-700">
                  Our experts curate a selection of properties that match your
                  criteria.
                </p>
              </div>
              <div className="text-center transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">
                <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 transition duration-500 ease-in-out transform hover:rotate-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Seamless Transactions
                </h3>
                <p className="text-xl text-gray-700">
                  We handle all the details, ensuring a smooth and secure
                  transaction process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valuation Section */}
        <div className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                  Luxury Home Valuations
                </h2>
                <p className="mt-3 max-w-3xl text-xl text-gray-300">
                  Accurate valuation is key when buying or selling a luxury
                  property. Our experienced appraisers use advanced techniques
                  and market insights to provide precise valuations, ensuring
                  you make informed decisions.
                </p>
                <div className="mt-10 sm:flex">
                  <button
                    onClick={toggleModal}
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    Get a Valuation
                  </button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-10">
                <img
                  className="mx-auto rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                  src="https://source.unsplash.com/800x600/?luxury-home-valuation"
                  alt="Luxury Home Valuation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Value />}
    </>
  );
}
