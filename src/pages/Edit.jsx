import { useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()

    async function sentDataToBackend(e) {
        e.preventDefault();
        const response = await axios.put('https://687af361abb83744b7ee4703.mockapi.io/blogs/' + id, {
            title: title,
            subtitle: subtitle,
            description: description,
            image: image
        })
        alert("Your blog is created successfully")
        navigate('/')
        console.log(response)
    }
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                {/* Page Title */}
                <form onSubmit={sentDataToBackend} className="grid grid-cols-1 gap-6">
                <h1 className="text-3xl font-bold text-[black] mb-6 required" >Create Event</h1>
                
                    {/* Title */}
                    <div className="p-2">
                        <input required onChange={(e)=>setTitle(e.target.value)} type="text" id="title" name="title" placeholder="Title" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{ backgroundColor: '#f6f6f6' }} />
                    </div>
                    <div className="p-2">
                        <input required onChange={(e)=>setSubtitle(e.target.value)} type="text" id="subtitle" name="subtitle" placeholder="Subtitle" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{ backgroundColor: '#f6f6f6' }} />
                    </div>

                   
                    {/* Description and Image Upload */}
                    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Description */}
                        <div>
                            <textarea required onChange={(e) => setDescription(e.target.value)} id="description" name="description" rows={3} placeholder="Description" className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{ backgroundColor: '#f6f6f6' }} defaultValue={""} />
                        </div>
                        {/* Image Upload */}
                        <div>
                             <input required onChange={(e) => setImage(e.target.value)} type="text" id="title" name="title" placeholder="image" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{ backgroundColor: '#f6f6f6' }} />

                            {/* <input id="image-upload" name="image" type="file" accept="image/*" className="sr-only" /> */}
                        </div>
                    </div>
                  
                   
                   
                    {/* Registration Button */}
                    <div className="col-span-full mt-6 p-2">
                        <button type="submit" className="block w-full bg-[#8c0327] hover:bg-[#6b0220] text-white font-bold py-3 px-4 rounded-full">
                            Register for Event
                        </button>
                    </div>
                </form>
            </div>


        </>



    )
}
export default Edit;