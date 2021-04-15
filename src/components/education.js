import React, { Component } from 'react'
import './section.css';

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>EDUCATION</strong>
            </h6>
            <hr />
            <div className="row mt">

              <div className="row mt">
                <div className="col s6">
                  <div className="itemInfo">
                    <div>
                      <h6 >
                        <strong>University College London (UCL)</strong>
                      </h6>
                    First Year BSc Computer Science
                  </div>
                  </div>
                  <ul>
                    <li>
                      Key Modules: Object-Oriented Programming, Algorithms, Design & Professional Skills 1 and Engineering Challenges
                  </li>
                    <li>
                      Awards: Yayasan Sime Darby Undergraduate Excellence Scholarship
                  </li>
                  </ul>
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
                      <h6 className="no-pad mt-bottom">
                        <strong>HELP ACADEMY</strong>
                      </h6>
                   GCE Advanced Level
                  </div>
                  </div>
                  <ul>
                    <li>
                      Awards: School Achiever Scholastic Award (Full scholarship awarded by HELP Academy to complete the GCE A-levels)
                  </li>
                    <li>
                      Academics: 3A* in Mathematics, Biology & Chemistry
                  </li>
                  </ul>
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
                      <h6 className="no-pad mt-bottom">
                        <strong>SMK BUKIT BANDARAYA</strong>
                      </h6>
                      {/* <br /> */}
                    Certificate of Education Malaysia (SPM)
                  </div>
                  </div>
                  <ul>
                    <li>
                      Awards: Highest Achiever (2017)
                  </li>
                    <li>
                      Academics: Distinction in Physics, Chemistry, History, Additional Mathematics, Mathematics, and Accounting
                  </li>
                  </ul>
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
    )
  }
}