import React, { Component } from "react";
import { Card, Skeleton, Avatar } from 'antd';

const { Meta } = Card;

class LoadingCard extends Component {

    render() {
        return (
            <Card
                style={{ width: 300, marginTop: 16 }}
            >
                <Skeleton loading={true} avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                    />
                </Skeleton>
            </Card>
        );
    }
}

export default LoadingCard;
