import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getProducts } from '../Actions/ActionsCreators'

const Products = ({loading, products, getProducts}) => {

    useEffect(()=>{
        getProducts()
    }, [getProducts])
    if(loading){
        return <h2 className="section-title">Loading...</h2>;
    }
    return (
        <section className="section">
            <h2 className="section-title">our products</h2>
            <ul className="products">
                {products.map((item,index)=>{
                    return(
                        <li key={index} className="product">
                            <img src={item.image.url} alt={item.title} />
                            <h4>{item.title}</h4>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

Products.propTypes = {
    loading:PropTypes.bool.isRequired, 
    products: PropTypes.arrayOf(PropTypes.string).isRequired,
    getProducts: PropTypes.func.isRequired,
}

export default connect(( {productState:{ loading, products }})=> ({loading, products}), { getProducts })(Products);

