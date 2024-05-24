import React, { Fragment } from "react";

const GDPRData = ({ isVisible, onClose, itemId, nomePattern}) => {
    
        if (!isVisible) return null;


        const handleClose = (e) => {
            if (e.target.id === 'wrapper') onClose();
        }

        return (
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={(handleClose)}>
                <div className="w-[1600px] flex flex-col">
                    <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                    <div className="bg-white p-4 rounded text-black">
                        
                            <table className="w-auto">
                                <tread>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">#
                                        <th>
                                            {itemId}
                                        </th>
                                        
                                    </tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Pattern</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Strategie</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Descrizione Pattern</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Contesto Pattern</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Collocazione MVC</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Fase ISO 9241-210</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Articolo GDPR Conforme al modello</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Principi Privacy by design</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Top 10 categorie OWASP</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Top 25 CWE più pericolose</tr>
                                    <tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">Esempi</tr>
                                </tread>
                            </table>
                        
                    </div>
                </div>

            </div>
        )
        
}







export async function getServerSideProps(context) {
    let headers = {
        Authorization: "Bearer 2ab650c3a1634ff8ada23d78b6e5ae25b01ae31b17fd825774ac24145d1baf06c10c4e8f921d8dc685068fb3f8202859b353508e3b454e187e0229c699d564231f2b76858b233eea194348fd069836f22d41d516aa61dc061b651dc665c28acac9a5fde693f0b4402d5a52f820427a8d697db74f25ea8243bceb782e3a583518",
    };
    let res = await fetch("http://localhost:1337/api/gdpr-knowledge-bases?populate=*", { headers: headers })
    let GDPRData = await res.json();
    console.log(GDPRData);
    return {
        props: { GDPRData: GDPRData }
    };
}
export default GDPRData
