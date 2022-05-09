import { useEffect, useState } from "react";

const useRequest = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
      
    let listItems, requestOptions, url;

    useEffect(() => {
        
        switch(props.method) {
            case 'GET':
                url = 'https://jsonplaceholder.typicode.com/posts/1';
                requestOptions = {
                        method: props.method,
                        headers: { 'Content-Type': 'application/json' },
                };
                break;
            case 'POST':
                url = 'https://jsonplaceholder.typicode.com/posts';
                requestOptions = {
                    method: props.method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({  
                        title: props.title,
                        body: props.body,
                        userId: props.userId, 
                    })
                };
                break;
            case 'PUT':
                url = 'https://jsonplaceholder.typicode.com/posts/1';
                requestOptions = {
                    method: props.method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: props.id,
                        title: props.title,
                        body: props.body,
                        userId: props.userId,
                    }),
                };
                break;
            case 'PATCH':
                url = 'https://jsonplaceholder.typicode.com/posts/1';
                requestOptions = {
                    method: props.method,
                        body: JSON.stringify({
                            title: props.title,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                };
                break;
            case 'DELETE':
                url = 'https://jsonplaceholder.typicode.com/posts/1';
                requestOptions = {
                    method: props.method,
                };
                break;
        } 

        fetch(url, requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems([result]);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [props.method]);
          
    listItems = items.map((item) => {
        return (
        <li key={item.toString()}>
            userId: {item.userId}
            <br />
            id: {item.id}
            <br />
            title: {item.title} 
            <br />
            body: {item.body}
        </li>)
    })
        
  return listItems;
}

export default useRequest;