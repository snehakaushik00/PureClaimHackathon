import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/Home";
import VerificationMethods from "./components/VerificationMethods";
import URLForm from "./components/VerificationMethod/URLForm";
import BarcodeScanner from "./components/VerificationMethod/BarcodeScanner";
import ManualForm from "./Components/VerificationMethod/MannualForm";
import MediaPicker from "./components/VerificationMethod/MediaPicker";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Switch to BrowserRouter
import Header from "./components/Header";

function App() {
  return (
    <div className="container-fluid">
      {/* Wrap the app in BrowserRouter for proper routing */}
      <Router>
        <Header />

        {/* Define routes for your app */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verification" element={<VerificationMethods />} />
          <Route path="/verification/urlform" element={<URLForm />} />
          <Route path="/verification/mannualform" element={<ManualForm />} />
          <Route path="/verification/media" element={<MediaPicker />} />
          <Route path="/verification/barcode" element={<BarcodeScanner />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
