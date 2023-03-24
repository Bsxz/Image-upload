import React, {Suspense, lazy} from "react"
import 'antd/dist/reset.css'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import {Loading} from "./components/Loading"
import {Header} from "./components/Header"

const Home = lazy(() => import('./pages/Home'))
const History = lazy(() => import('./pages/History'))
const About = lazy(() => import('./pages/About'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

export const App = () => {
    return (
        <>
            <div className='app'>
                <Header/>
                <Suspense fallback={<Loading/>}>
                    <main>
                        <Routes>
                            <Route path='/' exact element={<Home/>}/>
                            <Route path='/history' element={<History/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/register' element={<Register/>}/>
                        </Routes>
                    </main>
                </Suspense>
            </div>
        </>
    );
}

