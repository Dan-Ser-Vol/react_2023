import Cars from './components/CarsBlock/Cars/Cars';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import Users from './components/UsersBlock/Users/Users';
import Comments from './components/CommentsBlock/Comments/Comments';

function App() {

    return (
        <div className={'container'}>
            <Navbar/>
            <Routes>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/cars'} element={<Cars/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
}


export default App;
