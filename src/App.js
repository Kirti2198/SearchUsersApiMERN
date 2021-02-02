import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import SearchUser from './components/search';
function App() {
  return (
    <Router>
      <div className="container">
      
      <br/>
      {/* <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} /> */}
      <Route path="/" component={SearchUser} />
      </div>
    </Router>
  );
}

export default App;
