import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Top from "./components/Top";
import Products from "./components/Products";
import Footer from "./components/Footer";
import InProducts from './components/InProducts';
import About from './components/About';

function App() {
    return (
        <Router>
            <Top />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={InProducts} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/about" component={About} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
