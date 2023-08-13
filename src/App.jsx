import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import CardGame from "./components/cardGame/CardGame";
import dataJson from "./components/cardGame/done.json";

function App() {
  const [data, setData] = useState();
  const [findValue, setFindValue] = useState("");
  const [time, setTime] = useState();
  const [difficulty, setDifficulty] = useState();
  const [players, setPlayers] = useState();

  useEffect(() => {
    setData(dataJson);
  }, []);

  const handleChangeFind = (e) => {
    setFindValue(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handlePlayers = (e) => {
    setPlayers(e.target.value);
  };

  return (
    <div className="container m-auto px-4">
      <Header findeValue={findValue} handleGangeFind={handleChangeFind} />
      <main>
        <Filter
          time={time}
          difficulty={difficulty}
          players={players}
          handleTime={handleTime}
          handleDifficulty={handleDifficulty}
          handlePlayers={handlePlayers}
        />
        {data &&
          data
            .filter((item) => {
              return item.title.toLowerCase().includes(findValue.toLowerCase());
            })
            .filter((item) => {
              if (time === undefined) {
                return item;
              } else if (time <= item.maxTime && time >= item.minTime) {
                return item;
              }
            })
            .filter((item) => {
              if (players === undefined) {
                return item;
              } else if (
                players <= item.maxPlayers &&
                players >= item.minPlayer
              ) {
                return item;
              }
            })
            .filter((item) => {
              console.log(typeof difficulty, typeof item.difficulty);
              if (difficulty === undefined) {
                return item;
              } else if (Number(difficulty) === item.difficulty) return item;
            })
            .map((item) => {
              return (
                <CardGame
                  key={item.title}
                  src={item.src[0]}
                  title={item.title}
                  description={item.description}
                  maxTime={item.maxTime}
                  minTime={item.minTime}
                  maxPlayers={item.maxPlayers}
                  minPlayer={item.minPlayer}
                  difficulty={item.difficulty}
                />
              );
            })}
      </main>
    </div>
  );
}

export default App;
