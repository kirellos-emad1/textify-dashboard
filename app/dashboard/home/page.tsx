import BarChartComponent from '@/components/BarChart ';
import React from 'react';
import LineChartComponent from '@/components/LineChart';
const revenueData = [
  { month: 'Jan', value: 500000 },
  { month: 'Feb', value: 500000 },
  { month: 'Mar', value: 500000 },
  { month: 'Apr', value: 500000 },
  { month: 'May', value: 500000 },
  { month: 'Jun', value: 500000 }
];
const usersData = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 2780 },
  { month: 'May', value: 1890 },
  { month: 'Jun', value: 2390 },
];

const Home = () => {
  return (
    <section className="md:px-14 lg:px-14 xl:px-14 2xl:px-14 px-0 lg:block md:block xl:block 2xl:block flex w-full flex-col items-center">
      <h1 className="text-[32px]  leading-10 font-bold md:text-left lg:text-left xl:text-left 2xl:text-left text-center">
        Good evening, Kirellos
      </h1>

      <div className="mt-[50px] rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[48px]">
          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl  leading-[30px] font-semibold text-[#0D141C]">$3,240</h3>
            <p className="text-sm text-[#4F7396]">This month</p>
          </div>

          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl  leading-[30px] font-semibold text-[#0D141C]">1,230</h3>
            <p className="text-sm text-[#4F7396]">Active users</p>
          </div>

          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl  leading-[30px] font-semibold text-[#0D141C]">5,432</h3>
            <p className="text-sm text-[#4F7396]">New users</p>
          </div>

          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl  leading-[30px] font-semibold text-[#0D141C]">1,234</h3>
            <p className="text-sm text-[#4F7396]">Paying users</p>
          </div>

          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl  leading-[30px] font-semibold text-[#0D141C]">1,234</h3>
            <p className="text-sm text-[#4F7396]">Total users</p>
          </div>
        </div>
      </div>

      <div>
        <div className="py-10">
          <h2 className="text-[#0D141C] text-[18px] sm:text-[22px] md:text-[26px] leading-7 font-bold">
            Key Metrics
          </h2>
        </div>

        <div className="min-w-[300px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="w-[100%] space-y-2">
            <p className="font-medium text-[16px] sm:text-base text-[#0D141C]">User Growth</p>
            <p className="font-bold text-[24px] sm:text-[32px] leading-10 text-[#0D141C]">+25%</p>
            <p className="text-[14px] sm:text-base text-[#4F7396]">
              Last 6 Months <span className="text-[#088738] font-medium">+25%</span>
            </p>
            <LineChartComponent data={usersData} />
          </div>
          <div className="w-[100%] space-y-2">
            <p className="font-medium text-[16px] sm:text-base text-[#0D141C]">Revenue Trend</p>
            <p className="font-bold text-[24px] sm:text-[32px] leading-10 text-[#0D141C]">$500K</p>
            <p className="text-[14px] sm:text-base text-[#4F7396]">
              Last 6 Months <span className="text-[#088738] font-medium">$500k</span>
            </p>
            <BarChartComponent data={revenueData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
