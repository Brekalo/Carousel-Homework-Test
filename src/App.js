import React, { Component } from 'react';
import './App.css';
import 'normalize.css';
import CarouselDesktop from './Components/CarouselDesktop/CarouselDesktop';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='title'>
          {/* The title is just to check the Fonts */}
          <h1>Desktop Carousel - Test</h1>
        </div>
        <CarouselDesktop />
        {/* The CarouselMobile Coming Soon :) */}
        {/* <CarouselMobile /> */}
      </div>
    );
  }
} 