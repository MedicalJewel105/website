
import React, { Component } from 'react';
import Icon from '../icon';
import { Modal } from "react-bootstrap";
import Slider from 'react-rangeslider';
import Countdown from 'react-countdown';
import 'react-rangeslider/lib/index.css'
import axios from 'axios';
import Header from '../../webpages/components/header';
import copy from '../../assets/copy.svg'
import { getCalculateComsmos, getStatusURL } from "../../constants/url";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Wallets from './wallets'
class Participate extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            tcShow:false,
            volume: 0,
            ercAddress: '--',
            blockHeight: '--',
            totalStaked: '--',
            statkedOnAudit: '--',
            totalRewards: '--',
            estimatedRewards: '--',
            globalTotalStaked: 0,
            globalAuditStaked: '',
            totalDistributed: 0,
            delegateAudit:0,
            delegateOther:0,
            errorAddress: false,
            copied: false,
            copyValue:false,
            notParticipantAddress:false,
            showDelegateModal:false
        }
        this.handleCalculate = this.handleCalculate.bind(this);
    }
    onCopy = () => {
        this.setState({copyValue : true})
        this.setState({copied: true});
        setTimeout(() => {
            this.setState({copyValue : false})
          }, 1000);
      };
    handleOnChange = (value) => {
        this.setState({ volume: value })
        var delegateAudit = (0.25 * value)/(this.state.globalAuditStaked + value) + (0.75* value)/(this.state.globalTotalStaked + value) * this.state.totalDistributed
        var delegateOther =  (0.75 * value)/(this.state.globalTotalStaked + value) * this.state.totalDistributed
        this.setState({ delegateAudit:(Math.round(delegateAudit * 100) / 100).toFixed(2) })
        this.setState({ delegateOther: (Math.round(delegateOther * 100) / 100).toFixed(2)})
    }
    handleClose = () => {
        this.setState({ show: false });
        this.setState({ showDelegateModal: false });
    };
    handleModel = () => {
        this.setState({ show: true });
    };
    handleDelegateModel = () => {
        this.setState({ showDelegateModal: true });
    };
    handleTerms = () => {
        this.setState({ tcShow: false });
        localStorage.setItem('accepted',  true);
    };
    handleCancelTerms = () => {
        this.setState({ tcShow: false });
        this.props.history.push('/stakedrop');
    };
    componentDidMount = () => {
        const acceptance = localStorage.getItem('accepted');
        if(acceptance){
        this.setState({ tcShow: false });
        }
        else{
            this.setState({ tcShow: true });
        }
        const Statusurl = getStatusURL();
        axios.get(Statusurl).then((statusResponse) => {
            const totalDistributed = 200000-(statusResponse.data.totalDistributed / 1000000) 
            const worldTotalDelegations = statusResponse.data.worldGlobalDelegation;
            const worldAuditDelegations = statusResponse.data.worldAuditDelegation;
            this.setState({ totalDistributed: (Math.round(totalDistributed * 100) / 100).toFixed(2) })   
            this.setState({ globalTotalStaked: worldTotalDelegations })
            this.setState({ globalAuditStaked: worldAuditDelegations })


        })
    }

    handleCalculate = e => {
        e.preventDefault();
        this.setState({ errorAddress: false })
        this.setState({ notParticipantAddress: false })
        const calAddress = e.target.cosmosAddress.value;
        var addressPrefix = calAddress.startsWith("cosmos");

    if (addressPrefix === true && calAddress.length === 45) {
        const url = getCalculateComsmos(calAddress)
        axios.get(url).then((result) => {
            const calculatedata = result.data;
            if (calculatedata.success === true) {
                const currentEarned = calculatedata.received;
                const yourDelegations = calculatedata.globalDelegation;
                const yourAuditDelegation = calculatedata.globalDelegation;
                this.setState({ ercAddress: calculatedata.ercAddress })
                this.setState({ blockHeight: calculatedata.magicTxHeight })
                this.setState({ statkedOnAudit: calculatedata.auditDelegation })
                this.setState({ totalStaked: calculatedata.globalDelegation })
                this.setState({ totalRewards: currentEarned / 1000000 })
                const estimatedRewards = ((currentEarned / 1000000) + yourDelegations / this.state.globalTotalStaked * 0.75 + yourAuditDelegation) / this.state.globalAuditStaked * 0.25;
                this.setState({ estimatedRewards: estimatedRewards })

            } else {
                this.setState({ notParticipantAddress: true })
            }
        });
    }else {
        this.setState({ errorAddress: true })
    }
    
    };

    render() {
        const { volume } = this.state
       
        return (
            <div className="section-participate"> 
                <Header />
               
            <section className="participate-stakedrop">
                <div className="container">
                  
              
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4 section-campaign">
                                <div className="row campaign-maintwo">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate">Cosmos Stake Drop Campaign</h5>
                                    </div>
                                    <div className="row body-section">
                                        <div className="col-lg-12 card-content campaign-card">
                                            <div className="card-inner">
                                                <h6>Campaign Duration</h6>
                                                <h1>30 Days</h1>
                                            </div>
                                            <Icon viewClass="social_icon_imgg" icon="participate" />

                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Tokens to distribute</h6>
                                                <h1>200,000 XPRT</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Start</h6>
                                                <h1>26th of October 2020 <span>Block Height: 3846000</span></h1>

                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo end">
                                                <h6>End</h6>
                                                <h1>25th of Novemeber 2020<span>Block Height: 4206000</span></h1>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                
                            </div>
                            <div className="col-lg-8 staking-second-section">
                                <div className="col-lg-12  cosmos-tutorial-section">
                                        <p className="">Cosmos StakeDrop Tutorial: <a href="https://notes.persistence.one/s/SzZKebecO"  target="_blank" rel="noopener noreferrer">How ATOM Holders Can Participate in StakeDrop? </a></p>
                                    </div>
                                <div className="col-lg-12 stakerow">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate">Your Rewards</h5>
                                    </div>
                                    <div className="body-section">
                                        <form onSubmit={this.handleCalculate}>

                                            <div className="inputstaking">
                                                <h5>Staking Address</h5>
                                                <input
                                                    type="text"
                                                    name="cosmosAddress"
                                                    id="cosmosAddress"
                                                    value={this.state.cosmosAddress}
                                                    onChange={this.handleAddressChange}
                                                    placeholder="Enter Address"
                                                    required

                                                />

                                            </div>
                                            
                                            {this.state.errorAddress ?
                                                <h6 className="valid-add">Enter Valid Address</h6>
                                                :
                                                ""
                                            }
                                              {this.state.notParticipantAddress ?
                                                <h6 className="valid-add">Not a stakedrop participant address, please send the magic transaction</h6>
                                                :
                                                ""
                                            }
                                            <div className="btn-calculate">
                                                <button type="submit" className="btn">Calculate</button>
                                            </div>
                                        </form>
                                        <div className="">
                                            <div className="inputstaking justify-start">
                                                <h5>ERC20 Address</h5>
                                                <h5 className="text-color">{this.state.ercAddress}</h5>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="inputstaking justify-start">
                                                <h5>Start Block Height</h5>
                                                <h5 className="text-color">{this.state.blockHeight}</h5>
                                            </div>
                                        </div>
                                        <div className="row common-cards">

                                            <div className="inputstaking bottom">
                                                <h5>Total Staked</h5>
                                                <h5 className="value">{this.state.totalStaked}</h5>
                                            </div>


                                            <div className="inputstaking bottom">
                                                <h5>Total Staked on AUDIT.one</h5>
                                                <h5 className="value">{this.state.statkedOnAudit}</h5>
                                            </div>

                                            <div className="inputstaking bottom">
                                                <h5>Total Rewards</h5>
                                                <h5 className="value">{this.state.totalRewards}</h5>
                                            </div>
                                            <div className="inputstaking bottom">
                                                <h5>Estimated Rewards</h5>
                                                <h5 className="value">{this.state.estimatedRewards}</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                        
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                        <div className="row campaign-maintwo second">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate two">Campaign Status</h5>
                                    </div>
                                    <div className="row body-section">
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Tokens left:</h6>
                                                 <h1>{this.state.totalDistributed} XPRT</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Time left:</h6>
                                                <h1 className="countdown"><Countdown
                                                    date={1606348800000}
                                                    autoStart={true}
                                                /></h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Total Staked:</h6>
                                                <h1>{this.state.globalTotalStaked}</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo end">
                                                <h6>Total Staked on AUDIT.one:</h6>
                                                <h1>{this.state.globalAuditStaked}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-8 staking-second-section">
                                    <div className="col-lg-12 staking-right-bottom stakerow">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">Participate</h5>
                                        </div>
                                        <div className="body-section">
                                            <div className="range-data">
                                                <p>How many ATOMs would you like to stake?</p>
                                                <p className="range-value">{this.state.volume}</p>
                                            </div>
                                            <div className="range-slider">
                                                <Slider
                                                    value={volume}
                                                    onChange={this.handleOnChange}
                                                    min={0}
                                                    max={this.state.globalTotalStaked}
                                                    step={500}
                                                />
                                            </div>

                                            <div className="">
                                                <div className="row">
                                                    <div className="col-lg-12 delegate-sec">
                                                        <div className="inputstaking bottom">
                                                            <h5>If you delegate to AUDIT.one</h5>
                                                            <h5 className="value">{this.state.delegateAudit}</h5>
                                                        </div>
                                                      
                                                        <div className="inputstaking bottom">
                                                            <h5>to Other Validators</h5>
                                                            <h5 className="value">{this.state.delegateOther}</h5>
                                                        </div>
                                                  
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="participate-buttons">
                                                <div className="btn-magic-txs">
                                                    <button className="btn" onClick={this.handleModel}> <Icon viewClass="social_icon_imgg" icon="magic" /> Send Magic Transaction</button>
                                                </div>
                                                <div className="btn-delegate">
                                                    <button className="btn" onClick={this.handleDelegateModel}>Delegate</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                </div>
                    </div>
                </div>
                <Modal
                    show={this.state.tcShow}
                    onHide={this.handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                    <p className="tc">Accept Stakedrop Terms & Conditions</p>
                    <div className="button-section">
                    <button className="btn accept" onClick = {this.handleTerms}>Accept</button>
                    <button className="btn decline" onClick = {this.handleCancelTerms} >decline</button>
                    </div>
                    </Modal.Body>
                    </Modal>
                <Modal
                    size="lg"
                    show={this.state.show}
                    onHide={this.handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                    <div className="staking-wallet-section">
                            <h4 className="title">Available Methods to Participate in Stakedrop</h4>
                            <p className="info">Choose a prefered staking method. We recomend the web interface - it’s easier to use!</p>
                            <div className="row wallet-method">
                            <div className="section-magic-address">
                                    <p><b>Magic Txn Address: </b>cosmos1ea6cx6km3jmryax5aefq0vy5wrfcdqtaau4f22</p>
                                    <CopyToClipboard onCopy={this.onCopy} text={'cosmos1ea6cx6km3jmryax5aefq0vy5wrfcdqtaau4f22'}>
                                    <img src={copy} alt="copy" className="copy-icon"/>
                                    </CopyToClipboard>
                                    <section className="copy-result">
                                    {this.state.copyValue ? <span>Copied.</span> : null}
                                    </section>
                                </div>
                            <div className="col-lg-6">
                                    <div className="cli-box">
                                        <div className="card-inner">
                                            <p>Continue with CLI</p>
                                            <Icon viewClass="social_icon_imgg" icon="arrow-right" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <p className="continue-text">Or choose wallet to continue</p>
                           
                            <Wallets />
                            </div>
                    </Modal.Body>
                </Modal>

                <Modal
                    size="lg"
                    show={this.state.showDelegateModal}
                    onHide={this.handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                    <div className="staking-wallet-section">
                            <h4 className="title">Available Methods to Participate in Stakedrop</h4>
                            <p className="info">Choose a prefered staking method. We recomend the web interface - it’s easier to use!</p>
                            <div className="row wallet-method">
                            <div className="section-validator-address">
                                    
                                    <p> <b>audit.one: </b>cosmosvaloper1udpsgkgyutgsglauk9vk9rs03a3skc62gup9ny</p>
                                    <CopyToClipboard onCopy={this.onCopy} text={'cosmosvaloper1udpsgkgyutgsglauk9vk9rs03a3skc62gup9ny'}>
                                        <img src={copy} alt="copy" className="copy-icon"/>
                                    </CopyToClipboard>
                                    <section className="copy-result">
                                    {this.state.copyValue ? <span>Copied.</span> : null}
                                    </section>
                                </div>
                            <div className="col-lg-6">
                                    <div className="cli-box">
                                        <div className="card-inner">
                                            <p>Continue with CLI</p>
                                            <Icon viewClass="social_icon_imgg" icon="arrow-right" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <p className="continue-text">Or choose wallet to continue</p>
                               
                            <Wallets />
                            </div>
                    </Modal.Body>
                </Modal>
            </section>
            </div>
        );
    }
}

export default Participate;


