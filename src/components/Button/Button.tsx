import React, { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick?: any;
  id?: string;
  value?: any;
}

const Button: FC<ButtonProps> = (props) => (
  <div className={styles.ButtonContainer} data-testid="Button">
    <button className={styles.Button} onClick={props.onClick}>
      <i id={props.id} className={props.value ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}></i>
    </button>
  </div>
);

export default Button;
