import { useEffect, useState } from "react"

const useFetch = (apiURL) => {

  const [ data, setData ] = useState(null);
  console.log(data);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch( (err)=> {
        console.log(err);
      })
      .finally( () => {
        console.log('API request is over');
      });

  }, [apiURL]);

  return data;

}

export default useFetch;