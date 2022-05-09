import React from 'react';

import {useState, useEffect} from 'react';

const PatchRequest = () => {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        let listItems;
            
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PATCH',
                body: JSON.stringify({
                    title: 'Updated Title Only',
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
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
        }, []);
              
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            
            listItems = items.map((item, index) => {
              return (
                <li key={index}>
                  userId: {item.userId}
                  <br />
                  id: {item.id}
                  <br />
                  title: {item.title} 
                  <br />
                  body: {item.body}
                </li>)
          })}
        return listItems;
}

export default PatchRequest;