import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import React, { useEffect, useState } from 'react';

export function ProtectedRoute({ children, ...rest }) {

    // Вернём из хранилища запрос на получение данных о пользователе и текущий объект с пользователем
    let { getUser, ...auth } = useAuth();
    const [isUserLoaded, setUserLoaded] = useState(false);

    const init = async () => {
    // Вызовем запрос getUser и изменим состояние isUserLoaded
        await getUser();
        setUserLoaded(true);
    };
    // При монтировании компонента запросим данные о пользователе
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
              // Передадим в пропс to не строку, а объект.
                to={{
                  // Маршрут, на который произойдёт переадресация
                  pathname: "/login",
                  // В from сохраним текущий маршрут
                  state: { from: location },
                }}
              />
            )
          }
        />
      );
  } 