import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { SignUp } from "./Components/Auth/Signup";
import NavigationBar from "./Components/Navbar";
import Card from "./Components/Shift/Card";
import AddShiftForm from "./Components/Shift/Form";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Card />} />
        <Route path="/add-Shift" element={<AddShiftForm />} />
      </Routes>
    </div>
  );
}

export default App;
