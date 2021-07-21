import React, { Component } from 'react';
import styles from './GlassDressing.module.css';
import ProductList from './ProductList';

let arrProduct = [
    { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 4, price: 30, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
];

class GlassDressing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: arrProduct,
            selectedProduct: null,
        }
    }

    setSelectedProduct = (product) => {
        this.setState({
            selectedProduct: product
        })
    }

    render() {
        return (
            <div className={styles.wrapper} style={{ backgroundImage: 'url(/glassesImage/background.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
                <div className={styles.content}>
                    <h2 className={styles.title}>Try glasses app online</h2>
                    <div className="container text-center" style={{ position: 'relative' }}>
                        <img className={styles.model} src="./glassesImage/model.jpg" alt="model" />
                        <span style={this.state.selectedProduct ? { display: 'block'} : { display: 'none' }} className={styles.product} >
                            <img src={this.state.selectedProduct?.url} style={{ width: '100%' }} alt="product" />
                        </span>
                        <div style={this.state.selectedProduct ? { display: 'block'} : { display: 'none' }} className={styles.description}>
                            <h4>{this.state.selectedProduct?.name}</h4>
                            <p>{this.state.selectedProduct?.desc}</p>
                        </div>
                    </div>

                    <ProductList products={this.state.products} setSelectedProduct={this.setSelectedProduct} />
                </div>
            </div>
        );
    }
}

export default GlassDressing;