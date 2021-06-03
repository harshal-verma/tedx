import React , { useState } from 'react';
import './App.css';

var videoDB = { 
  Humour: [ 
    { 
      name: "The agony of trying to unsubscribe", 
      speaker: "James Veitch", 
      rating: "4.5/5", 
      link: "https://youtu.be/KUb0JBOIOAA" 
    }, 
    { 
      name: "How I hacked online dating", 
      speaker: "Amy Webb", 
      rating: "4/5", 
      link: "https://youtu.be/d6wG_sAdP0U" 
    }, 
    { 
      name: "This is what happens when you reply to spam mail", 
      speaker: "James Veitch", 
      rating: "4.5/5", 
      link: "https://youtu.be/LiLS7U7YIdc" 
    } 
  ], 
  "Mental Health": [ 
    { 
      name: "The puzzle of motivation", 
      speaker: "Daniel Pink", 
      rating: "4.5/5", 
      link: "https://youtu.be/rrkrvAUbU9Y" 
    }, 
    { 
      name: "Inside the mind of a master procrastinator", 
      speaker: "Tim Urban", 
      rating: "5/5", 
      link: "https://youtu.be/arj7oStGLkU" 
    } 
  ], 
  "Self Improvement": [ 
    { 
      name: "How great leaders inspire action?", 
      speaker: "Simon Sinek", 
      rating: "5/5", 
      link: "https://youtu.be/qp0HIF3SfI4" 
    }, 
    { 
      name: "How to speak so that people want to listen?", 
      speaker: "Julian Treasure", 
      rating: "4.5/5", 
      link: "https://youtu.be/eIho2S0ZahI" 
    }, 
    { 
      name: "Your body language may shape who you are", 
      speaker: "Amy Cuddy", 
      rating: "4/5", 
      link: "https://youtu.be/Ks-_Mh1QhMc" 
    } 
  ]
};

const videoList = Object.keys(videoDB);


function App() {
const [ selectedGenre , setGenre ] = useState("Humour");

function btnClickHandler(genre){
    setGenre(genre);
}

  return (
    <div className="App">
      <h1
      style = {{
        textAlign: "center",
      }}
      >TED Ideas worth spreading</h1>
      <p
      style = {{
        textAlign: "center",
      }}
      >
                Checkout my favorite ted talks. Select a topic to get started
              </p>
      <div
      style = {{
        width: "50%",
        margin: "0 auto",
        display: "flex",
      }}
      >
      {
         videoList.map((genre) => {
           return <button
           style={{
             margin: "16px 8px",
             width: "30%",
           }}
           onClick = {() => btnClickHandler(genre)}
           >{genre}</button>
         })
      }
      </div> 
      <ul> 
      {videoDB[selectedGenre].map((item) => {
          return <li
          key="item"
          style={{
            border: "1px solid black",
            padding: "0.5rem 1rem",
            marginBottom: "1rem",
            listStyle: "none",
            margin: "0 auto",
            width: "50%",
          }}
          >
             <h2>{item.name}</h2>
             <p>{item.speaker}</p>
             <p>{item.rating}</p>
             <a 
             href={item.link}>link</a>
          </li>
        })
      }
      </ul>
      <footer
       style = {{
        textAlign: "center",
      }}
      >made by Harshal</footer>
    </div>
  );
}

export default App;
