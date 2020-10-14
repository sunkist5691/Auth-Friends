import React from "react";
import { Route, Redirect } from "react-router-dom";
/* 

Private Route rules:

1. It has the same API as <Route />
2. It renders a <Route /> and passed all the props through it
3. It checks if the user is authenticated, if they are, it renders the 'component' prop
 if not, it redirects the user to /login
 rest operator (looks a lot like spread operator)

*/

const PrivateRoute = ({ component: Component, ...rest }) => {
  //the rest of the props we're not using

  
  return (
    <Route
      {...rest}
      render={ props => { 
        // props={history: '...', params: '...', etc,}
        // you don't actually need a 'props' here.
        // you can write the 'render' code into different way:
        // render={ ()=> token? <Component /> : <Redirect to='/login' /> }
        if (localStorage.getItem('token')) {
          //return the component
          return <Component {...props} />;
        } else {
          //redirect user to /login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;