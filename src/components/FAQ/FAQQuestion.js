import React from "react"
import './index.scss'
import chevronDown from '../../../content/assets/pil_melon.png'
import chevronUp from '../../../content/assets/pil_melon_up.png'
import PropTypes from "prop-types";



class FAQQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        }; 
    }

    questionOnClicked = () => {
        this.setState({drawerOpen: !this.state.drawerOpen});
    }

    render() {
        return(
            <section className='parent' onClick={ () => this.questionOnClicked()}>
                <h2 tabIndex='0' aria-expanded='false'>
                    {this.props.question}
                <img src={this.state.drawerOpen ? chevronUp : chevronDown} className='chevron' draggable="false"></img>
                </h2>
                
                <div className="children" style={{marginTop: 0, maxHeight: this.state.drawerOpen ? '500px' : 0}} >
                    <p2 className="answer">{this.props.answer}</p2>
                </div>
                
            </section>
        )
    }
}

FAQQuestion.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
}

export default FAQQuestion