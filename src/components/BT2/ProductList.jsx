import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <ul className="row text-center" style={{ listStyle: 'none' }}>
                    {
                        this.props.products.map(product => (
                            <li key={product.id} style={{ margin: '100px 10px' }}
                                onClick={() => this.props.setSelectedProduct(product)}
                            >
                                <img src={product.url} alt="product" style={{ width: '120px' }} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;