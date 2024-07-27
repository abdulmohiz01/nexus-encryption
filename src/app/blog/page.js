import React from 'react'

export const metadata = {
  title: "Blogs",
  description: "Explore our blogs related to tech and information security for the latest insights and updates.",
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "Blogs - Nexus Encryption",
    description: "Explore our blogs related to tech and information security for the latest insights and updates. Stay informed with our in-depth articles and expert insights.",
    type: "article",
    url: "https://nexusencryption.com/blog",
    site_name: "Nexus Encryption",
  },
  canonical: "https://nexusencryption.com/blog",
  language: "en-US",
  category: "tech, information security",
};



const Blogs = () => {
  return (
    <div className='h-[600px]'>Blogs</div>
  )
}

export default Blogs