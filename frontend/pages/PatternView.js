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
    return (
        <div>
            <NavBar />
            <div className="w-[600px] flex flex-col flex justify-center items-center ">

                <div className="bg-white p-4 rounded text-black">
                    {idFetch = PaginaDestinazione()}
                    {props.GDPRView.data.filter((item) => item.id === idFetch).map((item) => {
                        return (
                            <table className="w-auto">

                                <tread>
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
                                            <div key={art.id}>{art.Nome_Articolo}{art.Descrizione}</div>
                                        ))}
                                    </th></tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Principi Privacy by design<th>
                                        {item.attributes.Pbd.map((Pbd) => (
                                            <div key={Pbd.id}>{Pbd.Nome_ISO}{Pbd.Descrizione}</div>
                                        ))}
                                    </th></tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Top 10 categorie OWASP<th>
                                        {item.attributes.Owasp.map((owasp) => (
                                            <div key={owasp.id}>{owasp.Nome_OWASP}{owasp.Descrizione}</div>
                                        ))}
                                    </th></tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Top 25 CWE più pericolose<th>
                                        {item.attributes.Cwe.map((cwe) => (
                                            <div key={cwe.id}>{cwe.Nome_CWE}{cwe.Descrizione}</div>
                                        ))}
                                    </th></tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Esempio<th>
                                        {item.attributes.Pattern.Esempio}
                                    </th></tr>
                                </tread>
                            </table>
                        );
                    })}
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