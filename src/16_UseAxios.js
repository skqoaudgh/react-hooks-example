import React, { useState, useEffect } from "react";
import defaultAxios from 'axios';

const useAxios = (opts, axiosInstance=defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  }

  useEffect(() => {
    axiosInstance(opts).then(data => {
      setState({
        ...state,
        data,
        loading: false,
      });
    }).catch(error => {
      setState({
        ...state,
        error,
        loading: false
      });
    })
  }, [trigger]);
  if(!opts.url) {
    return;
  }
  return {...state, refetch};
}

function App() {
  const {loading, error, data, refetch} = useAxios({url: 'https://yts-proxy.now.sh/list_movies.json'});
  console.log(loading, error, data);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
