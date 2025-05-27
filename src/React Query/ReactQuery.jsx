import React from 'react'
import QueryExample from './QueryExample'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient()

function ReactQuery() {
  return (
   <>
     <h1 style={{ textAlign: "center" }}>React Query Example</h1>
     <p style={{ textAlign: "center" , fontSize: "1.2em" }}>
       React Query is a powerful library for managing server state in React applications.It simplifies data fetching, caching, and synchronization with the server.
     </p>


      <QueryClientProvider client={queryClient}>
        <QueryExample />
      </QueryClientProvider>       
   </>
  )
}

export default ReactQuery