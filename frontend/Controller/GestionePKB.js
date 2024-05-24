
import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import GDPRData from '../components/modal';
import Link from 'next/link';



const GDPR = (props, itemId, nomePattern) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleLearnMoreClick = (itemId, nomePattern) => {
    setSelectedItem(itemId, nomePattern);
    setShowModal(true);
  };
  return (
    <div>
        
      <Fragment>
        <NavBar />
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            {props.GDPR.data.map((item) => {
              return (
                <div className="-my-8 divide-y-2 divide-gray-60">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">PATTERN</span>
                      <span className="mt-1 text-gray-500 text-sm">{itemId=item.id} - {nomePattern=item.attributes.Pattern.Titolo}</span>
                      
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"></h2>
                      <p className="leading-relaxed">Description: {item.attributes.Descrizione}</p>
         
                      <a
                        className="text-indigo-500 inline-flex items-center mt-4"
                        onClick={() => handleLearnMoreClick(item.id, item.attributes.Pattern.Titolo)}
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div />
                </div>

              );
            })}
          </div>
        </section>
        <GDPRData isVisible={showModal} onClose={() => setShowModal(false)} selectedItem={selectedItem} />
      </Fragment>
    </div>
  );
};
export async function getServerSideProps(context) {
  let headers = {
    Authorization: "Bearer 2ab650c3a1634ff8ada23d78b6e5ae25b01ae31b17fd825774ac24145d1baf06c10c4e8f921d8dc685068fb3f8202859b353508e3b454e187e0229c699d564231f2b76858b233eea194348fd069836f22d41d516aa61dc061b651dc665c28acac9a5fde693f0b4402d5a52f820427a8d697db74f25ea8243bceb782e3a583518",
  };
  let a = await fetch("http://localhost:1337/api/gdpr-knowledge-bases?populate=*", { headers: headers });
  let GDPR = await a.json();
  console.log(GDPR);
  return {
    props: { GDPR: GDPR },
  };
}
export default GDPR;

