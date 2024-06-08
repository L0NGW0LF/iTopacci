import NavBar from '../components/navbar'; // Import the NavBarHome component
import Link from 'next/link'; // Import the Link component from Next.js
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';



function PaginaDestinazione() {
    const router = useRouter();
    const ID = parseInt(router.query.ID, 10); // Convertiamo in intero

    return ID; // reutrn dell' id

}


const GDPRView = (props, idFetch) => {
    

    idFetch = PaginaDestinazione()
    
    
    return (
        
        <div>
        
            
            <NavBar />
            <div className='flex justify-center'>

                <div className="w-[1600px] flex flex-col flex justify-center items-center">

                    <div className="bg-white p-4 rounded text-black">

                        {props.GDPRView.data.filter((item) => item.id === idFetch).map((item) => {
                            return (
                                    
                                <section class="text-gray-600 body-font">
                                <div class="container px-5 py-24 mx-auto">
                                  <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{item.attributes.Pattern.Titolo}</h1>
                                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Pattern -  {item.id}</p>
                                  </div>
                                  <div class="flex flex-wrap -m-4">
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Pattern Description</h2>
                                        <p class="leading-relaxed text-base"> {item.attributes.Pattern.Descrizione}</p>
                                      </div>
                                    </div>
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Pattern Contest</h2>
                                        <p class="leading-relaxed text-base">{item.attributes.Pattern.Contesto}</p>
                                      </div>
                                    </div>
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Examples</h2>
                                        <p class="leading-relaxed text-base">{item.attributes.Pattern.Esempio}</p>
                                      </div>
                                    </div>
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Article GDPR Compliance with the Pattern</h2>
                                        <p class="leading-relaxed text-base">{item.attributes.Articolo_gdpr.map((art) => (
                                                <div key={art.id}>{art.Nome_Articolo}: {art.Descrizione}</div>
                                            ))}</p>
                                      </div>
                                    </div>
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">MVC</h2>
                                        <p class="leading-relaxed text-base">{item.attributes.MVC.map((mvc) => (
                                                <div key={mvc.id}>{mvc.Nome}</div>
                                            ))}</p>
                                      </div>
                                    </div>
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">ISO 9241-210 Phase</h2>
                                        <p class="leading-relaxed text-base">{item.attributes.ISO_9241_210.map((iso) => (
                                                <div key={iso.id}>{iso.Nome_ISO}{iso.Descrizione}</div>
                                            ))}</p>
                                      </div>
                                    </div>
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Strategies</h2>
                                        <p class="leading-relaxed text-base">{item.attributes.Strategie.map((strategia) => (
                                                <div key={strategia.id}>{strategia.Strategia}</div>
                                            ))}</p>
                                      </div>
                                    </div>
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Privacy By Design Principles</h2>
                                        <p class="leading-relaxed text-base">{item.attributes.Pbd.map((Pbd) => (
                                                <div key={Pbd.id}>{Pbd.Nome_ISO}{Pbd.Descrizione}</div>
                                            ))}</p>
                                      </div>
                                    </div>
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">OWASP Top Ten Categories</h2>
                                        <p class="leading-relaxed text-base">{item.attributes.Owasp.map((owasp) => (
                                                <div key={owasp.id}>{owasp.Nome_OWASP}: {owasp.Descrizione}</div>
                                            ))}</p>
                                      </div>
                                    </div>
                                    <div class="xl:w-1/3 md:w-1/2 p-4">
                                      <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                          </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">CWE Top 25 Most Dangerous Software Weaknesses OWASP Categories Associated</h2>
                                        <p class="leading-relaxed text-base">{item.attributes.Cwe.map((cwe) => (
                                                <div key={cwe.id}>{cwe.Nome_CWE}: {cwe.Descrizione}</div>
                                            ))}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="Patterns">Back</a></button>
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
        Authorization: "Bearer 48935a33ac61ca32ab6c2125cd79f60dc13b6205c5c27821395c665e86bc86b19dfd2f92de4102f849e689346ae3e9afe0b46d7f59d3a6fce3b86af08dea0cf41eb97be494050e925ecd9ec9ed8636bbfcb1baebe44a937a723067122ccf943b1f1d93ad627fbd6fbcf9e09beb8231393a10eed6b6ab450a208664ec06d9ff2a",
    };
    let a = await fetch("http://localhost:1337/api/gdpr-knowledge-bases/?populate=*", { headers: headers });
    let GDPRView = await a.json();
    console.log(GDPRView);
    return {
        props: { GDPRView: GDPRView },
    };
}



export default GDPRView;














                                {/* <table className="w-auto">

                                    <thead>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">ID
                                            <th>
                                                {item.id}
                                            </th>
                                        </tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Pattern<th>
                                            {item.attributes.Pattern.Titolo}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Descrizione Pattern<th>
                                            {item.attributes.Pattern.Descrizione}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Contesto Pattern<th>
                                            {item.attributes.Pattern.Contesto}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Problema<th>
                                            {item.attributes.Pattern.Problema}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Soluzione<th>
                                            {item.attributes.Pattern.Soluzione}
                                        </th></tr>

                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Strategie<th>
                                            {item.attributes.Strategie.map((strategia) => (
                                                <div key={strategia.id}>{strategia.Strategia}</div>
                                            ))}
                                        </th></tr>

                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Collocazione MVC<th>
                                            {item.attributes.MVC.map((mvc) => (
                                                <div key={mvc.id}>{mvc.Nome}</div>
                                            ))}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Fase ISO 9241-210<th>
                                            {item.attributes.ISO_9241_210.map((iso) => (
                                                <div key={iso.id}>{iso.Nome_ISO}{iso.Descrizione}</div>
                                            ))}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Articolo GDPR Conforme al modello<th>
                                            {item.attributes.Articolo_gdpr.map((art) => (
                                                <div key={art.id}>{art.Nome_Articolo}: {art.Descrizione}</div>
                                            ))}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Principi Privacy by design<th>
                                            {item.attributes.Pbd.map((Pbd) => (
                                                <div key={Pbd.id}>{Pbd.Nome_ISO}{Pbd.Descrizione}</div>
                                            ))}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Top 10 categorie OWASP<th>
                                            {item.attributes.Owasp.map((owasp) => (
                                                <div key={owasp.id}>{owasp.Nome_OWASP}: {owasp.Descrizione}</div>
                                            ))}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Top 25 CWE più pericolose<th>
                                            {item.attributes.Cwe.map((cwe) => (
                                                <div key={cwe.id}>{cwe.Nome_CWE}: {cwe.Descrizione}</div>
                                            ))}
                                        </th></tr>
                                        <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Esempio<th>
                                            {item.attributes.Pattern.Esempio}
                                        </th></tr>
                                    </thead>
                                </table> */}


