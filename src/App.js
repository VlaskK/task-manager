import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Store';
import InboxPage from './Pages/inbox-page/indox-page';
import TodayPage from "./Pages/today-page/today-page";
import UpComingPage from './Pages/upcoming-page/upcoming-page';
import Menu from './Components/menu/menu';
import Header from './Components/header/header';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header className="Header" />
          {/* <Menu /> */}
          <Switch>
            <Route exact path="/inbox" element={<InboxPage/>}/>
            <Route exact path="/today" element={<TodayPage/>}/>
            <Route exact path="/upcoming" element={<UpComingPage/>}/>
          </Switch>
        </div>
      </Router>

    </Provider>

  );
}

export default App;
