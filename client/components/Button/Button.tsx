import React from 'react'

import * as styles from './styles/Button.css'

const Button = (props) => (
    <button className={styles.button} onClick={props.onClick}>
        {props.value}
    </button>
)

export default Button
