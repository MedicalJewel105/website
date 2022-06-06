import React, { useState } from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import logo from '../../assets/images1/pstakesymbolblack.svg'
import logotwo from '../../assets/images1/pstake-logo-symbol.svg'
import {Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip} from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Icon from "../Icon";
import {
    PERSISTENCEONE_DISCORD_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TWITTER_URL,
    PERSISTENCEONE_GITHUB_URL, PERSISTENCEONE_MEDIUM_URL
} from "../../constants/config";
import ReactGa from "react-ga";

const socialList = [
    {
        url: PERSISTENCEONE_TWITTER_URL,
        iconName: 'twitter-logo',
        tooltip: 'twitter'
    },

    {
        url: PERSISTENCEONE_TELEGRAM_URL,
        iconName: 'telegram-plane',
        tooltip: 'telegram'
    },
   {
        url:  PERSISTENCEONE_DISCORD_URL ,
        iconName: 'discord',
        tooltip: 'discord'
    }, {
        url: PERSISTENCEONE_GITHUB_URL,
        iconName: 'github',
        tooltip: 'github'
    }, {
        url: PERSISTENCEONE_MEDIUM_URL,
        iconName: 'mediumlink',
        tooltip: 'medium'
    }
];

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
  
    const { t } = useTranslation();

    const toggleMenu = () => {
        // setIsOPen(!isOpen);
        setMobileMenu(!mobileMenu);
        if (document.getElementById('nab-bar-toggle').classList.contains('collapsed')) {
            document.getElementById('nab-bar-toggle').classList.remove('collapsed');
        } else {
            document.getElementById('nab-bar-toggle').classList.add('collapsed');
        }
    };

    const learnTitle = (
        <span>
            Build
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )



    const ecoSystemTitle = (
        <span>
            Ecosystem
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )

    const communityTitle = (
        <span>
            Community
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )

    const socialIcon = (iconName) => {
        ReactGa.event({
            category: 'Sociallinks',
            action: 'Clicked on ' + iconName
        })

    }

    return (
        <React.Fragment>
            <Navbar className="navbar-custom" sticky="top" expand="lg" expanded={mobileMenu}>
                <div className="container p-0">
                <Navbar.Brand href="#home">
                    <NavLink to="/">
                        <img src={logotwo} alt="logo" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className="navbar-toggler x" id="nab-bar-toggle"  onClick={toggleMenu}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <NavDropdown title={learnTitle} id="learn-dropdown">
                          <div className="nav-dropdown-items learn-items">
                              <div className="nav-dropdown-item">
                                <p className="header">Developers</p>
                                  <div className="inner-items">
                                      <a href="https://github.com/persistenceOne/persistenceCore" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Persistence SDK <Icon viewClass="social_icon_imgg"
                                                                                                     icon={'exlink'} /></a>
                                      <a href="https://github.com/persistenceOne" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Github Repository <Icon viewClass="social_icon_imgg"
                                                                                                        icon={'exlink'} /></a>
                                      <a href="https://drive.google.com/file/d/12cjxcyqFdVDY55i4Wh_31k9viVciemRr/view" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Grants/Bug Bounties <Icon viewClass="social_icon_imgg"
                                                                                                          icon={'exlink'} /></a>
                                      <a href="https://discord.com/invite/qXRmTTGcYD" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Developer Discord Channel <Icon viewClass="social_icon_imgg"
                                                                                                                icon={'exlink'} /></a>
                                  </div>
                              </div>
                              <div className="nav-dropdown-item">
                                  <p className="header">Validators</p>
                                  <div className="inner-items">
                                      <a href="https://github.com/persistenceOne/awesome-persistence/blob/main/Validator.md"
                                         target="_blank" rel="noopener noreferrer" className="inner-item">Become a Validator <Icon viewClass="social_icon_imgg"
                                                                                                         icon={'exlink'} /></a>
                                      <a href="/faq" className="inner-item">Foundation Delegation Program <Icon viewClass="social_icon_imgg"
                                                                                                                icon={'exlink'} /></a>
                                      <a href="https://rpc.core.persistence.one/" target="_blank" rel="noopener noreferrer" className="inner-item">RPC End Points <Icon viewClass="social_icon_imgg"
                                                                                                                                                                        icon={'exlink'} /></a>
                                      <a href="/https://discord.com/login?redirect_to=%2Fchannels%2F796174129077813248%2F844460782447362048"
                                         target="_blank" rel="noopener noreferrer" className="inner-item">Validator Discord Channel <Icon viewClass="social_icon_imgg"
                                                                                                                                          icon={'exlink'} /></a>
                                  </div>
                              </div>
                          </div>
                        </NavDropdown>
                        <NavDropdown title={ecoSystemTitle} id="ecosystem-dropdown">
                            <div className="nav-dropdown-items ecosystem-items">
                                <div className="nav-dropdown-item">
                                    <div className="inner-items firstone">

                                        <a href="https://pstake.finance/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item m-0">
                                            <img src={logo} alt="pstakeLogo"/>
                                            <p className="header logo m-0">Liquid Staking Protocol</p>

                                        </a>
                                    </div>
                                    <div className="inner-items mt-2">

                                        <a href="https://pstake.finance/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item ml-3 mb-0">

                                            BORROW & LENDING
                                            <p className="header logo inner m-0 p-0">Coming Soon</p>

                                        </a>
                                    </div>
                                    <div className="inner-items">

                                        <a href="https://pstake.finance/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item ml-3 mb-0">

INTERCHAIN DEX                                            <p className="header logo inner m-0 p-0">Coming Soon</p>

                                        </a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">EXPLORER</p>
                                    <div className="inner-items">
                                        <a href="https://explorer.persistence.one/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Persistence Explorer&nbsp;
                                            <Icon viewClass="social_icon_imgg"
                                                  icon={'exlink'} />
                                        </a>
                                        <a href="https://www.mintscan.io/persistence" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Mintscan  <Icon viewClass="social_icon_imgg"
                                                                                                  icon={'exlink'} /></a>
                                        <a href="https://hubble.figment.io/persistence/chains/core-1" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Hubble  <Icon viewClass="social_icon_imgg"
                                                                                                icon={'exlink'} /></a>

                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">WALLETS</p>
                                    <div className="inner-items">
                                        <a href="https://wallet.keplr.app/#/dashboard" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Keplr <Icon viewClass="social_icon_imgg"
                                                                                              icon={'exlink'} /></a>

                                        <a href="https://www.cosmostation.io/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Cosmostation <Icon viewClass="social_icon_imgg"
                                                                                                     icon={'exlink'} /></a>
                                        <a href="https://coin98.com/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Coin98 <Icon viewClass="social_icon_imgg"
                                                                                               icon={'exlink'} /></a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item buttoneco">
                                    <Link to='/ecosystem'>Explore All Apps</Link>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavDropdown title={communityTitle} id="community-dropdown">
                            <div className="nav-dropdown-items community-items">
                                <div className="nav-dropdown-item">
                                    <p className="header">forum</p>
                                    <div className="inner-items">
                                        <a className="inner-item para" rel="noopener noreferrer"
                                           target="_blank" href="https://forum.persistence.one/">Engage with the Persistence Community to
                                            exchange and explore ideas for the ecosytem growth </a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">social media</p>
                                    <div className="inner-items">
                                        <div className="links">
                                            {
                                                socialList.map((item, index) => (
                                                    <OverlayTrigger
                                                        key={item.iconName}
                                                        placement="bottom"
                                                        overlay={
                                                            <Tooltip id={`tooltip-${item.iconName}}`}>
                                                                {item.tooltip}
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                                           target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                 icon={item.iconName} /></a>
                                                    </OverlayTrigger>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavDropdown>
                        <Nav.Link className="nav-link dropdown-toggle" rel="noopener noreferrer"
                                  target="_blank" href="https://medium.com/persistence-blog"
                                 data-toggle="dropdown" aria-haspopup="true"
                                 aria-expanded="false">
                            {t("BLOG")}
                        </Nav.Link>
                    </Nav>
                    <div className="nav-dropdown-item">
                        <div className="inner-items">
                            <div className="links">
                                {
                                    socialList.map((item, index) => (
                                        <OverlayTrigger
                                            key={item.iconName}
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id={`tooltip-${item.iconName}}`}>
                                                    {item.tooltip}
                                                </Tooltip>
                                            }
                                        >
                                            <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg"
                                                                     icon={item.iconName} /></a>
                                        </OverlayTrigger>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </Navbar.Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    )
};

export default withRouter(Header);
