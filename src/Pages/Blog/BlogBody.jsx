import { lazy, useEffect, useState } from 'react';
import axios from 'axios';
const BlogCard = lazy(()=>import("./BlogCard"))

function BlogBody() {
    const [blogs,setBlogs] = useState([])

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:8000/api/v1/blog")
        const res = response.data
        setBlogs(res)
        return res;
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}} className='container-fluid'>
        {
            blogs.map((blog,id)=>(
                <BlogCard key={blog._id}
                    CardImage={blog.fileUrl}
                    CardTitle={blog.title}
                    CardText={blog.summary}
                    id={blog._id}
                />
            ))
        }      
        
    </div>
  );
}

export default BlogBody;
