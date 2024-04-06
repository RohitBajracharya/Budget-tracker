import { faMicrochip, faTrash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ShiftContainer(shiftData) {
  const navigate = useNavigate();
  const [shiftName, setShiftName] = useState(shiftData.shiftName);
  const [budgetSpent, setBudgetSpent] = useState(shiftData.budgetSpent);
  const [budgetAvailable, setBudgetAvailable] = useState(
    shiftData.budgetAvailable
  );
  useEffect(() => {
    setShiftName(shiftData.shiftName);
    setBudgetSpent(shiftData.budgetSpent);
    setBudgetAvailable(shiftData.budgetAvailable);
  }, [shiftData]);

  const handleUpdateEvent = () => {
    navigate("/update-shift", { state: { shift: shiftData } });
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/shift/delete-shift/${shiftData.id}`,
        {
          withCredentials: true,
        }
      );
      const { message } = response.data;
      toast.success(message);
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred while deleting.";
      toast.error(errorMessage);
    }
  };
  return (
    <div className="main-shift-container" key={shiftData.id}>
      <div className="shift-container" onClick={handleUpdateEvent}>
        <div className="name-icon-container">
          <div className="icon-container">
            <FontAwesomeIcon icon={faMicrochip} className="shift-item" />
          </div>
          <div className="shift-name">
            <h3>{shiftName}</h3>
          </div>
        </div>
        <div className="budget-container">
          <h4>
            ${budgetSpent}
            <span className="title-sm"> out of ${budgetAvailable}</span>
          </h4>
        </div>
      </div>
      <div className="delete-container">
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
