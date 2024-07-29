import Wrapper from "../../assets/wrappers/TextAreaInputFieldWrapper.js";
function TextAreaInputField() {
  return (
    <Wrapper>
      <textarea
        rows={8}
        cols={10}
        placeholder='Comment'
        className='comment-input'
      />
      <div>
        <button>Upload File</button>
      </div>
      <div>
        <button>Post Comment</button>
      </div>
    </Wrapper>
  );
}
export default TextAreaInputField;
