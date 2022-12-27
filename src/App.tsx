import React , { useState } from "react";
import { useAppSelector } from "./app/hooks";
import PageLoading from "./components/pageLoading";

import UnAuthRoutes from "./routes/unAuthRoutes";
import AuthRoutes from "./routes/authRoutes";

function App() {
  const [ pageLoading , setPageLoading ] = useState(false)
  const { id } = useAppSelector(state=>state.userSlice)

  function stopPageLoading(){
    setPageLoading(false)
  }



  if(pageLoading){ //loading while the app doesn't know if a user is logged in or not
    return <PageLoading />
  }
  else if( !id ) {
    //if a user is doesn't logged in call UnAuthRoutes to show him the login and registration pages
    return <UnAuthRoutes />
  }
  //if a user is logged in call AuthRoutes to show him the app
  else return <AuthRoutes />
}

export default App;
