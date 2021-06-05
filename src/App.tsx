import React from 'react';
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import About from "./pages/About";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


const App: React.FC = () => { 

  return (    
    <Router>
     <Navbar/>
     <div className="container">
       <Switch>     
        <Route component={TodosPage} path="/" exact />
        <Route component={About} path="/about" />
      </Switch>
     </div>
    </Router>
   
  )
}

export default App;
