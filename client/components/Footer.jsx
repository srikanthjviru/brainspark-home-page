import React from 'react';
import './Footer.less';

class Footer extends React.Component {
    render() {
        return(
            <footer className='section footer'>
                <div className='section__header section__header--footer'>
                    Contact us
                </div>
                <div className='footer__body'>
                    <ul className='contacts contacts--footer'>
                        <li className="contacts__location">Ukraine, Cherkassy</li>
                        <li className="contacts__connection">
                            <span className='font-bold'>tel:</span> +38 093 751 23 15<br/>
                            <span className='font-bold'>email:</span> <a href='mailto:info@brainspark.info'>info@brainspark.info</a><br/>
                            <span className='font-bold'>skype:</span> <a href='skype:skypeSerenity?call'>skypeSerenity</a>
                        </li>
                    </ul>
                    <ul className="navigation navigation--footer">
                        <li><a href="#">Who we are</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;
