import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import { useLocation } from 'react-router-dom';

export function ProtectedRoute({ children, ...rest }) {


  const location = useLocation();

  let { getUser, ...auth } = useAuth();
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await getUser();
    setUserLoaded(true);
  };

  useEffect(() => {  
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={() =>
        auth.user.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login", //куда прийти
              state: { from: location }, //куда пойдем
            }}
          />
        )
      }
    />
  );
} 