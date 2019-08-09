import React from 'react';
import styles from './header.css';
import images from '../assets/images/DnD.png';

class Header extends React.Component {
    render(){
        return(
            <div className="header-div">
                <h1
                className="header-title"
                style={styles.h1}
                >
                    Welcome to SheetMaster3000!!!
                </h1>
                <a
                href="/login"
                style={styles.a}
                >
                    Log In
                </a>
                <a
                href="/signup"
                style={styles.a}
                >
                    Sign Up
                </a>
                <img
                src={images}
                style={styles.img}
                alt="Logo of selected game"
                >
                </img>
            </div>
        )
    }
}

export default Header;