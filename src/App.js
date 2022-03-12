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

function DrumButton({ idSound, letter, source }) {
  function handleClick(e) {
    const audio = document.querySelector(`#${e.target.innerText}`);
    audio.currentTime = 0;
    audio.play();
  }
  return (
    <td>
      <button
        onClick={(e) => handleClick(e)}
        className="drum-pad"
        id={idSound}
        style={{ height: "100%", width: "100%" }}
      >
        <audio className="clip" id={letter} src={source}></audio>
        {letter}
      </button>
    </td>
  );
}

function DrumPad() {
  const DrumPadContainer = [];
  let rowId = 0;
  for (let r = 0; r < 3; r++) {
    const row = [];
    for (let col = 0; col < 3; col++) {
      row.push(
        <DrumButton
          key={data[3 * r + col].id}
          idSound={data[3 * r + col].id}
          letter={data[3 * r + col].letter}
          source={data[3 * r + col].src}
        />
      );
    }
    DrumPadContainer.push(
      <tr id={rowId} key={rowId}>
        {row}
      </tr>
    );
    rowId++;
  }
  return (
    <div id="drum-pad-container" style={{ flex: 2, marginRight: ".5%" }}>
      <table style={{ height: "100%", width: "100%" }}>
        <tbody>{DrumPadContainer}</tbody>
      </table>
    </div>
  );
}

function DrumDisplay() {}

function App() {
  useEffect(() => {
    function playDrum(e) {
      if (/[0-9]/.test(e.key)) return;
      const key = e.key.toUpperCase();
      const audio = document.querySelector(`#${key}`);
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
    }

    document.addEventListener("keydown", playDrum);

    return function () {
      document.removeEventListener("keydown", playDrum);
    };
  });

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
