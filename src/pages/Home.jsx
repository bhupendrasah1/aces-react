import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from 'axios'

function Home(){
    const[blogs,setBlogs] = useState([])
    async function fetchBlogs() {
        const response = await axios.get('https://687af361abb83744b7ee4703.mockapi.io/blogs')
        console.log(response.data)
        if(response.status === 200)
            setBlogs(response.data)
        else
            console.log("Error fetching blogs")
    }
    useEffect(()=>{
     fetchBlogs()
    },[])
    console.log(blogs,"This is blogs")



    return(
        <>
        <Navbar />
        <div className="flex flex-wrap justify-center gap-4 p-4">
        {blogs.map(function(blog){
            return (
                <Card key={blog.id} blog={blog} />
            )
        })}
        </div>
    
        </>



    )
}
export default Home;