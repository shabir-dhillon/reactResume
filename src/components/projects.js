import React, { Component } from 'react'
import './section.css';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="table">
          <div className="card z-depth-0">
            <div className="card-content">
              <h6>
                <strong>PROJECTS</strong>
              </h6>
              <hr />
              <div className="row mt">

                <div className="row mt">
                  <div className="col s6">
                    <div className="itemInfo">
                      <div>
                        <h6 className="no-pad mt-bottom">
                          <strong>Tetris Auto-Player – UCL</strong>
                        </h6>
                      </div>
                    </div>
                    <ul>
                      <li>
                        (Problem-solving) Built an auto-player using Python that calculates the best move for each piece in a game based on 4 different heuristics.
                  </li>
                    </ul>
                  </div>
                  <div className="col s4">
                    <span>
                      Oct 2020 – Dec 2020
                    </span>
                  </div>
                </div>

                <div className="row mt">
                  <div className="col s6">
                    <div className="itemInfo">
                      <div>
                        <h6 className="no-pad mt-bottom">
                          <strong>Java Swing GUI - UCL</strong>
                        </h6>
                      </div>
                      <div>
                        <span>
                          Feb 2021 – Mar 2021
                    </span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        (Innovation) Designed and implemented a Graphical User Interface (GUI) system using Java to load in data from medical patient csv files into a table format and perform operations on the table.
                  </li>
                      <li>
                        Operations include running searches on the data, for example, to find the oldest living person as well as being able to generate graph to visualize the data.
                  </li>
                    </ul>
                  </div>
                  <div className="col s4">
                    <span>
                      Feb 2021 – Mar 2021
                    </span>
                  </div>
                </div>

                <div className="row mt">
                  <div className="col s6">
                    <div className="itemInfo">
                      <div>
                        <h6 className="no-pad mt-bottom">
                          <strong>Convex Hull Algorithm Experiment - UCL</strong>
                        </h6>
                      </div>
                    </div>
                    <ul>
                      <li>
                        (Analytical) Implemented 3 convex hull algorithms, Jarvis March, Graham Scan & Extended Graham Scan.
                  </li>
                      <li>
                        Carried out experiments to determine the time complexity for each algorithm and analysed performance of each algorithm.
                  </li>
                    </ul>
                  </div>
                  <div className="col s4">
                    <span>
                      Feb 2021 – March 2021
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