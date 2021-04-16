import React, { Component } from 'react'
import './section.css';
import { List } from 'semantic-ui-react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6 className="tableTitle">
              Work Experience
            </h6>
            <hr />
            <div className="row mt">

              <div className="row mt">
                <div className="col s6">
                  <div className="itemInfo">
                    <div>
                      <h6 className="tableTitle">
                        SOLS 24/7 Foundation (Science of Life Studies 247)
                      </h6>
                      <div className="subTitle">
                        Digital Sales & Marketing Intern
                    </div>
                    </div>
                  </div>
                  <List bulleted>
                    <List.Item>Assisted in dealing with client’s queries regarding SOLS 24/7’s free online education platform and handled day-to-day scheduled marketing posts & social media update.</List.Item>
                    <List.Item>Key transactions include: Marketing campaign to increase awareness on the education platform by designing an Instagram filter using SparkAR Studio.</List.Item>
                  </List>
                </div>
                <div className="col s4">
                  <span>
                    Kuala Lumpur, Malaysia
                      <br />
                      Mar 2020 – Jun 2020
                    </span>
                </div>
              </div>

              <div className="col s6">
                <div className="itemInfo">
                  <div>
                    <h6 className="tableTitle">
                      Kumon
                    </h6>
                    <div className="subTitle">
                      Part-time Mathematics Teacher.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s4">
                <span> Kuala Lumpur, Malaysia
                      <br />
                      Jan 2020 - Feb 2020
                    </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}