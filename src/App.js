import React, { Component } from 'react';
import Icon from './Icon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Styles</h2>
        <ul className="list-reset flexbox">
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="200px" />
          </li>
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="200px" strokeLinejoin="bevel" strokeLinecap="butt" />
          </li>
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="200px" strokeLinejoin="miter" strokeLinecap="butt" />
          </li>
        </ul>

        <h2>Weights</h2>
        <ul className="list-reset flexbox">
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="64px" strokeWidth="1.5625%" />
          </li>
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="64px" strokeWidth="3.125%" />
          </li>
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="64px" strokeWidth="4.6875%" />
          </li>
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="64px" strokeWidth="6.25%" />
          </li>
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="64px" strokeWidth="7.8125%" />
          </li>
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="64px" strokeWidth="9.375%" />
          </li>
          <li className="inline-block border border-light m2 p2">
            <Icon name="flag" size="64px" strokeWidth="10.9375%" />
          </li>
        </ul>

        <h2>Available Icons</h2>
        <ul className="list-reset flexbox">
          {/*<li className="inline-block border border-light m2 p2"><Icon name="search" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="close" strokeLinecap="butt" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="plus" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="minus" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="play" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="pause" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="backwards" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="forwards" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="star" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="checkmark" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="chevron-top" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="chevron-right" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="chevron-bottom" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="chevron-left" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="arrow-top" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="arrow-right" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="arrow-bottom" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="arrow-left" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="caret-top" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="caret-right" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="caret-bottom" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="caret-left" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="start" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="end" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="eject" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="mute" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="volume" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="ban" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="flag" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="options" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="settings" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="heart" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="clock" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="menu" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="message" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="photo" /></li>*/}
          {/*<li className="inline-block border border-light m2 p2"><Icon name="camera" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="video" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="music" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="mail" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="home" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="user" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="trash" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="paperclip" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="file" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="folder" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="folder-open" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="work" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="portfolio" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="book" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="calendar" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="print" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="eye" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="bookmark" /></li>
          {/* <li className="inline-block border border-light m2 p2"><Icon name="tag" /></li> */}
          <li className="inline-block border border-light m2 p2"><Icon name="lightning" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="activity" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="location" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="export" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="import" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="inbox" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="archive" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="reply" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="edit" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="compose" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="upload" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="download" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="send" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="link" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="code" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="lock" /></li>*/}
          {/*<li className="inline-block border border-light m2 p2"><Icon name="unlock" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="bell" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="alert" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="info" /></li>*/}
          {/*<li className="inline-block border border-light m2 p2"><Icon name="credit-card" /></li>*/}
          {/*<li className="inline-block border border-light m2 p2"><Icon name="cart" /></li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="gift" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="external" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="reload" /></li>
          {/*<li className="inline-block border border-light m2 p2"><Icon name="horizontal-ellipsis" /></li>*/}
          {/*<li className="inline-block border border-light m2 p2"><Icon name="vertical-ellipsis" /> </li>*/}
          <li className="inline-block border border-light m2 p2"><Icon name="twitter" viewbox="0 0 64 64" fill="currentColor" strokeWidth="0" /></li>
          <li className="inline-block border border-light m2 p2"><Icon name="github" fill="currentColor" viewbox="0 0 64 64" strokeWidth="0" /></li>
        </ul>
      </div>
    );
  }
}

export default App;
