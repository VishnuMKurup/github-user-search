import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${query}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  };

  return (
    <div className='Container'>
      <div className='App-wrap'>
        <div className='Container-wrap'>
        <h1 className='title'>Divfinder</h1>
        <div className='Search-wrap'>
          <form onSubmit={handleSubmit} className='Search-form'>
            <input
              type="text"
              // placeholder="Enter GitHub username"
              value={query}
              onChange={handleChange}
              className='search'
            />
            <button type="submit" className='search-btn'>Search</button>
          </form>
        </div>

        {user && (
          <div className='user-data'>
            <div className='user-image'>
              <div className='avatar-img'>
                <img src={user.avatar_url} alt={`${user.login} avatar`} />
              </div>
              <div>
                <h2>{user.login}</h2>
                <p>test</p>
                <p>test</p>
                <p>test</p>
              </div>
            </div>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

            <div className='user-details'>
              <div className='user-list'>
                <label>Repo</label>
                <p>{user.public_repos}</p>
              </div>
              <div className='user-list'>
                <label>Followers:</label>
                <p> {user.followers}</p>
              </div>
              <div className='user-list'>
                <label>Following:</label>
                <p> {user.following}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>      
    </div>
  );
}

export default App;
