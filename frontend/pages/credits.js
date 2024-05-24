import NavBar from '../components/navbar';
const teamMembers = [
    {
        name: 'iTopacci',
        title: 'Team',
        image: 'https://cdn.discordapp.com/attachments/393437866166059008/1243502604127047720/Screenshot_2023-06-14_190959.png?ex=6651b58b&is=6650640b&hm=664682b8584b205bdaf0f156c4cb7d011842b589e1592bb018ec8d41abf87cfa&',
    },
    {
        name: 'Giovanni Narracci',
        title: 'Team Member',
        image: 'https://cdn.discordapp.com/attachments/393437866166059008/1243502441597763594/Giovanni.jpeg?ex=6651b565&is=665063e5&hm=e9c4ea069800c26925f49723fbd2e73aff8c7de24f469367516c5e51e61b4da2&',
    },
    {
        name: 'Francesco Pagliaro',
        title: 'Team Member',
        image: 'https://cdn.discordapp.com/attachments/393437866166059008/1243502456734748752/Francesco.PNG?ex=6651b568&is=665063e8&hm=6f4ebf5e5bb04fc505ea8d6ffa6682d9214ccd49c159c165e024eaec6f99d203&',

    },
    {
        name: 'Antonio Mongelli',
        title: 'Team Member',
        image: 'https://cdn.discordapp.com/attachments/393437866166059008/1243502474313076797/Antonio.jpeg?ex=6651b56d&is=665063ed&hm=2b6706eaffa43edf6166930de905c53562c13bcb7a4db092596f9351fb17e3cf&',
    },
];
export default function Credits() {
    return (
        <div>
            <NavBar />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        At iTopacci, we're passionate about Privacy. And we're committed to using our skills and expertise to make a real difference in the world.                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {teamMembers.map((teamMember) => (
                            <div key={teamMember.name} className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <img
                                        alt={teamMember.name}
                                        className="flex-shrink-0 rounded-lg w-full h-90 object-cover object-center mb-4"
                                        src={teamMember.image}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">{teamMember.name}</h2>
                                        <h3 className="text-gray-500 mb-3">{teamMember.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}