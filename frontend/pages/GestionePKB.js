import NavBar from '../components/navbar'; // Import the NavBarHome component
import Link from 'next/link'; // Import the Link component from Next.js
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { UserIcon } from '../styles/UserIcon';
import { HeartIcon } from '../styles/HeartIcon';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip,Card } from "@nextui-org/react";
import { useSession } from 'next-auth/react';




function PaginaDestinazione() {
  const router = useRouter();
  const ID = parseInt(router.query.ID, 10); // Convertiamo in intero


  return ID; // return dell' id

}


let Filter = [
  { name: 'Summary', Boolean: true },
  { name: 'Contest', Boolean: true },
  { name: 'Examples', Boolean: true },
  { name: 'Art. GDPR', Boolean: true },
  { name: 'MVC', Boolean: true },
  { name: 'ISO', Boolean: true },
  { name: 'Strategies', Boolean: true },
  { name: 'PbD', Boolean: true },
  { name: 'OWASP', Boolean: true },
  { name: 'CWE', Boolean: true },
  { name: 'Problem', Boolean: true },
  { name: 'Solution', Boolean: true },

];

const GDPRView = (props, idFetch) => {

  const [checkedFilters, setCheckedFilters] = useState(
    Filter.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.Boolean || false }), {})
  );
  const { data: session } = useSession();
  const handleCheckboxChange = (e) => {
    const updatedFilters = { ...checkedFilters };
    updatedFilters[e.target.nextElementSibling.textContent] = e.target.checked;
    // Update the Filter array
    const updatedFilterArray = Filter.map((filter) => {
      if (updatedFilters[filter.name]) {
        return { ...filter, Boolean: true };
      } else {
        return { ...filter, Boolean: false };
      }
    });
    setCheckedFilters(updatedFilters);
    Filter = updatedFilterArray;
  }
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [message, setMessage] = useState(null)
  const addFavorite = async () => {
    let headers = {
      Authorization: `Bearer ${session.jwt}`,
    };
    let check = await fetch(`http://localhost:1337/api/users?filters[id][$eq]=${session.id}&filters[favoritepatterns][$eq]=${idFetch}`, { headers: headers });
    let rescheck = await check.text();
    console.log(rescheck);

    if (rescheck !== "[]") {
      const reqOptions = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${session.jwt}`
        },
        body: JSON.stringify({
          favoritepatterns: { disconnect: [idFetch] }
        }),
      };
      let a = await fetch(`http://localhost:1337/api/users/${session.id}?populate=favoritepatterns`, reqOptions);
      console.log("removed");
      setMessage("Pattern removed from favorites")
      onOpen();
    } else {
      const reqOptions = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${session.jwt}`
        },
        body: JSON.stringify({
          favoritepatterns: { connect: [idFetch] }
        }),
      };
      let a = await fetch(`http://localhost:1337/api/users/${session.id}?populate=favoritepatterns`, reqOptions);
      console.log("added");
      setMessage("Pattern added to favorites")
      onOpen();
    }




  }


  idFetch = PaginaDestinazione()


  return (

    <div>

      <NavBar />


      <div className='flex justify-center'>

        <div className="w-[1600px] flex flex-col flex justify-center items-center">

          <div className="bg-white p-4 rounded text-black">
            {props.GDPRView?.data?.filter((item) => item.id === idFetch).map((item) => {

              return (

                <section className="text-gray-600 body-font" key={item.id}>

                  <div className="container px-5 py-20 mx-auto" >
                    <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center">

                      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{item.attributes.Pattern.Titolo}</h1>
                      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Pattern -  {item.id}</p>
                      <div className="flex gap-4 items-center py-10">
                        <>
                          <Tooltip placement="bottom" content="Preferiti" color="danger">
                            <Button onPress={addFavorite} variant="ghost" size="md" color="danger" endContent={<HeartIcon />}></Button></Tooltip>
                          <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque" >
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalHeader className="flex flex-col gap-1">{message}</ModalHeader>
                                  <ModalBody>
                                    <p>
                                      Go check your favorites!!
                                    </p>
                                  </ModalBody>
                                  <ModalFooter>
                                  </ModalFooter>
                                </>
                              )}
                            </ModalContent>
                          </Modal>
                        </>


                        <Tooltip content="Feedback" placement="bottom" color="success">
                          <Link href={`/Feedback?ID=${item.id}`}><Button size="md" color="success" variant="ghost" startContent={<UserIcon />}></Button>
                          </Link></Tooltip>

                      </div>
                    </div>


                    <div>

                      <Card >
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg sm:flex">
                          {Filter.map((filter) => (
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r" key={filter.name}>
                              <div className="flex items-center ps-3">
                                <input
                                  id={`checked-checkbox-${filter.name}`}
                                  type="checkbox"
                                  value=""
                                  checked={checkedFilters[filter.name]}
                                  onChange={handleCheckboxChange}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor={`vue-checkbox-list-${filter.name}`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                                  {filter.name}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Card>


                    </div>

                    <div className="flex flex-wrap -m-4 py-20">




                      {Filter[0].Boolean === true && ( /* Paragrafo Descrizione */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24" >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                              Pattern Summary
                            </h2>
                            <p className="leading-relaxed text-base">{item.attributes.Pattern.Descrizione}</p>
                          </div>
                        </div>
                      )}

                      {Filter[1].Boolean === true && ( /* Paragrafo Contesto */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Pattern Contest</h2>
                            <p className="leading-relaxed text-base">{item.attributes.Pattern.Contesto}</p>
                          </div>
                        </div>
                      )}

                      {Filter[2].Boolean === true && ( /* Paragrafo Esempi */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Examples</h2>
                            <p className="leading-relaxed text-base">{item.attributes.Pattern.Esempio}</p>
                          </div>
                        </div>
                      )}

                      {Filter[3].Boolean === true && ( /* Paragrafo GDPR */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Article GDPR Compliance with the Pattern</h2>
                            {item.attributes.Articolo_gdpr.map((art) => (
                              <div key={art.id}>
                                <p className="leading-relaxed text-base">
                                  {art.Nome_Articolo}: {art.Descrizione}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {Filter[4].Boolean === true && ( /* Paragrafo MVC */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">MVC</h2>
                            {item.attributes.MVC.map((mvc) => (
                              <div key={mvc.id}>
                                <p className="leading-relaxed text-base">{mvc.Nome}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {Filter[5].Boolean === true && ( /* Paragrafo ISO */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">ISO 9241-210 Phase</h2>
                            {item.attributes.ISO_9241_210.map((iso) => (
                              <div key={iso.id}>
                                <p className="leading-relaxed text-base">{iso.Nome_ISO}{iso.Descrizione}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {Filter[6].Boolean === true && ( /* Paragrafo Strategia */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Strategies</h2>
                            {item.attributes.Strategie.map((strategia) => (
                              <div key={strategia.id}>
                                <p className="leading-relaxed text-base">{strategia.Strategia}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {Filter[7].Boolean === true && ( /* Paragrafo PbD */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Privacy By Design Principles</h2>
                            {item.attributes.Pbd.map((Pbd) => (
                              <div key={Pbd.id}>
                                <p className="leading-relaxed text-base">{Pbd.Nome_ISO}{Pbd.Descrizione}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {Filter[8].Boolean === true && ( /* Paragrafo OWASP */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">OWASP Top Ten Categories</h2>
                            {item.attributes.Owasp.map((owasp) => (
                              <div key={owasp.id}>
                                <p className="leading-relaxed text-base">{owasp.Nome_OWASP}: {owasp.Descrizione}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {Filter[9].Boolean === true && ( /* Paragrafo CWE */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">CWE Top 25 Most Dangerous Software Weaknesses OWASP Categories Associated</h2>
                            {item.attributes.Cwe.map((cwe) => (
                              <div key={cwe.id}>
                                <p className="leading-relaxed text-base">{cwe.Nome_CWE} {cwe.Descrizione}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}


                      {Filter[10].Boolean === true && ( /* Paragrafo Problema */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                              Pattern Problem
                            </h2>
                            <p className="leading-relaxed text-base">{item.attributes.Pattern.Problema}</p>
                          </div>
                        </div>
                      )}

                      {Filter[11].Boolean === true && ( /* Paragrafo Soluzione */
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                          <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24" >
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                              Pattern Solution
                            </h2>
                            <p className="leading-relaxed text-base">{item.attributes.Pattern.Soluzione}</p>
                          </div>
                        </div>
                      )}

                    </div>
                    <Link href="Patterns">
                      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</button>
                    </Link>

                  </div>
                </section>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );


};

export async function getServerSideProps(context) {
  let headers = {
    Authorization: "Bearer 2ab650c3a1634ff8ada23d78b6e5ae25b01ae31b17fd825774ac24145d1baf06c10c4e8f921d8dc685068fb3f8202859b353508e3b454e187e0229c699d564231f2b76858b233eea194348fd069836f22d41d516aa61dc061b651dc665c28acac9a5fde693f0b4402d5a52f820427a8d697db74f25ea8243bceb782e3a583518",
  };
  let a = await fetch("http://localhost:1337/api/gdpr-knowledge-bases/?populate=*", { headers: headers });
  let GDPRView = await a.json();
  console.log(GDPRView);
  return {
    props: { GDPRView: GDPRView },
  };
}



export default GDPRView;

