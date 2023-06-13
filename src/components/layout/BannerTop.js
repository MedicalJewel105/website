import React, {useState} from "react";
import Alert from "react-bootstrap/Alert";
import stkATOM from "../../assets/images1/logos/dexter_icon.svg";
import Icon from "../Icon";

const BannerTop = () => {
    const [banner, setBanner] = useState(true);

    const closeBanner = () => {
        setBanner(false);
    }

    return (
        banner ?
        <div className="container-fluid bannernav-section">
                <div className="container">
                    <Alert className="nav-banner alert-dismissible d-flex align-items-center justify-content-center">
                        <img src={stkATOM} alt={"stkATOM"} className="pr-2 logo"/>
                        <p>
                            Dexter's Trading Rebate Program is now LIVE. Learn more and trade&nbsp;
                            <a
                                className="link"
                                href={'https://app.dexter.zone/rebate-program'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>here!</b>
                            </a>
                        </p>
                        <div onClick={closeBanner} className="close">
                        <Icon
                            viewClass="close fill-[#fff] absolute top-[13px] right-[20px] cursor-pointer"
                            icon="close"
                        />
                        </div>
                    </Alert>
                </div>
        </div>
                : null

    );
};

export default BannerTop;
