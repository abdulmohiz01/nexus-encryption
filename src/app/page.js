import Link from "next/link";
import Button from '@mui/material/Button';

import { PrismaClient } from '@prisma/client';
 
const db = new PrismaClient();

export default async function Home() {
  // const newUser = await db.user.create({
  //   data: {
  //     name: 'Mohiz',
  //     email: 'mohiz@123.com',
  //     image: 'mohiz'
  //   },
  // });
  const users = await db.user.findUnique({
    where: {
      id: 2,
    },
  })
  console.log(users);


  return (
    <div className="flex flex-col justify-center items-center h-screen p-6  text-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nexus Encryption</h1>
        <p className="text-xl mb-6 text-gray-400">Your go-to solution for secure and efficient encryption methods. Explore our ciphers below!</p>

      </div>

      <div className="flex flex-col items-center gap-4">
        <Link href="/ciphers" >
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              backgroundColor: 'gray',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'lightgray',
                color: 'black',
              },
            }}
          >
            Explore Ciphers
          </Button>
        </Link>
      </div>
    </div>
  );
}
