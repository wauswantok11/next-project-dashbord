"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

const Dashboard = () => {
  return (
    <>
      <div className="max-w-full ">
        <h1 className="text-2xl">Dashboard</h1>
        <div className="mt-15 w-[50%] border-1 p-2">
          <div className="flex items-center ">
            <div className="w-[100%] flex items-center justify-between">
              <p>Revenue</p>
              <div className="flex items-center justify-center w-30 h-10 bg-zinc-100 text-blue-500 rounded-[10px]">
                <Link href={"/"} as={"/"}>
                  <p>View Report</p>{" "}
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
          <div className="w-full">
            
          </div> 
        </div>
      </div>
    </>
  );
};

export default Dashboard;
