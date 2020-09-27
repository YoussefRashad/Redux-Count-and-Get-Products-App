import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {decrease, increase, reset, modelOpen} from '../Actions/ActionsCreators';

const Counter = ({ count, name, decrease, increase, reset}) => {
    return (
        <div className="container">
            <div>
                <h1 className="section-title">Counter</h1>
                <h2>{name}</h2>
                <p className="counter">{count}</p>
                
                <div className="buttons">
                    <button className="btn" onClick={decrease}>
                        decrease
                    </button>
                    <button className="btn" onClick={reset}>
                        reset
                    </button>
                    <button className="btn" onClick={increase}>   
                        increase
                    </button>
                </div>
                
            </div>
        </div>
    );
};

Counter.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

const mapDsipatchToProps = (dispatch) => {
    return {
        increase: () => dispatch (increase ()),
        decrease: () => dispatch (decrease ()),
        reset: () => {
            dispatch (reset())
            dispatch (
                modelOpen (
                'youssef',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sed quis totam saepe mollitia tempore, modi eveniet repellat! Odio, non!'
                )
            );
        }
    };
};

export default connect ( ({countState:{name, count}})=>({ name, count }), mapDsipatchToProps) (Counter);
