import React from "react"
// import { navigate } from "gatsby"
import { Router, navigate } from '@reach/router';
import type { PageProps } from "gatsby"

import { isLoggedIn } from "../services/auth"

type PrivateRouteProps = PageProps & {
    component: React.ElementType
}
 

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, location, ...rest }) => {
    if (!isLoggedIn() && location.pathname !== `/app/login`) {
        navigate("/app/login")
        return null
      }
  
    return <Component {...rest} />
  }
  
  export default PrivateRoute
