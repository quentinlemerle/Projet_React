import React, { Component } from 'react';
import './Home.css';
import {Container, Row, Col} from 'reactstrap';
import Profil from '../Components/Profil';
import jeanne from '../Images/jeanne.jpg';
import Followers from '../Components/Followers';
import Chart from '../Components/Chart';
import Barchart from '../Components/Barchart';
import Calendrier from '../Components/Calendrier';
import Weather from '../Components/Weather';
import TodoList from '../Components/TodoList';
import SpotifyPlayer from 'react-spotify-player';


const infos = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const size = {
  width: '100%',
  height: '300',
};


class Home extends Component {













  render() {
    return (
    	<Container>
    	<Row>

    	<Col xl="7" className="chart"><Chart data={infos}/></Col>
    	<Col className="followers"><Followers nbrfollowers="4500"/></Col>
    	</Row>
    	<Row>
    	   <Col xl="7" className="barchart"><Barchart data={data}/></Col>
        <Col className="clock"><Calendrier /></Col>
    	</Row>
    	<Row>
    	<Col className="weather"><Weather /></Col>
    	<Col className="todo"><TodoList /></Col>
    	</Row>
      <Row>
      <Col xl="7" className="player">
        <SpotifyPlayer uri="spotify:album:43QqlF5F3AuyBCedZAXrg3"size={size} view={'list'} theme={'black'} />
      </Col>
      <Col xl="4" className="profil"><Profil
             prenom="Jeanne"
             nom="Test"
             naissance="08/12/1996"
             image={jeanne}
              />
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Home;