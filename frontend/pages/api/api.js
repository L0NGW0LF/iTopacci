import fetch from 'node-fetch';
export async function getGDPRData(itemId) {
    const headers = {
        Authorization: "Bearer 2ab650c3a1634ff8ada23d78b6e5ae25b01ae31b17fd825774ac24145d1baf06c10c4e8f921d8dc685068fb3f8202859b353508e3b454e187e0229c699d564231f2b76858b233eea194348fd069836f22d41d516aa61dc061b651dc665c28acac9a5fde693f0b4402d5a52f820427a8d697db74f25ea8243bceb782e3a583518",
    };
    const response = await fetch(`http://localhost:1337/api/gdpr-knowledge-bases/${itemId}?populate=*`, {
        headers,
    });
    const data = await response.json();
    return data;
}