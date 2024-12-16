import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import data from '../data/data.json'
import '../css/Home.css'
const Home = () => {
  const navigate = useNavigate()
  const [posts, setposts] = useState(data)
  const [searchPosts, setsearchPosts] = useState([])
  const handleSearch = (search) => {
    const searches = posts.filter((value, index) => (value.title.match(search) || value.author.name == search || value.body.match(search)))
    setsearchPosts(searches)
  }
  const redirectToAuthor = (name) => {
    navigate(`/author/${name}`)
  }
  return (
    <div>
      <input type="search" placeholder='Search...' onChange={(e) => handleSearch(e.target.value)} />
      <h1>Filtered Items</h1>
      {
        searchPosts.length > 0 ? (
          searchPosts.map((post, index) => (
            <div key={index}>
              <div className='card'>
                <h3>{post.title}</h3>
                <span>{post.body}</span>
                <span>{post.tags}</span>
                <button onClick={()=>redirectToAuthor(post.author.name)}>{post.author.name}</button>
              </div>
            </div>
          ))
        ) : (<></>)
      }
      {
        searchPosts.length>0?(<></>):(
          posts.map((post, index) => (
            <div key={index}>
            <div className='card'>
              <h3>{post.title}</h3>
              <span>{post.body}</span>
              <span>{post.tags}</span>
              <button onClick={() => redirectToAuthor(post.author.name)}>{post.author.name}</button>
            </div>
          </div>
        )
        ))
      }
    </div>
  )
}

export default Home
