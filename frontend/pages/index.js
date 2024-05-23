import NavBarHome from '../components/navbarhome';


export default function Home() 
{
  return (
    <div>
      <NavBarHome />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to the Privacy knowledge base,

<br className="hidden lg:inline-block" />
Navigate the digital world with confidence.

            </h1>
            <p className="mb-8 leading-relaxed">
            With our knowledge base at your fingertips, you'll be equipped to make informed decisions about your privacy and take steps to safeguard your personal information. We're committed to providing you with the resources you need to navigate the digital world with confidence.
            </p>
            <div className="flex justify-center">
              <button onClick className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              
                Users
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-500">
            <img className="object-cover object-center rounded" alt="hero" src="https://cdn.discordapp.com/attachments/393437866166059008/1243338493665742858/Senza_titolo.png?ex=66511cb5&is=664fcb35&hm=fca472e6e01b443729ccec927d8c0ba7b8f0a6b8212e8ede3e61929592f25bc7&" />
          </div>
        </div>
      </section>
    </div>
  );
}