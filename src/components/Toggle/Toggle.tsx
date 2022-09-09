import React, { FC } from 'react';
import styles from './Toggle.module.css';

interface ToggleProps {
  value?: Boolean;
}

const Toggle: FC<ToggleProps> = () => (
  <div className={styles.Toggle} data-testid="Toggle">
    X<i className={"bi bi-hand-thumbs-up"}></i>
  </div>
);

export default Toggle;
