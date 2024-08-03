import HashPage from "../(hash)/hash";
import BreadCrumb from "../../../components/breadcrumb";


export const metadata = {
    title: "Hash Functions: MD5, SHA-1, SHA-256, SHA-512 & RIPEMD-160",
    description: "Explore various cryptographic hash functions including MD5, SHA-1, SHA-256, SHA-512, and RIPEMD-160. Generate secure hashes for your data with our user-friendly tool.",
    author: "Nexus Encryption",
    robots: "index, follow",
    openGraph: {
        title: "Hash Functions: MD5, SHA-1, SHA-256, SHA-512 & RIPEMD-160",
        description: "Explore various cryptographic hash functions including MD5, SHA-1, SHA-256, SHA-512, and RIPEMD-160. Generate secure hashes for your data with our user-friendly tool.",
        type: "website",
        url: "https://nexusencryption.com/",
        image: "https://nexusencryption.com/_next/image?url=%2Fnexus-1.png&w=640&q=75",
        site_name: "Nexus Encryption",
    },
    canonical: "https://nexusencryption.com/ciphers/hash-functions",
    language: "en-US",
    category: 'ciphers',
};


const HashFunctions = () => {
    return (
        <div>
            <BreadCrumb />
            <HashPage />
        </div>
    )
}

export default HashFunctions