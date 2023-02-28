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
          <div className="w-[20rem] px-4 md:w-1/2">
            <img
              src={item.thumbnail}
              alt="laptop"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-[23rem] mt-4 text-center px-4 md:w-1/2">
            <div className="flex justify-end">
              <p>{item.rating}</p>
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
