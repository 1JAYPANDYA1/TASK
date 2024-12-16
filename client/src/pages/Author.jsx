import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'

const Author = () => {
  const [posts, setposts] = useState(data)
  const [author, setauthor] = useState(useParams().name)
  const [searchPosts, setsearchPosts] = useState([])
  const handleSearch = () => {
    const searches = posts.filter((value, index) => ( value.author.name === author))
    console.log(searches)
    setsearchPosts(searches)
  }
  useEffect(() => {
    handleSearch()
  }, [])
  return (
    <div>
      {
        searchPosts.length > 0 ? (
          searchPosts.map((post, index) => (
            <div key={index}>
              <div className='card'>
                <h3>{post.title}</h3>
                <span>{post.body}</span>
                <span>{post.tags}</span>
                <span>{post.author.name}</span>
              </div>
            </div>
          ))
        ) : (<>No items</>)
      } 
    </div>
  )
}

export default Author
