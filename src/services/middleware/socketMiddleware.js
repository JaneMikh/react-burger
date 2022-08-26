export const socketMiddleware = (wsUrl, wsActions) => {
    return store => {
        let socket = null;
  
        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
            //const { user } = getState().user;

            if (type === wsInit) {
                socket = new WebSocket(`${wsUrl}${payload}`);
            }

            if (socket && type === onClose) {
                socket.close(1000);
            }

            if (socket) {
                socket.onopen = event => {
                console.log('открылся');
                dispatch({ type: onOpen, payload: event });
            };
  
            socket.onerror = event => {
                dispatch({ type: onError, payload: event });
            };
  
           /* socket.onmessage = event => {
                const { data } = event;
                const parsedData = JSON.parse(data);
                const { success, ...restParsedData } = parsedData;
                
                dispatch({ type: onMessage, payload: restParsedData });
            };*/

            socket.onmessage = event => {
                const { data } = event;
                dispatch({ type: onMessage, payload: JSON.parse(data) });
            };
            
  
            socket.onclose = event => {
                console.log("закрылся");
                dispatch({ type: onClose, payload: event });
            };
  
            if (type === wsSendMessage) {
                //const message = { ...payload, token: user.token };
                const message = payload;
                socket.send(JSON.stringify(message));
            }
        }
        next(action);
      };
    };
  };