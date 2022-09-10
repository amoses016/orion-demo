import React, { FC } from 'react';
import styles from './Joke.module.css';

interface JokeProps {
  jokeText?: String
}

const Joke: FC<JokeProps> = (props) => (
  <div className={styles.JokeText} data-testid="Joke">
    {props.jokeText}
  </div>
);

export default Joke;
