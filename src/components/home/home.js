import './home.scss';
import { message } from 'antd';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import FilterBar from '../general/filter-bar/filter-bar.js';
import ProductCard from '../general/product-card/product-card.js';
import LoadingCard from '../general/loading-card/loading-card.js';
import { addToShoppingCart } from '../../actions/shoppingCartActions.js';
import { getProducts, sortProducts, filterProducts, filterProductsByRange } from '../../actions/productActions.js';

const loadingCards = Array(4).fill(0);
message.config({
    top: 90,
    duration: 2,
    maxCount: 3,
});

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            loading: true
        };
    }

    componentWillMount() {
        this.getProducts();
    }

    getProducts = () => {
        this.props.getProducts(this.props.location.search !== "" && parseInt(this.props.location.search.slice(1)));

        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);
    }

    handleOnChance = (value, option) => {
        const { field, sortdir } = option.props;

        this.props.sortProducts(field, sortdir);
    }

    handleSwitchChange = (checked) => {
        this.setState({
            checked: false
        });

        this.props.filterProducts('available', checked);
    }

    handlePriceSliderChange = value => {
        this.setState({
            checked: false
        });

        this.props.filterProductsByRange('price', value);
    };

    handleQuantitySliderChange = value => {
        this.setState({
            checked: false
        });

        this.props.filterProductsByRange('quantity', value);
    };

    handleCheckboxChange = e => {
        this.setState({
            checked: e.target.checked
        });

        if(e.target.checked){
            this.props.getProducts();
        }
    }

    handleAddToCart = (product) => {
        this.props.addToShoppingCart(product);
        message.success(`Se agrego ${product.name} al carrito!`);
    }

    renderLoadingCard = () => (
        loadingCards.map((card, index) => <LoadingCard key={index} />)
    );

    renderProductCard = () => {
        const { products } = this.props;
        return products.map( product => (
            <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                available={product.available}
                sublevel_id={product.sublevel_id}
                handleAddToCart={() => this.handleAddToCart(product)}
            />
        ));
    }

    render() {
        const { products } = this.props
        const { loading, checked } = this.state;

        return (
            <div>
                <FilterBar
                    checked={checked}
                    total={products.length}
                    handleOnChance={this.handleOnChance}
                    handleSwitchChange={this.handleSwitchChange}
                    handleCheckboxChange={this.handleCheckboxChange}
                    handlePriceSliderChange={this.handlePriceSliderChange}
                    handleQuantitySliderChange={this.handleQuantitySliderChange}
                />
                <div className='home'>
                    { loading ? this.renderLoadingCard() : this.renderProductCard() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.productReducer.products
});

// const Home2 = withRouter(Home)
Home =  withRouter(Home);

export default connect(
    mapStateToProps,
    { getProducts, sortProducts, filterProducts, addToShoppingCart, filterProductsByRange }
)(Home);
