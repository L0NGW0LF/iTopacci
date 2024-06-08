
import React, { Fragment } from 'react';
import NavBar from '../components/navbar';
import { Card } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import getRole from './api/retrieveRole';
import { useState } from 'react';

const FeedbackViewer = (props, itemId, nomePattern) => {
  const { data: session } = useSession();
  const [userRole, setUserRole] = useState(null);



getRole().then((resolvedUserRole) => {
  setUserRole(resolvedUserRole); // This will also log "3"
})

  return (
    <div>
      <Fragment>
        <NavBar />
        {session && userRole === 3 ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            {/* Filtro per vedere i preferiti oppure tutti i pattern */}

            {/* Titolo e descrizione tra la lista di pattern e il filtro */}

            <div className="py-7 mx-2 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">PATTERN</span>
              </div>

            </div>

            {props.GDPR?.data?.map((item) => {
              {/* Caso in cui si vogliono vedere tutti i pattern */ }
              return (
                <div className="-my-8 divide-y-2 divide-gray-60 py-5" key={item.id}>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="mt-1 text-gray-500 text-sm">{itemId = item.id} - {nomePattern = item.attributes.Pattern.Titolo} </span>
                    </div>
                  </div>
                  {props.feedback.data.length > 0 ? (
                    props.feedback.data.map((feedback) => {
                      if (feedback.attributes.pattern.data.id === item.id) { // added if statement
                        return (
                          <Card className='p-4 m-1'>
                            <p>{feedback.attributes.title}</p>
                            <p>{feedback.attributes.description}</p>
                          </Card>
                        )
                      } else {
                        return null; // or return an empty fragment <> </> if you prefer
                      }
                    })
                  ) : (
                    <p>No feedback items found!</p>
                  )}
                  <div />
                </div>
              );

              {/* Caso in cui si vogliono vedere i preferiti */ }

            })}
          </div>
        </section>) : (
          <p className="text-center text-red-500 font-bold">
            You need to be an Administrator to access this page.
          </p>
        ) }
      </Fragment>
    </div >
  );
};


export async function getServerSideProps() {
  let headers = {
    Authorization: "Bearer 2ab650c3a1634ff8ada23d78b6e5ae25b01ae31b17fd825774ac24145d1baf06c10c4e8f921d8dc685068fb3f8202859b353508e3b454e187e0229c699d564231f2b76858b233eea194348fd069836f22d41d516aa61dc061b651dc665c28acac9a5fde693f0b4402d5a52f820427a8d697db74f25ea8243bceb782e3a583518",
  };
  const [GDPRRes, feedbackRes] = await Promise.all([
    fetch("http://localhost:1337/api/gdpr-knowledge-bases?populate=*", { headers: headers }),
    fetch("http://localhost:1337/api/feedbacks?populate=*", { headers: headers })
  ]);
  const [GDPR, feedback,] = await Promise.all([GDPRRes.json(), feedbackRes.json()]);

  return {
    props: { GDPR, feedback }
  };

}
export default FeedbackViewer;

