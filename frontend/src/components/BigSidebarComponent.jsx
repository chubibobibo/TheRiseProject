import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/BigSidebarWrapper.js";

/** Contains an array of objects used as links for the sidebar */
import { bigSideBarLinks } from "../utils/BigSideBarLinks.jsx";

function BigSidebarComponent() {
  return (
    /**
     * Imported and mapped a jsx file (bigSideBarLinks.jsx) that contains
     * an array of objects having the path, icons, and label of each of the
     * links used in the BigSidebarComponent.
     */
    <Wrapper>
      {bigSideBarLinks.map((newLinks) => {
        return (
          <div key={newLinks.label}>
            <Link to={newLinks.path} style={{ textDecoration: "none" }}>
              <button type='button' className='toggle-btn'>
                {newLinks.icon}{" "}
                <p style={{ marginLeft: "0.5rem" }}>{newLinks.label}</p>
              </button>
            </Link>
          </div>
        );
      })}
    </Wrapper>
  );
}
export default BigSidebarComponent;
