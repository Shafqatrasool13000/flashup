import "./App.css";
import Homepage from "./layout/Homepage/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar/Index";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Index";
import Create from "./layout/CreateProtocolLayout/CreateLayout";
import Strategies from "./layout/Strategies/Index";
import Opportunities from "./layout/Opportunities/Index";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useAccount } from "wagmi";
import { ToastContainer } from "react-toastify";
import InternetConnection from "./service/InternetHandler";

// Window.ethereum type
declare var window: any;
export const ethereum = window.ethereum;

function App() {
  const { isConnected } = useAccount();
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="create"
          element={
            <InternetConnection>
              <ProtectedRoute isMetamaskConnect={isConnected}>
                <Create />
              </ProtectedRoute>
            </InternetConnection>
          }
        />
        <Route path="strategies" element={<Strategies />} />
        <Route path="opportunities" element={<Opportunities />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
