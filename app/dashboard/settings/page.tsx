"use client";

const Settings = () => {
  return (
    <section className="px-7 md:px-14 flex w-full flex-col">
      <h1 className="text-[32px] leading-10 font-bold text-center md:text-left">
        Settings
      </h1>
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Notifications
      </h3>
      <div className="py-4">
        <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border bg-slate-50 p-5">
          <div className="flex flex-col gap-1 max-md:w-[420px]">
            <p className="text-base font-bold leading-tight">Email Notifications</p>
            <p className="text-base font-normal leading-normal text-[#4e7397]">
              Send a weekly summary of your workspace's activity to adam@acme.co
            </p>
          </div>
          <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full bg-[#e7edf3] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#4F7396]">
            <div className="h-full w-[27px] rounded-full bg-white transition-all"></div>
            <input type="checkbox" className="invisible absolute" />
          </label>
        </div>
      </div>
      <div className="flex max-w-[480px] max-md:w-[420px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-base font-medium leading-normal pb-2">Slack Notifications</p>
          <select className="w-full resize-none rounded-xl border bg-slate-50 h-14 p-[15px] text-base font-normal leading-normal focus:outline-none">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </label>
      </div>
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">Preferences</h3>
      <div className="py-4">
        <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border bg-slate-50 p-5">
          <div className="flex flex-col gap-1">
            <p className="text-base font-bold leading-tight">Use group context</p>
            <p className="text-base font-normal leading-normal text-[#4e7397]">
              If you're already passing the 'groupId' in your track calls, turn on this setting for more accurate company reports.
            </p>
          </div>
          <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full bg-[#e7edf3] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#4F7396]">
            <div className="h-full w-[27px] rounded-full bg-white"></div>
            <input type="checkbox" className="invisible absolute" />
          </label>
        </div>
      </div>
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">Danger Zone</h3>
      <div className="py-4">
        <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border bg-slate-50 p-5">
          <div className="flex flex-col gap-1">
            <p className="text-base font-bold leading-tight">Request workspace deletion</p>
            <p className="text-base font-normal leading-normal text-[#4e7397]">
              Request deletion from your workspace. This will delete all the data collected by June.
            </p>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-8 px-4 bg-[#4F7396]/90 hover:bg-[#4F7396] transition-colors duration-300 text-slate-50 text-sm font-medium">
            <span className="truncate">Request deletion</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
