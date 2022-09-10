import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Joke from '../Joke/Joke';
import Toggle from '../Toggle/Toggle';
import styles from './JokeList.module.css';
import axios from "axios";

interface JokeListProps {}

const JokeList: FC<JokeListProps> = () => {
  const [showLikedJokes, setShowLikedVotes] = useState(false);
  const [jokeData, setJokeData] = useState<any>([]);

  useEffect(() => {
    const result = async () => {
      const data = await axios.get("https://icanhazdadjoke.com/search", { headers: {Accept: 'application/json'}});
      console.log("DATA: " + JSON.stringify(data.data.results));
      data.data.results.map((j: any) => {
        console.log("DATA: " + JSON.stringify(j));
        const joke = j;
        setJokeData( (cur: any) => [
            ...cur,
            {
              ...joke,
              liked: false
            }
          ]);
      });
      console.log("STATE: " + JSON.stringify(jokeData));
    };
    result();
  }, []);

  const handleToggle = (e: Event) => {
    const target = e.target as HTMLInputElement;
    console.log("button clicked! : " + target.id); ////////////
    setJokeData((prevState: any) => {
      const newState = prevState.map((j: any) => {
        if (j.id === target.id) {
          return { ...j, liked: true}
        }
        return j;
      });
      return newState;
    });

    console.log("STATE: " + JSON.stringify(jokeData));
  }
  
  return (
    <div className={styles.JokeList} data-testid="JokeList">
      <div className={styles.TitleBar}>
        <h2>Jokes List</h2>
        <Toggle value={showLikedJokes}/>
      </div>
      <>
        {
          jokeData.map((j: any) => {
            return (
              <div className={styles.JokeContainer}>
                <Joke jokeText={j.joke}/>
                <Button id={j.id} value={j.liked} onClick={handleToggle}/>
              </div>
            )
          })
        }
      </>
    </div>
  )
};

export default JokeList;
