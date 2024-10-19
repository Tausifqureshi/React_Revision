import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => { 
    setPending(true);
    const controller = new AbortController(); // Yaha controller ko define karna zaruri hai
    const signal = controller.signal; // Ab signal ko fetch ke sath use karenge
    async function fetchData() {
        try {
          console.log("Fetching data...");
          const res = await fetch(url, { signal: signal });
          if (!res.ok) {
            throw new Error(`Something went wrong: ${res.status}`);
          } 
          const data = await res.json();
          console.log(data);
          setData(data);
          setPending(false);
        } catch (error) {
            console.dir(error)
          setIsError(error.message);
          setPending(false); // Stop pending on error as well
        }
      }
    fetchData();

    // Cleanup function to abort the request.
    // return () => {
    //     console.log("Cleanup function called");
    //     controller.abort(); // Abort request on cleanup
    //   };

  }, [url]);

  return { data, pending, isError };
}

export default useFetch;
// Is useHook ke sath CustomeCompoents use hora hai.

