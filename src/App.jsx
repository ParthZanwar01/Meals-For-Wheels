import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Volunteer from './pages/Volunteer';
import Donations from './pages/Donations';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="events" element={<Events />} />
                    <Route path="volunteer" element={<Volunteer />} />
                    <Route path="donations" element={<Donations />} />
                    <Route path="programs" element={<Programs />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
