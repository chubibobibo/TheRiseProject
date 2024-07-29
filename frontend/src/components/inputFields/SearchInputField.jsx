// import { BsTypeItalic } from "react-icons/bs";
import Wrapper from "../../assets/wrappers/SearchInputFieldWrapper.js";
function SearchInputField({ label, type, placeholder }) {
  return <Wrapper type={type} label={label} placeholder={placeholder} />;
}
export default SearchInputField;
