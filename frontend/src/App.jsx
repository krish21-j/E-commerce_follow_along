import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./routes";

import './App.css';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/Signup" element={<SignupPage />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
