import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ShiftContainer(props) {
  return (
    <div className="shift-container" key={props.id}>
      <div className="name-icon-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={faMicrochip} className="shift-item" />
        </div>
        <div className="shift-name">
          <h3>{props.shiftName}</h3>
        </div>
      </div>
      <div className="budget-container">
        <h4>
          ${props.budgetSpent}
          <span className="title-sm"> out of ${props.budgetAvailable}</span>
        </h4>
      </div>
    </div>
  );
}
