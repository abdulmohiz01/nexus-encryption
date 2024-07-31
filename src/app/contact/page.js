import ContactPage from "./../../components/contact"
export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the Nexus Encryption team. Whether you have questions, need support, or want to provide feedback, we're here to help. Reach out to us via our contact form or social media channels.",
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us - Nexus Encryption",
    description: "Get in touch with the Nexus Encryption team. Whether you have questions, need support, or want to provide feedback, we're here to help. Reach out to us via our contact form or social media channels.",
    type: "website",
    url: "https://nexusencryption.com/contact",
    site_name: "Nexus Encryption",
  },
  canonical: "https://nexusencryption.com/contact",
  language: "en-US",
  category: "contact",
};


const Contact = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default Contact;
