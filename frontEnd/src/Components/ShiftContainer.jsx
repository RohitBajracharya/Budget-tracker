import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ShiftContainer(props) {
  return (
    <div className="shift-container">
      <div class="name-icon-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={faMicrochip} className="shift-item" />
        </div>
        <div className="shift-name">
          <h3>Restaurants</h3>
        </div>
      </div>
      <div className="budget-container">
        <h4>
          $99.00 <span className="title-sm">out of $360</span>
        </h4>
      </div>
    </div>
  );
}
