import React, { Component } from 'react'
import './section.css';
import { List } from 'semantic-ui-react'

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="card z-depth-0">
            <div className="card-content">
              <h6 className="tableTitle">
                EDUCATION
              </h6>
              <hr />
              <div className="row mt">
                <div className="row mt">
                  <div className="col s6">
                    <div className="itemInfo">
                      <div>
                        <h6 className="tableTitle">
                          University College London (UCL)
                        </h6>
                        <div className="subTitle">
                          First Year BSc Computer Science
                    </div>
                      </div>
                    </div>
                    <List bulleted>
                      <List.Item>Key Modules: Object-Oriented Programming, Algorithms, Design & Professional Skills 1 and Engineering Challenges</List.Item>
                      <List.Item>Awards: Yayasan Sime Darby Undergraduate Excellence Scholarship</List.Item>
                    </List>
                  </div>
                  <div className="col s4">
                    <span> London, United Kingdom
                      <br />
                      Sep 2020 – Jun 2023
                    </span>
                  </div>
                </div>

                <div className="row mt">
                  <div className="col s6">
                    <div className="itemInfo">
                      <div>
                        <h6 className="tableTitle">
                          HELP ACADEMY
                        </h6>
                        <div className="subTitle">
                          GCE Advanced Level
                        </div>
                      </div>
                    </div>
                    <List bulleted>
                      <List.Item>Awards: School Achiever Scholastic Award (Full scholarship awarded by HELP Academy to complete the GCE A-levels)</List.Item>
                      <List.Item>Academics: 3A* in Mathematics, Biology & Chemistry</List.Item>
                    </List>
                  </div>
                  <div className="col s4">
                    <span> Kuala Lumpur, Malaysia
                      <br />
                      Jan 2018 – Jun 2019
                    </span>
                  </div>
                </div>

                <div className="row mt">
                  <div className="col s6">
                    <div className="itemInfo">
                      <div>
                        <h6 className="tableTitle">
                          SMK BUKIT BANDARAYA
                        </h6>
                        <div className="subTitle">
                          Certificate of Education Malaysia (SPM)
                        </div>
                      </div>
                    </div>
                    <List bulleted>
                      <List.Item>Awards: Highest Achiever (2017)</List.Item>
                      <List.Item>Academics: Distinction in Physics, Chemistry, History, Additional Mathematics, Mathematics, and Accounting</List.Item>
                    </List>
                  </div>
                  <div className="col s4">
                    <span> Kuala Lumpur, Malaysia
                      <br />
                      Jan 2013 – Dec 2017
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