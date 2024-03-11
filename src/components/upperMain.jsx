import home from "../assets/home.jpg";
export default function UpperMain() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-start mt-20 gap-x-8">
        <div className="flex flex-col gap-y-6 mt-20 m-2">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center sm:text-left">
              Let's find a home<br></br> that's perfect for you
            </h1>
            <p className="text-base sm:text-lg text-center sm:text-left mt-4">
              Each property design has its own meaning and we are ready to help
              you to get a property according to your taste.
            </p>
            <p className="font-bold text-center sm:text-left mt-4">
              Let's discuss the following:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button className="bg-stone-300 py-3 px-9 hover:text-blue-600 hover:bg-blue-200 min-w-[120px]">
              BUY
            </button>
            <button className="bg-stone-300 py-3 px-9 hover:text-blue-600 hover:bg-blue-200 min-w-[120px]">
              RENT
            </button>
            <button className="bg-stone-300 py-3 px-9 hover:text-blue-600 hover:bg-blue-200 min-w-[120px]">
              SELL
            </button>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-stone-300 py-8 px-10 text-center hover:bg-blue-200 min-w-[250px]">
                <p className="text-2xl text-blue-500">9K+</p>
                <p className="font-bold">Premium Properties</p>
              </div>
              <div className="bg-stone-300 py-8 px-10 text-center hover:bg-blue-200 min-w-[250px]">
                <p className="text-2xl text-blue-500">5K+</p>
                <p className="font-bold">Happy Customers</p>
              </div>
              <div className="bg-stone-300 py-8 px-10 text-center hover:bg-blue-200 min-w-[250px]">
                <p className="text-2xl text-blue-500">58+</p>
                <p className="font-bold">Awards Winnings</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="mt-11 rounded-3xl bg-white p-5"
            src={home}
            alt="Luxury home in the sun with a huge swimming pool"
            style={{ width: "700px", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
