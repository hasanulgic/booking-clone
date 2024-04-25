
export default function FamousPlace() {
  return (
    <div className="max-w-[1280px] mx-auto my-2">
      <h1 className="text-2xl font-bold my-2">Find things to do in...</h1>
      <div className="grid grid-rows-1 grid-cols-4 w-full gap-6">
        <div
          className="rounded-lg bg-cover bg-center h-44"
          style={{
            backgroundImage:
              'url("https://r-xx.bstatic.com/xdata/images/xphoto/263x197/321923131.jpeg?k=acb99a7c8201734e0264ee1fa70cde287f371269b9741958b0519b00be443123&o=")',
          }}
        >
          <div className="p-4 text-white font-bold pt-28">
            <h1>Paris</h1>
            <p className="text-sm">2200+ attractions</p>
          </div>
        </div>
        <div
          className="rounded-lg bg-cover bg-center h-44"
          style={{
            backgroundImage:
              'url("https://r-xx.bstatic.com/xdata/images/xphoto/263x197/321668686.jpeg?k=7f37a8b44836211b20724e0deda325a49e5a39e4374e1460d85b4f72d72c43a4&o=")',
          }}
        >
          <div className="p-4 text-white font-bold pt-28">
            <h1>Rome</h1>
            <p className="text-sm">3900+ attractions</p>
          </div>
        </div>
        <div
          className="rounded-lg bg-cover bg-center h-44"
          style={{
            backgroundImage:
              'url("https://r-xx.bstatic.com/xdata/images/xphoto/263x197/321936536.jpeg?k=afe4f57f95913e5a762b408e8ba0bbb8cbfcc5f4c31b0b899586709f55c1d5d7&o=")',
          }}
        >
          <div className="p-4 text-white font-bold pt-28">
            <h1>Dubai</h1>
            <p className="text-sm">3200+ attractions</p>
          </div>
        </div>
        <div
          className="rounded-lg bg-cover bg-center h-44"
          style={{
            backgroundImage:
              'url("https://q-xx.bstatic.com/xdata/images/xphoto/263x197/72203920.jpeg?k=8901bcc9d621d9cd12a9cf564b1b08a7d786b6cc2152d189f3172befcd269af6&o=")',
          }}
        >
          <div className="p-4 text-white font-bold pt-28">
            <h1>Barcelona</h1>
            <p className="text-sm">1300+ attractions</p>
          </div>
        </div>
      </div>
    </div>
  );
}