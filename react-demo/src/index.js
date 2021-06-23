import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import assets
import { players } from './playline-test.json';
import { ReactComponent as LogoImg } from './assets/logo/logo@1x.svg';
import { ReactComponent as ProgressBar } from './assets/icons/progress.svg';
import { ReactComponent as NotifyMeImg } from './assets/icons/notify-me.svg';
import { ReactComponent as MoneyBagImg } from './assets/icons/money-bag.svg';
import { ReactComponent as IosAppImg } from './assets/icons/ios-app.svg';
import { ReactComponent as GooglePlayImg } from './assets/icons/google-play.svg';

class Lineup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <table><tr>
            {players.map((player, index) => (
                <td>
                    <div><img class="headshot" src={ require("./assets/headshots/"+player.last_name+".png").default } alt={player.last_name} /></div>
                    <div>{player.last_name}</div>
                    <div>{player.points}</div>
                    <div>PTS</div>
                </td>
            ))}
        </tr></table>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div class="background">
        <LogoImg />
        <div class="content-frame">
            <ProgressBar />
            <div class="game-status">
                <h1>YOUR PLAYLINE IS SET!</h1>
                <h2>COME BACK @ 7:30PM TO TRACK IT LIVE!</h2>
            </div>
            <div class="protip">
                Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area
            </div>
            <center>
                <Lineup />
            </center>
            <div class="management-buttons">
                <button class="notify-me-button">
                    <NotifyMeImg />
                    NOTIFY ME
                </button>
                <button class="deposit-button">
                    <MoneyBagImg />
                    DEPOSIT
                </button>
            </div>
            <div class="app-download-plug">
                <h2>DOWNLOAD THE APP</h2>
                <IosAppImg /><GooglePlayImg />
            </div>
        </div>
        <div class="game-info">
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);