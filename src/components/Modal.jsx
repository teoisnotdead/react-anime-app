
const Modal = ({ url, closeModal }) => {
    return (
        <div className="fixed sm:top-0 top-20 right-0 lg:left-1/3 left-0 z-50 w-full md:inset-x-32 lg:inset-x-96 md:inset-y-52 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative rounded-lg shadow bg-gray-700">
                    <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-600">
                        <h3 className="text-xl font-semibold text-white">
                            Trailer
                        </h3>
                        <button 
                        onClick={closeModal} type="button" className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <iframe className="h-96 w-full" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;