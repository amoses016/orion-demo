import React, { FC } from 'react';
import { useState } from 'react';
import Joke from '../Joke/Joke';
import Toggle from '../Toggle/Toggle';
import styles from './JokeList.module.css';

interface JokeListProps {}

const dummyJokeList = [
  "This is a joke. Now Laugh.",
  "This is a joke. Now Laugh.",
  "This is a joke. Now Laugh.",
  "This is a joke. Now Laugh.",
  "This is a joke. Now Laugh.",
  "This is a joke. Now Laugh.",
  "This is a joke. Now Laugh."
]

const JokeList: FC<JokeListProps> = () => {
  const [showLikedJokes, setShowLikedVotes] = useState(false);
  
  return (
    <div className={styles.JokeList} data-testid="JokeList">
      <div className={styles.TitleBar}>
        <div className={styles.JokeListTitle}>
          Jokes List
        </div>
        <Toggle value={showLikedJokes}/>
      </div>
      <>
        {
          dummyJokeList.map(joke => {
            return <Joke jokeText={joke}/>
          })
        }
      </>
    </div>
  )
};

export default JokeList;
