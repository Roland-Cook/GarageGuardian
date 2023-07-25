import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadData() {
  const response = await fetch('http://localhost:8100/api/automobiles/');

  if (response.ok) {
    const data = await response.json();

    root.render(
      <React.StrictMode>
        <App automobiles={data.automobiles}/>
      </React.StrictMode>
    );
  } else {
    console.error(response)
  }
}

loadData();
