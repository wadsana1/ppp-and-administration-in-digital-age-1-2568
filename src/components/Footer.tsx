import React from "react";

export default function footer() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-white items-center w-full md:max-w-7xl shadow-lg p-16 mb-5 bg-body rounded">
          <div className="flex flex-col justify-center items-center mt-3 space-y-2 md:mx-[50px] md:flex-row md:justify-between">
            <p className="text-md font-semibold text-gray-800 md:text-lg md:text-gray-500/90">
              {" "}
              Join Our Newsletter{" "}
            </p>
            <div className="md:text-lg">
              {" "}
              <input
                className="bg-gray-200/70 border drop-shadow-sm shadow-gray-700 rounded-md placeholder-slate-400 px-2 py-1 focus:outline-none focus:border-cyan-600"
                type="email"
                placeholder="E-mail Address"
              />{" "}
              <button className="p-1 m-1 rounded-md text-white bg-blue-500 hover:text-blue-500 hover:bg-white hover:font-semibold hover:trandform ease-in-out duration-300">
                Subscribe{" "}
              </button>{" "}
            </div>
            <div className="text-center text-lg md:space-x-1">
              {" "}
              <a
                className="w-9 h-10 pt-1 m-2 md:ml-2 md:mr-0 inline-block border-1 rounded-lg text-white bg-blue-500 hover:bg-white hover:text-blue-500"
                href="#"
              >
                <li className="fa fa-twitter"></li>
              </a>{" "}
              <a
                className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-orange-500 hover:bg-white hover:text-orange-500"
                href="#"
              >
                <li className="fa fa-google"></li>
              </a>{" "}
              <a
                className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-red-500 hover:bg-white hover:text-red-500"
                href="#"
              >
                <li className="fa fa-linkedin"></li>
              </a>{" "}
              <a
                className="w-9 h-10 pt-[5px] m-2 inline-block border-1 rounded-lg text-white bg-purple-500 hover:bg-white hover:text-purple-500"
                href="#"
              >
                <li className="fa fa-telegram"></li>
              </a>{" "}
              <a
                className="w-9 h-10 pt-[5px] m-2 inline-block border-1 rounded-lg text-white bg-cyan-500 hover:bg-white hover:text-cyan-500"
                href="#"
              >
                <li className="fa fa-facebook"></li>
              </a>{" "}
            </div>
          </div>
          <hr className="mt-2 md:overflow-hidden" />
          <div className="grid grid-cols-2 my-3 text-center md:grid-cols-4">
            <div className="flex flex-col leading-7 items-start ml-20">
              <h1 className="text-blue-500 text-lg font-semibold">บริการ</h1>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                AI ตรวจวินิจฉัยโรค
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                AEC Ranking
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                ChatGPT
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                การประเมินนโยบายสาธารณะ
                </a>{" "}
              </p>
              </div>
            <div className="flex flex-col leading-7">
              <h1 className="text-blue-500 text-lg font-semibold">เกี่ยวกับ</h1>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  การเรียนการสอน
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  การวิจัย
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  การบริการวิชาการ
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  การทำนุบำรุงศิลปวัฒนธรรม
                </a>{" "}
              </p>
              </div>
            <div className="flex flex-col my-6 leading-7 md:my-0">
              <h1 className="text-blue-500 text-lg font-semibold">นโยบาย</h1>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  ข้อมูลส่วนบุคคล
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  ความปลอดภัยทางไซเบอร์
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  ยุทธศาสตร์ชาติ20
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  Service Providers
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  Email Contact
                </a>{" "}
              </p>
            </div>
            <div className="flex flex-col my-6 leading-7 md:my-0">
              <h1 className="text-blue-500 text-lg font-semibold">
                Contact Us
              </h1>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  Support@admin.com
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="text-gray-500/80 hover:text-cyan-600" href="#">
                  (+91)700-788-67-00
                </a>{" "}
              </p>
            </div>
          </div>
          <hr className="mt-2 md:invisible" />
          <div className="flex flex-col items-center m-5 md:flex-row md:justify-between md:mx-28">
            {" "}
            <img src="https://dummyimage.com/150x50" alt="" />
            <div className="mt-4 text-gray-500 font-semibold">
              {" "}
              <a className="hover:text-blue-500 tracking-wide" href="#">
                DMCA
              </a>{" "}
              <strong>|</strong>{" "}
              <a className="hover:text-blue-500 tracking-normal" href="#">
                Security Statement
              </a>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  );
}
