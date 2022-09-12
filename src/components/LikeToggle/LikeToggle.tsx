import React, { ChangeEventHandler, FC } from 'react';
import styles from './LikeToggle.module.css';
import Toggle from 'react-toggle'

interface ToggleProps {
  value?: boolean;
  handleToggle?: any;
}

const LikeToggle: FC<ToggleProps> = (props) => {
  var toggleValue: boolean = props.value!;

  const handleToggleChange = (e: any) => {
    props.handleToggle(e);
  }

  return (
    <div className={styles.LikeToggle} data-testid="LikeToggle">
      <i className={"bi bi-hand-thumbs-up " + styles.LikeToggleIcon}></i>
      <Toggle
        defaultChecked={toggleValue}
        icons={false}
        onChange={handleToggleChange} />
    </div>
  );
};

export default LikeToggle;
