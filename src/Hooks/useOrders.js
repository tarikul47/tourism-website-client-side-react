import { useEffect, useState } from "react";

const useOrders = () => {
  const [orders, setServices] = useState([]);

  useEffect(() => {
    fetch("https://stark-hamlet-23308.herokuapp.com/orders")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return [orders, setServices];
};

export default useOrders;