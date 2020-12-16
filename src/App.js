import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home';
import SearchExam from './pages/SearchExam';
import SendExam from './pages/SendExam';
export default function App() {
    return (
        <Router>
            <GlobalStyle>
                <Switch>
                    
                    <Route path='/send' component={SendExam} />
                    <Route path='/search' component={SearchExam} />
                    <Route path='/' component={Home} />
                </Switch>
            </GlobalStyle>
        </Router>
    );
}