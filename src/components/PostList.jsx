import { useEffect, useState } from "react"
import { PostItem } from "./PostItem"

export const PostList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() =>{
        getPosts()
    }, [])
    
    const getPosts = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const info = await data.json()
        setPosts(info)
    }

    return (
        <div>
        {
            posts.map(item =>(
                <PostItem
                key = {item.id}
                { ...item}
                />
            ))
        }
        </div>
    )
}
