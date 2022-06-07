import React, { useState } from 'react'
import Button from '../UI/Button'
import Something from '../../asset/Something.png';

import styles from './Header.module.css'

const Header = () => {




    return (
        <React.Fragment>
            <div>
                <img style={{maxHeight:"250%", maxWidth:"200px"}} src={Something}></img>
            </div>
            {/* <Button onClick={LoginFormHandler}></Button> */}
        </React.Fragment>
    )
}

export default Header;