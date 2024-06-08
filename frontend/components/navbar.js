import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import { User, Button, Tooltip } from "@nextui-org/react";





const NavBar = () => {

  const { data: session } = useSession();

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={`/`}>
            <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src='logo.png' width='20%' height='20%' />
              <span className="ml-3 text-xl">iTopacci</span>
            </p>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={`Patterns`}>
              <p className="mr-5 hover:text-gray-900">Patterns</p>
            </Link>

            <Link href={`credits`}>
              <p className="mr-5 hover:text-gray-900"> Credits </p>
            </Link>

          </nav >
          {session && (
            <div className=" mx-auto flex flex-wrap p-5 items-center">

              <div className=" mx-auto flex flex-wrap p-5 items-center">
                <p className="mr-5 hover:text-gray-900 "> <b> Welcome </b> </p>
                <Tooltip placement="bottom" color="primary" content={`Email: ${session.user.email}\n -  \nUsername: ${session.user.username}`}>

                  <User
                    name={session.user.name}
                    description={session.user.surname}
                    avatarProps={{ src: "User.png" }}
                  />
                </Tooltip>
              </div>
              <Button color="default" variant="ghost"
                onClick={signOut}
              >
                Logout
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>

            </div>
          )}{
            !session && (<Link href="Login">
              <div className=" mx-auto flex flex-wrap p-5 items-center">
                <p className="mr-5 hover:text-gray-900">- Not Signed In -</p>
                <Button color="default" variant="ghost">Login
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </Link>

            )
          }
        </div >
      </header >
    </div >
  )
}


export default NavBar