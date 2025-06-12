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
            I am Muhsin Thadathil Kandy, currently serving as a Lead Quality Inspector at SAMI Advanced Electronics. With a deep passion for electronics, artificial intelligence, and cutting-edge technologies, I am dedicated to ensuring the highest standards of quality and performance in every project I undertake. My role involves meticulous inspection processes, quality assurance, and leading teams to uphold industry-leading standards in electronic manufacturing. I continuously strive to enhance my technical expertise and leadership skills, aiming to transition into roles such as Quality Engineer or AI Architect in the near future.
          </p>
           <p style={{ maxWidth: '600px', margin: '0 auto' }}>
             My passion lies at the intersection of electronics and artificial intelligence. I actively pursue knowledge in emerging technologies and AI applications, driven by the ambition to innovate and contribute to transformative projects.
          </p>
           <p style={{ maxWidth: '600px', margin: '0 auto' }}>
             Looking ahead, I am focused on developing my skills to become a Quality Engineer or AI Architect — roles where I can blend quality control expertise with AI-driven solutions to revolutionize product development and operational efficiency.
          </p>
        </section>
      </div>
    </div>
  )
}




export default App
