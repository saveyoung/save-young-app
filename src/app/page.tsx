import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import Navigation from "./navigation";  
import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <Navigation/>
      <div className="top-notification">
        <FontAwesomeIcon icon={faCircleExclamation} className="notification-alert fa-2xl" />
        <p className="notification-message">
          3 suspicious activities found in&nbsp;
          <a href="#" className="account-link"><u>@riseeee_kins</u></a>&nbsp;account.&nbsp;
          <a className="learn-more" href="#"><u>Learn more.</u></a>
        </p>
      </div>
      <div className="homeContainer">
        <div className="profile-box">
          <Link href="/safety-overview">
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

            <FontAwesomeIcon icon={faInstagram} className="instagram-icon fa-2xl" />

            <div className="account-safety-info">
              <div className="dash-box">
                <span className="sub-heading-one"> Account Safety </span>

                <div className="safety-column">
                  <Image src="/images/safevector.png" width={29} height={29} alt="" className="safe-vector" />
                  <p className="safe">Safe</p>
                </div>
              </div>

              <div className="dash-box">
                <span className="sub-heading-two"> DM Safety </span>

                <div className="safety-column">
                  <Image src="/images/alertvector.png" width={15} height={15} alt="" className="alert-vector" />
                  <p className="alert-number">3</p>
                  <p className="alert-word">Alerts</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="profile-box">
          <Link href="/safety-overview">
            <div className="profile-section">
              <div className="profile-main">
                <Image className="profile-pic" width={60} height={60} src="/images/williamJenkins.png" alt="" />
              </div>
              <div className="profile-info">
                <span className="user-full-name">William Jenkins</span>
                <span className="user-name">@willy_wonka</span>
                <span className="follower-count">1000 followers</span>
              </div>
            </div>

            <FontAwesomeIcon icon={faInstagram} className="instagram-icon fa-2xl" />

            <div className="account-safety-info">
              <div className="dash-box">
                <span className="sub-heading-one"> Account Safety </span>

                <div className="safety-column">
                  <Image src="/images/safevector.png" width={29} height={29} alt="" className="safe-vector" />
                  <p className="safe">Safe</p>
                </div>
              </div>

              <div className="dash-box">
                <span className="sub-heading-two"> DM Safety </span>

                <div className="safety-column">
                  <Image src="/images/safevector.png" width={29} height={29} alt="" className="safe-vector" />
                  <p className="safe">Safe</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="clear"></div>
      <Footer/>
    </main>
  );
}
