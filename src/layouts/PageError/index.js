import React, { PropTypes } from "react"

import Page from "../Page"
import Jumbotron from "../../components/Jumbotron";

import styles from "./index.css"

const PageError = ({ error, errorText }) => (
    <div>
    <Jumbotron />
  <Page
    head={{
      header: "https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg",
    }}
  >
    <div className={ styles.container }>
      <div className={ styles.oops }>{ "😱 Oooops!" }</div>
      <div className={ styles.text }>
        <p className={ styles.title }>
          <strong>{ error }</strong>
          { " " }
          { errorText }
        </p>
        {
          error === 404 &&
          <div>
            { "It seems you found a broken link. " }
            { "Sorry about that. " }
            <br />
            { "Do not hesitate to report this page 😁." }
          </div>
        }
      </div>
    </div>
  </Page>
    </div>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError
