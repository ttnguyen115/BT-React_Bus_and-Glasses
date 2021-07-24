import React, { Component } from 'react';

class SeatList extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.seatList.map((seat, index) => (
                        <span key={index} className="mb-2 text-center col-3">
                            <button 
                                disabled={seat.TrangThai} 
                                style={{ width: '50px', height: '50px' }}
                                className={`btn btn-${seat.TrangThai ? 'danger' : seat.isBooking ? 'success' : 'secondary' }`}
                                onClick={() => this.props.setOrderSeat(seat)}
                            >
                                {seat.SoGhe}
                            </button>
                        </span>
                    ))
                }
            </div>
        );
    }
}

export default SeatList;