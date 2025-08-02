import React from 'react';
import Imp from '../components/Imp';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {
  return (
    <div>
      <Imp />
      <Row rowID="1" title="Upcoming" fetchUrl = {requests.requestUpcoming} />
      <Row rowID="2" title="Trending" fetchUrl = {requests.requestTrending} />
      <Row rowID="3" title="Top Rated" fetchUrl = {requests.requestTopRated} />
      <Row rowID="4" title="Popular" fetchUrl = {requests.requestPopular} />
      <Row rowID="5" title="Horror" fetchUrl = {requests.requestHorror} />
    </div>
  );
}

export default Home;
