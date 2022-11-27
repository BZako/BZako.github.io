import React from 'react';
import { NavLink} from 'react-router-dom'


const Navigation = () => {
    return (
     <div className="sidebar">

       <div className="id">
        <div className="idContent">
            <img src='./media/billGates.jpg' alt='profil-pic'/>
            <h3>Zakaria Bekkouche</h3>
        </div>
       </div>
       <div className='navigation'>
        <ul>
            <li>
            <NavLink exact to="/" activeClassName="navActive">
                <i className='fas fa-home'></i>
                <span>Acceuil</span>
            </NavLink>
            </li>
            <li>
            <NavLink exact to="/competences" activeClassName="navActive">
                <i className='fas fa-mountain'></i>
                <span>Compétences</span>
            </NavLink>
            </li>
            <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
                <i className='fas fa-images'></i>
                <span>portfolio</span>
            </NavLink>
            </li>
            <li>
            <NavLink exact to="/contact" activeClassName="navActive">
                <i className='fas fa-address-book'></i>
                <span>Contact</span>
            </NavLink>
            </li>
        </ul>
       </div>

    <div className='socialNetwork'>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/zakaria-bekkouche-719ab524b/" target="_blank" rel="noopener noreferrer" ><i className='fab fa-linkedin'></i></a>
            </li>
            <li>
                <a href="https:\\www.google.fr" target="_blank" rel="noopener noreferrer" ><i className='fab fa-twitter'></i></a>
            </li>
            <li>
                <a href="https:\\www.google.fr" target="_blank" rel="noopener noreferrer" ><i className='fab fa-github'></i></a>
            </li>
        </ul>
        <div className='signature'>
            <p>FromSratch-2022</p>
        </div>
    </div>
     </div>
    );
};

export default Navigation;