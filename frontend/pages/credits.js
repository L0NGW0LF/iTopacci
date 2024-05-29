import NavBar from '../components/navbar';
const teamMembers = [
    {
        name: 'iTopacci',
        title: 'Team',
        image: 'logo.png',
    },
    {
        name: 'Giovanni Narracci',
        title: 'Team Member',
        image: 'Giovanni.jpg',
    },
    {
        name: 'Francesco Pagliaro',
        title: 'Team Member',
        image: 'Francesco.png',
    },
    {
        name: 'Antonio Mongelli',
        title: 'Team Member',
        image: 'Antonio.jpg',
    },
];
export default function Credits() {
    return (
        <div>
            <NavBar />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">TEAM</h1>
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