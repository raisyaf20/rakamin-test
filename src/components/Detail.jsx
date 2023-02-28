import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GetDetail } from "../assets/api";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    GetDetail(id).then((respon) => setItem(respon));
  }, [id]);
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="flex bg-slate-200 p-4 rounded-lg flex-wrap justify-center md:bg-inherit md:rounded-none lg:flex-row">
          <div className="w-[20rem] px-4 md:w-1/3">
            <img
              src={item.thumbnail}
              alt="laptop"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-[23rem] mt-4 text-center px-4 md:w-1/2">
            <div className="flex justify-end items-center">
              <p className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star-filled text-yellow-300"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
              </p>
              <p className="text-base text-slate-700">{item.rating}</p>
            </div>
            <p className="text-base mb-1">{item.brand}</p>
            <h1 className="text-3xl text-gray-800 mb-1 font-semibold">
              {item.title}
            </h1>
            <p className="font-semibold mb-2">${item.price}</p>
            <p className="text-slate-600">{item.description}</p>
            <Link to="/" className="block mt-2">
              <button className="py-2 px-11 rounded-full bg-primary">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
