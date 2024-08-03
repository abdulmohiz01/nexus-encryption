import AboutPage from "../../components/aboutus"
import BreadCrumb from "../../components/breadcrumb";


export const metadata = {
  title: "About Us",
  description: "Learn more about Nexus Encryption, a cutting-edge web app offering modular conversion, encoding, and encryption services. Meet our founder, Abdul Mohiz, and discover our mission to provide secure and efficient encryption solutions directly in your browser.",
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "About Us - Nexus Encryption",
    description: "Learn more about Nexus Encryption, a cutting-edge web app offering modular conversion, encoding, and encryption services. Meet our founder, Abdul Mohiz, and discover our mission to provide secure and efficient encryption solutions directly in your browser.",
    type: "website",
    url: "https://nexusencryption.com/aboutUs",
    site_name: "Nexus Encryption",
  },
  canonical: "https://nexusencryption.com/aboutUs",
  language: "en-US",
  category: "about",
};


const About = () => {
  return (
    <>
      <BreadCrumb />
      <AboutPage />
    </>
  );
};

export default About;
