import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";

function UserDashboard(props) {
  return (
    <div id="Cantainer">
      <div id="topcontainer">
        <h1>BROWSE GUIDES</h1>
        <div class="ui card" id="populercardOne">
          <div class="content">
            <div class="header"></div>
            <div class="meta">
              <span>description will go here</span>
            </div>
          </div>
        </div>

        <div class="ui card" id="populercardTwo">
          <div class="content">
            <div class="header">Poupler guide</div>
            <div class="meta">
              <span>description will go here</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div class="ui comments">
            <div class="comment">
              <a class="avatar">
                <img src="/images/avatar/small/matt.jpg" />
              </a>
              <div class="content">
                <h4 class="ui dividing header">Guide one</h4>
                <div class="metadata">description will go here..</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div class="ui comments">
            <div class="comment">
              <a class="avatar">
                <img src="/images/avatar/small/matt.jpg" />
              </a>
              <div class="content">
                <h4 class="ui dividing header">Guide two</h4>
                <div class="metadata">description will go here..</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div class="ui comments">
            <div class="comment">
              <a class="avatar">
                <img src="/images/avatar/small/matt.jpg" />
              </a>
              <div class="content">
                <h4 class="ui dividing header">Guide three</h4>
                <div class="metadata">description will go here..</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div class="ui comments">
            <div class="comment">
              <a class="avatar">
                <img src="/images/avatar/small/matt.jpg" />
              </a>
              <div class="content">
                <h4 class="ui dividing header">Guide Four</h4>
                <div class="metadata">description will go here..</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
