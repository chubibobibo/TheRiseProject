import Wrapper from "../assets/wrappers/SmallSidebarWrapper.js";
function SmallSidebarComponent() {
  return (
    <Wrapper>
      {/* <div
        //className show-sidebar is responsible for diplaying the sidebar. We used a ternary operator to check whether the showSidebar is true then include the className show-sidebar else className will only have the sidebar-container.
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      > */}
      <div className='show-sidebar sidebar-container'>
        <div className='content'>
          {/* sets the showSidebar back to false to hide the sidebar */}
          <button type='button' className='close-btn'>
            hello
          </button>
          <button type='button' className='close-btn'>
            hello
          </button>
          <header>hello</header>
        </div>
      </div>
      {/* </div> */}
    </Wrapper>
  );
}
export default SmallSidebarComponent;
