import React, { useState } from "react";
import LoginForm from "./component/LoginForm/LoginForm";
import Header from "./component/Header/Header";
import ProductList from "./component/Products/ProductsList";
import Carousel from "./component/Header/Carousel/Carousel";

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
          <Carousel />
          <ProductList />
        </main>
        <footer></footer>
      </React.Fragment>
    </div>
  );
}

export default App;
