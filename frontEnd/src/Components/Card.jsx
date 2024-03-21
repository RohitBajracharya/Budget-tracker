import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShiftContainer from "./ShiftContainer";

export default function Card() {
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
        <ShiftContainer />
        <ShiftContainer />
        <ShiftContainer />
      </div>
    </div>
  );
}
