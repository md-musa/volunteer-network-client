import React, {useState} from "react";
import "./AdminHome.css";
import Admin__registeredVolunteerList from "../Admin__registeredVolunteerList/Admin__registeredVolunteerList";
import Admin__addEvent from "../Admin__addEvent/Admin__addNewEvent";

const AdminHome = () => {
  // switching all registered volunteer list and Add new Event
  const [changeDatabase, setChangeDatabase] = useState({
    registeredList: true,
  });

  return (
    <div className="adminHome">
      <div className="adminHome__left-section">
        <h4 onClick={() => setChangeDatabase({registeredList: true})}>
          Volunteer register list
        </h4>
        <h4 onClick={() => setChangeDatabase({registeredList: false})}>
          + Add Event
        </h4>
      </div>

      <div className="adminHome__right-section">
        <div className="adminHome__database">
          {changeDatabase.registeredList == true ? (
            <Admin__registeredVolunteerList />
          ) : (
            <Admin__addEvent />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
