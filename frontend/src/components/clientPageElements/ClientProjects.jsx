/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/ClientProjectsWrapper.js";

function ClientProjects({ title, firstRow, secondRow, thirdRow, fourthRow }) {
  return (
    <Wrapper>
      <div className='title'>{title}</div>
      <div className='firstRow'>
        {firstRow} <div>19</div>
      </div>
      <div className='secondRow'>
        {secondRow} <div>5</div>
      </div>
      <div className='thirdRow'>
        {thirdRow} <div>0</div>
      </div>
      <div className='fourthRow'>
        {fourthRow} <div>0</div>
      </div>
    </Wrapper>
  );
}
export default ClientProjects;
