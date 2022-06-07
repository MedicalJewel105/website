import React from "react";
import xprtnetwork from '../../assets/images1/xprtnetworks.png';


const Network = () => {
    return (
        <section className="network-section">
            <div className="container">
                    <div className="tech-box">
                        <div className="content-container">
                            <h2 className="heading">Building An Economy Around Proof-of-Stake Assets</h2>

                        </div>
                        <div className={"allassets"}>
                            <img src={xprtnetwork} alt={"network"} title={'Assets'} className={'w-100'}/>
                        </div>
                </div>
            </div>

        </section>
    )
};
export default Network;