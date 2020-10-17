import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Screens from './components/Screens'

function App() {
    return (
        <div className="padding">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Screens} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
