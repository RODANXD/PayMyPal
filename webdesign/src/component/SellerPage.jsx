import React from "react";

const SellerPage = () => {
  return (
    <>
      <div className=" flex flex-col h-full bg-white">
        <div className=" text-black flex flex-col py-10">
          <h1 className=" text-4xl mx-32 xs:mx-5 xs:text-lg xs:font-semibold sm:text-xl 
           md:text-2xl md:ml-24
           xl:text-4xl xl:mx-32 font-extrabold tracking-tight">
            Seller tools
          </h1>
          <span className=" mx-32 xs:mx-5 xs:text-sm sm:text-base
           md:text-lg md:ml-24
           xl:text-base xl:mx-32">
            Sell online easily and grow your business with Seller Tools. Create
            PayPal <br />
            buttons, get instant payment notification, and do much more.
          </span>
        </div>
        <div
          className=" text-black flex flex-col mx-40 gap-12
       xs:mx-5
        md:ml-24
         lg:mx-40"
        >
          <div className=" flex flex-col gap-8">
            <div className=" flex flex-col">
              <h3
                className=" text-2xl font-semibold 
          xs:text-base
           md:text-lg
           "
              >
                Selling Online
              </h3>
              <span className=" text-sm text-slate-600 font-semibold xs:text-xs md:text-sm">
                Grow your Business by making it easier for your coustomer to pay
                you
              </span>
            </div>
            
            <div className=" flex flex-col border border-slate-300   rounded-md w-3/4 xs:w-full md:w-3/4">
              <div className=" flex flex-row flex-wrap items-center justify-between gap-6 
              xs:flex-col xs:gap-3 xs:p-2
              md:flex-row">
                <div className=" flex flex-nowrap items-center gap-9 w-3/4 xs:flex-col md:flex-row xs:gap-3">
                <img
                  src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
                  className="size-10 rounded-full mx-3 xs:size-8 sm:w-10"
                />
                <div className=" flex flex-col p-1">
                  <p className=" text-lg font-semibold xs:text-base
                  sm:text-lg">
                    PayPal Buttons
                  </p>
                  <span className=" text-base text-slate-500 font-normal xs:text-xs
                  sm:text-sm">
                     Create and manage secure buttons for your customer to add
                    items to their cart, buy,donate , or subscribe.
                  </span>
                </div>
                </div>
                <button className=" bg-transparent text-sky-600 px-5 mx-3">
                  Update
                </button>
              </div>
            </div>

            <div className=" flex flex-col border border-slate-300   rounded-md w-3/4 xs:w-full md:w-3/4">
              <div className=" flex flex-row flex-wrap items-center justify-between gap-6 
              xs:flex-col xs:gap-3 xs:p-2
              md:flex-row">
                <div className=" flex flex-nowrap items-center gap-9 w-3/4 xs:flex-col md:flex-row xs:gap-3">
                <img
                  src="https://t4.ftcdn.net/jpg/02/65/71/25/360_F_265712561_b0EWQITFyVQkgFAiy8JcutGSahBEgpu8.jpg"
                  className="size-10 rounded-full mx-3 xs:size-8 sm:w-10"
                />
                <div className=" flex flex-col p-1">
                  <span className=" text-lg font-semibold xs:text-base
                  sm:text-lg">
                    Website preferences
                  </span>
                  <span className=" text-base text-slate-500 font-normal xs:text-xs
                  sm:text-sm">
                    Control how you sell online by turining on express checkouts
                    and bringing customers back to your website after they pay
                    with PayPal.
                  </span>
                </div>
                </div>
                <button className=" bg-transparent text-sky-600 px-5 mx-3">
                  Update
                </button>
              </div>
            </div>
            
            <div className=" flex flex-col border border-slate-300   rounded-md w-3/4 xs:w-full md:w-3/4">
              <div className=" flex flex-row flex-wrap items-center justify-between gap-6 
              xs:flex-col xs:gap-3 xs:p-2
              md:flex-row">
                <div className=" flex flex-nowrap items-center gap-9 w-3/4 xs:flex-col md:flex-row xs:gap-3">
                <img
                  src="https://us.123rf.com/450wm/saravector/saravector1603/saravector160300602/54395991-bell-icon.jpg?ver=6"
                  className="size-10 rounded-full mx-3 xs:size-8 sm:w-10"
                />
                <div className=" flex flex-col p-1">
                  <span className=" text-lg font-semibold xs:text-base
                  sm:text-lg">
                    Instant payment notifications
                  </span>
                  <span className=" text-base text-slate-500 font-normal xs:text-xs
                  sm:text-sm">
                    Stay informed by turning on notifiactions for payments made
                    on your websites.
                  </span>
                </div>
                </div>
                <button className=" bg-transparent text-sky-600 px-5 mx-3">
                  Update
                </button>
              </div>
            </div>
            
          </div>
          <div className=" flex flex-col gap-8">
            <div className=" flex flex-col">
              <h1 className=" text-2xl font-semibold xs:text-base sm:text-lg ">
                Getting paid
              </h1>
              <span className=" text-sm text-slate-600 font-semibold xs:text-xs ">
                Choose various payment tools to attract your customers.
              </span>
            </div>

            <div className=" flex flex-col border border-slate-300   rounded-md w-3/4 xs:w-full md:w-3/4">
              <div className=" flex flex-row items-center justify-between gap-6 
              xs:flex-col xs:gap-3 xs:p-2
              md:flex-row">
                <div className=" flex flex-nowrap items-center gap-9 w-3/4 xs:flex-col md:flex-row xs:gap-3">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/021/375/278/original/invoice-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
                  className="size-10 rounded-full mx-3 xs:size-8 sm:w-10"
                />
                <div className=" flex flex-col p-1">
                  <span className=" text-lg font-semibold xs:text-base
                  sm:text-lg">
                    Invoices
                  </span>
                  <span className=" text-base text-slate-500 font-normal xs:text-xs
                  sm:text-sm">
                    Create professional invoices and customize it as per your
                    requirements.
                  </span>
                </div>
                </div>
                <button className=" bg-transparent text-sky-600 px-5 mx-3">
                  Manage
                </button>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-8">
            <div className=" flex flex-col gap-2">
              <h1 className=" text-2xl font-semibold xs:text-base sm:text-lg">
                More Selling tools
              </h1>
              <span className=" text-sm text-slate-600 font-semibold xs:text-xs">
                Check out the other tools that we have for you to help sell
                online
              </span>
            </div>
            <div className=" flex flex-col border border-slate-300   rounded-md w-3/4 xs:w-full md:w-3/4">
              <div className=" flex flex-row flex-wrap items-center justify-between gap-6 
              xs:flex-col xs:gap-3 xs:p-2
              md:flex-row">
                <div className=" flex flex-nowrap items-center gap-9 w-3/4 xs:flex-col md:flex-row xs:gap-3">
                <img
                  src="https://www.creativefabrica.com/wp-content/uploads/2020/09/24/Delivery-Truck-Icon-Vector-Logo-Design-Graphics-5660557-1.jpg"
                  className="size-10 rounded-full mx-3 xs:size-8 sm:w-10"
                />
                <div className=" flex flex-col p-1">
                  <span className=" text-lg font-semibold xs:text-base
                  sm:text-lg">
                    Shipping preferences
                  </span>
                  <span className=" text-base text-slate-500 font-normal xs:text-xs
                  sm:text-sm">
                    Create your shipping lables for hassle-free returns
                  </span>
                </div>
                </div>
                <button className=" bg-transparent text-sky-600 px-5 mx-3">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerPage;
