import React from "react";

export default function ChatGPT() {
  return (
    <div>
      <section className="text-gray-600 body-fontshadow-lg p-16 mb-5 bg-body rounded ">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="images/p1.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              AI ChatBot
            </h1>
            <p className="mb-8 leading-relaxed">AI ChatBot ด้านรัฐธรรมนูญไทย</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                ดูรายละเอียดที่นี่
              </button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
