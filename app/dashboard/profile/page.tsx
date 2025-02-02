'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Profile = () => {
  const [avatar, setAvatar] = useState('https://avatar.iran.liara.run/public/boy?username=kirellos');
  const [name, setName] = useState('Kirellos Wasfy');
  const [email, setEmail] = useState('kirellos@example.com');

  const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    console.log('Profile updated:', { avatar, name, email });
  };

  return (
    <section className="md:px-14 lg:px-14 xl:px-14 2xl:px-14 px-4 lg:block md:block xl:block 2xl:block flex w-full flex-col items-center">
      <h1 className="text-[32px] leading-10 font-bold md:text-left lg:text-left xl:text-left 2xl:text-left text-center text-[#0D141C] mb-8">
        Profile
      </h1>

      <div className="bg-white w-full  flex flex-col  justify-center rounded-lg  p-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="relative w-32 h-32">
            <Image
              src={avatar}
              alt="Avatar"
              width={250}
              height={250}
              className="rounded-full w-full h-full object-cover border-4 border-[#E5E7EB]"
            />
            <label
              htmlFor="avatarUpload"
              className="absolute bottom-0 right-0 p-2 bg-[#4F7396]/70 text-white rounded-full cursor-pointer hover:bg-[#4F7396]  transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </label>
            <input
              type="file"
              id="avatarUpload"
              accept="image/*"
              className="hidden"
              onChange={handleChangeAvatar}
            />
          </div>

          <div className="w-full md:w-[70%] lg:w-[50%]  space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#4F7396] mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 outline-none text-[#0D141C] border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#4F7396] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#4F7396] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 outline-none text-[#0D141C] border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#4F7396] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <button
            onClick={handleSaveChanges}
            className=" w-full md:w-[70%] lg:w-[50%] py-3 px-6 bg-[#4F7396]/90 text-white rounded-lg font-medium hover:bg-[#4F7396] transition-colors duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;