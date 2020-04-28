import React, {Component} from 'react';
import Order from "../../components/order/Order";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/spinner/Spinner";


class Orders extends Component {

    async componentDidMount() {
        this.props.onfetchOrders();
    }

    render() {
        let orders = <Spinner/>;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                />
            ))
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchOrders: () => dispatch(actions.fetchOrders())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
