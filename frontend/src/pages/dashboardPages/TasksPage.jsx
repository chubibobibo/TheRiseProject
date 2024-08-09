/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/DashboardTaskPageWrapper.js";

/** handles state for activating task modal and id of a specific tasks. */
import { useState } from "react";

/** using context to pass data to child components */
import { createContext } from "react";

/** Temporary data to display tasks */
import { TempTasks } from "../../utils/TempTasks.jsx";

/** import components to be rendered */
import FilterButtons from "../../components/buttons/FilterButtons.jsx";
import FilterIconButtons from "../../components/buttons/FilterIconButtons.jsx";
import SearchInputField from "../../components/inputFields/SearchInputField.jsx";
import { IoAddCircleOutline } from "react-icons/io5";
/** import of component that displays each task */
import TaskElements from "../../components/tasksElements/TaskElements.jsx";
import TaskPageModal from "../../components/tasksElements/TaskPageModal.jsx";
import AddTaskModal from "../../components/tasksElements/AddTaskModal.jsx";

/**react icons */
import { BsExclamationCircle } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

/**creating context to pass data */
export const TaskContext = createContext();
export const AddTaskContext = createContext();

/** loader function to obtain all tasks*/
export const loader = async () => {
  try {
    const data = await axios.get("/api/task/allTasks");
    return data;
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
    return err;
  }
};

