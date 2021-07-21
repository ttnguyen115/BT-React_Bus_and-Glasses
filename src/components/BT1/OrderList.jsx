import React, { Component } from 'react';

class OrderList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.orderSeat.map((seat, index) => (
                        <div key={index}>
                            Seat: {seat.TenGhe} ${seat.Gia} 
                            <span style={{ color: 'red', cursor: 'pointer' }}
                                onClick={() => this.props.setOrderSeat(seat)}
                            >[Cancel]</span>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default OrderList;