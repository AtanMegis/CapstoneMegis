import React, { useState } from "react";
import LoginForm from "./component/LoginForm/LoginForm";
import Header from "./component/Header/Header";
import ProductList from "./component/Products/ProductsList";

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
          <ProductList />
        </main>
        <footer></footer>
      </React.Fragment>
    </div>
  );
}

export default App;
