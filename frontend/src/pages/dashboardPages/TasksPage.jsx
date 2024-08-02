import Wrapper from "../../assets/wrappers/TasksPAgeWrapper";

/** import components */
import TaskPageHeader from "../../components/taskPageElements/TaskPageHeader";
/** import of component that displays each task */
import TaskElements from "../../components/tasksElements/TaskElements.jsx";
import TaskModal from "../../components/tasksElements/TaskModal.jsx";
function TasksPage() {
  return (
    <Wrapper>
      <TaskPageHeader />
      <div className='table-container'>
        {/* contains header for the element boxes */}
        <div className='content-header'>
          <div className='column-header'>
            <span className='span-header'>To Do</span>
            <span className='span-header'>7</span>
            <div className='column-color-yellow'></div>
          </div>
          <div className='column-header'>
            <span className='span-header'>In Progress</span>
            <span className='span-header'>5</span>
            <div className='column-color-blue'></div>
          </div>
          <div className='column-header'>
            <span className='span-header'>Review</span>
            <span className='span-header'>8</span>
            <div className='column-color-purple'></div>
          </div>
          <div className='column-header'>
            <span className='span-header'>Done</span>
            <span className='span-header'>9</span>
            <div className='column-color-cyan'></div>
          </div>
          {/* container for each column element of the boxes*/}
          <div className='content-column'>
            {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
            {/* for every iteration of the items, render the TaskElements component and provide props */}
          </div>
          {/* container for each column element of the boxes*/}
          <div className='content-column'>
            {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
            {/* for every iteration of the items, render the TaskElements component and provide props */}
          </div>
          {/* container for each column element of the boxes*/}
          <div className='content-column'>
            {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
            {/* for every iteration of the items, render the TaskElements component and provide props */}
          </div>
          {/* container for each column element of the boxes*/}
          <div className='content-column'>
            {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
            {/* for every iteration of the items, render the TaskElements component and provide props */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default TasksPage;
