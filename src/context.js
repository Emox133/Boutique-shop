import React, { Component } from 'react'
import {items} from './clothes'

const ClothesContext = React.createContext();

class ClothesProvider extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.setProducts();
    }

    // Make a copy of the org clothes data and load it when component mounts
    // In the example bellow I made 3 examples to work with and the last one 
    // is the best one ...

    setProducts = async () => {
        /*
        // 1.Example one
        let transformedItems = [];

        for (let key in items) {
            let transfItem = items[key];
            transformedItems = [...transformedItems, transfItem];
        }
        */

        /*
        // 2.Example two , alternative way for example one
        let reducedItems = [];
        items.reduce((acc, cur) => {
            return reducedItems = acc.concat(cur)
        }, [])
        console.log(reducedItems)
        */

        // 3.Example three, example that I used for this project
        let destructuredObj = [...items];

        destructuredObj = destructuredObj.map(item => { 
            const {id} = item.sys;
            const {title, price, material, count, manufacturer, total, category, inBag} = item.fields;
            const image = item.fields.image.fields.file.url;

            return {id, title, price, material, count,manufacturer, total,category, inBag, image};
        });

        this.setState(() => {
            return {products: destructuredObj}
        }, () => console.log({...this.state}))

        return destructuredObj;
    
};

    addToCart = () => {
        console.log("Added to cart")
    };


    render() {
        return(
            <ClothesContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ClothesContext.Provider>
        )
    }
}

const ClothesConsumer = ClothesContext.Consumer;

export {ClothesProvider, ClothesConsumer};
