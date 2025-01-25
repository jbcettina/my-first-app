import caityVideo from '/Users/jcettina/my-first-react-app/src/assets/caity-movie.mp4'
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const messages = [
    "Caity is BAD!",
    "Caity is Sassy",
    "Caity is Good",
    "Caity is Smart",
    "Caity is Talented",
    "Caity is Kick Ass",
    "Caity is Funny",
    "Caity is Loved",
    "Caity is a Leader",
    "Caity is Smart",
    "Caity is a BOSS",
    "Caity is a BOSS",
    "Caity is Sexy",
    "Caity is Hot",
    "Caity is my Future Wife"
  ];

   // Store the current message text
   const [currentMessage, setCurrentMessage] = useState("");

   // Store a boolean that indicates whether we're fading out
  const [fadeOut, setFadeOut] = useState(false);

  // 2. Create a function to handle the button click.
  const handleClick = () => {
    // Pick a random message
    const randomIndex = Math.floor(Math.random() * messages.length);
    const newMessage = messages[randomIndex];
      // Set the new message
    setCurrentMessage(newMessage);
     // Reset fadeOut to false so message can appear in full opacity
     setFadeOut(false);
  };

   // Whenever currentMessage changes, start a timeout to fade it out
   useEffect(() => {
    if (currentMessage) {
      // Wait 2 seconds before starting the fade out
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 2000);
      // Then remove the message fully after it's done fading (1s more)
      const removeTimer = setTimeout(() => {
        setCurrentMessage("");
      }, 3000);
      // Clear timers if the component unmounts or if user triggers a new message
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };

    }
  },[currentMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <video src={caityVideo}
        autoPlay
        muted
        loop
        playsInline
        className="caityVideo"
        />
        <h1>Bad Caity App</h1>

           {/* Always render this container so the layout doesn't jump */}
        <div className="message-container">
          {/* The box is always in the DOM, but might have no text */}
          <div 
            className={`message-box ${
              fadeOut ? 'fade-out' : ''
            } ${currentMessage ? 'visible' : 'invisible'}`}
          >
            {currentMessage}
          </div>
        </div>

        <button className="my-button" onClick={handleClick}>Is Caity Bad?</button>
        
        <p>
          How many times can you pump Caity up before she's BAD
        </p>
      </header>
    </div>
  );
}

export default App;
