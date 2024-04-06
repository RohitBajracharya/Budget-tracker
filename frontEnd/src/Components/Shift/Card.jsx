import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../../style/card.css";
import ShiftContainer from "./ShiftContainer.jsx";

export default function Card() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await Axios.get("http://localhost:5001/api/shift/", {
          withCredentials: true,
        });
        // console.log("response::", response);
        setShifts(response.data.shifts);
      } catch (error) {
        const { Message } = error.response.data;
        toast.error(Message);
        console.error("Error fetching shifts:", error);
      }
    };

    fetchShifts();
  }, [setShifts]);

  return (
    <div className="page-container">
      <div className="card-container">
        <div>
          <h1 className="title-lg-dark">September budget</h1>
          <h4 className="title-sm-dark">
            Great job! You have
            <span className="total-budget"> $1,397 left</span>
          </h4>
        </div>
        <div>
          <div className="under-container">
            <div className="upper-container"></div>
          </div>
          <h4 className="title-sm">
            <span className="budget-spent">$193</span> of $1590 spent
          </h4>
        </div>
        <div className="top-budget-container">
          <h2 className="top-budget">Top monthly budgets</h2>
          <FontAwesomeIcon icon={faChevronRight} className="suffix-icon" />
        </div>

        {shifts.map((shift) => (
          <ShiftContainer
            key={shift._id}
            id={shift._id}
            budgetYear={shift.budgetYear}
            shiftName={shift.shiftName}
            budgetSpent={shift.budgetSpent}
            budgetAvailable={shift.budgetAvailable}
          />
        ))}
      </div>
    </div>
  );
}