const Comments = ({comments}) => {
    return (
        <div>
            <div className='w-72 h-72 overflow-y-auto fixed top-[230px] right-[50px] border-2'>
                {
                    comments.map((item, index) => (
                        <p><span className="text-[#166199] font-bold">{index + 1}</span>.{item.name}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default Comments;
