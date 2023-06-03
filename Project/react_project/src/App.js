import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import ImageWithContent from "./Pages/Home"
import EntireHome from './Components/EntireHome';
import Footer from './Footer/Footer';
import AlRoutes from './AllRoutes/AlRoutes';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
        <Navbar/>
       <AlRoutes />
    
        <Footer />
    </div>
  );
}


export default App;
