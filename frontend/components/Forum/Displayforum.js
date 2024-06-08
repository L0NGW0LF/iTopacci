import React, { useState } from "react";

import style from "../../styles/Home.module.css";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

import NavBar from "../navbar";
import { Button, Textarea, Card, CardBody, CardHeader, Divider, Tooltip } from "@nextui-org/react";


function Displayforum({ response }) {
  const { data: session } = useSession();
  const [show, setShow] = useState(false);
  let savedAnswers = [];

  const retrieveAnswers = async (id, answer) => {

  }


  const submitAnswer = async (id, answer) => {
    console.log(savedAnswers)
    const questionId = id;
    const reqOptions = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${session.jwt}`
      },
      body: JSON.stringify({
        data: {
          Answer: [savedAnswers, { Answer: answer, Answername: session.user.username }]
        }
      })
    };
    const a = await fetch(`http://localhost:1337/api/strapi-forums/${questionId}`, reqOptions);
    const res = await a.json();
    console.log(reqOptions);
  };

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <NavBar />

      {!session && (
        <>
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Sign in to access forum</h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Sorry ;(</p>
              <img className="flex-shrink-0 rounded-lg w-1/6 h-50 object-cover object-center mb-4" src="sorry.png" />
              <div className="flex gap-2 items-center">
                <Button color="primary" size="lg" onClick={() => signIn()}>Sign In</Button>
              </div>
            </div>
          </div>
        </>
      )}

      {session && (
        <>

          <div className={style.page}>
            <h1 className="text-large font-semibold text-default-700">
              Welcome to the PKB Forum  </h1>
            <div className={style.topcont}>


              <Tooltip placement="bottom" content="Scroll Down" color="primary">
                <Button color="primary" variant="flat" onClick={scrollToBottom} size="md">
                  <svg width="140px" height="140px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#248eff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="#0660c1" strokeWidth="1.272" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </Button>
                 </Tooltip>
              <Tooltip placement="bottom" content="Refresh" color="primary">
                <Button color="primary" variant="flat" onClick={handleClick} size="md">
                  <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C14.5006 4 16.7332 5.14727 18.2002 6.94416M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 16.4183 16.4183 20 12 20C9.61061 20 7.46589 18.9525 6 17.2916M9 17H6V17.2916M18.2002 4V6.94416M18.2002 6.94416V6.99993L15.2002 7M6 20V17.2916" stroke="#0077b3" strokeWidth="1.272" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </Button></Tooltip >
              <div>
                <Link href="/upload">
                  <Button color="primary" radius="large" variant="flat" size="md">
                    Ask a Question
                  </Button>
                </Link>
              </div>
            </div>
            {response.map((response, index) => (
              <div key={index}>
                <div>
                  <p className="text-large font-semibold leading-none text-default-500 py-5">Posted By: {response.attributes.Username}</p>
                </div>
                <Card>
                  <CardHeader>
                    <div className="flex gap-5">
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-medium font-semibold leading-none text-default-700">{response.attributes.Title}</h4>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>

                    <h5 className="text-small tracking-tight text-default-420">{response.attributes.Questions}</h5>

                  </CardBody>
                </Card>
                <div className="py-6">
                  {response.attributes.Answer.map((answer) => { savedAnswers.push(answer); })}
                  <div>
                    <form onSubmit={(event) => { event.preventDefault(); submitAnswer(response.id, event.target.elements['Answer'].value); }}>

                      <Textarea variant="faded" type="text" placeholder="Enter your answer" rows="5" id="Answer" name="Answer" />
                      <div className="py-5">
                        <Button color="primary" radius="large" type="submit">
                          Post
                        </Button>
                      </div>
                    </form>
                  </div>
                  <Button color="primary" variant="ghost" onClick={(e) => { setShow(!show); }} >
                    {show ? "Hide Answers" : "Show Answers"}
                  </Button>
                  {show ? (
                    <div className="px-3 py-3">
                      {response.attributes.Answer.map((answer) => (
                        <Card className={style.answers} key={answer.id}>
                          <h4 className="py-2 text-medium font-semibold leading-none text-default-900">
                            {answer.Answername} - "{response.attributes.Title}"
                          </h4>
                          <p className="text-small tracking-tight text-default-420">{answer.Answer}</p>
                        </Card>

                      ))}
                      {console.log(savedAnswers)}
                    </div>
                  ) : null}
                </div>
                <Divider className="py-1/2 my-4" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default Displayforum;
