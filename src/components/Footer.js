import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <div className="footer">
        <p className="footer-tag">The Big Wave</p>
        <div className="accounts">
          <FontAwesomeIcon icon={faEnvelope} size="xl" className="mailIcon"/>
        </div>
    </div>
  )
}
