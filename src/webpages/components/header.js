import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import LangDropDown from './langDropDown';
import Alert from 'react-bootstrap/Alert'
import ScrollToTop from '../components/scrollToTop';
import logo from '../../assets/logo.png'
import rightarrow from '../../assets/right-arrow.svg'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Wallets from '../components/wallets'
import { Modal } from "react-bootstrap";
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            Tab: '', 
            isOpen: false,
            showAlert: true ,
            modalShow:false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }
    handleClose = () => {
        this.setState({ modalShow: false });
    };
    render() {

        return (
            <div>
               <ScrollToTop />
                <div id="is-sticky">
                
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                
                    {/* <p className="stakedrop-line"><span>Prepare Yourselves for Persistence StakeDrop! The Grand Unveiling <img src={rightarrow} alt="arrow"/></span></p> */}
                    { this.state.showAlert ? 
                    <Alert dismissible onClose={() => this.setState({showAlert:false})} >
                        <Link to="stakedrop">
					<p className="other-pages">
                    Grab the chance to earn $250,000 worth of XPRT tokens. Cosmos campaign starts on 26 October. Participate Now! &emsp;<img src={rightarrow} alt="arrow"/>
                    </p>
                    </Link>
                    <p className="stake-drop stake-drop-banner" onClick={() => this.setState({modalShow:true})}>
                        Earn additional XPRT <span>for staking on</span> AUDIT.One <span>Validator</span>&emsp;<img src={rightarrow} alt="arrow"/>
                    </p>
                    </Alert>:''
                    } 
                        
                        <div className="container nav-banner">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                <img src={logo} alt="logo" /></Link>

                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">
                                <ul className="navbar-nav navbar-right team-link">
                                    <li className="nav-item"><NavLink to="team" className="nav-link">Team</NavLink></li>
                                    <li className="nav-item"><NavLink to="roadmap" className="nav-link">Roadmap</NavLink></li>
                                    <li className="nav-item"><a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" className="nav-link">Blog</a></li>
                                    {/* <li className="nav-item"><LangDropDown /></li> */}
                                </ul>
                                <div className={this.state.isOpen ? "nav-button" : "nav-button"}>
                                    <ul className="nav navbar-nav navbar-left">
                                        <li>
                                            <div className="header-buttons">
                                                <a href="https://explorer.persistence.one/" className="button-explorer" rel="noopener noreferrer" target="_blank">Explorer</a>

                                                <Link className="button-app" to="stakedrop">Stakedrop</Link>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <Modal
                    size="lg"
                    show={this.state.modalShow}
                    onHide={this.handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                        <Wallets />
                    </Modal.Body>
                </Modal>
            </div >
        );
    }
}

export default Header;


