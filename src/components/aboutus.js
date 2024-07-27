'use client';
import { Typography } from '@mui/material';
import BreadCrumb from './../components/breadcrumb'
import Image from 'next/image';


const AboutPage = () => {
  return (
    <>
      <BreadCrumb
        homeElement="Home"
        separator={<svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>}
        capitalizeLinks={true}
      />

      <div className="text-white p-6 rounded-lg shadow-md mt-10 mx-auto max-w-4xl">
        <Typography variant="h3" component="h1" className="text-center mb-6 text-white">
          About Us
        </Typography>

        <h2 className="text-xl text-gray-300 mb-4">Introduction</h2>
        <p className="text-gray-400 mb-6">
          Nexus Encryption is a cutting-edge web app offering modular conversion, encoding, and encryption services online. Our mission is to provide secure and efficient encryption solutions directly in your browser, ensuring your data remains private and protected without any server interaction. This is an open-source project, proudly licensed under MIT.
        </p>

        <h2 className="text-xl text-gray-300 mb-4">Background</h2>
        <p className="text-gray-400 mb-6">
          Nexus Encryption was created by Abdul Mohiz, a passionate front-end developer and a student of BS CS. Abdul codes in his free time and has a keen interest in cryptography and secure communication. The project was inspired by the need to make robust encryption accessible to everyone, ensuring data security without relying on external servers.
        </p>

        <h2 className="text-xl text-gray-300 mb-4">Our Team</h2>
        <div className="flex flex-col items-center mb-6">
          <Image src={'/avatar.png'} unoptimized alt="Abdul Mohiz" height={250} width={250} className=" rounded-full border mb-2" />
          <h3 className="text-gray-300 text-lg">Abdul Mohiz</h3>
          <p className="text-gray-400">Founder & Lead Developer</p>
        </div>

        <h2 className="text-xl text-gray-300 mb-4">What We Do</h2>
        <p className="text-gray-400 mb-6">
          At Nexus Encryption, we provide a suite of online tools for converting, encoding, and encrypting your data. Our services are built using the latest technologies to ensure security and efficiency. Whether you're a developer, a security enthusiast, or simply someone who values privacy, our tools are designed to meet your needs.
        </p>

        <h2 className="text-xl text-gray-300 mb-4">Achievements</h2>
        <p className="text-gray-400 mb-6">
          Since our launch, we've achieved several milestones, including reaching thousands of users worldwide, receiving positive feedback from our community, and continuously improving our tools. Our open-source project has also attracted contributions from developers across the globe.
        </p>

        <h2 className="text-xl text-gray-300 mb-4">Vision for the Future</h2>
        <p className="text-gray-400 mb-6">
          Looking ahead, we aim to expand our suite of tools, incorporate new encryption methods, and enhance user experience. Our goal is to remain at the forefront of encryption technology and continue providing top-notch security solutions.
        </p>

        <h2 className="text-xl text-gray-300 mb-4">Get Involved</h2>
        <p className="text-gray-400 mb-6">
          We invite you to get involved with Nexus Encryption. Whether you want to contribute to our open-source project, provide feedback, or simply stay updated, we'd love to hear from you. Follow us on social media or reach out via our contact page.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
