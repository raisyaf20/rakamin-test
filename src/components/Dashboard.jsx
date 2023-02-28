import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetProducts } from "../assets/api";

const Dashboard = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    GetProducts().then((respon) => setItem(respon.products));
  });
  return (
    <main className="mt-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:flex-row ">
          {item.map((e, i) => (
            <div
              key={i}
              className="w-[20rem] group rounded-[32px] overflow-hidden md:w-[18rem]"
            >
              <img
                src={e.thumbnail}
                alt={e.title}
                className="w-full group-hover:scale-110 transition duration-700 h-[210px] object-cover object-center"
              />
              <div className="p-3">
                <h1 className="mt-2 text-3xl font-bold text-center text-slate-800">
                  {e.title}
                </h1>
                <div className="flex justify-between mt-1">
                  <p className="text-slate-700">{e.category}</p>
                  <p className="text-base font-medium">${e.price}</p>
                </div>
                <Link to={`Detail/${e.id}`} className="block text-center mt-5">
                  <button className="py-2 px-11 rounded-full bg-primary hover:bg-teal-500">
                    Detail
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
