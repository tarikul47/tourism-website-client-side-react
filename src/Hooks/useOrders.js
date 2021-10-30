import { useEffect, useState } from "react";

const useOrders = (userEmail='') => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://stark-hamlet-23308.herokuapp.com/orders/${userEmail}`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);
  return [orders, setOrders];
};

export default useOrders;