"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";
import CardBarChart from "../../plugins/ChartJS/BarChart";
import CardBarDoughnut from "../../plugins/ChartJS/DoughnutChart";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
const Dashboard = () => {
  return (
    <>
      <div className="max-w-full ">
        <h1 className="text-2xl">Dashboard</h1>
        <div className="flex items-center gap-1  justify-center p-5">
          <div className="mt-15 w-[70%] p-2 h-auto">
            <div className="flex items-center ">
              <div className="w-[100%] flex items-center justify-between">
                <p>Revenue</p>
                <div className="flex items-center justify-center w-30 h-10 bg-zinc-100 text-[#5A6ACF] rounded-[10px]">
                  <Link href={"/"} as={"/"}>
                    <p>View Report</p>
                  </Link>
                </div>
              </div>
            </div>
            <p className="font-bold mt-5 font-4xl"> IDR 7.825.000</p>
            <div className="mt-3">
              <p className="text-zinc-500">
                <span className="flex items-center gap-1">
                  <AiOutlineArrowUp className="text-green-500" />
                  <span className="text-green-500">2.1%</span> vs last week
                </span>
              </p>
            </div>
            <p className="text-zinc-500 mt-2">Sales from 1-12 Dec, 2020</p>
            <div className="w-full h-auto">
              <CardBarChart />
            </div>
            <div className="flex pr-5 mt-5">
              <div>
                <p className="flex items-center ">
                  <span style={{ color: "#C7CEEF", marginRight: "5px" }}>
                    <FaCircle />
                  </span>{" "}
                  2025 Year
                </p>
              </div>
              <div>
                <p className="flex items-center ml-3">
                  <span style={{ color: "#5A6ACF", marginRight: "5px" }}>
                    <FaCircle />
                  </span>{" "}
                  2024 Year
                </p>
              </div>
            </div>
          </div>
          <div className="mt-15 w-[30%] p-2 h-auto ">
            <div className="flex items-center ">
              <div className="w-[100%] flex items-center justify-between">
                <p>Order Time</p>
                <div className="flex items-center justify-center w-30 h-10 bg-zinc-100 text-[#5A6ACF] r rounded-[10px]">
                  <Link href={"/"} as={"/"}>
                    <p>View Report</p>
                  </Link>
                </div>
              </div>
            </div>
            <p className="mt-5 text-zinc-500"> From 1-6 Dec, 2020 </p>
            <div className="mt-15">
              <CardBarDoughnut />
            </div>
            <div className="flex items-center justify-between pr-5 mt-5">
              <div>
                <p className="flex items-center ">
                  <span style={{ color: "#5A6ACF", marginRight: "5px" }}>
                    <FaCircle />
                  </span>{" "}
                  Afternoon
                </p>
              </div>
              <div>
                <p className="flex items-center ml-3">
                  <span style={{ color: "#8593ED", marginRight: "5px" }}>
                    <FaCircle />
                  </span>{" "}
                  Evening
                </p>
              </div>
              <div>
                <p className="flex items-center ml-3">
                  <span style={{ color: "#C7CEEF", marginRight: "5px" }}>
                    <FaCircle />
                  </span>
                  Morning
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="pl-8"> 
                <p className="flex items-center">40%</p> 
              </div>
              <div>
                <p className="flex items-center">32%</p>
              </div>
              <div className="pr-8">
                <p className="flex items-center">28%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 justify-between">
          <div className="w-full border-1 h-[400px]"></div>
          <div className="w-full border-1 h-[400px] p-5">
            <div>
              <p>Most Ordered Food</p>
              <span className="mt-7 text-zinc-500">Adipiscing elit, sed do eiusmod tempor</span>
              <div>
                <div className="flex mt-5 mb-5 items-center">
                  <Image  src={"/assets/66306s.jpg"} className="mr-3 rounded-full ring-2 ring-gray-200" alt={"me"} width={28} height={28} />
                  <p>Fresh Salad Bowl</p>
                  <p>IDR 45.000</p>
                </div>
                <div className="border-1 border-zinc-300" />
                <div className="flex mt-5 mb-5 items-center">
                  <Image  src={"/assets/66306s.jpg"} className="mr-3 rounded-full ring-2 ring-gray-200" alt={"me"} width={28} height={28} />
                  <p>Fresh Salad Bowl</p>
                  <p>IDR 45.000</p>
                </div>
                <div className="border-1 border-zinc-300" />
                <div className="flex mt-5 mb-5 items-center">
                  <Image  src={"/assets/66306s.jpg"} className="mr-3 rounded-full ring-2 ring-gray-200" alt={"me"} width={28} height={28} />
                  <p>Fresh Salad Bowl</p>
                  <p>IDR 45.000</p>
                </div>
                <div className="border-1 border-zinc-300" />
                <div className="flex mt-5 items-center">
                  <Image  src={"/assets/66306s.jpg"} className="mr-3 rounded-full ring-2 ring-gray-200" alt={"me"} width={28} height={28} />
                  <p>Fresh Salad Bowl</p>
                  <p className="">IDR 45.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-1 h-[400px] ">
            <p>Order</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
