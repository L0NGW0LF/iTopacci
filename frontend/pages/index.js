import NavBar from '../components/navbar';
import Link from 'next/link';
import { Image, Button, Card } from '@nextui-org/react';
import React from 'react';
const Home = () => {
  return (
    <>
      <NavBar />
      <Card className="container mx-auto flex px-5 py-3 flex-col">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-20 py-1 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 py-2">
                Welcome to the PKB,
                <br className="hidden lg:inline-block" />
                Navigate the digital world with confidence.
              </h1>
              <p className="mb-8 leading-relaxed">
                With our privacy knowledge base at your fingertips, you'll be equipped to make informed decisions about your privacy and take steps to safeguard your personal information. We're committed to providing you with the resources you need to navigate the digital world with confidence.
              </p>
              <div className="flex justify-center">

                <Link href={`Patterns`}>
                  <Button color="primary" size="lg" variant="shadow">
                    Pattern
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-500">
              <Image
                className="object-cover object-center rounded"
                alt="hero"
                src="home.png"
              />
            </div>
          </div>
          <div className="container mx-auto flex px-5 items-center justify-center flex-col">
            <img
              className="lg:w-3/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="forum.png"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 py-2">
                Welcome to the  PKB Forum</h1>
              <p class="mb-8 leading-relaxed">
                This forum is a place for people to discuss privacy, personal knowledge bases (PKBs), and the General Data Protection Regulation (GDPR). We believe that everyone has a right to privacy, and that it is important to have a place where people can discuss these issues openly and honestly.
              </p>
              <div class="flex justify-center">
                <Link href={`forum`}>
                  <Button color="primary" size="lg" variant="flat">
                    Forum
                  </Button>
                </Link>
              </div>
            </div>
          </div>



          <div class="container mx-auto flex px-12 py-10 md:flex-row flex-col items-center">
            <div className="container mx-auto flex px-12 py-10 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">GDPR compliance: No sweat!

                </h1>
                <p className="mb-8 leading-relaxed">
                  Our checklist will be your trusty sidekick.
                </p>
                <div className="flex w-full md:justify-start justify-center items-end">
                  <Link Link href={`CheckList`}>
                    <Button color="primary" size="lg" variant="flat">
                      Checklist
                    </Button>
                  </Link>
                </div>
                <div className="flex lg:flex-row md:flex-col">
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image src="Checklist.png" alt="hero" className="object-cover object-center rounded" />
            </div>
          </div>

        </section>
      </Card>
    </>
  );
}
export default Home;







