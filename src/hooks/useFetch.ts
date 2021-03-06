import { useEffect, useState } from "react";

export const useFetch = (url: string, method = "get") => {

  // states
  const [state, setState] = useState({
    data: null,
    laoding: true
  })

  // useEffect
  useEffect(() => {
    fetch(url, { method })
      .then((resp) => resp.json())
      .then((json) => setState({ data: json, laoding: false }));
  }, [url, method])

  return state;
}