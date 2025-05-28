import React, { useEffect } from 'react'

function QueryExample() {
  const [data, setData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const URI = "https://jsonplaceholder.typicode.com/posts"
  useEffect(() => { 
    fetch(URI).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }).then((data) => {
      setData(data)
      setIsLoading(false)
    }).catch((error) => {
      setError(error.message)
      setIsLoading(false)
    })

    }, [])
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default QueryExample