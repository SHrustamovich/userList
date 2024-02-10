const Modal = ({ info, setOpen }) => {
    const onCancel = () => {
        setOpen(false);
    };
    const handlyFunc = (t) => {
        t.stopPropagation();
    };
    return (
        <div
            className='w-full h-full fixed top-0 left-0 bg-[#0009]'
            onClick={() => setOpen(false)}>
            <div
                onClick={handlyFunc}
                className='w-1/2 p-4 rounded bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='flex justify-between items-center '>
                    <h1 className='font-bold'>Users info</h1>
                    <button onClick={onCancel}>❌</button>
                </div>
                <div className='flex justify-around'>
                    <div>
                        <h3>
                            Username:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.username}
                            </span>
                        </h3>
                        <h3>
                            Email:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.email}
                            </span>
                        </h3>
                        <h3>
                            Phone:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.phone}
                            </span>
                        </h3>
                        <h3>
                            Website:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.website}
                            </span>
                        </h3>
                    </div>
                    <div>
                        <h1>Adress: </h1>
                        <h3>
                            -Street:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.address.street}
                            </span>
                        </h3>
                        <h3>
                            -Suite:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.address.suite}
                            </span>
                        </h3>
                        <h3>
                            -City:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.address.city}
                            </span>
                        </h3>
                        <h3>
                            -Zipcode:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.address.zipcode}
                            </span>
                        </h3>
                        <h1>Company: </h1>
                        <h3>
                            -Name:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.company.name}
                            </span>
                        </h3>
                        <h3>
                            -catchPhrase:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.company.catchPhrase}
                            </span>
                        </h3>
                        <h3>
                            -bs:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info.company.bs}
                                <span className='text-[#166199] font-bold'>
                                    {info.company.name}
                                </span>
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
