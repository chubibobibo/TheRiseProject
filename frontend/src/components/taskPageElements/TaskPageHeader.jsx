import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/TaskPageHeaderWrapper";

function TaskPageHeader() {
  return (
    <Wrapper>
      <div className='task-links'>
        <div>
          <Link to='/dashboard/clients' className='links'>
            Tasks
          </Link>
        </div>
        <div>
          <Link to='/dashboard/clients-clients' className='links'>
            List
          </Link>
        </div>
        <div>
          <Link to='/dashboard/clients-contacts' className='links'>
            Kanban
          </Link>
        </div>
        <div>
          <Link to='/dashboard/clients-contacts' className='links'>
            Gantt
          </Link>
        </div>
      </div>
      <div className='task-buttons'>
        <div>
          <Link className='links'>manage labels</Link>
        </div>
        <div>
          <Link className='links'>Import tasks</Link>
        </div>
        <div>
          <Link className='links'>Add multiple tasks</Link>
        </div>
        <div>
          <Link className='links'>Add tasks</Link>
        </div>
      </div>
    </Wrapper>
  );
}
export default TaskPageHeader;
