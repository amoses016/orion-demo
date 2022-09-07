import React, { FC } from 'react';
import styles from './JokeList.module.css';

interface JokeListProps {}

const JokeList: FC<JokeListProps> = () => (
  <div className={styles.JokeList} data-testid="JokeList">
    JokeList Component
  </div>
);

export default JokeList;
