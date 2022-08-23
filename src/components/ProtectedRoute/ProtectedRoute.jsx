import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../services/auth';

export function ProtectedRoute({ children, ...rest }) {

  const { getUser, ...auth } = useAuth();
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
      render={({ location }) =>
        auth.user.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
} 