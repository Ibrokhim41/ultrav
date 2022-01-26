import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Top from "./components/Top";
import Products from "./components/Products";
import Footer from "./components/Footer";
import InProducts from './components/InProducts';

function App() {
    return (
        <Router>
            <Top />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products/product" component={InProducts} />
                <Route exact path="/products" component={Products} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
