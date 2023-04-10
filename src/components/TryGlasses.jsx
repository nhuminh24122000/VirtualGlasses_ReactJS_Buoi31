import React, { Component, Fragment } from 'react';
import data from './data.json';

export default class TryGlasses extends Component {
    state = {
        imgModelURL: '',
        name: '',
        opacity: "0",
        price: 0,
        desc: ""
    }

    changeGlasses = (url, name, opacity, price, desc) => {
        this.setState({
            imgModelURL: url,
            name,
            opacity,
            price,
            desc
        });
    }

    renderData = () => {
        let x = data.map((glasses, index) => {
            return (
                <div className="col-2 my-4 d-flex justify-content-center">
                    <img onClick={() => {
                        this.changeGlasses(data[index].url, data[index].name, "1", data[index].price, data[index].desc)
                    }} className='img-fluid w-50' src={glasses.url} alt={glasses.name} />
                </div>
            );
        })

        return (
            <div className='row container mx-auto' >
                {x}
            </div>
        );
    }

    render() {
        return (
            <div className='tryGlasses row container mx-auto'>
                <div className="tryGlasses row container mx-auto">
                    <div className="col d-flex justify-content-center glassesImage">
                        <img className='img-fluid imgModel' src="./glassesImage/model.jpg" alt="model" />
                    </div>

                    <div className="col d-flex justify-content-center glassesImage">
                        <img className='imgModel' src="./glassesImage/model.jpg" alt="model" />
                        <div className="glassesModel">
                            <img className='glassesModelImage' src={this.state.imgModelURL} alt={this.state.name} />
                        </div>
                        <div className="glassesDetail" style={{ opacity: this.state.opacity }}>
                            <p className='detail1'>{this.state.name} - {this.state.price}$</p>
                            <p className='detail2'>{this.state.desc}</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 glassesList">
                    {this.renderData()}
                </div>
            </div>
        )
    }
}
