"use client"
import Image from 'next/image';
import Banner1 from '../../public/banner1.jpg';
import { FaTelegramPlane } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div>
            <h2 className='text-base font-bold'>Welcome to the Home Page!</h2>
            <p>
              Code View is a leading company dedicated to providing innovative solutions in the field of [mention your company's domain or industry]. With a commitment to excellence and a passion for technology, we strive to deliver cutting-edge products and services. Explore our website to discover how Code View is transforming the landscape of [industry/field] and making a positive impact. Thank you for choosing Code View for all your [industry-specific] needs! At Code View, we believe in the power of collaboration and creativity. Our team of experts is driven by a shared vision to push boundaries and exceed expectations. Together, we are shaping the future of [industry/field] and creating a lasting impact. Innovation is at the core of everything we do. From groundbreaking projects to industry-leading solutions, Code View is at the forefront of [industry/field] advancements. Join us on this exciting journey of discovery and transformation.
            </p>
          </div>
        );
      case 'about':
        return (
          <div>
            <h2 className='text-base font-bold'>OverView</h2>
            <p>This is some demo content for the About tab.</p>
          </div>
        );
      case 'post':
        return (
          <div>
            <h2 className='text-base font-bold'>Latest Post</h2>
            <p>This is some demo content for the Post tab.</p>
          </div>
        );
      case 'Jobs':
        return (
          <div>
            <h2 className='text-base font-bold'>Latest Post</h2>
            <p>This is some demo content for the Post tab.</p>
          </div>
        );
      case 'People':
        return (
          <div>
            <h2 className='text-base font-bold'>Latest Post</h2>
            <p>This is some demo content for the Post tab.</p>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <>
      <div className='m-10'>
        <div>
          <div>
            <Image src={Banner1} className='w-full h-[13rem] object-cover rounded-t-lg' alt='Banner' />
          </div>
          <div className='bg-white'>
            <div className='mt-[-4rem] w-fit ml-8 relative'>
              <Image src={Banner1} className='w-[10rem] h-[10rem] object-cover rounded-full bg-white p-2' alt='Banner' />
            </div>
            <div className="flex justify-between mx-10 py-4">
              <div>
                <h2 className='font-bold text-2xl'>CodeView</h2>
                <p className='font-semibold'>We specialize in empowering small and
                  medium-sized businesses with cutting-edge cloud
                  infrastructure solutions.
                </p>
                <p className='font-bold text-gray-600'>
                  IT Services and IT Consulting • Hyderabad, Telangana
                  45 followers • 11-50 employees
                </p>
                <div className='flex gap-2 mt-4'>
                  <button className='bg-[#0A66C2] p-1 px-2 text-white font-bold rounded-2xl'>+ Follow</button>
                  <button
                    className='border-[#0A66C2] border p-1 px-2 text-blue-500 font-semibold rounded-2xl flex gap-1'><span>Message</span>
                    <FaTelegramPlane className='mt-[5px]' />
                  </button>
                  <button className='border-black border font-semibold rounded-2xl p-1 px-3 text-gray-600'>More</button>
                </div>
              </div>
              <div>
                <h2>name</h2>
                <h2>name</h2>
                <h2>name</h2>
              </div>
            </div>
          </div>

          <div className='border-t py-4 px-10 bg-white rounded-b-lg'>
            <ul className='flex gap-8 font-semibold text-gray-700'>
              <li onClick={() => handleTabClick('home')}
                className={`cursor-pointer ${activeTab === 'home' ? 'text-green-600 underline font-extrabold' : ''}`}
              >
                Home
              </li>
              <li onClick={() => handleTabClick('about')}
                className={`cursor-pointer ${activeTab === 'about' ? 'text-green-600 underline font-extrabold' : ''}`}
              >
                About
              </li>
              <li onClick={() => handleTabClick('post')}
                className={`cursor-pointer ${activeTab === 'post' ? 'text-green-600 underline font-extrabold' : ''}`}
              >
                Post
              </li>
            </ul>
          </div>

          <div className='bg-white mt-2 px-10 py-4 rounded-md'>
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}