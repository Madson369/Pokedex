import "./Status.css";

function PokeStatus(props) {
  return (
    <div className="Bodysts">
      <div className="containersts">
        <div className="left-screen">
          <div className="left-screen__top">
            <div className="light-containersts">
              <div className="light light--blue"></div>
            </div>
            <div className="light light--red"></div>
            <div className="light light--yellow"></div>
            <div className="light light--green"></div>
          </div>
          <div className="left-screen__bottom">
            <div className="main-screen">
              <div className="main-screen__top-lights"></div>
              <div id="display" class="main-screen__display">
                <div className="pokemon-image">
                  <img
                    className="pokemon-image"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
                  ></img>
                </div>
                <div className="search-message">Searching...</div>
                <div className="not-found-message">Pokemon Not Found</div>
              </div>
              <div className="main-screen__speaker-light"></div>
              <div className="main-screen__speaker">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="left-screen__joint">
            <div className="joint"></div>
            <div className="joint"></div>
            <div className="joint"></div>
            <div className="joint"></div>
            <div className="joint__reflextion"></div>
          </div>
        </div>
        <div className="right-screen">
          <div className="right-screen__top">
            <div></div>
          </div>
          <div class="right-screen__bottom">
            <div class="info-containersts">
              <p
                id="search"
                type="text"
                class="info-input"
                placeholder="Search Pokemon Name or ID"
              >
                {props.name}
              </p>
              <section class="info-screen">
                  
                <div id="species" className="info">
                  <div className="label">Species:</div>
                  <div className="desc">{props.name}</div>
                </div>
                <div id="type" className="info">
                  <div className="label">Type:</div>
                  <div className="desc">{props.types.join("/")}</div>
                </div>
                <div id="height" className="info">
                  <div className="label">Height:</div>
                  <div className="desc">{props.height}</div>
                </div>
                <div id="weight" className="info">
                  <div className="label">Weight:</div>
                  <div className="desc">{props.weight}</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeStatus;
