import styled from "styled-components";

const Wrapper = styled.nav`
  /** layout and styling for the whole NavigationBar component */
  /** navbar takes the whole width of the screen */
  margin: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: #252932;
  width: 100vw;
  position: sticky;

  /** layout of the navbar icons to move to the left */
  .nav {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-right: auto;
  }

  /** layout for the icons to move to the right */
  .nav-right {
    display: flex;
    margin-left: auto;
  }

  /** styling the userAvatar** style for the buttons used in the sidebar/** */
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: #5b73e8;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  /** styling the userAvatar and it's username*/
  .userAvatar {
    border-radius: 40px;
    width: 3rem;
    height: 3rem;
  }
  .username {
    margin: 1rem;
    color: #5b73e8;
    font-weight: 500;
    text-decoration: none;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
  }
`;
export default Wrapper;
