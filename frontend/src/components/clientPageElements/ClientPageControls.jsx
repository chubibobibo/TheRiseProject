import Wrapper from "../../assets/wrappers/ClientPageControlsWrapper.js";

/** importing the list of titles for the header */
import { labels } from "../../utils/ClientControlLabels.jsx";

function ClientPageControls() {
  return (
    <Wrapper>
      <div className='headers'>
        {labels.map((newLabels, idx) => {
          return <div key={idx}>{newLabels}</div>;
        })}
      </div>
    </Wrapper>
  );
}
export default ClientPageControls;
