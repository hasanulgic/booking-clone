
export default function Destination() {
  return (
    <div className="max-w-[1280px] mx-auto my-6">
      <h1 className="text-2xl font-bold">Trending destinations</h1>
      <h2 className="text-deem my-2">
        Most popular choices for travellers from Bangladesh
      </h2>
      <div className="grid grid-rows-1 grid-cols-2 w-full gap-6">
        <div
          className="text-white bg-red-400 p-4 rounded-md bg-cover bg-center h-60 w-full hover:border-2 border-[#ffb700]"
          style={{
            backgroundImage:
              'url("https://cf.bstatic.com/xdata/images/city/600x600/688201.jpg?k=586e76aa55aa92d886eaf5837e288d77e15c9b81534bd4c7121d0d020e99064d&o=")',
          }}
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-bold inline-block">Dhaka</h1>
            <img
              src="https://flagsapi.com/BD/flat/32.png"
              className="h-8 w-8 inline-block ms-2"
            />
          </div>
        </div>
        <div
          className="text-white bg-red-400 p-4 rounded-md bg-cover bg-center h-60 w-full hover:border-2 border-[#ffb700]"
          style={{
            backgroundImage:
              'url("https://cf.bstatic.com/xdata/images/city/600x600/685535.jpg?k=e2be6eed1575001863411089bf79fd4be8a1d6fc4fb68ee5c865083994a6fe96&o=")',
          }}
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-bold inline-block">Kuala Lumpur</h1>
            <img
              src="https://flagsapi.com/MY/flat/32.png"
              className="h-8 w-8 inline-block ms-2"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-cols-3 w-full gap-6 mt-5">
        <div
          className="text-white bg-red-400 p-4 rounded-md bg-cover bg-center h-60 w-full hover:border-2 border-[#ffb700]"
          style={{
            backgroundImage:
              'url("https://cf.bstatic.com/xdata/images/city/600x600/971990.jpg?k=6d52fe4a57a984e2d540e3d7a1910f8a76fda3a57708faddd74e2109c3344b5e&o=")',
          }}
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-bold inline-block">Toronto</h1>
            <img
              src="https://flagsapi.com/CA/flat/32.png"
              className="h-8 w-8 inline-block ms-2"
            />
          </div>
        </div>
        <div
          className="text-white bg-red-400 p-4 rounded-md bg-cover bg-center h-60 w-full hover:border-2 border-[#ffb700]"
          style={{
            backgroundImage:
              'url("https://cf.bstatic.com/xdata/images/city/600x600/977220.jpg?k=ee4b7b42c35b8cbf09c8ddb7630092b40cd706fec153c41904ed6e252a883938&o=")',
          }}
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-bold inline-block">Dubai</h1>
            <img
              src="https://flagsapi.com/AE/flat/32.png"
              className="h-8 w-8 inline-block ms-2"
            />
          </div>
        </div>
        <div
          className="text-white bg-red-400 p-4 rounded-md bg-cover bg-center h-60 w-full hover:border-2 border-[#ffb700]"
          style={{
            backgroundImage:
              'url("https://cf.bstatic.com/xdata/images/city/600x600/977255.jpg?k=701d538f315c17d17ca4eb5ff1a7bd0f8ed9222acebdaa6a212b638d04bef1c1&o=")',
          }}
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-bold inline-block">Bangkok</h1>
            <img
              src="https://flagsapi.com/SG/flat/32.png"
              className="h-8 w-8 inline-block ms-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}