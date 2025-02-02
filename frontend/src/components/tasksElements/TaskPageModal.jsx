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
import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "react-router-dom";

import day from "dayjs";
import utc from "dayjs/plugin/utc";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
day.extend(utc); /** Formatting time from UTC */

/**  context created in the parent component */
import { TaskContext } from "../../pages/dashboardPages/TasksPage.jsx";

function TaskModal() {
  /** Create a state to manage the filtered data */
  const [filteredData, setFilteredData] = useState({});

  /** obtaining data from context */
  /** @taskContext from TasksPage.jsx contains the data toggle for the modal and the id of the specific tasks after mapping it */
  const newTaskData = useContext(TaskContext);

  /** save the taskId from context to a variable*/
  const taskData = newTaskData.isOpen.taskId;

  /* state to handle the input data from text fields */
  const [inputData, setInputData] = useState({ comment: "" });
  const handleChange = (e) => {
    setInputData({ comment: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/comments/addComment/${taskData}`, inputData);
      toast.success("Comment submitted");
      newTaskData.setIsOpen(false);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
      return err;
    }
  };

  /** @newTask contains the response from the API to search for a specific task depending on the _id passed with isOpen state */
  useEffect(() => {
    const singleTask = async () => {
      const newTask = await axios.get(`/api/task/singleTask/${taskData}`);
      setFilteredData(newTask);
    };
    singleTask();
  }, []);

  // console.log(filteredData);
  const singleTaskData = filteredData?.data?.foundSingleTask;
  console.log(singleTaskData);

  /** formatting date from the response of API */
  const startDate = day(singleTaskData?.startDate).format("MMM Do, YYYY");
  const deadLineDate = day(singleTaskData?.deadline).format("MMM Do, YYYY");

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
          <h5 className='heading'>{singleTaskData?.title.toUpperCase()}</h5>
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
              <p>{singleTaskData?.description}</p>

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
                <Form method='post' onSubmit={handleSubmit}>
                  <TextAreaInputField handleChange={handleChange} />
                </Form>
              </div>
            </div>
            {/** Container for the details of the author of the task  (right side)*/}
            <div className='author-container'>
              {/** container for the details on the author located below the avatar and name of author*/}
              <div className='author-details-container'>
                <div className='userAvatar'>
                  <UserAvatar />
                  <span className='author-name'>John Doe</span>
                </div>
                <p className='author-details'>
                  Milestone :{" "}
                  {singleTaskData?.milestone.charAt(0).toUpperCase() +
                    singleTaskData?.milestone.slice(1)}
                </p>
                <p className='author-details'>Start Date : {startDate}</p>
                <p className='author-details'>
                  Start Deadline : {deadLineDate}
                </p>
                <p className='author-details'>
                  Priority:{" "}
                  {singleTaskData?.priority.charAt(0).toUpperCase() +
                    singleTaskData?.priority.slice(1)}
                </p>
                <p className='author-details'>
                  Label:{" "}
                  {singleTaskData?.labels.charAt(0).toUpperCase() +
                    singleTaskData?.labels.slice(1)}
                </p>
                <p className='author-details'>
                  Collaborators:{" "}
                  {singleTaskData?.collaborators.charAt(0).toUpperCase() +
                    singleTaskData?.collaborators.slice(1)}
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
            {/* <div className='user-avatar-activities'>
              <UserAvatar />
              <p className='author-name'>John Doe</p>
            </div>
            <div>
              <p className='author-name'>{filteredData[0]?.task}</p>
            </div> */}
            <div className='comment-section'>
              {singleTaskData?.comment.map((newComment, idx) => {
                /** formatting time from UTC */
                const commentTime = day(newComment.createdAt).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
                return (
                  <div key={idx} className='comments'>
                    <div className='author-container'>
                      {/** dynamically render avatar else render a default avatar */}
                      {newComment?.author?.avatarUrl ? (
                        newComment?.author?.avatarUrl
                      ) : (
                        <div className='user-avatar-activities'>
                          <UserAvatar />
                        </div>
                      )}
                      <p className='author'>
                        {newComment?.author?.username.toUpperCase()}
                      </p>
                      <sub className='comment-time'>{commentTime}</sub>
                    </div>
                    <p className='comment-comment'>{newComment.comment}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default TaskModal;
