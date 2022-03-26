import React,{Component} from 'react'
import './App.css';
import Home from './pages/pages home/Home';
import Header from './Components/header';
import 
  {BrowserRouter as Router
  ,Switch
  ,Route}
 from 'react-router-dom'
import AddExpense from './pages/pages home/add-expense/index';
import Footer from './Components/footer/index';

class App extends Component {
  render(){
    return(
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add-expense' component={AddExpense} />
          </Switch>
          <Footer />
        </Router>
    );
  }
 }


export default App;
