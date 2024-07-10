export default function Characters(props) {
  const { charaters } = props;

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home">Volver a la home</span>
      <div className="container-characters">
        {charaters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name}></img>
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive"></span>
                    Vivo
                  </>
                ) : (
                  <>
                    <span className="dead"></span>
                    Muerto
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios:</span>{" "}
                <span >{character.episode.length}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
