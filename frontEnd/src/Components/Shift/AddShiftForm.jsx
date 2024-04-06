import {
  faChevronRight,
  faCircleInfo,
  faHashtag,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../style/form.css";

export default function AddShiftForm() {
  const [budgetYear, setBudgetYear] = useState("");
  const [shiftName, setShiftName] = useState("");
  const [budgetSpent, setBudgetSpent] = useState("");
  const [budgetAvailable, setBudgetAvailable] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/shift/add-shift",
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
      const { message } = response.data;
      toast(message);
      navigate("/");
    } catch (error) {
      const { Message } = error.response.data;
      toast.error(Message);
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
              onChange={(e) => setBudgetYear(e.target.value)}
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
                placeholder="Enter Bugdget spent"
                onChange={(e) => setBudgetSpent(e.target.value)}
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
                onChange={(e) => setBudgetAvailable(e.target.value)}
              />
              <FontAwesomeIcon icon={faChevronRight} className="suffix-icon" />
            </div>
          </div>
          <div>
            <button type="submit" className="add-button">
              <span className="plus">+</span>Add Shift
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
