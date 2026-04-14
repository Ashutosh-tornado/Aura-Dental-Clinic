import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import DentalImplants from './pages/services/DentalImplants';
import TeethWhitening from './pages/services/TeethWhitening';
import BracesAligners from './pages/services/BracesAligners';
import TeethCleaning from './pages/services/TeethCleaning';
import RootCanal from './pages/services/RootCanal';
import EnquiryModal from './components/common/EnquiryModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState('');

  const openModal = (context) => {
    setModalContext(context || '');
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar onOpenModal={() => openModal('General Enquiry')} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenModal={openModal} />} />
            <Route path="/services/dental-implants" element={<DentalImplants onOpenModal={openModal} />} />
            <Route path="/services/teeth-whitening" element={<TeethWhitening onOpenModal={openModal} />} />
            <Route path="/services/braces-aligners" element={<BracesAligners onOpenModal={openModal} />} />
            <Route path="/services/teeth-cleaning" element={<TeethCleaning onOpenModal={openModal} />} />
            <Route path="/services/root-canal" element={<RootCanal onOpenModal={openModal} />} />
          </Routes>
        </main>
        <Footer />
        <EnquiryModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          context={modalContext}
        />
      </div>
    </Router>
  );
}

export default App;
