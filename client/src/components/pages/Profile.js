import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from "../../main";

function Profile() {

  const [post, setPost] = useState({
    title: '',
    content: '',
  });
    
  const {title, content} = post;

  const onChange = (e) => setPost({...post, [e.target.name]: e.target.value})

  const [id, setUsername] = useState('')
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem('username');
    setUsername(id);
    fetchData('/post/getPostContent',
        {
            id
        },
        "POST")
      .then((data)=> {
        if(!data.message) {
          console.log(data);
          setPosts(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.setItem('username', '');
    navigate('/');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData('/post/addPost',
      {
        id,
        title,
        content
      },
      "POST")
    .then((data)=> {
      if(!data.message) {
        console.log(data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
    fetchData('/post/getPostContent',
        {
            id
        },
        "POST")
      .then((data)=> {
        if(!data.message) {
          console.log(data);
          setPosts(data);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <br/>
      <h1>Welcome, {id}!</h1>
      <input type="button" onClick={logout} className="btn btn-light" value="Log Out"></input>
      <br/><br/><br/><br/>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input type="text" 
                 className="form-control" 
                 id="title" 
                 name='title'
                 placeholder="Enter title" 
                 onChange={onChange}
                 value={title}></input>
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="content">Post Content</label>
          <input type="text" 
                 className="form-control" 
                 id="content" 
                 name="content"
                 placeholder="Enter content"
                 onChange={onChange}
                 value={content}></input>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary btn-dark">Post</button>
      </form>
      <br/><br/><br/><br/>
      <h1>Posts:</h1>
      <div>
        {posts.map((item, index) => (
                <div key={index}>
                  <div className='post'>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                  </div>
                  <br/>
                </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;