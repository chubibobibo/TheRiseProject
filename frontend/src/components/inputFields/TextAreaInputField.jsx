import Wrapper from "../../assets/wrappers/TextAreaInputFieldWrapper.js";
/** react icons */
import { FiSend } from "react-icons/fi";
import { CiCamera } from "react-icons/ci";

function TextAreaInputField({ inputData, setInputData, handleChange }) {
  return (
    <Wrapper>
      <textarea
        rows={8}
        cols={10}
        placeholder='Comment'
        className='comment-input'
        onChange={handleChange}
      />
      <div className='button-container'>
        <button className='button' type='button'>
          <CiCamera size={"1rem"} />
          Upload File
        </button>
        <button type="'submit" className='button'>
          <FiSend size={"1rem"} />
          Post Comment
        </button>
      </div>
    </Wrapper>
  );
}
export default TextAreaInputField;
