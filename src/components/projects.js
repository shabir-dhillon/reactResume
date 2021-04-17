import React, { Component } from 'react'
import './section.css';
import { List } from 'semantic-ui-react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="table">
          <div className="card z-depth-0">
            <div className="card-content">
              <h6 className="tableTitle">
                PROJECTS
              </h6>
              <hr />
              <div className="row mt">

                <div className="row mt">
                  <div className="col s6">
                    <div className="itemInfo">
                      <div>
                        <h6 className="tableTitle">
                          Tetris Auto-Player – UCL
                        </h6>
                      </div>
                    </div>
                    <List bulleted>
                      <List.Item>                    <p>
                        <span className="subTitle">(Problem-solving) </span>
                      Built an auto-player using Python that calculates the best move for each piece in a game based on 4 different heuristics.
                    </p></List.Item>
                    </List>
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
                        <h6 className="tableTitle">
                          Java Swing GUI - UCL
                        </h6>
                      </div>
                    </div>
                    <List bulleted>
                      <List.Item>
                        <p> <span className="subTitle">(Innovation) </span>
                      Designed and implemented a Graphical User Interface (GUI) system using Java to load in data from medical patient csv files into a table format and perform operations on the table.
                    </p></List.Item>
                      <List.Item>Operations include running searches on the data, for example, to find the oldest living person as well as being able to generate graph to visualize the data.</List.Item>
                    </List>
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
                        <h6 className="tableTitle">
                          Convex Hull Algorithm Experiment - UCL
                        </h6>
                      </div>
                    </div>
                    <List bulleted>
                      <List.Item>                    <p>
                        <span className="subTitle">(Analytical) </span>
                      Implemented 3 convex hull algorithms, Jarvis March, Graham Scan & Extended Graham Scan.
                    </p></List.Item>
                      <List.Item>Carried out experiments to determine the time complexity for each algorithm and analysed performance of each algorithm.</List.Item>
                    </List>
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
