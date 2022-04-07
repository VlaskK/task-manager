import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import InboxPage from './Pages/inbox-page/indox-page';
import TodayPage from "./Pages/today-page/today-page";
import UpComingPage from './Pages/upcoming-page/upcoming-page';
import Header from './Components/header/header';
import Menu from './Components/menu/menu';
import './App.css';

const App = () => {

  const isMenuVisible = useSelector(state => state.menu.isVisible);

  return (
    <Router>
      <div className="App">
        <Header className="Header"/>
        <Switch>
          <Route exact path="/inbox" element={<InboxPage />} />
          <Route exact path="/today" element={<TodayPage />} />
          <Route exact path="/upcoming" element={<UpComingPage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
