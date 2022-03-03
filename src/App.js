import { useEffect } from "react";

const data = [
  {
    id: "snare",
    letter: "Q",
    src: "https://www.myinstants.com/media/sounds/snare.mp3",
  },
  {
    id: "bass1",
    letter: "W",
    src: "https://www.myinstants.com/media/sounds/bass-drum.mp3",
  },
  {
    id: "hihat",
    letter: "E",
    src: "https://www.myinstants.com/media/sounds/hi-hat.mp3",
  },
  {
    id: "tomtom",
    letter: "A",
    src: "https://www.myinstants.com/media/sounds/tom-tom.mp3",
  },
  {
    id: "kick",
    letter: "S",
    src: "https://www.myinstants.com/media/sounds/kick.mp3",
  },
  {
    id: "gun",
    letter: "D",
    src: "https://www.myinstants.com/media/sounds/gun.mp3",
  },
  {
    id: "guitar",
    letter: "Z",
    src: "https://www.myinstants.com/media/sounds/guitar.mp3",
  },
  {
    id: "drumbeat",
    letter: "X",
    src: "https://www.myinstants.com/media/sounds/drum.mp3",
  },
  {
    id: "laser",
    letter: "C",
    src: "https://www.myinstants.com/media/sounds/laser.mp3",
  },
];

function DrumPad() {
  function handleClick(e) {
    const audio = document.querySelector(`#${e.target.innerText}`);
    audio.currentTime = 0;
    audio.play();
  }
  return (
    <div id="drum-pad-container" style={{ flex: 2, marginRight: ".5%" }}>
      <table style={{ height: "100%", width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <button
                onClick={(e) => handleClick(e)}
                className="drum-pad"
                id="boom"
                style={{ height: "100%", width: "100%" }}
              >
                <audio
                  className="clip"
                  id="Q"
                  src="https://www.myinstants.com/media/sounds/snare.mp3"
                ></audio>
                Q
              </button>
            </td>
            <td>
              <button
                className="drum-pad"
                id="bass1"
                style={{ height: "100%", width: "100%" }}
                onClick={(e) => handleClick(e)}
              >
                <audio
                  className="clip"
                  id="W"
                  src="https://www.myinstants.com/media/sounds/bass-drum.mp3"
                ></audio>
                W
              </button>
            </td>
            <td>
              <button
                onClick={(e) => handleClick(e)}
                className="drum-pad"
                id="hihat"
                style={{ height: "100%", width: "100%" }}
              >
                <audio
                  className="clip"
                  id="E"
                  src="https://www.myinstants.com/media/sounds/hi-hat.mp3"
                ></audio>
                E
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={(e) => handleClick(e)}
                className="drum-pad"
                id="tomtom"
                style={{ height: "100%", width: "100%" }}
              >
                <audio
                  className="clip"
                  id="A"
                  src="https://www.myinstants.com/media/sounds/tom-tom.mp3"
                ></audio>
                A
              </button>
            </td>
            <td>
              <button
                onClick={(e) => handleClick(e)}
                className="drum-pad"
                id="kick"
                style={{ height: "100%", width: "100%" }}
              >
                <audio
                  className="clip"
                  id="S"
                  src="https://www.myinstants.com/media/sounds/kick.mp3"
                ></audio>
                S
              </button>
            </td>
            <td>
              <button
                className="drum-pad"
                id="ride"
                style={{ height: "100%", width: "100%" }}
              >
                <audio className="clip" id="D" src="sounds/ride.wav"></audio>D
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="drum-pad"
                id="snare"
                style={{ height: "100%", width: "100%" }}
              >
                <audio className="clip" id="Z" src="sounds/snare.wav"></audio>Z
              </button>
            </td>
            <td>
              <button
                onClick={(e) => handleClick(e)}
                className="drum-pad"
                id="drumbeat"
                style={{ height: "100%", width: "100%" }}
              >
                <audio
                  className="clip"
                  id="X"
                  src="https://www.myinstants.com/media/sounds/drum.mp3"
                ></audio>
                X
              </button>
            </td>
            <td>
              <button
                onClick={(e) => handleClick(e)}
                className="drum-pad"
                id="laser"
                style={{ height: "100%", width: "100%" }}
              >
                <audio
                  className="clip"
                  id="C"
                  src="https://www.myinstants.com/media/sounds/laser.mp3"
                ></audio>{" "}
                C
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function DrumButton() {}

function App() {
  useEffect(() => {});

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        id="drum-machine"
        style={{
          width: "66%",
          height: "60%",
          border: "2px solid black",
          padding: "1%",
          display: "flex",
        }}
      >
        <DrumPad />
        <div
          id="display-container"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            id="display"
            style={{
              backgroundColor: "lavenderblush",
              textAlign: "center",
            }}
          >
            Display
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
