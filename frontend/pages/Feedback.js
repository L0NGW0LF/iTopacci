
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import NavBar from '@/components/navbar';
import { useSession } from 'next-auth/react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea, Input } from "@nextui-org/react";

export async function getServerSideProps(context) {
  let headers = {
    Authorization: "Bearer 2ab650c3a1634ff8ada23d78b6e5ae25b01ae31b17fd825774ac24145d1baf06c10c4e8f921d8dc685068fb3f8202859b353508e3b454e187e0229c699d564231f2b76858b233eea194348fd069836f22d41d516aa61dc061b651dc665c28acac9a5fde693f0b4402d5a52f820427a8d697db74f25ea8243bceb782e3a583518",
  };
  let a = await fetch("http://localhost:1337/api/gdpr-knowledge-bases/?populate=*", { headers: headers });
  let Feedback = await a.json();

  return {
    props: { Feedback: Feedback },
  };
}

function PaginaDestinazione() {
  const router = useRouter();
  const ID = parseInt(router.query.ID, 10); // Convertiamo in intero

  return ID; // return dell' id

}

export default function Feedback(props, idFetch) {
  const { data: session } = useSession();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  const [message, setMessage] = useState(null)


  const submit = async (event, idPattern, user) => {
    idPattern = idFetch;
    user = session.id;
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);


    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${session.jwt}`
      },
      body: JSON.stringify({
        data: {
          ...jsonData,
          user: session.id,
          pattern: idPattern
        },
      }),
    };

    const req = await fetch('http://localhost:1337/api/feedbacks', reqOptions);
    const res = await req.json();

    if (res.error) {
      setMessage(res.error.message);
      return;
    } else
      setMessage("Sent successfully")
  }





  idFetch = PaginaDestinazione()
  return (
    <div>
      <NavBar />
      {props.Feedback.data.filter((item) => item.id === idFetch).map((item) => {
        return (
          <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=800&amp;hl=en&amp;q=Taranto+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{ filter: 'grayscale(2) contrast(1.2) opacity(0.3)' }}
              />
            </div>
            <form onSubmit={submit}>
              <div className="container px-5 py-20 mx-auto flex">

                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font space-x-0 flex">Pattern: {item.id} - {item.attributes.Pattern.Titolo}</h2>
                  <p className="leading-relaxed text-gray-600">Let us know your feedback</p>
                  <p className="leading-relaxed mb-5 font-bold text-gray-600">The feedbacks you leave are anonymous</p>
                  <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Title</label>
                    <Input variant='bordered' type="text" id="title" name="title" placeholder="Enter title" />
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Description</label>
                    <Textarea variant='bordered' placeholder="Enter Description"
                      id="description"
                      name="description"
                    />
                    <p className="leading-7 text-sm text-red-600">{message}</p>
                  </div>
                  <>
                    <Button color="primary" onPress={onOpen}
                      type="submit"

                    >
                      Submit
                    </Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque" >
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1">Feedback added</ModalHeader>
                            <ModalBody>
                              <p>
                                Thanks for your Feedback!!
                              </p>
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </>
                </div>

              </div>
            </form>

          </section>
        );

      })}
    </div>

  );
}


