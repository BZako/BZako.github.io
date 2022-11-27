import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='0758378356'>
                                <span className='clickInput' onClick={() => { alert('Numéro de téléphone copié !');}}>07 58 37 83 56</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text='zakaria_dzdz@live.fr'>
                                <span className='clickInput' onClick={() => { alert('E-mail copié !');}}>zakaria_dzdz@live.fr</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                <ul>
           
                <a href="https://www.linkedin.com/in/zakaria-bekkouche-719ab524b/" target="_blank" rel="noopener noreferrer" ><h4>linkedin</h4><i className='fab fa-linkedin'></i></a>
            
            
                <a href="https:\\www.google.fr" target="_blank" rel="noopener noreferrer" ><h4>Twitter</h4><i className='fab fa-twitter'></i></a>
            
           
                <a href="https:\\www.google.fr" target="_blank" rel="noopener noreferrer" ><h4>Github</h4><i className='fab fa-github'></i></a>
           
        </ul>
                </div>
            </div>
        </div>
    );
};

export default contact;