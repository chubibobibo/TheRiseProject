/** react icons */
import { RiCloseLine } from "react-icons/ri";

/** Component imports that will be rendered in the JSX */
import UserAvatar from "../navigationBar/UserAvatar.jsx";
import SearchInputField from "../inputFields/SearchInputField.jsx";
import TextAreaInputField from "../inputFields/TextAreaInputField.jsx";

/** import the wrapper that will apply the classnames styles */
import Wrapper from "../../assets/wrappers/ModalWrapper.js";

/** Import the temporary tasks (will be replaced by data from an API) */
import { TempTasks } from "../../utils/TempTasks.jsx";
import { useState, useEffect, useContext } from "react";
/**  context created in the parent component */
import { TaskContext } from "../../pages/dashboardPages/TasksPage.jsx";

function TaskModal() {
  /** Create a state to manage the filtered data */
  const [filteredData, setFilteredData] = useState({});

  /** obtaining data from context */
  const newTaskData = useContext(TaskContext);

  /** save the taskId from context to a variable*/
  const taskData = newTaskData.isOpen.taskId;

  /** filter the array of objects that contains our temporary data for all tasks that is equal to the
   * id(taskData) received from context then set the state that will contain
   * the filtered task using useEffect for every render */
  useEffect(() => {
    const newData = TempTasks.filter((newTasks) => {
      return newTasks.id === taskData;
    });
    const filteredTasks = () => {
      //   console.log(newData);
      setFilteredData(newData);
    };
    filteredTasks();
  }, []);

  return (
    /** onClick event uses anonymous function because we are providing an argument to the setIsOpen state*/
    <Wrapper>
      {/* using setIsOpen from context data to close the modal by setting isOpen to false*/}
      {/* setting setIsOpen in a div separate from the modal to close it when clicking outside the modal component */}
      <div
        className='darkBG'
        onClick={() => newTaskData.setIsOpen(false)}
      ></div>
      <div className='centered'>
        <div className='modalHeader'>
          <h5 className='heading'>{filteredData[0]?.task}</h5>
        </div>
        <div className='modal'>
          {/* button to close */}
          <button
            className='closeBtn'
            onClick={() => newTaskData.setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          {/** container for the task details */}
          <div className='content-container'>
            <div className='modal-content'>
              <p>
                This is a modal for a unique task having an id of{" "}
                {filteredData[0]?.id}
              </p>
              <p>{filteredData[0]?.description}</p>
              <hr />
              <p>Checklist 0/0</p>
              <div className='add-item-input'>
                <SearchInputField
                  label={"AddItem"}
                  placeholder={"Add Item"}
                  type={"text"}
                />
                <p>Sub tasks</p>
                <SearchInputField
                  label={"AddItem"}
                  placeholder={"Add Item"}
                  type={"text"}
                />
              </div>
              <hr />
              {/** Comments */}
              <div id='comments-avatar'>
                <UserAvatar />
              </div>
              <div>
                <TextAreaInputField />
              </div>
            </div>
            {/** Container for the details of the author of the task  (right side)*/}
            <div className='author-container'>
              <div className='userAvatar'>
                <UserAvatar />
                <span className='author-name'>John Doe</span>
              </div>
              {/** container for the details on the author located below the avatar and name of author*/}
              <div className='author-details-container'>
                <p className='author-details'>Milestone : Beta Release</p>
                <p className='author-details'>Start Date : Add Start date</p>
                <p className='author-details'>Start Deadline : 15-05-2014</p>
                <p className='author-details'>Priority: Critical</p>
                <p className='author-details'>Label: Feedback</p>
                <p className='author-details'>
                  Collaborators: Add Collaborators
                </p>
                <button>Start Timer</button>
                <p className='author-details'>Total time logged : 00:00:00</p>
                <p className='author-details'>Reminders (Private):</p>
                <p className='author-details'>Add Reminder</p>
              </div>
            </div>
          </div>
          {/** activities container */}
          <hr />
          <div className='activity-header'>
            <p style={{ color: " #668F9F" }}>Activity</p>
          </div>
          <div className='activities-container'>
            <div className='user-avatar-activities'>
              <UserAvatar />
              <p className='author-name'>John Doe</p>
            </div>
            <div>
              <p className='author-name'>{filteredData[0]?.task}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default TaskModal;
