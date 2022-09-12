import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Joke from '../Joke/Joke';
import LikeToggle from '../LikeToggle/LikeToggle';
import styles from './JokeList.module.css';
import axios from "axios";

interface JokeListProps {}

const JokeList: FC<JokeListProps> = () => {
  const [showLikedJokes, setShowLikedJokes] = useState(false);
  const [jokeData, setJokeData] = useState<any>([]);

  useEffect(() => {
    const result = async () => {
      const data = await axios.get("https://icanhazdadjoke.com/search", { headers: {Accept: 'application/json'}});
      var jokes: any[] = [];
      data.data.results.map((j: any) => {
        jokes = [
          ...jokes,
          {
            ...j,
            liked: false
          }
        ];
      });
      setJokeData(jokes);
    };
    result();
  }, []);

  const handleLike = (e: Event) => {
    const target = e.target as HTMLInputElement;
    console.log("STATE before: " + JSON.stringify(jokeData));
    setJokeData((prevState: any) => {
      const newState = prevState.map((j: any) => {
        if (j.id === target.id) {
          return { ...j, liked: !j.liked}
        }
        return j;
      });
      return newState;
    });
  }

  const handleToggle = (e: Event) => {
    // This isn't the greatest thing to do since I can't guarantee the value I'm 
    //  setting in state is the toggle value, but I chose to do this to save time 
    //  working out an issue.
    setShowLikedJokes(!showLikedJokes);
  }

  const renderJokeCard = (j: any) => {
    return (
      <div className={styles.JokeContainer}>
        <Joke jokeText={j.joke}/>
        <Button id={j.id} value={j.liked} onClick={handleLike}/>
      </div>
    )
  }
  
  return (
    <div className={styles.JokeList} data-testid="JokeList">
      <div className={styles.TitleBar}>
        <h2>Jokes List</h2>
        <LikeToggle value={showLikedJokes} handleToggle={handleToggle} />
      </div>
      <>
        {
          jokeData.map((j: any) => {
            if (showLikedJokes) {
              if(j.liked) {
                return renderJokeCard(j)
              }
            } else {
              return renderJokeCard(j);
            }
          })
        }
      </>
    </div>
  )
};

export default JokeList;
