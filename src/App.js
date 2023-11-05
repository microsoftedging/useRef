import './App.css';
import Cookie from './assets/cookie.png'

// For this assignment you're going to make the cookie image do ONE 360 spin whenever it is clicked

// This is what you'll need:
// 1. CSS Animations
// 2. onClick event handler
// 3. useRef
// 4. Make your own function inside App() and classList.add('your-animation') whenever the onClick event is triggered

function App() {

  return (
    <div className="app">
      <img alt="cookie" className="spin" src={Cookie} draggable="false" />
    </div>
  );
}

export default App;

// Resources: ChatGPT, Mozilla Web Docs, W3Schools, Stack Overflow, Google, YouTube, and me (if needed) 
// Watch this video for a general overview on useRef: https://www.youtube.com/watch?v=A0T9-66uF74&ab_channel=LarryDev