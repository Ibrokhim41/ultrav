import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Top from "./components/Top";
import Products from "./components/Products";
import Footer from "./components/Footer";
import InProducts from './components/InProducts';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Galleries from './components/Galleries';

function App() {
    return (
        <Router>
            <Top />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={InProducts} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={ContactUs} />
                <Route exact path="/gallery" component={Galleries} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
