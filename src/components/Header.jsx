
const Header = () => {
    const imgLogo = 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665862341/app-anime/esfera4_afc4by.png'
    return (
        <header className="bg-gray-900 p-4 text-base text-white font-bold sm:px-20 px-10">
            <div className="flex justify-between">
                <h1 className="text-3xl">React Anime App</h1>
                <img className="h-10 hover:animate-spin" src={imgLogo} alt="esfera4estrellas" />
            </div>
        </header>
    );
};

export default Header;