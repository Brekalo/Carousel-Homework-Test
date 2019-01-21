import React, { Component } from 'react';
import './CarouselDesktop.css';
import Slide from '../Slide/Slides';
import Arrow from '../Arrows/Arrow';
import Photos from '../photos';

export default class CarouselDesktop extends Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide() {
        if (this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: Photos.length - 3,
                translateValue: (Photos.length - 3) * -(this.slideWidth())
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue - -(this.slideWidth())
        }));
    }

    goToNextSlide() {
        if (this.state.currentIndex === Photos.length - 3) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth() {
        return document.querySelector('.slide-container').clientWidth
    }

    render() {
        return (
            <div className='slider-container'>
                <div className='slider-image-container' style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                }}>
                    {
                        Photos.map((photo) => {
                            return <Slide key={photo.id} id={photo.id} />
                        })
                    }
                </div>
                <div className='left-arrow'>
                    <Arrow ChangeSlide={() => this.goToPrevSlide()} />
                </div>
                <div className='right-arrow'>
                    <Arrow ChangeSlide={() => this.goToNextSlide()} />
                </div>
            </div>
        )
    }
}