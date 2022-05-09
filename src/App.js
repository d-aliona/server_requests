import React from 'react';

import './App.css';
import GetRequest from './GetRequest';
import PostRequest from './PostRequest';
import PutRequest from './PutRequest';
import PatchRequest from './PatchRequest';
import DeleteRequest from './DeleteRequest';
import useRequest from './useRequest';

import {useState} from 'react';

function App() {
  const requestList = [
    {method: 'GET'},
    {method: 'POST',  title: 'New Title', body: 'New Body', userId: 1},
    {method: 'PUT', id: 1, title: 'Updated Title', body: 'Updated Body', userId: 1},
    {method: 'PATCH', title: 'Updated Title Only'},
    {method: 'DELETE'}
  ];

  const [showRequest, setShowRequest] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState({});
  
  let showUniversalRequest = useRequest(selectedMethod);

  const showGetRequest = (e) => {
    e.preventDefault();
    setShowRequest(showRequest.concat(
      <GetRequest key={showRequest.length} />
    ))
  }

  const showPostRequest = (e) => {
    e.preventDefault();
    setShowRequest(showRequest.concat(
      <PostRequest key={showRequest.length} />
    ))
  }

  const showPutRequest = (e) => {
    e.preventDefault();
    setShowRequest(showRequest.concat(
      <PutRequest key={showRequest.length} />
    ))
  }

  const showPatchRequest = (e) => {
    e.preventDefault();
    setShowRequest(showRequest.concat(
      <PatchRequest key={showRequest.length} />
    ))
  }  

  const showDeleteRequest = (e) => {
    e.preventDefault();
    setShowRequest(showRequest.concat(
      <DeleteRequest key={showRequest.length} />
    ))
  }
  
  const clearRequest = (e) => {
    e.preventDefault();
    setShowRequest([]);
  }

  const UniversalRequest = (e, method) => {
    e.preventDefault();
    
    setSelectedMethod(requestList.find((ob) => ob.method === method));
        
    setShowRequest(showRequest.concat(
          showUniversalRequest
        ))
  }

  return (
    <>
      <ul>
        <span>Прості запити: </span>
        <button onClick={showGetRequest} >GET Request</button>
        <button onClick={showPostRequest} >POST Request</button>
        <button onClick={showPutRequest} >PUT Request</button>
        <button onClick={showPatchRequest} >PATCH Request</button>
        <button onClick={showDeleteRequest} >DELETE Request</button>
        <button onClick={clearRequest} >CLEAR</button>

      </ul>
      <ul>
        <span>Запити через універсальний хук: </span>
        <button onClick={(e) => UniversalRequest(e, 'GET')} >GET Request</button>
        <button onClick={(e) => UniversalRequest(e, 'POST')} >POST Request</button>
        <button onClick={(e) => UniversalRequest(e, "PUT")} >PUT Request</button>
        <button onClick={(e) => UniversalRequest(e, "PATCH")} >PATCH Request</button>
        <button onClick={(e) => UniversalRequest(e, "DELETE")} >DELETE Request</button>
        <button onClick={clearRequest} >CLEAR</button>

      </ul>
      <ul>
        {showRequest}
      </ul>
    </>
  )}

export default App;
