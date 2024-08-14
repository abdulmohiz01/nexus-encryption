'use client'
import Link from 'next/link';
import { Container, Typography, Card, CardContent, CardActionArea } from '@mui/material';


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
        name: 'RSA Algorithm',
        description: 'Discover RSA, a robust asymmetric encryption algorithm widely used for secure data transmission. RSA relies on a pair of keys – public and private – to ensure data confidentiality and integrity.',
        link: '/ciphers/rsa-algorithm',
    },
    {
        name: 'Hash Functions',
        description: 'Hash functions are algorithms that transform an input of arbitrary size into a fixed-size string of characters, which is typically a digest that represents the data uniquely. Common hash functions include MD5, SHA-1, SHA-256, SHA-512, and RIPEMD-160, each providing varying levels of security and efficiency for data integrity and cryptographic applications.',
        link: '/ciphers/hash-functions',
    },
    {
        name: 'Data Encryption Standard',
        description: 'A substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.',
        link: '/ciphers/data-encryption-standard',
    },
    {
        name: 'Advanced Encryption Standard',
        description: 'A substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.',
        link: '/ciphers/advanced-encryption-standard',
    },

];


const CipherPage = () => {
    
    return (
        <div>
            <Container maxWidth="md" className="text-white p-4 rounded-lg shadow-lg mt-10">
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
            <Container maxWidth="md" className="text-white p-4 mb-8 rounded-lg shadow-lg mt-10">
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
    )
}

export default CipherPage