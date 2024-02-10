import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { shortTitle } from "../utils/helpers";
import Comments from "./comments";

const Posts = () => {
    const { pathname } = useLocation();
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(null);
    const [comments, setComments] = useState([]);
    const [openComments, setOpenComments] = useState(false)
    
    let path = pathname.slice(1);

    const overFunc = (id) => {
        setOpenComments(true)
        setId(id);
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${path}`)
            .then((response) => response.json())
            .then((result) => setPosts(result));
    }, [path]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => response.json())
            .then((result) => setComments(result));
    }, [id]);


    return (
        <div>
            <h1 className='text-3xl font-bold pb-3'>Posts list</h1>
            <div className='flex flex-col gap-5'>
                {posts.map((item, index) => (
                    <div key={item.id}>
                        <p
                            onMouseOver={() => overFunc(item.id)}
                            className='text-xl font-bold'>
                            {index + 1}, {shortTitle(item.title)}
                        </p>
                    </div>
                ))}
            </div>
            {
                openComments && <Comments comments={comments} />
            }
        </div>
    );
};

export default Posts;
