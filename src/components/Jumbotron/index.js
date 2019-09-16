import React from "react"
import PropTypes from "prop-types"
import "./jumbotron.scss";
// import {Link} from "react-router"
import ArmadaLogoGreen from '../../../content/assets/armada_round_logo_green.png';


var smoothScroll = {
    timer: null,

    stop: function () {
        clearTimeout(this.timer);
    },

    changeColor: function(){
        document.getElementById("scrollarrowIMG").src="/assets/pil_melon.png";

    },
    changeBack: function(){
        document.getElementById("scrollarrowIMG").src="/assets/pil.png";

    },
    
    

    scrollTo: function (id, callback) {
        var settings = {
            duration: 1000,
            easing: {
                outQuint: function (x, t, b, c, d) {
                    return (c*((t=t/d-1)*t*t*t*t + 1) + b)*1.9;
                }
            }
        };
        var percentage;
        var startTime;
        var node = document.getElementById(id);
        var nodeTop = node.offsetTop;
        var nodeHeight = node.offsetHeight;
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        var windowHeight = window.innerHeight
        var offset = window.pageYOffset;
        var delta = nodeTop - offset;
        var bottomScrollableY = height - windowHeight;
        var targetY = (bottomScrollableY < delta) ?
            bottomScrollableY - (height - nodeTop - nodeHeight + offset):
            delta;

        startTime = Date.now();
        percentage = 0;

        if (this.timer) {
            clearInterval(this.timer);
        }

        function step () {
            var yScroll;
            var elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                window.scrollTo(0, yScroll);
                this.timer = setTimeout(step, 10);
            }
        }

        this.timer = setTimeout(step, 10);
    }
};


class Jumbotron extends React.Component {

    mouseEnter(){
        smoothScroll.changeColor();
    }
    mouseOut(){
        smoothScroll.changeBack();
    }

    mouseDown(){
        smoothScroll.scrollTo("scrollarrow");
    }

    render() {
    let image = this.props.image ? ( <img alt="" src={this.props.image}/> ) : null;
    let video = this.props.video ? (<video autoPlay="true" loop muted>
            <source src={this.props.video} type="video/mp4"/> </video>) : null;

    let video_or_image = video ? video : image;
    let header_class = video ? "header-home" : "header-image";
    let intro_text_header = "WHAT IS ";
    let intro_text_header_green = "THS ARMADA";
    let intro_text_body = "THS Armada arranges Scandinavia's largest career fair at KTH Royal Institute of Technology. Every year, more than 12,000 of Sweden's top engineering and architectural students flock to visit the fair to meet their future employers. Each year ";
    let intro_text_body_green = "we strive to exceed their expectations and to give both students and employees the best possible chance to interact";

    /*
     * The date here is hardcoded because there is no api that gives the dates as answer.
     **/
    return (
        <div id={"header"}>
            <div className={header_class}>
                {video_or_image}
                {header_class === "header-home" ? 
                <div className='about-text-primary-container'>
                    <div className='about-text-width-container'>
                        <p className='about-text-header' >
                            {intro_text_header}<span>{intro_text_header_green}</span>
                        </p>
                        <p className='about-text-body'>
                            {intro_text_body}<span>{intro_text_body_green}</span>
                        </p>
                    </div>
                </div> : null}
            </div>
        </div>
    );
}
}

Jumbotron.propTypes = {
    image: PropTypes.string,
    video: PropTypes.string,
    header_class: PropTypes.string,
};

export default Jumbotron;
