export default function Service() {
  return (
    <>
      <div className="bg-gray-100 mt-5">
        {/* Hero Section */}
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?luxury-villa')",
          }}
        >
          <div className="bg-black bg-opacity-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Luxury Home Buying & Renting
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-200">
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
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Luxury Home Buying
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Discover your dream home with our exclusive collection of
                  luxury properties. Our team of experts will guide you through
                  every step of the buying process, ensuring a seamless and
                  stress-free experience.
                </p>
                <div className="mt-10 sm:flex">
                  <a
                    href="#"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    Browse Homes
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-10">
                <img
                  className="mx-auto rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  src="https://source.unsplash.com/800x600/?luxury-home"
                  alt="Luxury Home"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Renting Section */}
        <div className="bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Luxury Home Renting
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-200">
                  Indulge in the ultimate luxury living experience with our
                  curated selection of high-end rental properties. Enjoy the
                  finest amenities and personalized service tailored to your
                  lifestyle.
                </p>
                <div className="mt-10 sm:flex">
                  <a
                    href="#"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    View Rentals
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-10">
                <img
                  className="mx-auto rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
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
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Luxury Home Selling
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Trust our experienced team to showcase your luxury property to
                  the right buyers. Our cutting-edge marketing strategies and
                  extensive network will ensure your home receives the attention
                  it deserves.
                </p>
                <div className="mt-10 sm:flex">
                  <a
                    href="#"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    List Your Home
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-10">
                <img
                  className="mx-auto rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  src="https://source.unsplash.com/800x600/?luxury-real-estate"
                  alt="Luxury Real Estate"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <div className="mt-10 space-y-10">
              <blockquote>
                <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
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
                        className="mx-auto h-10 w-10 rounded-full"
                        src="https://source.unsplash.com/100x100/?profile"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-900">
                        John Doe
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>

              <blockquote>
                <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
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
                        className="mx-auto h-10 w-10 rounded-full"
                        src="https://source.unsplash.com/100x100/?profile-2"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-900">
                        Jane Smith
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>

              <blockquote>
                <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
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
                        className="mx-auto h-10 w-10 rounded-full"
                        src="https://source.unsplash.com/100x100/?profile-3"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-900">
                        Michael Johnson
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
