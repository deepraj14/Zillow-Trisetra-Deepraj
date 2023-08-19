import React from 'react'

const Tester = ({data,isLoading,refetch}) => {
  return (
    <div>

      {isLoading?<h1>...Loading</h1>:
      <>
      {data?.fact}
      <button onClick={()=>{refetch("fact")}}>Generate Fact</button>
      </>
      }
      
    </div>
  )
}

export default Tester
