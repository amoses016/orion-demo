import React, { FC } from 'react';
import styles from './Joke.module.css';

interface JokeProps {
  jokeText?: String
}

const Joke: FC<JokeProps> = (props) => (
  <div className={styles.Joke} data-testid="Joke">
    <div className={styles.JokeText}>
      {props.jokeText}
    </div>
  </div>
);

export default Joke;
