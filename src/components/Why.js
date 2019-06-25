import React from "react";

export class Why extends React.Component {
  render() {
    return (
      <div>
        <div className=" d-flex justify-content-center  " id="why">
          <div className="container " id="container_one">
            <div id="heading">
              <h1>Why AI DASH?</h1>
            </div>
            <div id="points">
              <div className="row">
                <img src="./images/arrow.png" alt="arrow" />
                <h3>AI-First </h3>
              </div>

              <p>
                Our products are driven by an AI-First approach, which focuses
                on providing solutions that are condition-based and
                risk-informed.
              </p>
            </div>
            <div id="points">
              <div className="row">
                <img src="./images/arrow.png" alt="arrow" />
                <h3>
                  Seamlessly <br />
                  integrated
                </h3>
              </div>
              <p>
                AI DASH suite of products are designed to integrate seamlessly
                into enterprise IT to meet the demands of large organizations in
                a smooth, consistent and coherent manner.
              </p>
            </div>
          </div>
          <div className="container" id="container_two">
            <div id="points">
              <div className="row">
                <img src="./images/arrow.png" alt="arrow" />
                <h3>End to end</h3>
              </div>
              <p>
                We offer end to end solutions through products that are deployed
                both as SaaS and On-Premise enabling enterprises to use them
                without complexity.
              </p>
            </div>
            <div id="points">
              <div className="row">
                <img src="./images/arrow.png" alt="arrow" />
                <h3>Secure </h3>
              </div>
              <p>
                Our products work on digital trust and safety, which means your
                data remains completely secure and confidential.
              </p>
            </div>
            <div id="points">
              <img
                className="laptop"
                src="./images/Group.png"
                // src="https://secure.webtoolhub.com/static/resources/icons/set10/47d024791ac70.png"
                alt="laptop"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
