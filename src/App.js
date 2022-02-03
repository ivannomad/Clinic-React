import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Login} from "./Login";
import {StartPage} from "./StartPage";
import {Home} from "./Home";
import {Register} from "./component/Register";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact={true} element={<StartPage/>}/>
                <Route path='/register' exact={true} element={<Register/>}/>
                <Route path='/login' exact={true} element={<Login/>}/>
                <Route path='/home' exact={true} element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
