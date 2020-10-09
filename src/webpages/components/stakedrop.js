import React from 'react';
import language from '../translationlang';
import { connect } from 'react-redux';
import Footer from '../components/footer';
import Header from '../components/header';
import Accordion from '../components/accordion'
import Icon from '../icon';
import atom_icon from '../../assets/atom.svg';
import dot_icon from '../../assets/dot.svg';
import mat_icon from '../../assets/matic.svg';
import xtz_icon from '../../assets/xtz.svg';
import luna_icon from '../../assets/luna.svg';
import kava_icon from '../../assets/kava.svg';
import iris_icon from '../../assets/iris.svg';


class stakedrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Tab: '',
            isOpen: false
        };

       
    }

   


    render() {
        const { lang } = this.props;
        return (
            <React.Fragment>
                <Header />
                <div>
                    
                    <section className="stakedrop-section">
                        <div className="container">
                            <div className="row">
                                <h1 className="stake-title">{language[lang].stake_drop_title} 
                                <p className="sub-text">{language[lang].stake_drop_sub_title_1} <span>{language[lang].stake_drop_sub_title_2}</span></p></h1>
                                <p className="sub-title title-line">{language[lang].stake_drip_des}</p>
                                <div className="col-lg-12 title-cards">
                                         <div className="row row-common">
                                    <div className="col-xs-6 col-md-6 col-lg-3 row-pad">
                               
                                    <div className="col-lg-12 common-cards card-one">
                                       
                                        <p>{language[lang].total_xprt}</p>
                                        <h5>1,000,000 XPRT</h5>
                                    </div>
                                    </div>
                                   
                                    
                                    <div className="col-xs-6 col-md-6 col-lg-3 row-pad">
                                  
                                    <div className="col-lg-12 common-cards card-one">
                                    
                                        <p>{language[lang].dropped_fis}</p>
                                        <h5>--</h5>
                                        </div>
                                    </div>
                                  
                                   
                                    <div className="col-xs-6 col-md-6 col-lg-3 row-pad">
                                  
                                    <div className="col-lg-12 common-cards card-one">
                                   
                                        <p>{language[lang].staked_tokens}</p>
                                        <h5>--</h5>
                                    </div>
                                    </div>
                                   
                                  
                                    <div className="col-xs-6 col-md-6 col-lg-3 row-pad">
                                   
                                    <div className="col-lg-12 common-cards card-one">
                                   
                                        <p>{language[lang].unique_wallet_address}</p>
                                        <h5>--</h5>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="stake-drop-campaigns">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="title">{language[lang].stake_drop_campaigns}</h2>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={atom_icon} alt="atom" />
                                                    <a href="https://app.lunie.io/cosmos-hub/validators/cosmosvaloper1udpsgkgyutgsglauk9vk9rs03a3skc62gup9ny" target="_blank" rel="noopener noreferrer">{language[lang].stake_drop_participants}</a>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_atom_cosmos}</h4>
                                                    <p>200,000 $XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_atom}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>0.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                            <div className="icon-div">
                                                    <img src={dot_icon} alt="atom" />
                                                    <a href="https://app.lunie.io/cosmos-hub/validators/cosmosvaloper1udpsgkgyutgsglauk9vk9rs03a3skc62gup9ny" target="_blank" rel="noopener noreferrer">{language[lang].stake_drop_participants}</a>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_dot_polkadot}</h4>
                                                    <p>200,000 $XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_dot}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>0.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                            <div className="icon-div">
                                                    <img src={mat_icon} alt="atom" />
                                                    <a href="https://app.lunie.io/cosmos-hub/validators/cosmosvaloper1udpsgkgyutgsglauk9vk9rs03a3skc62gup9ny" target="_blank" rel="noopener noreferrer">{language[lang].stake_drop_participants}</a>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_matic_network}</h4>
                                                    <p>200,000 $XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_matic}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>0.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                            <div className="icon-div">
                                                    <img src={xtz_icon} alt="atom" />
                                                    <a href="https://app.lunie.io/cosmos-hub/validators/cosmosvaloper1udpsgkgyutgsglauk9vk9rs03a3skc62gup9ny" target="_blank" rel="noopener noreferrer">{language[lang].stake_drop_participants}</a>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_stake_xtx_tezos}</h4>
                                                    <p>200,000 $XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_xtx}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>0.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                            <div className="icon-div">
                                                    <img src={luna_icon} alt="atom" />
                                                    <a href="https://app.lunie.io/cosmos-hub/validators/cosmosvaloper1udpsgkgyutgsglauk9vk9rs03a3skc62gup9ny" target="_blank" rel="noopener noreferrer">{language[lang].stake_drop_participants}</a>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_luna_terra}</h4>
                                                    <p>200,000 $XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_luna_terra}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>0.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                            <div className="icon-div">
                                                    <img src={kava_icon} alt="atom" />
                                                    <a href="https://app.lunie.io/cosmos-hub/validators/cosmosvaloper1udpsgkgyutgsglauk9vk9rs03a3skc62gup9ny" target="_blank" rel="noopener noreferrer">{language[lang].stake_drop_participants}</a>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_kava_labs}</h4>
                                                    <p>200,000 $XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_kava}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>0.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                            <div className="icon-div">
                                                    <img src={iris_icon} alt="atom" />
                                                    <a href="https://app.lunie.io/cosmos-hub/validators/cosmosvaloper1udpsgkgyutgsglauk9vk9rs03a3skc62gup9ny" target="_blank" rel="noopener noreferrer">{language[lang].stake_drop_participants}</a>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_iris_net}</h4>
                                                    <p>200,000 $XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_iris_net}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>0.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="stake-drop-mechanism">
                        <div className="container">
                            <h2 className="text-center">{language[lang].stake_drop_mechanism}</h2>
                            <div className="drop-sub">
                            <h3 className="text-center drop">{language[lang].stake_drop_per_person}</h3>
                            <p className="text-center">{language[lang].stake_drop_num_of_tokens}</p>
                        </div>
                        </div>
                    </section>
                    <section className="faq-section">
                    <h2 className="text-center">{language[lang].stake_drop_faq}</h2>
            <div className="container">
                <div className="row acc-row">
                                    <Accordion
                                    title={language[lang].stake_drop_faq_1}
                                    content={language[lang].stake_drop_faq_1_content}
                                />
                                <Accordion
                                    title={language[lang].stake_drop_faq_1}
                                    content={language[lang].stake_drop_faq_1_content}/>
                                <Accordion
                                    title="At least how many tokens do i need to receive FIS airdrop?"
                                    content="
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </br>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </br>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    "
                                />
                                </div>
                                </div>
                    </section>


                    <Footer />

                </div>
            </React.Fragment>
        );
    }


}


const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default (connect(mapStateToProps)(stakedrop));
