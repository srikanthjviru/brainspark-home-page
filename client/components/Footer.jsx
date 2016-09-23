import React from 'react';
import {Link, scroller} from 'react-scroll';
import {hashHistory} from 'react-router';
import './Footer.less';

class Footer extends React.Component {
    static defaultProps = {
        navigation: ["who-we-are", "technologies", "portfolio"]
    }

    handlerNavigation = (item) => {
        if(window.location.pathname !== '/home'
            && (item === 'who-we-are' || item === 'technologies' || item === 'portfolio')) {

            hashHistory.push(`#/home`);

            setTimeout(() => {
                scroller.scrollTo(item, {
                  duration: 1000,
                  smooth: true,
                  offset: -50
                });
            }, 300)
        }
    }

    handlerFormFocus = (e) => {
        this.removeFocusedClassInForm(e);
        e.target.parentNode.classList.add('contact-form__input--focused');
    }

    removeFocusedClassInForm(e) {
        const allFormsDivs = e.currentTarget.querySelectorAll('.contact-form__input');
        allFormsDivs.forEach((element) => {
            const inputElement = element.querySelector('input');
            if(inputElement) {
                if(!inputElement.value) {
                    element.classList.remove('contact-form__input--focused');
                }
            }

            const textareaElement = element.querySelector('textarea');
            if(textareaElement) {
                if(!textareaElement.value) {
                    element.classList.remove('contact-form__input--focused');
                }
            }
        })
    }

    render() {
        return(
            <footer id="contacts" className='section footer'>
                <div className='section__header section__header--footer'>
                    Contact us
                </div>
                <div className='footer__body'>
                    <form
                        className='contact-form contact-form--footer'
                        onFocus={this.handlerFormFocus}
                        onBlur={this.removeFocusedClassInForm}
                    >
                        <div className="contact-form__input contact-form__input--name">
                            <label htmlFor="contact-form__input-name">Name<sup>*</sup></label>
                            <input id='contact-form__input-name' type="text" name='name'/>
                        </div>
                        <div className="contact-form__input contact-form__input--email">
                            <label htmlFor="contact-form__input-email">Email<sup>*</sup></label>
                            <input id='contact-form__input-email' type="email" name='email'/>
                        </div>
                        <div className="contact-form__input contact-form__input--disabled">
                            <label htmlFor="contact-form__input-subject">Subject: I need a site<sup>*</sup></label>
                            <input id='contact-form__input-subject' type="text" name='subject' disabled />
                        </div>
                        <div className="contact-form__input contact-form__input--message">
                            <label htmlFor="contact-form__input-message">tell us what site you need<sup>*</sup></label>
                            <textarea id='contact-form__input-message' name='message'></textarea>
                        </div>
                        <button className='contact-form__submit-btn' type='submit'>Submit</button>
                    </form>
                    <ul className='contacts contacts--footer'>
                        <li className="contacts__location">Ukraine, Cherkassy</li>
                        <li className="contacts__connection">
                            <span className='font-bold'>tel:</span> +38 093 751 23 15<br/>
                            <span className='font-bold'>email:</span> <a href='mailto:info@brainspark.info'>info@brainspark.info</a><br/>
                            <span className='font-bold'>skype:</span> <a href='skype:skypeSerenity?call'>skypeSerenity</a>
                        </li>
                    </ul>
                    <ul className="navigation navigation--footer">
                        {
                            this.props.navigation.map((item, index) => {
                                const itemName = item.replace(/-/g, ' ');

                                if(itemName === 'email') {
                                    return  <li key={itemName}>
                                                <a className={`navigation__${item}`} href="/">{itemName}</a>
                                            </li>
                                }

                                return <li key={index}>
                                            <Link
                                                 href="#"
                                                 className={`navigation__${item}`}
                                                 to={item}
                                                 smooth={true}
                                                 duration={500}
                                                 offset={-50}
                                                 onClick={this.handlerNavigation.bind(null, item)}
                                            >
                                                {itemName}
                                            </Link>
                                       </li>;
                            })
                        }
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;
