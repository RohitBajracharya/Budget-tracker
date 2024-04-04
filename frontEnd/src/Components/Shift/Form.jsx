import {
  faChevronRight,
  faCircleInfo,
  faHashtag,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddShiftForm() {
  return (
    <div>
      <div>
        <h2 className="title-lg">Budget Planner</h2>
        <h4 className="title-sm">
          Upload code or start writing your code below.
        </h4>
      </div>
      <div>
        <div className="year-name">
          <h3 className="title-md">Budget Year</h3>
          <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
        </div>
        <input
          type="text"
          className="budget-year-input"
          placeholder="Enter Budget Year"
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
            className="parameter-input"
            placeholder="Enter Shift Name"
          />
          <FontAwesomeIcon icon={faChevronRight} className="suffix-icon" />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faHashtag} className="prefix-icon" />
          <input
            type="text"
            className="parameter-input"
            placeholder="Enter Bugdget spent"
          />
          <FontAwesomeIcon icon={faChevronRight} className="suffix-icon" />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faHashtag} className="prefix-icon" />
          <input
            type="text"
            className="parameter-input"
            placeholder="Enter Budget Available"
          />
          <FontAwesomeIcon icon={faChevronRight} className="suffix-icon" />
        </div>
      </div>
      <div>
        <button className="add-button">
          <span className="plus">+</span>Add Shift
        </button>
      </div>
    </div>
  );
}
