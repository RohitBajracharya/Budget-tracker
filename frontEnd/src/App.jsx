import Cookies from "js-cookie";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "./Components/Auth/Login";
import { SignUp } from "./Components/Auth/Signup";
import NavigationBar from "./Components/Navbar";
import AddShiftForm from "./Components/Shift/AddShiftForm";
import Card from "./Components/Shift/Card";
import UpdateShiftForm from "./Components/Shift/UpdateShiftForm";

function App() {
  const isLoggedIn = Cookies.get("accessToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      toast.error("You need to login first");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {isLoggedIn && (
          <>
            <Route path="/" element={<Card />} />
            <Route path="/add-Shift" element={<AddShiftForm />} />
            <Route path="/update-Shift" element={<UpdateShiftForm />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
