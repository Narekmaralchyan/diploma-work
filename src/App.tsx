import React , { useState } from "react";
import PageLoading from "./components/pageLoading";

function App() {
  const [ pageLoading , setPageLoading ] = useState(true)


  if(pageLoading){
    return <PageLoading />
  }
}

export default App;
