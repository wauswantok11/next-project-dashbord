"use client";
import React from "react"; 
import { AiOutlineArrowUp } from "react-icons/ai";
import CardBarChart from "../../plugins/ChartJS/BarChart";
import CardBarDoughnut from "../../plugins/ChartJS/DoughnutChart";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
import CardLineChart from "../../plugins/ChartJS/LineChart";
import Button from '@mui/material/Button';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { getAdminDashboard } from "../../Service/ServiceApi";
import { ResponseDashboardDTO } from "../../Service/ServiceDashboardDto";
import {formatNumber } from "../../utils/formatNumber";
import { ValueChartDoughnut } from "../../plugins/ChartJS/CharDto";
// import { CiUser } from "react-icons/ci";
// import { FaRegUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

import { RiAdminLine } from "react-icons/ri";

const Dashboard = () => {
  const [activeDay, setActiveDay] = React.useState('all');
  const [dashboardData, setDashboardData] = React.useState<ResponseDashboardDTO | null>(null);
  const [valueChartDoug, setValueChartDoug] = React.useState<ValueChartDoughnut[]>([]);
  const [formattedMetrics, setFormattedMetrics] = React.useState({
    totalUsers: '',
    totalBusinesses: '',
    totalPreRegister: '',
    newUsers: '',
    newBusinesses: '',
    activeUsers: ''
  });

  const handleDayClick = (day: string) => {
    setActiveDay(day);
  };

  React.useEffect(()=>{
    const fetchDashboard = async () => {
      try {
        const response = await getAdminDashboard();
        setDashboardData(response);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboard();
  },[])

  React.useEffect(()=>{
    if (dashboardData){
      setFormattedMetrics({
        totalUsers: formatNumber(dashboardData?.data?.count_users || 0),
        totalBusinesses: formatNumber(dashboardData?.data?.count_businesses || 0),
        totalPreRegister: formatNumber(dashboardData?.data?.count_total_pre_register || 0),
        newUsers: formatNumber(dashboardData?.data?.count_new_users || 0),
        newBusinesses: formatNumber(dashboardData?.data?.count_new_businesses || 0),
        activeUsers: formatNumber(dashboardData?.data?.count_users_active || 0)
      });
      // setValueChartDoug(
      // [
      //   {
      //   name : "Medical",
      //   value : dashboardData?.data?.count_total_medical_pre_register || 0,
      //   color : '#ff0000'
      //   },{
      //     name : "Student",
      //     value : dashboardData?.data?.count_total_edu_student_pre_register || 0,
      //     color : '#ffb900' 
      //   },{
      //     name : "Teacher",
      //     value : dashboardData?.data?.count_total_edu_teacher_pre_register || 0,
      //     color : '#fff300' 
      //   },{
      //     name : "Officer",
      //     value : dashboardData?.data?.count_total_edu_officer_pre_register || 0,
      //     color : '#7cff00' 
      //   },{
      //     name : "Attendance",
      //     value : dashboardData?.data?.count_total_time_attendance_pre_register || 0,
      //     color : '#00ffd8' 
      //   },{
      //     name : "Care Giver",
      //     value : dashboardData?.data?.count_total_care_giver_pre_register || 0,
      //     color : '#0059ff' 
      //   }
      // ])
      const chartData = [
        {
          name: "Medical",
          value: dashboardData?.data?.count_total_medical_pre_register,
          color: '#ff0000'
        },
        {
          name: "Student",
          value: dashboardData?.data?.count_total_edu_student_pre_register,
          color: '#ffb900'
        },
        {
          name: "Teacher",
          value: dashboardData?.data?.count_total_edu_teacher_pre_register,
          color: '#fff300'
        },
        {
          name: "Officer",
          value: dashboardData?.data?.count_total_edu_officer_pre_register,
          color: '#7cff00'
        },
        {
          name: "Attendance",
          value: dashboardData?.data?.count_total_time_attendance_pre_register,
          color: '#00ffd8'
        },
        {
          name: "Care Giver",
          value: dashboardData?.data?.count_total_care_giver_pre_register,
          color: '#0059ff'
        }
      ];
    
      setValueChartDoug(chartData.map(item => ({
        ...item,
        value: item.value || 0
      })));
    }
  },[dashboardData])

  React.useEffect(()=>{ 
    console.log(valueChartDoug)
  },[valueChartDoug])

  return (
    <>
      <div className="max-w-full" >
        <h1 className="text-2xl">Dashboard</h1>

        <div className="flex items-center gap-6  justify-end">
          <div onClick={() => handleDayClick('7')}
            className={`cursor-pointer flex items-center justify-center p-3 w-[100px] h-[30px] rounded-[10px] ${activeDay === '7' ? 'bg-[#5A6ACF] text-zinc-100' : 'bg-zinc-100 text-[#5A6ACF] hover:bg-[#5A6ACF] hover:text-zinc-100'
              }`}>
            <p className="font-bold"> 7 Day </p>
          </div>
          <div onClick={() => handleDayClick('30')}
            className={`cursor-pointer flex items-center justify-center p-3 w-[100px] h-[30px] rounded-[10px] ${activeDay === '30' ? 'bg-[#5A6ACF] text-zinc-100' : 'bg-zinc-100 text-[#5A6ACF] hover:bg-[#5A6ACF] hover:text-zinc-100'
              }`}>
            <p className="font-bold"> 30 Day </p>
          </div>
          <div onClick={() => handleDayClick('90')}
            className={`cursor-pointer flex items-center justify-center p-3 w-[100px] h-[30px] rounded-[10px] ${activeDay === '90' ? 'bg-[#5A6ACF] text-zinc-100' : 'bg-zinc-100 text-[#5A6ACF] hover:bg-[#5A6ACF] hover:text-zinc-100'
              }`}>
            <p className="font-bold"> 90 Day </p>
          </div>
          <div onClick={() => handleDayClick('all')}
            className={`cursor-pointer flex items-center justify-center p-3 w-[80px] h-[30px] rounded-[10px] ${activeDay === 'all' ? 'bg-[#5A6ACF] text-zinc-100' : 'bg-zinc-100 text-[#5A6ACF] hover:bg-[#5A6ACF] hover:text-zinc-100'
              }`}>
            <p className="font-bold"> All </p>
          </div>
        </div>

        <div className="flex items-center gap-6 justify-center mb-5 mt-5">
          <div className="w-[200px] h-[200px] rounded-[10px] text-[#cf5a5a] bg-[#efc7c7]">
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="text-4xl font-bold mb-3"> <p>{formattedMetrics.totalUsers} </p></div>
              <div className="text-lg font-bold mb-2">Total Account</div>
            </div>
          </div>
          <div className="w-[200px] h-[200px] rounded-[10px] text-[#cf8f5a] bg-[#efdac7]">
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="text-4xl font-bold mb-3"><p>{formattedMetrics.totalBusinesses}</p></div>
              <div className="text-lg font-bold mb-2">Total Business</div>
            </div>
          </div>
          <div className="w-[200px] h-[200px] rounded-[10px] text-[#cdcf5a] bg-[#efecc7]">
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="text-4xl font-bold mb-3"><p>{formattedMetrics.totalPreRegister}</p></div>
              <div className="text-lg font-bold mb-2">Total Pre register</div>
            </div>
          </div>
          <div className="w-[200px] h-[200px] rounded-[10px] text-[#8dcf5a] bg-[#dcefc7]">
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="text-4xl font-bold mb-3"><p>{formattedMetrics.newUsers}</p></div>
              <div className="text-lg font-bold mb-2">New Account</div>
            </div>
          </div>
          <div className="w-[200px] h-[200px] rounded-[10px] text-[#5acfb6] bg-[#c7efea]">
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="text-4xl font-bold mb-3">{formattedMetrics.newBusinesses}</div>
              <div className="text-lg font-bold mb-2">New Business</div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[200px] h-[200px] rounded-[10px] text-[#5aa0cf] bg-[#c7e0ef]">
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="text-4xl font-bold mb-3">{formattedMetrics.activeUsers}</div>
              <div className="text-lg font-bold mb-2">Active User </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center mb-5">
          <div className="w-[70%] p-4 bg-white rounded-[10px]">
            <div className="flex items-center ">
              <div className="w-[100%] flex items-center justify-between">
                <p className="text-xl">กราฟแสดงข้อมูลผู้ใช้งานใหม่</p>
                <div className="flex items-center justify-center rounded-[10px]">
                  <Button variant="outlined" startIcon={<AutoGraphIcon />} className=" bg-zinc-100 text-[#5A6ACF] ">
                    View Report
                  </Button>
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
                  </span>
                  2025 Year
                </p>
              </div>
              <div>
                <p className="flex items-center ml-3">
                  <span style={{ color: "#5A6ACF", marginRight: "5px" }}>
                    <FaCircle />
                  </span>
                  2024 Year
                </p>
              </div>
            </div>
          </div>
          <div className="w-[30%] p-2  bg-white rounded-[10px]">
            <div className="flex items-center ">
              <div className="w-[100%] flex items-center justify-between">
                <p className="text-xl">ประเภท Pre-register</p>
                <div className="flex items-center justify-center rounded-[10px]">
                  <Button variant="outlined" startIcon={<AutoGraphIcon />} className=" bg-zinc-100 text-[#5A6ACF] ">
                    View Report
                  </Button>
                </div>
              </div>
            </div>
            {/* <p className="mt-5 text-zinc-500"> From 1-6 Dec, 2020 </p> */}
            <div className="mt-15 mb-5">
              <CardBarDoughnut value={valueChartDoug} />
            </div> 
            <div className="grid grid-cols-3 gap-4 pr-5 mt-5 ">
              {[...valueChartDoug]
                .sort((a, b) => b.value - a.value)
                .map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="flex items-center">
                    <span style={{ color: item.color, marginRight: "5px" }}>
                      <FaCircle />
                    </span>
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600 font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-between">
          <div className="w-full h-[450px] p-5 bg-white rounded-[10px]">
            <div>
              <p>Your Rating</p>
              <span className="mt-7 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur
              </span>
            </div>
          </div>
          <div className="w-full h-[450px] p-5 bg-white rounded-[10px]">
            <div>
              <p>5 อันดับ Service ที่ได้รับความนิยม</p>
              <span className="mt-7 text-zinc-500">
                Adipiscing elit, sed do eiusmod tempor
              </span>
              <div>
                <div className="flex gap-2 mt-5 mb-5 items-center justify-between">
                  <div className="w-[10%]">
                    <FaRegUser className="mr-3 text-2xl font-bold"/>
                  </div>
                  <div className="w-[60%] flex flex-stat">
                    <p className="items-start">Service OneID</p>
                  </div>
                  <div className="w-[30%] flex justify-end">
                    <p className="">190 องค์กร</p>
                  </div>
                </div>
                <div className="border-1 border-zinc-300" />
                <div className="flex gap-2 mt-5 mb-5 items-center justify-between">
                  <div className="w-[10%]">
                    <RiAdminLine className="mr-3 text-2xl font-bold" />
                  </div>
                  <div className="w-[60%] flex flex-stat">
                    <p className="items-start">Service OneID RA</p>
                  </div>
                  <div className="w-[30%] flex justify-end">
                    <p className="">120 องค์กร</p>
                  </div>
                </div>
                <div className="border-1 border-zinc-300" />
                <div className="flex gap-2 mt-5 mb-5 items-center justify-between">
                  <div className="w-[10%]">
                    <Image
                      src={"/assets/66306s.jpg"}
                      className="mr-3 rounded-full ring-2 ring-gray-200"
                      alt={"me"}
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="w-[60%] flex flex-stat">
                    <p className="items-start">Fresh Salad Bowl</p>
                  </div>
                  <div className="w-[30%] flex justify-end">
                    <p className="">IDR 45.000</p>
                  </div>
                </div>
                <div className="border-1 border-zinc-300" />
                <div className="flex gap-2 mt-5 mb-5 items-center justify-between">
                  <div className="w-[10%]">
                    <Image
                      src={"/assets/66306s.jpg"}
                      className="mr-3 rounded-full ring-2 ring-gray-200"
                      alt={"me"}
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="w-[60%] flex flex-stat">
                    <p className="items-start">Fresh Salad Bowl</p>
                  </div>
                  <div className="w-[30%] flex justify-end">
                    <p className="">IDR 45.000</p>
                  </div>
                </div>
                <div className="border-1 border-zinc-300" />
                <div className="flex gap-2 mt-5 mb-5 items-center justify-between">
                  <div className="w-[10%]">
                    <Image
                      src={"/assets/66306s.jpg"}
                      className="mr-3 rounded-full ring-2 ring-gray-200"
                      alt={"me"}
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="w-[60%] flex flex-stat">
                    <p className="items-start">Fresh Salad Bowl</p>
                  </div>
                  <div className="w-[30%] flex justify-end">
                    <p className="">IDR 45.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[450px] p-5 bg-white rounded-[10px]">
            <div className="flex items-center">
              <div className="w-[100%] pb-2 flex items-center justify-between">
                <p>Revenue</p>
                <div className="flex items-center justify-center rounded-[10px]">
                  <Button variant="outlined" startIcon={<AutoGraphIcon />} className=" bg-zinc-100 text-[#5A6ACF] ">
                    View Report
                  </Button>
                </div>
              </div>
            </div>
            <span className="mt-7 text-black">
              <p className="font-bold mt-1 font-4xl"> 2.568</p>
            </span>
            <div className="mt-3">
              <p className="text-zinc-500">
                <span className="flex items-center gap-1">
                  <AiOutlineArrowDown className="text-red-500" />
                  <span className="text-red-500">2.1%</span> vs last week
                </span>
              </p>
            </div>
            <p className="mt-3 text-gray-500">Sales from 1-6 Dec, 2020</p>
            <div className="mt-1 w-full h-auto ">
              <CardLineChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
