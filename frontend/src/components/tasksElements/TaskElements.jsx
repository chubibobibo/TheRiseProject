/** Styled component to wrap around */
import Wrapper from "../../assets/wrappers/TaskElementWrapper.js";
/** UserAvatar to display to each of the tasks */
import UserAvatar from "../../components/navigationBar/UserAvatar.jsx";

/** Temporary data to display tasks */

import { AiOutlineExclamationCircle } from "react-icons/ai";

function TaskElements({ task, category, click, priority }) {
  return (
    <Wrapper>
      <div className='content-element' onClick={click}>
        {/* each of the box elements */}
        <div className='each-element'>
          <span className='userAvatar'>
            <UserAvatar />
          </span>
          <span>{task}</span>
        </div>
        <div className='priority-container'>
          {priority === "critical" && (
            <span className='priority'>
              <AiOutlineExclamationCircle />
            </span>
          )}

          <span
            className={category}
            style={{
              textTransform: "capitalize",
              padding: "5px",
              fontSize: "15px",
            }}
          >
            {category}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
export default TaskElements;
