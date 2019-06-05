import "./navigation.scss";
import { Link } from 'react-router';
import { connect } from "react-redux";
import React, { Component } from "react";
import { Nav, Navbar} from 'react-bootstrap';
import { getMenu } from "../../actions/menuActions.js";
import { Icon, Menu, message, Button, Input} from 'antd';
import { getProducts } from "../../actions/productActions.js";

const { SubMenu } = Menu;

export class Navigation extends Component {

    componentWillMount() {
        this.props.getMenu();
    }

    handleOnClick = (id) => {

        if(this.refs.search) {
            this.refs.search.input.focus();
        }
        this.props.getProducts(id);
    }

    handleItemSearch = (e) => {
        this.props.getProducts(undefined, e.target.value);
    }

    renderMenu = () => {
        const { menu } = this.props;
        return (
            <Menu mode="horizontal" ref='Menu'>
                {menu.map(({name, id, icon, sublevels}) => {
                    return (
                        <SubMenu
                            ref='SubMenu1'
                            onTitleClick={() => this.handleOnClick(id)}
                            key={name+'_'+id}
                            title={
                                <Link to={{pathname:"/", search:`?${id}`}}>
                                    <span className="submenu-title-wrapper">
                                        <Icon type={icon} />
                                        {name}
                                    </span>
                                </Link>
                            }
                        >
                            { sublevels && sublevels.map(subOption => this.renderSubMenu(subOption)) }
                        </SubMenu>
                    );
                })}
            </Menu>
        );
    }

    renderSubMenu = ({name, id, icon, sublevels}) => {
        return (
            <SubMenu
                ref='SubMenu2'
                onTitleClick={() => this.handleOnClick(id)}
                key={name+'_'+id}
                title={
                    <Link to={{pathname:"/", search:`?${id}`}}>
                        <span className="submenu-title-wrapper">
                            <Icon type={icon} />
                                {name}
                        </span>
                    </Link>
                }
            >
                { sublevels
                    ? sublevels.map(subOption => this.renderSubMenu(subOption))
                    : <Menu.Item>
                        <Input ref='search' onBlur={() => this.refs.search.input.focus()} autoFocus={true} onPressEnter={(e) => this.handleItemSearch(e)}/>
                    </Menu.Item> }
            </SubMenu>
        );

    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" sticky="top">
                <Navbar.Brand >
                    <Link to={"/"}>Baraton</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" ref='Nav'>
                        {  this.renderMenu() }
                    </Nav>
                    <Nav>
                        <Link to={"/shopping-cart"}>
                            <Button shape="circle" icon="shopping-cart"/>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    handleMenuClick = (e) => {
        message.info('Click on menu item.');
    }


}

const mapStateToProps = state => ({
    menu: state.menuReducer.menu,
    shoppingCart: state.shoppingCartReducer.shoppingCart
});


export default connect(
    mapStateToProps,
    { getMenu, getProducts }
)(Navigation);
