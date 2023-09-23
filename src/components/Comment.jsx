import {useState} from "react";

function Comment() {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };

    const onClickHandler = () => {
        setComments((comments) => [...comments, comment])
    }
    return (
        <div>

            <h1 className='mb-4 text-2xl font-bold text-white md:text-4xl font-inter pt-[24px]'>Comments</h1>
            <form action="" className='flex flex-col gap-2'>
                <textarea onChange={onChangeHandler}
                          className='rounded-[12px] bg-black text-[#ffff] w-[100%] p-[12px] mb-[24px]'/>
                <button type='reset' onClick={onClickHandler}
                        className='mb-[24px] px-4 py-2 text-[20px] text-white border border-[#00FF0C] border-solid md:text-2xl w-fit font-inria rounded-2xl'>Submit
                </button>
            </form>
            <div className="bg-black px-[24px] py-[24px] rounded-[12px]">
                {comments.map((text) => (
                    <div className="flex gap-4 items-center mb-[24px]">
                        <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                    stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <h1 className='text-[20px]'>{text}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment