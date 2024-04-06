import {
  faChevronRight,
  faCircleInfo,
  faHashtag,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../style/form.css";

export default function UpdateShiftForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [budgetYear, setBudgetYear] = useState(0);
  const [shiftName, setShiftName] = useState("");
  const [budgetSpent, setBudgetSpent] = useState(0);
  const [budgetAvailable, setBudgetAvailable] = useState(0);
  useEffect(() => {
    if (location.state && location.state.shift) {
      setBudgetYear(location.state.shift.budgetYear);
      setShiftName(location.state.shift.shiftName);
      setBudgetSpent(location.state.shift.budgetSpent);
      setBudgetAvailable(location.state.shift.budgetAvailable);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = location.state.shift.id;
      const response = await axios.put(
        `http://localhost:5001/api/shift/update-shift/${id}`,
        {
          budgetYear,
          shiftName,
          budgetSpent,
          budgetAvailable,
        },
        {
          withCredentials: true,
        }
      );
      console.log("message", response.data);
      const { Message } = response.data;
      toast(Message);
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.Message
      ) {
        const { Message } = error.response.data;
        toast.error(Message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="form-container">
      <div className="inside-container">
        <div>
          <h2 className="title-lg">Budget Planner</h2>
          <h4 className="title-sm">
            Upload code or start writing your code below.
          </h4>
        </div>
        <form action="post" onSubmit={handleSubmit}>
          <div>
            <div className="year-name">
              <h3 className="title-md">Budget Year</h3>
              <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
            </div>
            <input
              type="text"
              name="budgetYear"
              className="budget-year-input"
              placeholder="Enter Budget Year"
              value={budgetYear}
              onChange={(e) => setBudgetYear(parseInt(e.target.value))}
            />
          </div>
          <div>
            <h3 className="title-md" id="parameter-text">
              Set Parameters
            </h3>
            <div className="input-container">
              <FontAwesomeIcon icon={faHeading} className="prefix-icon" />
              <input
                type="text"
                name="shiftName"
                className="parameter-input"
                placeholder="Enter Shift Name"
                value={shiftName}
                onChange={(e) => setShiftName(e.target.value)}
              />
              <FontAwesomeIcon icon={faChevronRight} className="suffix-icon" />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faHashtag} className="prefix-icon" />
              <input
                type="text"
                name="budgetSpent"
                className="parameter-input"
                placeholder="Enter Budget spent"
                value={budgetSpent}
                onChange={(e) => setBudgetSpent(parseInt(e.target.value))}
              />
              <FontAwesomeIcon icon={faChevronRight} className="suffix-icon" />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faHashtag} className="prefix-icon" />
              <input
                type="text"
                name="budgetAvailable"
                className="parameter-input"
                placeholder="Enter Budget Available"
                value={budgetAvailable}
                onChange={(e) => setBudgetAvailable(parseInt(e.target.value))}
              />
              <FontAwesomeIcon icon={faChevronRight} className="suffix-icon" />
            </div>
          </div>
          <div>
            <button type="submit" className="add-button">
              <span className="plus">+</span>Update Shift
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
