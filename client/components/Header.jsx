import React from 'react';
import {Link, scroller} from 'react-scroll';
import {browserHistory} from 'react-router';
import './Header.less';

class Header extends React.Component {
    static defaultProps = {
        navigation: ["who-we-are", "technologies", "portfolio", "contacts", "email"],
        navIconInnerElem: 4
    }

    constructor(props) {
        super(props);

        this.state = {
            isMobNavActive: false
        }
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

        if(this.state.isMobNavActive) {
            this.setState({
                isMobNavActive: false
            });
        }
    }

    handlerNavIconMobile = () => {
        this.setState({
            isMobNavActive: !this.state.isMobNavActive
        });
    }

    render() {
        const navIconSpans = [];
        for (let i = 0; i < this.props.navIconInnerElem; i++) {
            navIconSpans.push(<span key={i}></span>);
        }

        return(
            <section className='section header'>
                <a href="/" className='logo logo--header logo--header-mobile'>Brainspark</a>
                <div
                    className={`nav-icon nav-icon-mobile ${(this.state.isMobNavActive) ? 'nav-icon-mobile--open':''}`}
                    onClick={this.handlerNavIconMobile}
                >
                    {navIconSpans}
                </div>
                <nav className={`navigation navigation--header ${(this.state.isMobNavActive) ? 'navigation--open':''}`}>
                    {
                        this.props.navigation.map((item, index) => {
                            const itemName = item.replace(/-/g, ' ');
                            const elementsArray = [];

                            if(itemName === 'email') {
                                elementsArray.push(
                                    <li key={itemName}>
                                        <a className={`navigation__${item}`} href="/">{itemName}</a>
                                    </li>
                                )
                            } else {
                                elementsArray.push(
                                    <li key={index}>
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
                                )

                                if(itemName === 'technologies') {
                                    elementsArray.push(
                                        <li className='navigation__logo'><a href="/" className='logo logo--header'>Brainspark</a></li>
                                    )
                                }
                            }

                            return elementsArray;
                        })
                    }
                </nav>
            </section>
        )
    }
}

export default Header;
