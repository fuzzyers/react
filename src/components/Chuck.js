import axios from "axios";
import { useEffect, useState } from "react";

const Chuck = () => {
    const [post, setPost] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get(
                "https://api.chucknorris.io/jokes/random"
            )
            setPost(response.data);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
          <p>{post.value}</p>
        </>
    )
}

export default Chuck