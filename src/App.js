function App() {
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
        <div id="drum-pad-container" style={{ flex: 2, marginRight: ".5%" }}>
          <table style={{ height: "100%", width: "100%" }}>
            <tr>
              <td>
                <button
                  className="drum-pad"
                  id="boom"
                  style={{ height: "100%", width: "100%" }}
                >
                  <audio className="clip" id="Q" src="sounds/clap.wav"></audio>Q
                </button>
              </td>
              <td>
                <button
                  className="drum-pad"
                  id="clap"
                  style={{ height: "100%", width: "100%" }}
                >
                  <audio className="clip" id="W" src="sounds/clap.wav"></audio>W
                </button>
              </td>
              <td>
                <button
                  className="drum-pad"
                  id="hihat"
                  style={{ height: "100%", width: "100%" }}
                >
                  <audio className="clip" id="E" src="sounds/hihat.wav"></audio>
                  E
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="drum-pad"
                  id="kick"
                  style={{ height: "100%", width: "100%" }}
                >
                  <audio className="clip" id="A" src="sounds/kick.wav"></audio>A
                </button>
              </td>
              <td>
                <button
                  className="drum-pad"
                  id="openhat"
                  style={{ height: "100%", width: "100%" }}
                >
                  <audio
                    className="clip"
                    id="S"
                    src="sounds/openhat.wav"
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
                  <audio className="clip" id="Z" src="sounds/snare.wav"></audio>
                  Z
                </button>
              </td>
              <td>
                <button
                  className="drum-pad"
                  id="tink"
                  style={{ height: "100%", width: "100%" }}
                >
                  <audio className="clip" id="X" src="sounds/tink.wav"></audio>X
                </button>
              </td>
              <td>
                <button
                  className="drum-pad"
                  id="tom"
                  style={{ height: "100%", width: "100%" }}
                >
                  <audio className="clip" id="C" src="sounds/tom.wav"></audio> C
                </button>
              </td>
            </tr>
          </table>
        </div>
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
