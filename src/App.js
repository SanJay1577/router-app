
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import NoPage from './Pages/NoPage';
import SignupPage from './Pages/SignupPage';
import { Skills } from './Pages/Skills';
import Userdetails from './Pages/UserDetails';

function App() {
  //use history will help to navigate to the specific route
  const history = useHistory();
  return (
    <div className="App">
      <div>
        <button onClick={()=>history.goForward()}
        > -&gt;</button>
        <button onClick={()=>history.goBack()}
        >&lt;-</button>
      </div>
      <div className='nav-btn'>

        <button
        onClick={()=>history.push("/home")}
        >
          Home
        </button>

        <button
        onClick={()=>history.push("/about")}
        >
          About
        </button>

        <button
        onClick={()=>history.push("/skills")}
        >
          Skills
        </button>

        <button
        onClick={()=>history.push("/login")}
        >
          login
        </button>



      </div>
      <Switch>
        <Route exact path ="/">
           <h1> Welcome to the application please login/signup to continue </h1>
        </Route>

        <Route exact path ="/login">
            <LoginPage/>
        </Route>

        <Route exact path ="/register">
            <SignupPage/>
        </Route>


        <Route exact path ="/home">
            <Home/>
        </Route>

        <Route path="/about">
        <About/>
        </Route>

        <Route path= "/Prime-apps">
        <Skills/>
        </Route>
          
          <Route path="/skills">
            <Redirect to ="/Prime-apps"/>
    
          </Route>

          <Route path="/user/:id">

          <Userdetails/>
      
          </Route>

          <Route path ="**">
            <NoPage/>
          </Route>

      </Switch>

    </div>
  );
}

export default App;

// step 1 : Switch Statements <Switch> </Switch>
// step 2  : Add Routes <Router path = "/yourpath">{Your component} </Router>
// step 3 : add exact path 
// step 4 : add 404 Page <"**">
// step 5 : Between exact path and 404 path you should add your routes

// Other functionality
// history hook => naviagtion to the differnet path
// some of the functionality of history is 
// .push()
// .replace()
//.goForward()
//.go Back()

// Params functionality 
// step1 : Pass the path with :id <paramaters>
// step2 :  get the id or paramters using useParam hook 
// step 3: const {id} = useParams(); 


//Authentication 


