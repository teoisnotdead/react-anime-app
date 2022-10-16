import { useState, useEffect } from 'react';
import Card from './Card';
import Modal from './Modal';

const CardContainer = () => {
    const [anime, setAnime] = useState([]);
    const getAnime = () => {
        fetch('http://localhost:3000/anime/list')
            .then((response) => { return response.json() })
            .then((data) => { setAnime(data) });
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