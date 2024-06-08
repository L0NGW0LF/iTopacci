import { useSession, signIn } from "next-auth/react"
import NavBar from "@/components/navbar"
import Link from 'next/link';
import { Button } from "@nextui-org/react";
import style from "../styles/Home.module.css";
import { useRouter } from 'next/router';




export default function Component() {

  const { data: session } = useSession()
  const router = useRouter();

  if (session) {
    router.push("/");
  }
  return (
    <section>
      <NavBar />
      <div class="container p-20  mx-auto flex flex-wrap items-center justify-center">
        <div class="bg-gray-100 rounded-lg p-8 flex flex-col ">
          <div className={style.topcont}>
            <h1>Sign In</h1>
          </div>
          <div className={style.uploadform}>
            <Button color="primary" onClick={() => signIn()}>
              Sign In
            </Button>
            <p class="text-xs text-gray-500 mt-3">If you're not signed up click
              <Link className='text-indigo-500' href='SignUp'> Here.</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}