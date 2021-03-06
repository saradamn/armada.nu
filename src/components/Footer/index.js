import React from "react"
import EasterEgg from "react-easter"
import "./footer.scss";


const konamiCode = [
   'arrowup',
   'arrowup',
   'arrowdown',
   'arrowdown',
   'arrowleft',
   'arrowright',
   'arrowleft',
   'arrowright',
   'b',
   'a',
   'b',
   'a'
 ];


class Footer extends React.Component {
    constructor(props) {
        super(props);
        let armada_img = require('../../../content/assets/images/footer/armada-round-white-transparent.png');
        let ths_logo = require('../../../content/assets/images/footer/ths-logo.png');
        let fb_logo = require('../../../content/assets/images/footer/facebook-logo.png');
        let insta_logo = require('../../../content/assets/images/footer/instagram-logo.png');
        let linkedin_logo = require('../../../content/assets/images/footer/linkedin-logo.png');
        //let google_play = require('../../../content/assets/images/footer/google-play.png');
        //let app_store = require('../../../content/assets/images/footer/app-store.png');

        this.state = {
            thsOrgs: [
                {
                    name: "armada.nu",
                    link: "http://armada.nu/",
                    src: armada_img
                },
                {
                    name: "ths.kth.se",
                    link: "http://ths.kth.se/",
                    src: ths_logo
                }
            ],
            social: [
                {
                    name: "facebook",
                    link: "https://www.facebook.com/thsarmada",
                    src: fb_logo
                },
                {
                    name: "instagram",
                    link: "https://www.instagram.com/thsarmada/",
                    src: insta_logo
                },
                {
                    name: "linkedin",
                    link: "https://www.linkedin.com/company/armada",
                    src: linkedin_logo
                },
            ]
            /*
            apps: [
                {
                    name: "google play",
                    link: "https://play.google.com/store/apps/details?id=se.ths.kth.Aramda&hl=sv",
                    src: google_play
                },
                {
                    name: "appstore",
                    link: "https://itunes.apple.com/se/app/armada/id470187481?mt=8",
                    src: app_store
                },
            ]
            */
        };
    }

    createTemplate(param, cl){
        return (param.map(function(item) {
            return (
                <div key = {item.name} className={cl}>
                    <a href={item.link}>
                        <img src={item.src} alt={item.name}/>
                    </a>
                </div>
            );
        }));
    }

    ingoStarr(){
      return(

          <div className="track">
            <div className="lights"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
            <div className="eat-trail"></div>
            <div className="packman"><div className="eat"></div></div>
            <div className="ingos">
               <div className="ingo three"><img src="/assets/ingoStarr.gif"/></div>
               <div className="ingo one"><img src="/assets/ingoStarr.gif"/></div>
               <div className="ingo two"><img src="/assets/ingoStarr.gif"/></div>
            </div>
          </div>

      );
    }

    render() {
        return (
            <div id="footer">
            <EasterEgg  keys={konamiCode} timeout={10000}>
              {this.ingoStarr()}
            </EasterEgg>

            <div className="logosection">
                {this.createTemplate(this.state.thsOrgs, "logo")}
                <div className="divider"></div>
                {this.createTemplate(this.state.social, "logo")}
                </div>
            </div>
        );
    }
}

export default Footer;
