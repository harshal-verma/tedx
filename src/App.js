import React, { useState } from "react";
import "./App.css";

var videoDB = {
  Humour: [
    {
      name: "The agony of trying to unsubscribe",
      speaker: "James Veitch",
      rating: "4.5/5",
      link: "https://youtu.be/KUb0JBOIOAA",
    },
    {
      name: "How I hacked online dating",
      speaker: "Amy Webb",
      rating: "4/5",
      link: "https://youtu.be/d6wG_sAdP0U",
    },
    {
      name: "This is what happens when you reply to spam mail",
      speaker: "James Veitch",
      rating: "4.5/5",
      link: "https://youtu.be/LiLS7U7YIdc",
    },
  ],
  "Mental Health": [
    {
      name: "The puzzle of motivation",
      speaker: "Daniel Pink",
      rating: "4.5/5",
      link: "https://youtu.be/rrkrvAUbU9Y",
    },
    {
      name: "Inside the mind of a master procrastinator",
      speaker: "Tim Urban",
      rating: "5/5",
      link: "https://youtu.be/arj7oStGLkU",
    },
    {
      name: "What They Don't Tell You About Mental Illness",
      speaker: "Elizabeth Medina ",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=ieXB-BGxYwg",
    }
  ],
  "Self Improvement": [
    {
      name: "How great leaders inspire action?",
      speaker: "Simon Sinek",
      rating: "5/5",
      link: "https://youtu.be/qp0HIF3SfI4",
    },
    {
      name: "How to speak so that people want to listen?",
      speaker: "Julian Treasure",
      rating: "4.5/5",
      link: "https://youtu.be/eIho2S0ZahI",
    },
    {
      name: "Your body language may shape who you are",
      speaker: "Amy Cuddy",
      rating: "4/5",
      link: "https://youtu.be/Ks-_Mh1QhMc",
    },
  ],
};

const videoList = Object.keys(videoDB);

