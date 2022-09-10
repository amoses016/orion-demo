import React, { FC } from 'react';
import styles from './Toggle.module.css';

// var ReactToggle = require('react-toggle');

interface ToggleProps {
  value?: Boolean;
}

const Toggle: FC<ToggleProps> = () => (
  <div className={styles.Toggle} data-testid="Toggle">
    <i className="bi bi-hand-thumbs-up"></i>
    {/* <ReactToggle
      defaultChecked={false}
      icons={false}
      onChange={handleToggleChange} /> */}
  </div>
);

const handleToggleChange = () => {
  console.log("change");
}

export default Toggle;
