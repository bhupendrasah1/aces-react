import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { use, useEffect, useState } from "react";
import axios from "axios";

function SinglePage(){
    const {id} = useParams() 
    const navigate=useNavigate()
     const[blog,setBlog] = useState({})
    async function fetchBlog() {
        const response = await axios.get('https://687af361abb83744b7ee4703.mockapi.io/blogs/' + id)
        console.log(response.data)
        if(response.status === 200)
            setBlog(response.data)
        else
            console.log("Error fetching blogs")
    }
    useEffect(()=>{
     fetchBlog()
    },[])

    async function deleteBlog() {
        const response = await axios.delete('https://687af361abb83744b7ee4703.mockapi.io/blogs/' + id)
     console.log(response.data)
      if(response.status === 200)
            navigate('/')
        else
            console.log("something went wrong while deleting the blog")
    }


    
    return(
        <>
        <Navbar />
        <div>
            <img width={200} src={blog.image} alt="True" />
            <h1>
                {blog.title}
            </h1>
            <h3>
                {blog.author}
            </h3>
            <p>{blog.description}</p>
            <button onClick={deleteBlog} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            <Link to={"/edit/"+id} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</Link>
        </div>
        </>
    )
}
export default SinglePage;