function App() {
  const [selectedGenre, setGenre] = useState("Humour");

  function btnClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="54"
            viewBox="0, 0, 96, 54"
          >
            <title>TED</title>
            {/* <rect x="0" y="0" width="640" height="360" fill="none"></rect> */}
            <path
              d="M21.244 21.053h-6.761V14.85h21.012v6.203h-6.762V39.15h-7.489V21.053zm15.414-6.203h20.43v6.203H44.147v2.992h12.941v5.837H44.147v3.065h12.941v6.203h-20.43v-24.3zm21.666 0h12.287c8.071 0 10.906 5.984 10.906 12.114 0 7.443-3.926 12.186-12.36 12.186H58.324v-24.3zm7.489 18.097h2.908c4.653 0 5.308-3.794 5.308-6.056 0-1.533-.509-5.765-5.89-5.765H65.74l.073 11.821z"
              fill="#E62B1E"
            ></path>
          </svg>
          <svg
            style={{ width: "210px" }}
            viewBox="0 0 343 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.708067,0.848485 L3.110116,0.848485 L3.110116,28.1212123 L0.708067,28.1212123 L0.708067,0.848485 Z M24.128041,0.848485 L24.128041,27.6545687 L22.097408,27.6545687 L22.097408,23.8695704 C20.691585,26.5657335 18.244411,28.1212123 14.964156,28.1212123 C9.549133,28.1212123 6.112676,24.0769675 6.112676,17.9587512 C6.112676,11.8405348 9.549133,7.79629 14.964156,7.79629 C18.140276,7.79629 20.587449,9.2999195 21.941205,11.8405348 L21.941205,0.848485 L24.128041,0.848485 Z M22.04534,17.9587512 C22.04534,12.9293699 19.389896,9.7147138 15.224494,9.7147138 C11.007024,9.7147138 8.403648,13.0330685 8.403648,18.0624497 C8.403648,23.091831 11.059092,26.2027885 15.224494,26.2027885 C19.389896,26.2027885 22.04534,23.0399817 22.04534,17.9587512 Z M45.145967,18.7844776 L29.901512,18.7844776 C30.108216,23.5293755 32.536994,26.1824368 36.567731,26.1824368 C39.719974,26.1824368 41.838695,24.3457021 42.458809,21.5395796 L44.680882,21.5395796 C43.854064,25.3661102 41.011878,28.1212123 36.516055,28.1212123 C31.090062,28.1212123 27.731114,24.1416204 27.731114,18.1212123 C27.731114,12.2028449 31.038386,8.1212123 36.464379,8.1212123 C42.148752,8.1212123 45.145967,12.5599878 45.145967,18.0701919 L45.145967,18.7844776 Z M29.901512,16.8967225 L42.768866,16.8967225 C42.562161,12.968151 40.391764,10.0089674 36.412703,10.0089674 C32.692022,10.0089674 30.31492,12.5089674 29.901512,16.8967225 Z M64.962869,8.5293755 L64.962869,27.6620286 L62.953462,27.6620286 L62.953462,24.0395796 C61.613858,26.5906 59.295313,28.1212123 56.100873,28.1212123 C50.742456,28.1212123 47.548016,24.1416204 47.548016,18.1212123 C47.548016,12.1008041 50.742456,8.1212123 56.100873,8.1212123 C59.192266,8.1212123 61.510812,9.5497837 62.850416,11.9987633 L62.850416,8.5803959 L64.962869,8.5803959 L64.962869,8.5293755 Z M62.901939,18.0701919 C62.901939,13.1212123 60.531871,9.957947 56.306965,9.957947 C52.185107,9.957947 49.711992,13.2232531 49.711992,18.1722327 C49.711992,23.1212123 52.185107,26.1824368 56.306965,26.1824368 C60.480347,26.1824368 62.901939,23.0701919 62.901939,18.0701919 Z M67.965429,21.7436613 L70.136818,21.7436613 C70.395316,24.7538653 72.101407,26.2844776 75.978886,26.2844776 C79.442768,26.2844776 81.407357,25.1110082 81.407357,22.6620286 C81.407357,20.7232531 80.166564,19.7028449 76.650983,19.0906 L74.686393,18.7334572 C70.550416,17.968151 68.585826,16.335498 68.585826,13.3252939 C68.585826,10.1110082 71.170812,8.1212123 75.513589,8.1212123 C80.735261,8.1212123 83.010049,10.468151 83.165148,14.0395796 L80.99376,14.0395796 C80.786961,11.2844776 79.184269,9.9069266 75.513589,9.9069266 C72.463305,9.9069266 70.705515,11.1314164 70.705515,13.2742735 C70.705515,15.4171306 72.308206,16.2844776 75.30679,16.8457021 L77.271379,17.2028449 C81.717556,18.0191715 83.578746,19.6008041 83.578746,22.5599878 C83.578746,26.2844776 80.476762,28.1212123 76.030586,28.1212123 C70.912314,28.1212123 68.223928,25.8252939 67.965429,21.7436613 Z M120.209988,8.7272729 L113.391269,28.1212123 L111.118363,28.1212123 L107.399061,16.6917173 C106.830835,14.9850507 106.262608,13.1232325 105.797696,11.3648486 C105.332783,13.1232325 104.764556,14.9850507 104.19633,16.6917173 L100.477029,28.1212123 L98.204123,28.1212123 L91.385404,8.7272729 L93.65831,8.7272729 L97.377611,19.3810103 C98.100809,21.5014143 98.720692,23.5701012 99.392233,25.638788 C100.012116,23.518384 100.632,21.4496971 101.30354,19.3810103 L104.7129,8.7272729 L106.985806,8.7272729 L110.446822,19.3810103 C111.118363,21.4496971 111.738246,23.5701012 112.306473,25.638788 C112.926356,23.5701012 113.597897,21.4496971 114.269437,19.3810103 L118.040395,8.7272729 L120.209988,8.7272729 Z M120.209988,18.1212123 C120.209988,12.1008041 123.875005,8.1212123 129.19186,8.1212123 C134.560336,8.1212123 138.225353,12.1008041 138.225353,18.1212123 C138.225353,24.1416204 134.560336,28.1212123 129.19186,28.1212123 C123.926625,28.1212123 120.209988,24.1416204 120.209988,18.1212123 Z M136.057314,18.1212123 C136.057314,13.1722327 133.373077,10.0089674 129.24348,10.0089674 C125.113884,10.0089674 122.481266,13.1722327 122.481266,18.1212123 C122.481266,23.0701919 125.165503,26.2334572 129.24348,26.2334572 C133.373077,26.2334572 136.057314,23.1212123 136.057314,18.1212123 Z M151.43662,8.1738438 L151.43662,10.2264754 L150.572391,10.2264754 C146.302082,10.2264754 143.912743,12.910686 143.912743,17.0685807 L143.912743,28.1212123 L141.828426,28.1212123 L141.828426,8.4370017 L143.811069,8.4370017 L143.811069,12.5422649 C144.827809,10.2264754 146.861289,8.1212123 150.369043,8.1212123 C150.674065,8.1738438 151.029924,8.1738438 151.43662,8.1738438 Z M161.645327,10.1813143 L157.610947,10.1813143 L157.610947,28.1212123 L155.434505,28.1212123 L155.434505,10.1813143 L152.037132,10.1813143 L152.037132,8.2761924 L155.434505,8.2761924 L155.434505,2.66666682 L157.610947,2.66666682 L157.610947,8.2761924 L161.645327,8.2761924 L161.645327,10.1813143 Z M179.06018,15.1166493 L179.06018,28.1212123 L176.904806,28.1212123 L176.904806,15.2745994 C176.904806,11.5890957 175.012283,9.851644 171.647797,9.851644 C168.703872,9.851644 165.654807,12.0102962 165.602237,17.0647012 L165.602237,28.1212123 L163.446863,28.1212123 L163.446863,0.848485 L165.602237,0.848485 L165.602237,11.799696 C166.811349,9.4830936 169.124433,7.9035921 172.068358,7.9035921 C176.536815,7.9035921 179.06018,10.4834446 179.06018,15.1166493 Z M189.869399,21.7436613 L192.040787,21.7436613 C192.299286,24.7538653 194.005376,26.2844776 197.882856,26.2844776 C201.346737,26.2844776 203.311327,25.1110082 203.311327,22.6620286 C203.311327,20.7232531 202.070533,19.7028449 198.554952,19.0906 L196.590363,18.7334572 C192.454385,17.968151 190.489795,16.335498 190.489795,13.3252939 C190.489795,10.1110082 193.074781,8.1212123 197.417558,8.1212123 C202.63923,8.1212123 204.914018,10.468151 205.069117,14.0395796 L202.897729,14.0395796 C202.69093,11.2844776 201.088238,9.9069266 197.417558,9.9069266 C194.367275,9.9069266 192.609484,11.1314164 192.609484,13.2742735 C192.609484,15.4171306 194.212175,16.2844776 197.210759,16.8457021 L199.175349,17.2028449 C203.621525,18.0191715 205.482715,19.6008041 205.482715,22.5599878 C205.482715,26.2844776 202.380732,28.1212123 197.934555,28.1212123 C192.816283,28.1212123 190.127897,25.8252939 189.869399,21.7436613 Z M225.299616,18.3030305 C225.299616,24.4329006 221.853199,28.4848486 216.42248,28.4848486 C213.237155,28.4848486 210.782887,26.9783551 209.425208,24.4329006 L209.425208,35.3939395 L207.284251,35.3939395 L207.284251,8.5887447 L209.320771,8.5887447 L209.320771,12.3809525 C210.730669,9.6796538 213.184936,8.1212123 216.474698,8.1212123 C221.853199,8.1212123 225.299616,12.2251084 225.299616,18.3030305 Z M223.054223,18.1991344 C223.054223,13.1601733 220.338864,10.0432902 216.161388,10.0432902 C211.931693,10.0432902 209.320771,13.2640694 209.320771,18.3030305 C209.320771,23.3419915 211.983912,26.5627707 216.161388,26.5627707 C220.391082,26.5627707 223.054223,23.2380954 223.054223,18.1991344 Z M238.510884,8.1738438 L238.510884,10.2264754 L237.646655,10.2264754 C233.376346,10.2264754 230.987007,12.910686 230.987007,17.0685807 L230.987007,28.1212123 L228.902689,28.1212123 L228.902689,8.4370017 L230.885333,8.4370017 L230.885333,12.5422649 C231.902073,10.2264754 233.935553,8.1212123 237.443307,8.1212123 C237.799166,8.1738438 238.104188,8.1738438 238.510884,8.1738438 Z M255.925737,18.7844776 L240.681281,18.7844776 C240.887985,23.5293755 243.316763,26.1824368 247.347501,26.1824368 C250.499744,26.1824368 252.618465,24.3457021 253.238578,21.5395796 L255.460652,21.5395796 C254.633834,25.3661102 251.791647,28.1212123 247.295824,28.1212123 C241.869832,28.1212123 238.510884,24.1416204 238.510884,18.1212123 C238.510884,12.2028449 241.818156,8.1212123 247.244148,8.1212123 C252.928522,8.1212123 255.925737,12.5599878 255.925737,18.0701919 L255.925737,18.7844776 Z M240.681281,16.8967225 L253.548635,16.8967225 C253.341931,12.968151 251.171534,10.0089674 247.192472,10.0089674 C243.471792,10.0089674 241.043014,12.5089674 240.681281,16.8967225 Z M275.742638,8.5293755 L275.742638,27.6620286 L273.733232,27.6620286 L273.733232,24.0395796 C272.393628,26.5906 270.075082,28.1212123 266.880642,28.1212123 C261.522226,28.1212123 258.327785,24.1416204 258.327785,18.1212123 C258.327785,12.1008041 261.522226,8.1212123 266.880642,8.1212123 C269.972036,8.1212123 272.290581,9.5497837 273.630186,11.9987633 L273.630186,8.5803959 L275.742638,8.5803959 L275.742638,8.5293755 Z M273.681709,18.0701919 C273.681709,13.1212123 271.31164,9.957947 267.086735,9.957947 C262.964876,9.957947 260.491761,13.2232531 260.491761,18.1722327 C260.491761,23.1212123 262.964876,26.1824368 267.086735,26.1824368 C271.31164,26.1824368 273.681709,23.0701919 273.681709,18.0701919 Z M296.760564,0.848485 L296.760564,27.6545687 L294.72993,27.6545687 L294.72993,23.8695704 C293.324107,26.5657335 290.876933,28.1212123 287.596679,28.1212123 C282.181656,28.1212123 278.745199,24.0769675 278.745199,17.9587512 C278.745199,11.8405348 282.181656,7.79629 287.596679,7.79629 C290.772798,7.79629 293.219972,9.2999195 294.573728,11.8405348 L294.573728,0.848485 L296.760564,0.848485 Z M294.677863,17.9587512 C294.677863,12.9293699 292.022419,9.7147138 287.857016,9.7147138 C283.691614,9.7147138 281.03617,13.0330685 281.03617,18.0624497 C281.03617,23.091831 283.691614,26.2027885 287.857016,26.2027885 C292.022419,26.2027885 294.677863,23.0399817 294.677863,17.9587512 Z M300.363637,3.69268457 C300.363637,2.79767386 301.177234,2.06060621 302.165173,2.06060621 C303.153113,2.06060621 303.96671,2.79767386 303.96671,3.69268457 C303.96671,4.58769528 303.153113,5.3247629 302.165173,5.3247629 C301.235348,5.3247629 300.363637,4.58769528 300.363637,3.69268457 Z M301.002892,8.3783289 L303.385569,8.3783289 L303.385569,28.1212123 L301.002892,28.1212123 L301.002892,8.3783289 Z M323.183099,15.2235455 L323.183099,28.1212123 L321.027725,28.1212123 L321.027725,15.3801973 C321.027725,11.7249881 319.135202,10.001818 315.770717,10.001818 C312.826792,10.001818 309.777726,12.1427263 309.725156,17.1555846 L309.725156,28.1212123 L307.569783,28.1212123 L307.569783,8.5397343 L309.620016,8.5397343 L309.620016,12.1949435 C310.829128,9.7407316 313.194782,8.1219961 316.191277,8.1219961 C320.659735,8.0697788 323.183099,10.6284253 323.183099,15.2235455 Z M343,8.5380913 L343,27.3497594 C343,32.7170775 340.336552,36.0000002 334.497455,36.0000002 C329.73398,36.0000002 327.172972,33.4987257 326.814431,29.9031437 L328.914458,29.9031437 C329.272999,32.6128577 331.168145,34.1761542 334.548675,34.1761542 C338.851168,34.1761542 340.951194,31.9875391 340.951194,27.3497594 L340.951194,24.6921553 C339.51703,27.08921 337.212123,28.5482868 334.138914,28.5482868 C328.863238,28.5482868 325.585148,24.4837158 325.585148,18.3347495 C325.585148,12.1857832 328.863238,8.1212123 334.138914,8.1212123 C337.263343,8.1212123 339.67069,9.6323989 341.053635,12.1857832 L341.053635,8.5380913 L343,8.5380913 Z M340.951194,18.3347495 C340.951194,13.2800908 338.390186,10.049278 334.343794,10.049278 C330.194962,10.049278 327.736394,13.3843105 327.736394,18.3347495 C327.736394,23.2851885 330.246182,26.6202211 334.343794,26.6202211 C338.390186,26.6202211 340.951194,23.4415181 340.951194,18.3347495 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <p
          style={{
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          select a topic to get started 👇
        </p>
      </header>

      <div
        style={{
          width: "40%",
          margin: "0.9rem auto",
          display: "flex",
        }}
      >
        {videoList.map((genre) => {
          return (
            <button
               className="active"
               id="active"
              style={{
                margin: "0px 8px",
                width: "33%",
                backgroundColor: "transparent",
                border: "none",
                color: "#ff0000",
                fontWeight: "bolder",
                cursor: "pointer",
                padding: "8px 16px",
                borderRadius: "3px",
              }}
              onClick={() => btnClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <ul>
        {videoDB[selectedGenre].map((item) => {
          return (
            <a href={item.link}
                className="youtubeLink"
                title="View on Youtube"
                target="_blank"
                rel="noreferrer"
                style={{
                  margin: "0rem auto",
                width: "50%",
                display: "block",
                }}
              >
            <li
              key="item"
              style={{
                padding: "0rem 1rem",
                marginBottom: "1.5rem",
                listStyle: "none",
                height: "auto",
                border: "1px solid #d1d5db",
                borderRadius: "3px",
              }}
            >
              <h2>{item.name}</h2>
              <p>by - {item.speaker}</p>
            </li>
            </a>
          );
        })}
      </ul>
      <footer
        style={{
          textAlign: "center",
          backgroundColor: "#393c44",
          padding: "0.5rem",
        }}
      >
        &lt;/&gt; <span
        style={{
          color: "#F59E0B",
          alignSelf: "flex-end",
        }}
        >by Harshal</span>
      </footer>
    </div>
  );
}

export default App;
