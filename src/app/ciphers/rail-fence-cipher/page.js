// pages/rail-fence-cipher.js

import BreadCrumb from '../../../components/breadcrumb';
import RailFence from "./../(railfence)/railfence"


export const metadata = {
    title: "Rail Fence Cipher Decoder",
    description: "Explore the Rail Fence Cipher decoder, a transposition cipher where plaintext is written in a zigzag pattern across multiple rails, then read off row by row to create the ciphertext.",
    author: "Nexus Encryption",
    robots: "index, follow",
    openGraph: {
        title: "Rail Fence Cipher Decoder",
        description: "Explore the Rail Fence Cipher decoder, a transposition cipher where plaintext is written in a zigzag pattern across multiple rails, then read off row by row to create the ciphertext.",
        type: "website",
        url: "https://nexusencryption.com/",
        image: "https://nexusencryption.com/_next/image?url=%2Fnexus-1.png&w=640&q=75",
        site_name: "Nexus Encryption",
    },
    canonical: "https://nexusencryption.com/ciphers/rail-fence-cipher",
    language: "en-US",
    category: 'ciphers',
};


const RailFenceCipher = () => {


    return (
        <>
            <BreadCrumb homeElement="Home" separator={<svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>} capitalizeLinks={true} />
            <RailFence />
        </>
    );
};

export default RailFenceCipher;
