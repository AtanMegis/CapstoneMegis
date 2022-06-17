import React, { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewsList from "./components/News/NewsList";
import { Switch, Route } from 'react-router-dom';
import Products from "./components/Products/ProductsList";

function App() {
  const [LoginIsShown, setLoginIsShown] = useState(false);

  const showLoginForm = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };


  return (
    <div className="App">
      <React.Fragment>
        {LoginIsShown && <LoginForm onClose={hideLoginHandler} />}
        <Header onShowLoginForm={showLoginForm} />
        <main>
          <Products />
        </main>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
