import "./main.scss";
import { Layout } from 'antd';
import React, { Component } from "react";
import Navigation from "../navigation/navigation.js";
const {
    Header, Footer, Content,
} = Layout;


class Main extends Component {
    render() {
        return (
            <div className="o-wrapper">
                <Navigation />
                <Layout className="layout" style={{ height: '100%' }}>
                    <Header>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Baraton ©2019
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default Main;
