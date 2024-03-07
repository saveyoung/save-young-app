import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function DMSafety() {
    return (
        <div className="dmSafetyContainer">
            <header className="dmSafetyHeader">
                <div className="safetyFirstRow">
                    <div className="profile-section">
                        <div className="profile-main">
                            <Image className="profile-pic" width={60} height={60} src="/images/rosieJenkins.png" alt="" />
                        </div>
                        <div className="profile-info">
                            <span className="user-full-name">Rosie Jenkins</span>
                            <span className="user-name">@riseeee_kins</span>
                            <span className="follower-count">463 followers</span>
                        </div>
                    </div>
                    <div className="iconContainer">
                        <FontAwesomeIcon icon={faInstagram} className="page-instagram-icon fa-2xl" />
                    </div>
                </div>
            </header>
            <div className="safety-heading">
                <div className="safety-message">
                    <p className="safety-title">DM Safety</p>
                    <p className="safety-sentence">
                    Our AI moderation tool detects for potential harmful behaviors in
                    the account’s chats and messages.
                    </p>
                </div>
                <div className="safety-column">
                    <Image src="/images/alertvector.png" width={15} height={15} alt="" className="alert-vector" />
                    <p className="alert-number">3</p>
                    <p className="alert-word">Alerts</p>
                </div>
            </div>

            <hr />

            <div>
            <p className="summary-title">Summary</p>
            <p className="summary-paragraph">
                1 account was found exhibiting potential harmful behavior in Rosie’s
                chats. This chat was last monitored 2 days ago.
            </p>
            <div className="parameter-details">
                <Image src="/images/alertvector.png" width={18} height={18} className="parameter-alert" alt="" />

                <p className="parameter-title found">Profanity</p>
                <p className="parameter-description found">
                1 account was found exhibiting potential harmful behavior in
                Rosie’s chats. This chat was last monitored 2 days ago.
                </p>
                <Image src="/images/alertvector.png" width={18} height={18} className="parameter-alert" alt="" />
                <p className="parameter-title found">Threatening</p>
                <p className="parameter-description found">
                1 account was found exhibiting potential harmful behavior in
                Rosie’s chats. This chat was last monitored 2 days ago.
                </p>
                <Image src="/images/alertvector.png" width={18} height={18} className="parameter-alert" alt="" />
                <p className="parameter-title found">Explicit</p>
                <p className="parameter-description found">
                1 account was found exhibiting potential harmful behavior in
                Rosie’s chats. This chat was last monitored 2 days ago.
                </p>
                <Image
                src="/images/grayalertvector.png"
                width={18} height={18}
                className="parameter-alert"
                alt=""
                />
                <p className="parameter-title not-found">Harassment</p>
                <p className="parameter-description not-found">Not Found</p>

                <Image
                src="/images/grayalertvector.png"
                width={18} height={18}
                className="parameter-alert"
                alt=""
                />
                <p className="parameter-title not-found">Shared Personal Details</p>
                <p className="parameter-description not-found">Not Found</p>
            </div>
            <div id="account-page-buttons">
                <button className="feedback-button">Feedback</button>
                <button className="noted-button">
                <FontAwesomeIcon icon={faCheck} className="checkmark" /> Noted
                </button>
            </div>
        </div>
    </div>
    )
}