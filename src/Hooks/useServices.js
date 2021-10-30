import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://stark-hamlet-23308.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useServices;