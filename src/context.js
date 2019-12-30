import React, { Component } from 'react'
import {items} from './clothes'

const ClothesContext = React.createContext();

class ClothesProvider extends Component {
    
    // Make a copy of the org clothes data and load it when component mounts
    // In the example bellow I made 3 examples to work with and the last one 
    // is the best one ...
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
    state = {
        products: [],
        bag: [],
        bagSubTotal: 0,
        bagTax: 0,
        bagTotals: 0
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = async () => {
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
        })

        return destructuredObj;
    
};

    // Method that select the given product and returns it
    getItem = (id) => {
        let product = this.state.products.find(item => item.id === id);
        return product
    };

    // Add items to bag method
    addToBag = (id) => {
        // 1. Make a copy of products in state
        let copyProducts = [...this.state.products]

        // 2. Get the index of the given product
        let index = copyProducts.indexOf(this.getItem(id))

        // 3. Assign that particular product to a variable bellow
        let product = copyProducts[index]

        // 4. Change some properties of the given product
        product.inBag = true
        product.count = 1

        // 5. let the product total be equal to product price // will be useful later
        let price = product.price
        product.total = price

        // 6. Add the given product to the bag arr and update values
        this.setState(() => {
            return {
                products: [...copyProducts],
                bag: [...this.state.bag, product]
            }
        }) //() => console.log({...this.state}))
    };

    // Delete items from bag method
    removeFromBag = (id) => {
        // 1. Make a copy of products and items in bag from state
        let copyProducts = [...this.state.products]
        let copyBag = [...this.state.bag]

        // 2. Get the index of the given product
        let index = copyProducts.indexOf(this.getItem(id))

        // 3. Assign that particular product to a variable bellow
        let product = copyProducts[index]

        // 4. Change some properties of the given product
        product.inBag = false
        product.count = 0
        product.total = 0

        // 5. Remove the item from the bag
        copyBag = copyBag.filter(item => {
            return item.id !== id
        })

        this.setState(() => {
            return {
                bag: [...copyBag],
                products: [...copyProducts]
            }
        }, this.calcTotals) //() => console.log({...this.state}))

    };

    // Get total values method
    getTotals = () => {
        // 1. Make a initial variable
        let subTotal = 0

        // 2. Loop over the bag and assign the properties totals to our var
        this.state.bag.map(item => (subTotal += item.total))

        // 3. Create a var that will hold our initial tax
        let temporaryTax = subTotal * 0.17 // my country tax

        // 4. Create our actual tax var from the temp tax 
        let actualTax = parseFloat(temporaryTax.toFixed(2))

        // 5. Create our totals variable
        let total = subTotal + actualTax

        // Return our variables
        return({  
            subTotal,
            actualTax,
            total
        })
    }; 

    // Method that calculates our totals and assigns them to state
    calcTotals = () => {
        // 1. Call our method to get totals
        const totals = this.getTotals()
        console.log(totals)

        this.setState({
                bagSubTotal: totals.subTotal,
                bagTax: totals.actualTax,
                bagTotals: totals.total
        })
    };
    
    // Method that increases our counts
    increase = (id) => {
        // 1. Get the copy etc
        let copyBag = [...this.state.bag]

        // 2. Get the current item
        let selectedItem = copyBag.find(item => item.id === id)

        // 3. Get the actual index of that item
        let index = copyBag.indexOf(selectedItem)

        // 4. Assign that item
        let item = copyBag[index]

        // 5. Change some properties of that item
        item.count += 1
        item.total = item.price * item.count

        // Change the state
        this.setState(() => {
            return {
                bag: [...copyBag]
            }
        }, this.calcTotals)
    };

    // Method that decreases our counts 
    decrease = (id) => {
        // 1. Get the copy etc
        let copyBag = [...this.state.bag]

        // 2. Get the current item
        let selectedItem = copyBag.find(item => item.id === id)

        // 3. Get the actual index of that item
        let index = copyBag.indexOf(selectedItem)

        // 4. Assign that item
        let item = copyBag[index]

        // 5. Change some properties of that item
        item.count -= 1
        
        // 6. Check if the item count is 0 , if it is DELETE the item
        if(item.count === 0) {
            this.removeFromBag(id)
        } else {
            // IF NOT continue
            item.total = item.price * item.count
            // Change the state
            this.setState(() => {
                return {
                    bag: [...copyBag]
                }
            }, this.calcTotals)
        }
    };

    render() {
        return(
            <ClothesContext.Provider value={{
                ...this.state,
                addToBag: this.addToBag,
                removeFromBag: this.removeFromBag,
                increase: this.increase,
                decrease: this.decrease
            }}>
                {this.props.children}
            </ClothesContext.Provider>
        )
    }
}

const ClothesConsumer = ClothesContext.Consumer;

export {ClothesProvider, ClothesConsumer};
