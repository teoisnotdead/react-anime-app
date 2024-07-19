import { useState, useEffect } from 'react';
import Card from './Card';
import Modal from './Modal';

const CardContainer = () => {
    const [anime, setAnime] = useState([]);
    const getAnime = () => {
        // fetch('https://api-anime-app-production.up.railway.app/anime/list')
        //     .then((response) => { return response.json() })
        //     .then((data) => { setAnime(data) });

        const data = [
            {
                _id: '1',
                name: 'Haikyuu!!',
                image: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665868860/app-anime/anime/haikyuu_ru1jzu.jpg',
                url: 'https://www.youtube.com/watch?v=V8KTuiJeBH8',
            },
            {
                _id: '2',
                name: 'One Piece',
                image: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665868861/app-anime/anime/one_piece_aiqnc6.jpg',
                url: 'https://www.youtube.com/watch?v=V8KTuiJeBH8',
            },
            {
                _id: '3',
                name: 'Fate/Zero',
                image: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665868860/app-anime/anime/fate_zero_b3lgta.jpg',
                url: 'https://www.youtube.com/watch?v=V8KTuiJeBH8',
            },
            {
                _id: '4',
                name: 'Dragon Ball Z',
                image: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665868860/app-anime/anime/dragon_ball_z_unmbhm.jpg',
                url: 'https://www.youtube.com/watch?v=V8KTuiJeBH8',
            },
            {
                _id: '5',
                name: 'Jujustu Kaisen',
                image: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665868861/app-anime/anime/jujutsu_kaisen_uzf2rh.jpg',
                url: 'https://www.youtube.com/watch?v=V8KTuiJeBH8',
            },
            {
                _id: '6',
                name: 'Attack on Titan',
                image: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665868860/app-anime/anime/attack_on_titan_q3uoof.jpg',
                url: 'https://www.youtube.com/watch?v=V8KTuiJeBH8',
            },
            {
                _id: '7',
                name: 'Death Note',
                image: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665868860/app-anime/anime/death_note_za62gg.jpg',
                url: 'https://www.youtube.com/watch?v=V8KTuiJeBH8',
            },
            {
                _id: '8',
                name: 'My Hero Academia',
                image: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665868861/app-anime/anime/my_hero_academia_qzfzre.jpg',
                url: 'https://www.youtube.com/watch?v=V8KTuiJeBH8',
            },
        ]
        setAnime(data);
    }

    useEffect(() => {
        getAnime();
    }, []);

    const [url, setUrl] = useState('');
    const [show, setShow] = useState(false);
    const closeModal = () => {
        setShow(false);
    };
    const openModal = (urlCard) => {
        setUrl(urlCard);
        setShow(true);
    };
    const filter = (e) => {
        const search = e.target.value;
        const filtered = anime.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        if (search === '') {
            getAnime();
        } else {
            setAnime(filtered);
        }
    };
    return (
        <>
            <div className='flex flex-col items-center justify-center mt-5'>
                <h1 className='text-3xl font-bold text-white'>Anime List</h1>
                <input onChange={filter} className='w-96 h-10 px-3 mt-5 rounded-lg' type='text' placeholder='Search Anime' />
            </div>
            <div className='my-2 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-7 py-5 px-3'>
                {anime.map((anime) => (
                    <Card key={anime._id} img={anime.image} name={anime.name} onClick={() => openModal(anime.url)} />
                ))}
                {
                    show && <Modal closeModal={closeModal} url={url} />
                }
            </div>
        </>
    );
};

export default CardContainer;