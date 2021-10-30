import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useOrders from '../../../Hooks/useOrders';

const MyOrders = () => {
    const {user} = useAuth()
    const [orders] = useOrders();
    const userOrders = orders.filter(order => order.email === user.email);
    console.log(userOrders);

    return (
        <>
            <h2>My Orders</h2>
            <p>{userOrders.length}</p>
            {}
        </>
    );
};

export default MyOrders;