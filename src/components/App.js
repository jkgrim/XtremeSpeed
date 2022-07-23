import title from "../images/title.png";
import logo from "../images/main-logo.png";
import bottomlogo from "../images/xtremespeed-logo.png";
import banner from "../images/pokeball-banner.png";
import textimage1 from "../images/text-image1.jpeg";
import textimage2 from "../images/text-image2.jpeg";

function App() {
  return (
    <div className="App">
      <div className="left-nav-container">
        <img src={bottomlogo} alt="gen123 starters" />

        <div className="nav-buttons-wrapper">
          <h3>Guides/Routes:</h3>

          <a
            href={
              "https://pokemon-speedrunning.github.io/speedrun-routes/#/gen-1/red-blue/main-glitchless/"
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            Pokémon Red/Blue
          </a>
          <a
            href={
              "https://pokemon-speedrunning.github.io/speedrun-routes/#/gen-1/yellow/main-glitchless/"
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            Pokémon Yellow
          </a>
          <a
            href={
              "https://docs.google.com/document/d/1jgUcxt9JathFH3PDcTfyhs32gUjecmNBblvYpafmZRg/edit"
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            Pokémon Gold/Silver
          </a>
          <a
            href={"https://pastebin.com/nTaMhcTN"}
            target="_blank"
            rel="noreferrer noopener"
          >
            Pokémon Crystal
          </a>
          <a
            href={
              "https://docs.google.com/document/d/1nKGAP84s5CjtWGEcBZXgBoctb0avNikdB9aiyRZul6U/edit"
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            Pokémon Ruby/Sapphire
          </a>
          <a
            href={
              "https://docs.google.com/document/d/1STgZW8-jF1AsgVR9hI62fdiJEMTXRxUY-IM9XMC6was/edit"
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            Pokémon Emerald
          </a>
        </div>

        <img src={logo} alt="psr logo" />
      </div>

      <div className="main-content-container">
        <div className="header-wrapper">
          <img className="pokeball" src={banner} alt="pokeball banner" />
          <img className="title" src={title} alt="xtremespeed title" />
          <div className="content">
            <div className="header-text">
              <h3>
                A compilation of Pokémon generations 1-3 speedrunning guides
              </h3>
            </div>
            <div className="main-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              velit egestas, tristique enim sit amet, bibendum ligula. Nulla
              commodo sem pharetra commodo egestas. Fusce at porta arcu. Cras
              posuere leo at erat mattis efficitur. Sed vel aliquam orci. Donec
              euismod erat nec rhoncus egestas. Fusce maximus rhoncus blandit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              velit egestas, tristique enim sit amet, bibendum ligula. Nulla
              commodo sem pharetra commodo egestas. Fusce at porta arcu. Cras
              posuere leo at erat mattis efficitur. Sed vel aliquam orci. Donec
              euismod erat nec rhoncus egestas. Fusce maximus rhoncus blandit.
            </div>

            <div className="row1-wrapper">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed velit egestas, tristique enim sit amet, bibendum ligula. Nu
                commodo sem pharetra commodo egestas. Fusce at porta arcu. Cras
                posuere leo at erat mattis efficitur. Sed vel aliquam orci.
                Donec euismod erat nec rhoncus egestas. Fusce maximus rhoncus
                blandit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce sed velit egestas, tristique enim sit amet, bibendum
                ligula.
              </p>
              <img src={textimage1} />
            </div>

            <div className="row2-wrapper">
              <img src={textimage2} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed velit egestas, tristique enim sit amet, bibendum ligula.
                Nulla commodo sem pharetra commodo egestas. Fusce at porta arcu.
                Cras posuere leo at erat mattis efficitur. Sed vel aliquam orci.
                Donec euismod erat nec rhoncus egestas. Fusce maximus rhoncus
                blandit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce sed velit egestas, tristique enim sit amet, bibendum
                ligula.
              </p>
            </div>

            <div className="main-content">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed velit egestas, tristique enim sit amet, bibendum ligula.
                Nulla commodo sem pharetra commodo egestas. Fusce at porta arcu.
                Cras posuere leo at erat mattis efficitur. Sed vel aliquam orci.
                Donec euismod erat nec rhoncus egestas. Fusce maximus rhoncus
                blandit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce sed velit egestas, tristique enim sit amet, bibendum
                ligula. Nulla commodo sem pharetra commodo egestas. Fusce at
                porta arcu. Cras posuere leo at erat mattis efficitur. Sed vel
                aliquam orci. Donec euismod erat nec rhoncus egestas. Fusce
                maximus rhoncus blandit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce sed velit egestas, tristique enim sit
                amet, bibendum ligula. Nulla commodo sem pharetra commodo
                egestas. Fusce at porta arcu. Cras posuere leo at erat mattis
                efficitur. Sed vel aliquam orci. Donec euismod erat nec rhoncus
                egestas. Fusce maximus rhoncus blandit.
              </p>
            </div>
            <div className="btn-wrapper">
              <a className="discord-btn" href="https://discord.gg/t3pXHue9dF">
                Join the PSR Discord!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
