import { useEffect, useState } from "react";

const useSingleService = (id) => {
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch(`https://stark-hamlet-23308.herokuapp.com/services/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleService(data));
  }, []);
  return [singleService, id, setSingleService];
};

export default useSingleService;