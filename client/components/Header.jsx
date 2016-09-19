import React from 'react';
import {Link, scroller} from 'react-scroll';
import './Header.less';

class Header extends React.Component {
    static defaultProps = {
        navigation: ["who-we-are", "technologies", "portfolio", "contacts", "email"]
    }

    handlerNavigation = (item) => {
        if(window.location.pathname !== '/home'
            && (item === 'who-we-are' || item === 'technologies' || item === 'portfolio')) {

            browserHistory.push(`/home`);

            setTimeout(() => {
                scroller.scrollTo(item, {
                  duration: 1000,
                  smooth: true,
                });
            }, 300)
        }
    }

    render() {
        return(
            <section className='section header'>
                <nav className='navigation navigation--header'>
                    {
                        this.props.navigation.map((item, index) => {
                            const itemName = item.replace(/-/g, ' ');

                            if(itemName === 'email') {
                                return <li key={itemName}>
                                            <a className={`navigation__${item}`} href="/">{itemName}</a>
                                        </li>
                            }

                            return <li key={index}>
                                        <Link
                                             href="#"
                                             className={`navigation__${item}`}
                                             to={item}
                                             smooth={true} duration={500}
                                             onClick={this.handlerNavigation.bind(null, item)}
                                        >
                                            {itemName}
                                        </Link>
                                   </li>
                        })
                    }
                </nav>
            </section>
        )
    }
}

export default Header;
