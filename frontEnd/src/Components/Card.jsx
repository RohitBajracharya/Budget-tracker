import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { useEffect, useState } from "react";
import ShiftContainer from "../Components/ShiftContainer.jsx";

export default function Card() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5001/api/shift/").then((res) => {
      setShifts(res.data);
    }, []);
  });

  return (
    <div className="page-container">
      <div className="card-container">
        <div>
          <h1 className="title-lg ">September budget</h1>
          <h4 className="title-sm">
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

        <ShiftContainer
          key="1"
          shiftName="Restaurant"
          budgetSpent="99"
          budgetAvailable="1000"
        />
        <ShiftContainer
          key="1"
          shiftName="Groceries"
          budgetSpent="99"
          budgetAvailable="1000"
        />

        <ShiftContainer
          key="1"
          shiftName="Groceries"
          budgetSpent="99"
          budgetAvailable="1000"
        />

        {shifts.map((shift) => {
          const { _id, name, budgetSpent, budgetAvailable } = shift;
          return (
            <ShiftContainer
              key={_id}
              shiftName={"name"}
              budgetSpent={"budgetSpent"}
              budgetAvailable={"budgetAvailable"}
            />
          );
        })}
      </div>
    </div>
  );
}
