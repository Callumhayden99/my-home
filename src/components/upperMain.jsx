import home from "../assets/home.jpg"
export default function UpperMain() {
  return (
    <>
    <div className="flex flex-wrap justify-center items-start mt-20 gap-x-8">
    <div className="flex flex-col gap-y-6 mt-20">
        <h1 className="font-bold text-5xl">
          Let's find a home<br></br> that's perfect for you
        </h1>
        <p>
          Each property design has it's own meaning and we are ready to<br></br> help you
          to get a property according to your taste.
        </p>
        <p className="font-bold">Let's discuss the following: </p>
        <div className="flex">
            <button className="bg-stone-300 py-3 px-9 hover:text-blue-600 hover:bg-blue-200">BUY</button>
            <button className="bg-stone-300 py-3 px-9 hover:text-blue-600 hover:bg-blue-200">RENT</button>
            <button className="bg-stone-300 py-3 px-9 hover:text-blue-600 hover:bg-blue-200">SELL</button>
        </div>
        <div className="flex">
            <div className="bg-stone-300 py-8 px-10 text-center hover:bg-blue-200">
                <p className="text-2xl text-blue-500">9K+</p>
                <p className="font-bold">Premium Properties</p>
            </div>
            <div className="bg-stone-300 py-8 px-10 text-center hover:bg-blue-200">
                <p className="text-2xl text-blue-500">5K+</p>
                <p className="font-bold">Happy Customers</p>
            </div>
            <div className="bg-stone-300 py-8 px-10 text-center hover:bg-blue-200">
                <p className="text-2xl text-blue-500">58+</p>
                <p className="font-bold">Awards Winnings</p>
            </div>
        </div>
      </div>
      <div>
       <img className="mt-11 rounded-3xl bg-white p-5" src={home} alt="Luxury home in the sun with a huge swimming pool" style={{ width: '700px', height: 'auto' }} />
      </div>
    </div>
    </>
  );
}
