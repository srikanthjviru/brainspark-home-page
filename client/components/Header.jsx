import React from 'react';
import './Header.less';

class Header extends React.Component {
    render() {
        return(
            <section className='section header'>
                <nav className='navigation navigation--header'>
                    <li><a className='navigation__who-we-are' href="#">Who we are</a></li>
                    <li><a className='navigation__technologies' href="#">Technologies</a></li>
                    <li className='navigation__logo'><a href="/" className='logo logo--header'>Brainspark</a></li>
                    <li><a className='navigation__portfolio' href="#">Portfolio</a></li>
                    <li><a className='navigation__contacts' href="#">Contacts</a></li>
                    <li><a className='navigation__email' href="#">Email</a></li>
                </nav>
            </section>
        )
    }
}

export default Header;
