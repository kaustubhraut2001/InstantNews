// import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
// import NavBaritem from "./components/NavBaritem";
// import Newscomponent from "./components/Newscomponent";
import Newsitem from "./components/Newsitem";
// import React from "react";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = 50;
  state={
    progress: 0,
  }
  setProgress = (progress) => {
    this.setState({
      progress : progress,
    })
  }

  render() {
    // const App = () => {
    //   const [progress, setProgress] = useState(0)

    return (

      <div>
        <Router>
          {/* inside the clas  based complome{this.c} */}
          <Navbar />
          <LoadingBar
          height={4}
          color='#f11946'
           progress={this.state.progress}

      />


          {/* <Newsitem setprogress={this.setprogress}PageSize={PAGESIZE} category="science" /> */}
          <Switch>
            <Route exact path="/general"> <Newsitem setProgress={this.setProgress}  key="general" PageSize={this.pagesize} category="general" />

            </Route>
            <Route exact path="/sports"><Newsitem setProgress={this.setProgress}  key="sports"PageSize={this.pagesize} category="sports" />

            {/* </Route>
            <Route exact path="/education"><Newsitem setProgress={this.setProgress}  key="education"PageSize={this.pagesize} category="education" /> */}

            </Route>
            <Route exact path="/health"> <Newsitem setProgress={this.setProgress} key="health" PageSize={this.pagesize} category="health" />

            </Route>
            <Route exact path="/technology"> <Newsitem setProgress={this.setProgress} key="technology" PageSize={this.pagesize} category="technology" />

            </Route>
            <Route exact path="/business"> <Newsitem setProgress={this.setProgress}  key="business" PageSize={this.pagesize} category="business" />

            </Route>

            <Route exact path="/entertainment"> <Newsitem setProgress={this.setProgress} key="entertainment" PageSize={this.pagesize} category="entertainment" />

            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}
