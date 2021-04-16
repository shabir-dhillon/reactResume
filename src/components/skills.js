import React, { Component } from 'react'
import './section.css';
import { List } from 'semantic-ui-react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6 className="tableTitle">
              Language and Skills
            </h6>
            <hr />
            <div className="row mt">

              <div className="col s12">
                <List bulleted>
                  <List.Item>                    <p>
                    <span className="tableTitle">Skills: </span>
                      Java (intermediate), Python (Intermediate), C (Beginner), Haskell (Beginner) & JavaScript (Beginner)
                    </p></List.Item>
                  <List.Item>                    <p>
                    <span className="tableTitle">Languages: </span>
                    English (Native), Malay (Native), Hindi (Fluent)
                    </p></List.Item>
                </List>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}