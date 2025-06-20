<<<<<<< HEAD
import { Link, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import Login from "./Login";
import Invoice from "./Invoice";
import Additem from "./Additem";
import Stock from "./Stock";
// import Sidebar from './Sidebar';
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";
=======

import { Link, Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import Login from './Login';
import Invoice from './Invoice';
import Additem from './Additem';
import { Model } from './Model';
>>>>>>> f463568a97eb8e151a0a7694eadb9eb0f1cf64e6

function App() {
  return (
    <div>
      {/* <div className='App'> */}
      {/* <Sidebar/> */}
      {/* </div> */}
      {/* <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/invoice">Invoice</Link></li>
        <li><Link to="/additem">Item</Link></li>
<<<<<<< HEAD
      </ul> */}

      <Container>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col>
            <Routes>
              <Route path=" " element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/item" element={<Item />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
=======
        <li><Link to="/model">Model</Link></li>
      </ul>
      <Routes>
        <Route path=" " element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/additem" element={<Additem/>}/>
        <Route path="/model" element={<Model/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
>>>>>>> f463568a97eb8e151a0a7694eadb9eb0f1cf64e6
    </div>
  );
}

export default App;
