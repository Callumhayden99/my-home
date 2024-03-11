

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 mt-10">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center leading-tight text-gray-900">Contact Us</h1>
        </div>
      </header>

      <main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 rounded-full p-3 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Address</h3>
                <p className="text-gray-600">123 Luxury Street, City, Country</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 rounded-full p-3 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 123-456-7890</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-300 rounded-full p-3 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Email</h3>
                <p className="text-gray-600">info@luxuryhomes.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Location</h2>
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8402891185456!2d-122.4129136843904!3d37.79040441893034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f18d8c6ea7%3A0x5d7f53fb70a3a903!2sLuxury%20Homes%20Realty!5e0!3m2!1sen!2sus!4v1623809170063!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hours of Operation */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Hours of Operation</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>What services do you offer?</li>
                <li>How can I schedule a property viewing?</li>
                <li>What are your commission rates?</li>
                <li>How long does the buying/selling process typically take?</li>
              </ul>
              <a
                href="#"
                className="mt-4 inline-block bg-gray-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
              >
                View All FAQs
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold">Ready to find your dream home?</h2>
                <p className="mt-3 max-w-3xl text-lg">
                  Contact us today to start your journey towards luxury living.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <a
                  href="#"
                  className="inline-block bg-white text-gray-800 font-bold py-3 px-6 rounded-md shadow hover:shadow-lg transition duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
  );
}

export default Contact;