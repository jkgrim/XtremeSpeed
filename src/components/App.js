import logo from "../images/xtremespeed-logo.png";
import banner from "../images/pokeball-banner.png";

function App() {
  return (
    <div className="App">
      <div className="left-nav-container">
        <img src={logo} />

        <div className="nav-buttons-wrapper">
          <a
            href={
              "https://pokemon-speedrunning.github.io/speedrun-routes/#/gen-1/red-blue/main-glitchless/"
            }
          >
            Pokémon Red/Blue
          </a>
          <a
            href={
              "https://pokemon-speedrunning.github.io/speedrun-routes/#/gen-1/yellow/main-glitchless/"
            }
          >
            Pokémon Yellow
          </a>
          <a
            href={
              "https://docs.google.com/document/d/1jgUcxt9JathFH3PDcTfyhs32gUjecmNBblvYpafmZRg/edit"
            }
          >
            Pokémon Gold/Silver
          </a>
          <a href={"https://pastebin.com/nTaMhcTN"}>Pokémon Crystal</a>
          <a
            href={
              "https://docs.google.com/document/d/1nKGAP84s5CjtWGEcBZXgBoctb0avNikdB9aiyRZul6U/edit"
            }
          >
            Pokémon Ruby/Sapphire
          </a>
          <a
            href={
              "https://docs.google.com/document/d/1STgZW8-jF1AsgVR9hI62fdiJEMTXRxUY-IM9XMC6was/edit"
            }
          >
            Pokémon Emerald
          </a>
        </div>

        <img src={logo} />
      </div>

      <div className="main-content-container">
        <div className="header-wrapper">
          <img src={banner} />

          <div className="header-text">
            <h1>XtremeSpeed</h1>
            <h3>
              A compilation of Pokémon generations 1-3 speedrunning guides
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