function TasksPage() {
  /** loader data */
  const tasks = useLoaderData();
  console.log(tasks);
  /** State to open and close modal dialog component */
  const [isOpen, setIsOpen] = useState({ open: false, taskId: "" });
  /** onClick event handle to set the isOPen state to true */
  /** This will render the TaskModal component visible */
  const handleClick = (id) => {
    setIsOpen({ open: true, taskId: id });
  };
  /** State to handle display of add task modal */
  const [isAddModal, setIsAddModal] = useState(false);
  const handleAddTaskClick = () => {
    setIsAddModal(!isAddModal);
  };

  /** @toDoTasks filters the data from API to return tasks with status "to do" */
  const toDoTasks = tasks?.data?.foundTasks.filter((newTodos) => {
    return newTodos.status === "to do";
  });

  /** @inProgress filters data from the API to return tasks with status 'in progress' */
  const inProgress = tasks?.data?.foundTasks.filter((inProgressTask) => {
    return inProgressTask.status === "in progress";
  });

  /** @reviewTasks filters data from the API to return tasks with status 'review' */
  const reviewTasks = tasks?.data?.foundTasks.filter((reviewTask) => {
    return reviewTask.status === "review";
  });

  /** @doneTasks filters data from the API to return tasks with status 'done' */
  const doneTasks = tasks?.data?.foundTasks.filter((doneTask) => {
    return doneTask.status === "done";
  });

  return (
    <Wrapper>
      {/** wrap the components that needs data inside the context provider */}
      <TaskContext.Provider value={{ setIsOpen: setIsOpen, isOpen: isOpen }}>
        <div className='container'>
          <div className='taskHeader'>
            <div className='links-left'>
              <Link></Link>
              <Link></Link>
              <Link></Link>
            </div>
            <div className='links-right'>
              <Link className='task-btn-link'>
                <button className='add-mult-task-btn'>
                  <IoAddCircleOutline size={"1.5rem"} />
                  Add multiple tasks
                </button>
              </Link>
              <Link className='task-btn-link'>
                <button className='add-task-btn' onClick={handleAddTaskClick}>
                  <IoAddCircleOutline size={"1.5rem"} />
                  Add task
                </button>
              </Link>
            </div>
          </div>
          {/* <Link to='/dashboard/view-dashboard'>Index</Link> */}
          <div className='category'></div>
          {/* dynamically renders the TaskModal component depending on the state of isOpen */}
          {/* at the same time passes setIsOpen as props to be able to set the state in TaskModal component */}
          {/* NOTE: isOpen.open for conditional rendering. Otherwise modal will be active every render of the component */}
          {/* passed isOpen state as argument to obtain id of task needed to display data*/}
          {isOpen.open && <TaskPageModal />}
          <AddTaskContext.Provider
            value={{ isAddModal: isAddModal, setIsAddModal: setIsAddModal }}
          >
            {isAddModal && <AddTaskModal />}
          </AddTaskContext.Provider>

          {/* column of navigation buttons */}
          <div className='button-row'>
            <FilterButtons label={"All Tasks"} type={"button"} />
            <FilterButtons label={"Bug"} type={"button"} />
            <FilterIconButtons
              label={<BsExclamationCircle />}
              type={"button"}
            />
            <FilterIconButtons label={<FaArrowUp />} type={"button"} />
            <FilterIconButtons label={<RxPerson />} type={"button"} />
            <FilterIconButtons label={<MdOutlineWbSunny />} type={"button"} />
            <div className='searchField'>
              <SearchInputField
                label={<FaSearch />}
                type={"text"}
                placeholder={"Search"}
              />
            </div>
          </div>
          <div className='table-container'>
            {/* contains header for the element boxes */}
            <div className='content-header'>
              <div className='column-header'>
                <span className='span-header'>To Do</span>
                <span className='span-header'>{toDoTasks.length}</span>
                <div className='column-color-yellow'></div>
              </div>
              <div className='column-header'>
                <span className='span-header'>In Progress</span>
                <span className='span-header'>{inProgress.length}</span>
                <div className='column-color-blue'></div>
              </div>
              <div className='column-header'>
                <span className='span-header'>Review</span>
                <span className='span-header'>{reviewTasks.length}</span>
                <div className='column-color-purple'></div>
              </div>
              <div className='column-header'>
                <span className='span-header'>Done</span>
                <span className='span-header'>{doneTasks.length}</span>
                <div className='column-color-cyan'></div>
              </div>
              {/* container for each column element of the boxes To do*/}
              <div className='content-column'>
                {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
                {/* for every iteration of the items, render the TaskElements component and provide props */}
                {toDoTasks.map((newTempTasks, idx) => {
                  return (
                    <TaskElements
                      task={
                        newTempTasks.title.charAt(0).toUpperCase() +
                        newTempTasks.title.slice(1)
                      }
                      category={newTempTasks.labels}
                      key={idx}
                      priority={newTempTasks.priority}
                      click={() => {
                        handleClick(newTempTasks._id);
                      }}
                    />
                  );
                })}
              </div>
              {/* container for each column element of the boxes*/}
              <div className='content-column'>
                {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
                {/* for every iteration of the items, render the TaskElements component and provide props */}
                {inProgress.map((newTempTasks, idx) => {
                  return (
                    <TaskElements
                      task={
                        newTempTasks.title.charAt(0).toUpperCase() +
                        newTempTasks.title.slice(1)
                      }
                      category={newTempTasks.labels}
                      key={idx}
                      priority={newTempTasks.priority}
                      click={() => {
                        handleClick(newTempTasks._id);
                      }}
                    />
                  );
                })}
              </div>
              {/* container for each column element of the boxes*/}
              <div className='content-column'>
                {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
                {/* for every iteration of the items, render the TaskElements component and provide props */}
                {reviewTasks.map((newTempTasks, idx) => {
                  return (
                    <TaskElements
                      task={
                        newTempTasks.title.charAt(0).toUpperCase() +
                        newTempTasks.title.slice(1)
                      }
                      category={newTempTasks.labels}
                      key={idx}
                      priority={newTempTasks.priority}
                      click={() => {
                        handleClick(newTempTasks._id);
                      }}
                    />
                  );
                })}
              </div>
              {/* container for each column element of the boxes*/}
              <div className='content-column'>
                {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
                {/* for every iteration of the items, render the TaskElements component and provide props */}
                {doneTasks.map((newTempTasks, idx) => {
                  return (
                    <TaskElements
                      task={
                        newTempTasks.title.charAt(0).toUpperCase() +
                        newTempTasks.title.slice(1)
                      }
                      category={newTempTasks.labels}
                      key={idx}
                      priority={newTempTasks.priority}
                      click={() => {
                        handleClick(newTempTasks._id);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </TaskContext.Provider>
    </Wrapper>
  );
}
export default TasksPage;
