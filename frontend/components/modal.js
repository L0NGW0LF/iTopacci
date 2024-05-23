import React from "react";
import { getGDPRData } from '../pages/api/api';
const Modal = ({ isVisible, onClose, itemId, data }) => {
if (!isVisible) return null;
const handleClose = (e) => {
if (e.target.id === 'wrapper') onClose();
}
return (
<div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
<div className=" flex flex-col">
<button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
<div className="bg-white p-4 rounded text-black">
<table className="w-auto">
<tread>
<tr className="border border-solid border-l-0 border-r-0 text-md px-6 py-3">
# {data && data.id? <th>{data.id}</th> : <th>Loading...</th>}
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
);
};
export async function getServerSideProps({ params }) {
const itemId = params.itemId;
const data = await getGDPRData(itemId);
// Ensure data is an object with an id property
if (!data ||!data.id) {
return {
props: {
data: {}, // or some default data object
},
};
}
return {
props: {
data,
},
};
}
export default Modal;