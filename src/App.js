import React from 'react';
import LoginForm from './component/LoginForm/LoginForm';
import './App.css'
import Header from './component/Header/Header';


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <Header></Header>
        </header>
        <main>
          <LoginForm />
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
