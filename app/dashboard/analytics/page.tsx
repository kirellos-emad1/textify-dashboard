import LineChartComponent from '@/components/LineChart';
import BarChartComponent from '@/components/BarChart ';
import React from 'react';

const engagementData = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 52 },
  { month: 'Mar', value: 68 },
  { month: 'Apr', value: 74 },
  { month: 'May', value: 82 },
  { month: 'Jun', value: 91 },
];
const retentionData = [
  { month: 'Week 1', value: 85 },
  { month: 'Week 2', value: 78 },
  { month: 'Week 3', value: 72 },
  { month: 'Week 4', value: 68 },
  { month: 'Week 5', value: 65 },
  { month: 'Week 6', value: 63 },
];
const AnalyticsPage = () => {
  return (
    <section className="md:px-14 lg:px-14 xl:px-14 2xl:px-14 px-0 lg:block md:block xl:block 2xl:block flex w-full flex-col items-center">
      <h1 className="text-[32px] leading-10 font-bold md:text-left lg:text-left xl:text-left 2xl:text-left text-center">
        Analytics Overview
      </h1>

      <div className=" mt-[50px] rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[48px]">
          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl leading-[30px] font-semibold text-[#0D141C]">$15,420</h3>
            <p className="text-sm text-[#4F7396]">Total Revenue</p>
          </div>

          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl leading-[30px] font-semibold text-[#0D141C]">2,580</h3>
            <p className="text-sm text-[#4F7396]">Monthly Active</p>
          </div>

          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl leading-[30px] font-semibold text-[#0D141C]">3.8%</h3>
            <p className="text-sm text-[#4F7396]">Conversion Rate</p>
          </div>

          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl leading-[30px] font-semibold text-[#0D141C]">4.2m</h3>
            <p className="text-sm text-[#4F7396]">Avg. Session</p>
          </div>

          <div className="flex flex-col max-md:w-[209px] max-w-[209px] h-[106px] items-center justify-around border rounded-lg p-2">
            <h3 className="text-2xl leading-[30px] font-semibold text-[#0D141C]">12.4k</h3>
            <p className="text-sm text-[#4F7396]">Total Events</p>
          </div>
        </div>
      </div>

      <div>
        <div className="py-10">
          <h2 className="text-[#0D141C] text-[18px] sm:text-[22px] md:text-[26px] leading-7 font-bold">
            Performance Metrics
          </h2>
        </div>

        <div className="min-w-[300px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="w-[100%] space-y-2">
            <p className="font-medium text-[16px] sm:text-base text-[#0D141C]">
              User Engagement
            </p>
            <p className="font-bold text-[24px] sm:text-[32px] leading-10 text-[#0D141C]">
              +38%
            </p>
            <p className="text-[14px] sm:text-base text-[#4F7396]">
              30-Day Trend <span className="text-[#088738] font-medium">+15.2%</span>
            </p>
            <div className="h-64">
              <LineChartComponent data={engagementData} />
            </div>
          </div>

          <div className="w-[100%] space-y-2">
              <p className="font-medium text-[16px] sm:text-base text-[#0D141C]">
                User Retention
              </p>
              <p className="font-bold text-[24px] sm:text-[32px] leading-10 text-[#0D141C]">
                72.5%
              </p>
              <p className="text-[14px] sm:text-base text-[#4F7396]">
                90-Day Retention <span className="text-[#088738] font-medium">+8.3%</span>
              </p>
              <div className="h-64">
                <BarChartComponent data={retentionData} />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPage;