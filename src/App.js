import React, { useState } from 'react';
import LoginForm from './component/LoginForm/LoginForm';
import Header from './component/Header/Header';
import HeaderButton from './component/Header/HeaderButton';


function App() {
  const [LoginIsShown, setLoginIsShown] = useState(true)


  const showLoginForm = () => {
    setLoginIsShown(true)
  }

  const hideLoginHandler = () => {
    setLoginIsShown(false)
  }

  return (
    <div className="App">
      <React.Fragment>
        {LoginIsShown && <LoginForm onClose={hideLoginHandler}  />}
        <Header onShowLoginForm={showLoginForm} />
        <main>
          {/* <LoginForm /> */}
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
