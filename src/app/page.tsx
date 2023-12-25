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
            <h2 className='text-base font-bold'>Overview</h2>
            <p>Code View is dedicated to providing comprehensive solutions that redefine excellence in the [industry/field]. Our commitment to quality and innovation drives us to create products and services that stand out in the market. Founded on the principles of integrity and customer satisfaction, we take pride in our journey towards becoming a leader in [industry/field]. Our team consists of passionate individuals with diverse skills and backgrounds. Together, we foster an environment of collaboration and continuous learning. At Code View, we value our people and believe that their creativity and dedication are the driving forces behind our success. Explore our 'About' page to learn more about our mission, vision, and the values that guide us.</p>
          </div>
        );
      case 'post':
        return (
          <div>
            <h2 className='text-base font-bold'>Latest Post</h2>
            <p>Welcome to the 'Latest Post' section of Code View. Here, we share insights, updates, and industry trends that matter to you. Our blog is a hub of information where we explore topics ranging from [specific topics] to [industry-related news]. Stay tuned for engaging content that aims to inform, inspire, and keep you connected with the latest developments in [industry/field]. Whether you're a professional in [industry/field] or simply passionate about staying informed, our blog is designed to cater to your interests. Join us on this knowledge-sharing journey as we delve into the latest advancements, best practices, and thought-provoking discussions in [industry/field].</p>
          </div>
        );
      case 'Jobs':
        return (
          <div>
            <h2 className='text-base font-bold'>Latest Job Opportunities</h2>
            <p>Code View is always on the lookout for talented individuals to join our dynamic team. As a company at the forefront of [industry/field] innovation, we offer exciting career opportunities for those who are passionate about making a difference. Explore our 'Jobs' page to discover the latest openings and take the next step in your career with Code View. We believe in creating a work environment that fosters creativity, collaboration, and continuous learning. At Code View, you'll have the opportunity to work on cutting-edge projects, collaborate with industry experts, and contribute to the success of a forward-thinking company. Browse through our job listings and find the perfect match for your skills and aspirations.</p>
          </div>
        );
      case 'People':
        return (
          <div>
            <h2 className='text-base font-bold'>Meet Our Team</h2>
            <p>At Code View, our team is the heart of our success. Meet the dedicated individuals who bring passion, expertise, and creativity to everything we do. Our diverse team consists of professionals with backgrounds in [various disciplines], united by a common goal of driving innovation and excellence in [industry/field]. Each member of our team plays a crucial role in shaping the success of Code View. From project managers to developers, designers to strategists, we celebrate the unique contributions that make us a strong and collaborative unit. Explore our 'People' page to get to know the faces behind Code View and discover the talent that drives our company forward.</p>
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