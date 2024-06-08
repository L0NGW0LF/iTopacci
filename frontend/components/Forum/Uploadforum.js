import { React, useState } from "react";
import style from "../../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";
import { Button, Textarea, useDisclosure, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Modal } from "@nextui-org/react";

import NavBar from "../navbar";
function Uploadforum({ session }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const url = "http://localhost:1337/api/strapi-forums";
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  const [message, setMessage] = useState(null)


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      data: {
        Title: name,
        Questions: description,
        Answer: [],
        Username: session.user.username, // or a hashed version of session.user.name
      },
    };
    console.log("Request data:", data);
    try {
      const response = await axios.post(url, data);
      // Handle successful response
      console.log(response.data);
      setName("");
      setDescription("");
      setError(null);
    } catch (error) {
      // Handle error response
      setError(error.message);
    }

  };
  return (
    <div>
      <NavBar />
      <div className={style.pageUpload}>
        <div className={style.topcont}>
          <h1>Ask a question</h1>
          <Link href="/forum">
            <Button color="primary" variant="flat">
              Forum
            </Button>
          </Link>
        </div>
        <div className="py-15">
          <form className={style.uploadform}>
            <Input
              variant="bordered"
              className="py-5"
              type="text"
              placeholder="Enter your title"
              maxLength="74"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Textarea
              className="py-5"
              type="text"
              placeholder="Enter your description"
              rows="8"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              color="primary"
              onClick={handleSubmit}
              disabled={error !== null}
              onPress={onOpen}
            >
              {error ? "Error: " + error : "Submit Question"}
            </Button>
            <>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque" >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">{message}</ModalHeader>
                      <ModalBody>
                        <p>
                          Go check the Forum!!
                        </p>
                      </ModalBody>
                      <ModalFooter>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Uploadforum;