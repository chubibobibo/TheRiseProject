/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/ClientProjectsWrapper.js";

import { useState } from "react";

function ClientProjects({
  title,
  firstRow,
  secondRow,
  thirdRow,
  fourthRow,
  clients,
}) {
  const data = [];

  /** mapping data from props to obtain each client */
  clients?.data?.allClients.map((newData) => {
    console.log(newData);
    return data.push(newData);
  });

  /** filtering data from the mapped array that has open status */
  const openProjects = data.filter((openProj) =>
    openProj?.project?.projectStatus.includes("open")
  );

  const canceledProjects = data.filter((openProj) =>
    openProj?.project?.projectStatus.includes("canceled")
  );
  const completedProjects = data.filter((openProj) =>
    openProj?.project?.projectStatus.includes("completed")
  );
  const holdProjects = data.filter((openProj) =>
    openProj?.project?.projectStatus.includes("hold")
  );

  return (
    <Wrapper>
      <div className='title'>{title}</div>
      <div className='firstRow'>
        {firstRow} <div>{openProjects.length}</div>
      </div>
      <div className='secondRow'>
        {secondRow} <div>{completedProjects.length}</div>
      </div>
      <div className='thirdRow'>
        {thirdRow} <div>{holdProjects.length}</div>
      </div>
      <div className='fourthRow'>
        {fourthRow} <div>{canceledProjects.length}</div>
      </div>
    </Wrapper>
  );
}
export default ClientProjects;
