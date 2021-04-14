import React, { Component } from 'react'
import './section.css';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>Language and Skills</strong>
            </h6>
            <hr />
            <div className="row mt">

              <div className="col s12">
                <ul>
                  <li>
                    Skills: Java (intermediate), Python (Intermediate), C (Beginner), Haskell (Beginner) & JavaScript (Beginner)
                  </li>
                  <li>
                    Languages:
                    English (Native), Malay (Native), Hindi (Fluent)
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}