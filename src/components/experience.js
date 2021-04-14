import React, { Component } from 'react'
import './section.css';

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>Work Experience</strong>
            </h6>
            <hr />
            <div className="row mt">

              <div className="col s12">
                <div className="itemInfo">
                  <div>
                    <h6 className="no-pad mt-bottom">
                      <strong>SOLS 24/7 Foundation (Science of Life Studies 247)</strong>
                    </h6>
                    {/* <br /> */}
                    Digital Sales & Marketing Intern
                  </div>
                  <div>
                    <span>
                      Kuala Lumpur, Malaysia
                      <br />
                      Mar 2020 – Jun 2020
                    </span>
                  </div>
                </div>
                <ul>
                  <li>
                    Assisted in dealing with client’s queries regarding SOLS 24/7’s free online education platform and handled day-to-day scheduled marketing posts & social media update.
                  </li>
                  <li>
                    Key transactions include: Marketing campaign to increase awareness on the education platform by designing an Instagram filter using SparkAR Studio.
                  </li>
                </ul>
              </div>

              <div className="col s12">
                <div className="itemInfo">
                  <div>
                    <h6 className="no-pad mt-bottom">
                      <strong>Kumon</strong>
                    </h6>
                    {/* <br /> */}
                    Part-time Mathematics Teacher.
                  </div>
                  <div>
                    <span> Kuala Lumpur, Malaysia
                      <br />
                      Jan 2020 - Feb 2020
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}