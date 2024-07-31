import Link from 'next/link';
import BreadCrumb from './../../components/breadcrumb';
import { Container, Typography, Card, CardContent, CardActionArea } from '@mui/material';

export const metadata = {
  title: "Ciphers",
  description: "A versatile web app for modular conversion, encoding, and encryption. Perform all operations directly in your browser without server interaction, ensuring speed and privacy. This open-source project is licensed under the MIT License, offering transparency and freedom for community contributions.",
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "Ciphers - Nexus Encryption",
    description: "A versatile web app for modular conversion, encoding, and encryption. Perform all operations directly in your browser without server interaction, ensuring speed and privacy. This open-source project is licensed under the MIT License, offering transparency and freedom for community contributions.",
    type: "website",
    url: "https://nexusencryption.com/ciphers",
    site_name: "Nexus Encryption",
  },
  canonical: "https://nexusencryption.com/ciphers",
  language: "en-US",
  category: "ciphers",
};


const classicalCiphers = [
  {
    name: 'Caesar Cipher',
    description: 'A substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.',
    link: '/ciphers/caesar-cipher',
  },
  {
    name: 'Vigenère Cipher',
    description: 'A method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword.',
    link: '/ciphers/vigenere-cipher',
  },
  {
    name: 'Rail Fence Cipher',
    description: 'A transposition cipher that writes text in a zigzag pattern across multiple rows. The letters are then read off row by row to create the ciphertext.',
    link: '/ciphers/rail-fence-cipher'
  }
];
const modernCiphers = [
  {
    name: 'Caesar Cipher',
    description: 'A substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.',
    link: '/ciphers/caesar-cipher',
  },
  {
    name: 'Vigenère Cipher',
    description: 'A method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword.',
    link: '/ciphers/vigenere-cipher',
  },
  {
    name: 'Rail Fence Cipher',
    description: 'A transposition cipher that writes text in a zigzag pattern across multiple rows. The letters are then read off row by row to create the ciphertext.',
    link: '/ciphers/rail-fence-cipher'
  }
];

const Ciphers = () => {
  return (
    <div className="md:h-[550px]">
      <BreadCrumb
        homeElement="Home"
        separator={
          <svg
            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        }
        capitalizeLinks={true}
      />

      <Container maxWidth="md" className="text-white p-6 rounded-lg shadow-lg mt-10">
        <Typography variant="h3" component="h1" className="text-center mb-6 text-gray-200">Classical Ciphers</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classicalCiphers.map((cipher, index) => (
            <Card
              key={index}
              className="bg-gray-700 text-white rounded-lg shadow-lg"
            >
              <CardActionArea>
                <Link href={cipher.link} passHref>
                  <CardContent>
                    <Typography variant="h5" component="div" className="mb-2">
                      {cipher.name}
                    </Typography>
                    <Typography variant="body2" className='text-gray-200'>
                      {cipher.description}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </Container>
      <Container maxWidth="md" className="text-white p-6 rounded-lg shadow-lg mt-10">
        <Typography variant="h3" component="h1" className="text-center mb-6 text-gray-200">
          Modern Ciphers
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modernCiphers.map((cipher, index) => (
            <Card
              key={index}
              className="bg-gray-700 text-white rounded-lg shadow-lg"
            >
              <CardActionArea>
                <Link href={cipher.link} passHref>
                  <CardContent>
                    <Typography variant="h5" component="div" className="mb-2">
                      {cipher.name}
                    </Typography>
                    <Typography variant="body2" className='text-gray-200'>
                      {cipher.description}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Ciphers;
