import { useState, useEffect } from 'react'; 
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null); 

  const [name, setName] = useState('mario'); 

  // Fetching data when the component renders
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data); 
        setBlogs(data); 
      })
  }, []); 

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}
    </div>
  );
}  
 
export default Home;