import owner from "../assets/owner.jpg";
import female from "../assets/female.jpg";
import female2 from "../assets/female2.jpg";
import male from "../assets/male.jpg";
import male2 from "../assets/male2.jpg";
import male3 from "../assets/male3.jpg";
export default function About() {
  return (
    <>
      <div className="min-h-screen bg-white mt-10">
        {/* Header */}{" "}
        <header className="bg-gray-100 shadow">
          {" "}
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {" "}
            <h1 className="text-3xl text-center font-bold leading-tight text-gray-800">
              About Us
            </h1>{" "}
          </div>{" "}
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {/* Company Overview */}
            <section className="mb-12">
              <h2 className="text-4xl font-bold  text-gray-800">
                Our Story
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <div>
                  <p className="text-gray-600 text-lg lg:text-2xl leading-relaxed mb-10 ">
                    Founded in Manchester, England, our luxury homes company has
                    been helping clients buy, sell, and rent high-end properties
                    for many years. With a passion for exceptional service and a
                    deep understanding of the luxury real estate market, we have
                    established ourselves as a trusted partner for discerning
                    clients seeking the finest homes in the region.
                  </p>
                  <p className="text-gray-600 text-lg lg:text-2xl leading-relaxed">
                    Our team of seasoned professionals brings decades of
                    combined experience and a wealth of industry knowledge to
                    every transaction. We pride ourselves on our attention to
                    detail, personalized approach, and unwavering commitment to
                    our clients' success.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full md:w-3/4 mx-auto">
                    <img
                      src={owner}
                      alt="Company Overview"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-xl md:text-2xl font-bold bg-gray-800 bg-opacity-50 px-4 py-2 rounded-lg">
                        Your Trusted Partner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why We're the Best */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Why We're the Best
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Unrivaled Expertise
                  </h3>
                  <p className="text-gray-600">
                    Our team possesses unparalleled knowledge and expertise in
                    the luxury real estate market. We stay up-to-date with the
                    latest trends, ensuring that our clients receive the most
                    informed guidance and advice.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Exceptional Service
                  </h3>
                  <p className="text-gray-600">
                    We are dedicated to providing exceptional service to our
                    clients. From the initial consultation to the final closing,
                    we are with you every step of the way, ensuring a smooth and
                    stress-free experience.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Extensive Network
                  </h3>
                  <p className="text-gray-600">
                    With our extensive network and long-standing relationships
                    in the industry, we have access to exclusive listings and
                    off-market opportunities. This allows us to present our
                    clients with the most desirable properties that meet their
                    specific criteria.
                  </p>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Selling
                  </h3>
                  <p className="text-gray-600">
                    Our experienced team of real estate professionals will guide
                    you through the entire selling process, from pricing your
                    property competitively to marketing it effectively and
                    negotiating the best possible deal.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Buying
                  </h3>
                  <p className="text-gray-600">
                    Whether you're a first-time buyer or an experienced
                    investor, we'll help you find the perfect luxury property
                    that meets your unique needs and preferences. Our extensive
                    network and market knowledge ensure you have access to the
                    finest homes available.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Renting
                  </h3>
                  <p className="text-gray-600">
                    For those seeking a luxurious rental property, we offer a
                    curated selection of high-end homes and apartments. Our
                    rental specialists will assist you in finding the ideal
                    residence that suits your lifestyle and requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={male}
                    alt="Team Member 1"
                    className="w-32 h-32 rounded-full mx-auto mb-4 transition duration-300 ease-in-out transform hover:scale-110"
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Callum Hayden
                  </h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={male2}
                    alt="Team Member 2"
                    className="w-32 h-32 rounded-full mx-auto mb-4 transition duration-300 ease-in-out transform hover:scale-110"
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Jack Miller
                  </h3>
                  <p className="text-gray-600">Senior Sales Agent</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={female}
                    alt="Team Member 3"
                    className="w-32 h-32 rounded-full mx-auto mb-4 transition duration-300 ease-in-out transform hover:scale-110"
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Daniel Roberts
                  </h3>
                  <p className="text-gray-600">Marketing Director</p>
                </div>
              </div>
            </section>

            {/* Values */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Values
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  Integrity: We uphold the highest ethical standards in all our
                  dealings.
                </li>
                <li>
                  Excellence: We strive for excellence in every aspect of our
                  work.
                </li>
                <li>
                  Client-Centered: Our clients' needs and satisfaction are our
                  top priorities.
                </li>
                <li>
                  Professionalism: We maintain a high level of professionalism
                  and expertise.
                </li>
                <li>
                  Innovation: We embrace innovation to deliver cutting-edge real
                  estate solutions.
                </li>
              </ul>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <p className="text-gray-600 mb-4">
                    "Working with this luxury homes company was an incredible
                    experience. Their attention to detail and personalized
                    service made the entire process of selling my home seamless
                    and stress-free. I highly recommend them!"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={female2}
                      alt="Client 1"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Sarah Thompson</p>
                      <p className="text-gray-600">Satisfied Client</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <p className="text-gray-600 mb-4">
                    "As a first-time buyer, I was apprehensive about navigating
                    the luxury real estate market. However, the team at this
                    company guided me every step of the way and helped me find
                    my dream home. Their expertise and dedication are
                    unparalleled."
                  </p>
                  <div className="flex items-center">
                    <img
                      src={male3}
                      alt="Client 2"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold text-gray-800">David Wilson</p>
                      <p className="text-gray-600">Happy Homeowner</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
