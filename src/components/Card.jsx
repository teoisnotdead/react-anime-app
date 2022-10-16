import Button from './Button';

const Card = ({ children, img, name, onClick }) => {
    return (
        <div
            className="max-w-xs rounded-lg bg-gray-900 shadow-md duration-200 hover:scale-105 hover:shadow-xl my-3">
            <figure>
                <img className="rounded-t-lg" src={img} alt={name} />
            </figure>
            <div className="text-center my-2">
                <h5 className="text-xl font-bold tracking-tight text-white">{name}</h5>
                <Button onClick={onClick}>Trailer
                </Button>
            </div>
            {children}
        </div>
    );
}

export default Card;