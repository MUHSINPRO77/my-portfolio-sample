import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import background from './assets/background.jpeg'
import profilePic from './assets/profile.jpg';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a192f',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        padding: '40px 20px',
        boxSizing: 'border-box',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Hello, I'm Muhsin Thadathil Kandy</h1>
        <img
          src={profilePic}
          alt="Muhsin Thadathil Kandy"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '8px',
            objectFit: 'cover',
            marginTop: '10px',
            border: '2px solid #A6FF00',
          }}
        />
        <p>Welcome to my personal portfolio website!</p>

        <section style={{ marginTop: '40px' }}>
          <h2>About Me</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            I am currently a Lead Quality Inspector at SAMI Advanced Electronics.
            I have a strong interest in new technologies and am an AI enthusiast.
            I enjoy learning and exploring innovative tools and solutions.
          </p>
        </section>
      </div>
    </div>
  )
}




export default App
