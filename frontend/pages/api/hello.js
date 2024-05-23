// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}


import fetch from 'node-fetch';
export async function getGDPRData(itemId) {
const headers = {
Authorization: "Bearer YOUR_API_KEY",
};
const response = await fetch(`http://localhost:1337/api/gdpr-knowledge-bases/${itemId}?populate=*`, {
headers,
});
const data = await response.json();
return data;
}