import { useRouter } from 'next/router';
import React, { Fragment, useState, useEffect } from 'react';


/* function PaginaDestinazione() {
    const router = useRouter();
    const ID = parseInt(router.query.ID, 10); // Convertiamo in intero
    return ID; // return dell' id
} */





const GDPRView = ({ isVisible, onClose, idFetch }) => {
    const [gdprView, setGdprView] = useState(null);
    useEffect(() => {
        const fetchGdprView = async () => {
            const headers = {
                Authorization: "Bearer 2ab650c3a1634ff8ada23d78b6e5ae25b01ae31b17fd825774ac24145d1baf06c10c4e8f921d8dc685068fb3f8202859b353508e3b454e187e0229c699d564231f2b76858b233eea194348fd069836f22d41d516aa61dc061b651dc665c28acac9a5fde693f0b4402d5a52f820427a8d697db74f25ea8243bceb782e3a583518",
            };
            const response = await fetch("http://localhost:1337/api/gdpr-knowledge-bases/?populate=*", { headers: headers });
            const gdprViewData = await response.json();
            setGdprView(gdprViewData);
        };
        fetchGdprView();
    }, []);
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={(handleClose)}>
            <div className="w-[1600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
            <div className="bg-white p-4 rounded text-black">
                
                {gdprView &&
                    gdprView.data.filter((item) => item.id === idFetch).map((item) => {
                        return (
                            <table className="w-auto">
                                <tread>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>ID
                                            {item.id}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Pattern
                                            {item.attributes.Pattern.Titolo}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Descrizione Pattern
                                            {item.attributes.Pattern.Descrizione}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Contesto Pattern
                                            {item.attributes.Pattern.Contesto}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Problema
                                            {item.attributes.Pattern.Problema}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Soluzione
                                            {item.attributes.Pattern.Soluzione}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Strategie
                                            {item.attributes.Strategie.map((strategia) => (
                                                <div key={strategia.id}>{strategia.Strategia}</div>
                                            ))}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Collocazione MVC
                                            {item.attributes.MVC.map((mvc) => (
                                                <div key={mvc.id}>{mvc.Nome}</div>
                                            ))}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Fase ISO 9241-210
                                            {item.attributes.ISO_9241_210.map((iso) => (
                                                <div key={iso.id}>{iso.Nome_ISO}{iso.Descrizione}</div>
                                            ))}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Articolo GDPR Conforme al modello
                                            {item.attributes.Articolo_gdpr.map((art) => (
                                                <div key={art.id}>{art.Nome_Articolo}{art.Descrizione}</div>
                                            ))}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Principi Privacy by design
                                            {item.attributes.Pbd.map((Pbd) => (
                                                <div key={Pbd.id}>{Pbd.Nome_ISO}{Pbd.Descrizione}</div>
                                            ))}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Top 10 categorie OWASP
                                            {item.attributes.Owasp.map((owasp) => (
                                                <div key={owasp.id}>{owasp.Nome_OWASP}{owasp.Descrizione}</div>
                                            ))}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Top 25 CWE più pericolose
                                            {item.attributes.Cwe.map((cwe) => (
                                                <div key={cwe.id}>{cwe.Nome_CWE}{cwe.Descrizione}</div>
                                            ))}
                                        </th>
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
                                        <th>Esempio
                                            {item.attributes.Pattern.Esempio}
                                        </th>
                                    </tr>
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
        props: {
            GDPRView: GDPRView,
        },
    };
}
export default GDPRView;