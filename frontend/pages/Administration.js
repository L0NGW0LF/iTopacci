import React from 'react';
import NavBar from '../components/navbar';
import { Button, Link } from "@nextui-org/react";
import { useSession } from 'next-auth/react';
import getRole from './api/retrieveRole';
import { useState } from 'react';


const Administration = () => {

    const { data: session } = useSession();
  const [userRole, setUserRole] = useState(null);



getRole().then((resolvedUserRole) => {
  setUserRole(resolvedUserRole); // This will also log "3"
})
    return (
        <div>
            <NavBar />
            {session && userRole === 3 ? (<section class="text-gray-600 body-font">
                <div class="container px-8 py-24 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div class="sm:w-1/2 mb-10 px-8">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content"  class="object-cover object-center h-full w-full" src="logo_strapi.png" />
                            </div>
                            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Strapi Content Manager</h2>
                            <Link href={`http://localhost:1337/admin`}>
                                <Button color='secondary'>Go</Button>
                            </Link>
                        </div>
                        <div class="sm:w-1/2 mb-10 px-8">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src="feedback.png" />
                            </div>
                            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Feedback Viewer</h2>
                            <Link href={`GestioneFeedback`}>
                                <Button color='primary'>Go</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>) : (
          <p className="text-center text-red-500 font-bold">
            You need to be an Administrator to access this page.
          </p>
        ) }
        </div>
    );
};
export default Administration;