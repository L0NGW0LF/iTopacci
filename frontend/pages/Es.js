    
import React from 'react'

const GDPR = (props) => {
return (
    <div className = 'container mx-auto px-4'>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">GDPR {props.name}</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
        {props.GDPR.data.map((item)=>{
        return(
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.Nome_Pattern}</h2>
          <p class="leading-relaxed text-base">Descrizione: {item.attributes.Descrizione_pattern.Descrizione}</p>
        </div>
        </div>
        )
        })}
      </div>
    </div>
    </section>
  </div>


    
    )
}


export async function getServerSideProps(context) {
    let headers = {Authorization : "Bearer 2ab650c3a1634ff8ada23d78b6e5ae25b01ae31b17fd825774ac24145d1baf06c10c4e8f921d8dc685068fb3f8202859b353508e3b454e187e0229c699d564231f2b76858b233eea194348fd069836f22d41d516aa61dc061b651dc665c28acac9a5fde693f0b4402d5a52f820427a8d697db74f25ea8243bceb782e3a583518"}
  let a = await fetch("http://localhost:1337/api/gdpr-knowledge-bases?populate=*", {headers : headers})
  let GDPR = await a.json()
  console.log(GDPR)
    return {
    props: {GDPR:GDPR},
  }
}

export default GDPR