import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__Icon" />
            </IconButton>
            <img
                src="https://i.pinimg.com/originals/e7/03/38/e7033811fd382be9d0713f9680225ed3.png"
                className="header__logo"
                alt=""
             />
             <IconButton>
                <ForumIcon fontSize="large" className="header__Icon" />
            </IconButton>
             
        </div>
    )
}

export default Header;
