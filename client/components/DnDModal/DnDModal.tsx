import React from 'react'
import * as styles from './styles/DnDModal.css'

const DnDModal = (props) => {
    const { modalText, modalTitle, changeText, changeTitle, addInfo } = props
    return (
        <React.Fragment>
            <div className={styles.back} />
            <div className={styles.modal}>
                <p>
                    text: <input type="text" value={modalText} onChange={changeText} />
                </p>
                <p>
                    title: <input type="text" value={modalTitle} onChange={changeTitle} />
                </p>
                <button onClick={addInfo}>Add</button>
            </div>
        </React.Fragment>
    )
}

export default DnDModal
