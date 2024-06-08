
import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Card } from "@nextui-org/react";







let Favorites = [
  { name: 'Favorites', Boolean: false },
];

const GDPR = (props, itemId, nomePattern) => {


  const [checkedFavorites, setCheckedFavorites] = useState(
    Favorites.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.Boolean || false }), {})
  );
  const { data: session } = useSession();
  const handleCheckboxChange = (e) => {
    const updatedFavorites = { ...checkedFavorites };
    updatedFavorites[e.target.nextElementSibling.textContent] = e.target.checked;
    // Update the Favorites array
    const updatedFavoritesArray = Favorites.map((favorites) => {
      if (updatedFavorites[favorites.name]) {
        return { ...favorites, Boolean: true };
      } else {
        return { ...favorites, Boolean: false };
      }
    });
    setCheckedFavorites(updatedFavorites);
    Favorites = updatedFavoritesArray;


  }

  return (


    <div>
      <Fragment>
        <NavBar />
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            {/* Filtro per vedere i preferiti oppure tutti i pattern */}

            <Card>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                {Favorites.map((favorites) => (
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r" key={favorites.name}>
                    <div className="flex items-center ps-3">
                      <input
                        id={`checked-checkbox-${favorites.name}`}
                        type="checkbox"
                        value=""
                        checked={checkedFavorites[favorites.name]}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label htmlFor={`vue-checkbox-list-${favorites.name}`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                        {favorites.name}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
            {/* Titolo e descrizione tra la lista di pattern e il filtro */}

            <div className="py-7 mx-2 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">PATTERN</span>
              </div>
              <div className="md:flex-grow">
                <span className="font-semibold title-font text-gray-700">SUMMARY</span>
              </div>
            </div>

            {props.GDPR?.data?.map((item) => {
              {/* Caso in cui si vogliono vedere tutti i pattern */ }
              if (Favorites[0].Boolean === false) {
                return (
                  <div className="-my-8 divide-y-2 divide-gray-60 py-5">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="mt-1 text-gray-500 text-sm">{itemId = item.id} - {nomePattern = item.attributes.Pattern.Titolo} </span>
                      </div>
                      <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"></h2>
                        <p className="leading-relaxed">{item.attributes.Pattern.Descrizione}</p>
                        <Link className="text-indigo-500 inline-flex items-center mt-4" href={`/GestionePKB?ID=${item.id}`}>
                          Learn more
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div />
                  </div>
                );

                {/* Caso in cui si vogliono vedere i preferiti */ }
              } else {
                const results = [];
                item.attributes.users.data.map(user => user.id === session?.id).forEach(value => {
                  if (value) {
                    results.push(
                      <div className="-my-8 divide-y-2 divide-gray-60 py-5">
                        <div className="py-8 flex flex-wrap md:flex-nowrap" >
                          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col" >
                            <span className="mt-1 text-gray-500 text-sm" > {itemId = item.id} - {nomePattern = item.attributes.Pattern.Titolo}
                              {console.log("pattern:", item.id, value)}
                            </span>
                          </div>
                          <div className="md:flex-grow" >
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2" > </h2>
                            <p className="leading-relaxed">{item.attributes.Pattern.Descrizione}</p >
                            <Link className="text-indigo-500 inline-flex items-center mt-4" href={`/GestionePKB?ID=${item.id}`} > Learn more
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" >
                                <path d="M5 12h14" > </path>
                                <path d="M12 5l7 7-7 7"></path >
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div />
                      </div>
                    );
                  }
                });
                return results;
              }
            })}
          </div>
        </section>
      </Fragment>
    </div >
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

