import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { SignUp } from "./Components/Auth/Signup";
import Navbar from "./Components/Navbar";
import Card from "./Components/Shift/Card";
import AddShiftForm from "./Components/Shift/Form";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navbar />} />
      <Route path="/home" element={<Card />} />
      <Route path="/add-Shift" element={<AddShiftForm />} />
    </Routes>
  );
}

export default App;
