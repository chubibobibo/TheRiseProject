import Wrapper from "../../assets/wrappers/AddTaskModalWrapper";
/**context passing the data to open and close the add task modal */
import { useContext, useState } from "react";
import { AddTaskContext } from "../../pages/dashboardPages/TasksPage";
import { useNavigate } from "react-router-dom";

/** react icons */
import { RiCloseLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { Form } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AddTaskModal() {
  /** context data to close the add task modal */
  const contextData = useContext(AddTaskContext);
  const navigate = useNavigate();

  /** @inputData state for values in input fields */
  /** @handleChange function that handles changes in the input fields */
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    relatedTo: "",
    points: "",
    milestone: "",
    assignedTo: "",
    collaborators: "",
    status: "",
    startDate: "",
    deadline: "",
    recurring: "",
    priority: "",
    labels: "",
  });

  const handleChange = (e) => {
    setInputData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/task/addTask", inputData);
      toast.success("New Task created");
      setInputData({
        title: "",
        description: "",
        relatedTo: "",
        points: "",
        milestone: "",
        assignedTo: "",
        collaborators: "",
        status: "",
        startDate: "",
        deadline: "",
        recurring: "",
        priority: "",
        labels: "",
      });
      navigate("/dashboard/tasks");
      contextData.setIsAddModal(false);
    } catch (err) {
      toast.error(err?.response?.data?.message);
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div
        className='darkBG'
        onClick={() => contextData.setIsAddModal(false)}
      ></div>
      <div className='centered'>
        <div className='modalHeader'>
          <h1 className='header'>Add Task</h1>
        </div>
        <div className='modal'>
          {/* button to close */}
          <button
            className='closeBtn'
            onClick={() => contextData.setIsAddModal(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          {/** container for the task details */}
          <div className='content-container'>
            <div className='modal-content'>
              <Form
                method='post'
                onSubmit={handleSubmit}
                className='form-container'
              >
                <div className='form-inputs'>
                  <label className='label' htmlFor='label'>
                    Title
                  </label>
                  <input
                    id='label'
                    type='text'
                    className='input'
                    name='title'
                    value={inputData.title}
                    onChange={handleChange}
                    placeholder='Title'
                  />
                </div>

                <div className='form-inputs'>
                  <label htmlFor='description'>Description</label>
                  <textarea
                    name='description'
                    id='description'
                    value={inputData.description}
                    onChange={handleChange}
                    rows={10}
                    cols={50}
                    className='textInput'
                  ></textarea>
                </div>
                <div className='form-inputs'>
                  <label className='label' htmlFor='relatedTo'>
                    Related To
                  </label>
                  <select
                    name='relatedTo'
                    id='relatedTo'
                    onChange={handleChange}
                    className='select-input'
                  >
                    <option value=''>--Please choose an option--</option>
                    <option value='project'>Project</option>
                    <option value='client'>Client</option>
                    <option value='contract'>Contract</option>
                    <option value='estimate'>Estimate</option>
                    <option value='expense'>Expense</option>
                    <option value='invoice'>Invoice</option>
                    <option value='lead'>Lead</option>
                    <option value='order'>Order</option>
                    <option value='proposal'>Proposal</option>
                    <option value='subscription'>Subscription</option>
                    <option value='ticket'>Ticket</option>
                  </select>
                </div>
                <div className='form-inputs'>
                  <label className='label' htmlFor='points'>
                    Points
                  </label>
                  <select
                    name='points'
                    id='points'
                    onChange={handleChange}
                    className='select-input'
                  >
                    <option value=''>--Please choose an option--</option>
                    <option value='1'>1 Point</option>
                    <option value='2'>2 Points</option>
                    <option value='3'>3 Points</option>
                    <option value='4'>4 Points</option>
                    <option value='5'>5 Points</option>
                  </select>
                </div>
                <div className='form-inputs'>
                  <label className='label' htmlFor='milestone'>
                    Milestone
                  </label>
                  <input
                    id='milestone'
                    type='text'
                    className='input'
                    name='milestone'
                    value={inputData.milestone}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label' htmlFor='assignTo'>
                    Assign To
                  </label>
                  <input
                    id='assignTo'
                    type='text'
                    className='input'
                    name='assignedTo'
                    value={inputData.assignedTo}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label' htmlFor='collaborators'>
                    Collaborators
                  </label>
                  <input
                    id='collaborators'
                    type='text'
                    className='input'
                    name='collaborators'
                    value={inputData.collaborators}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs' htmlFor='status'>
                  <label className='label'>Status</label>
                  <select
                    name='status'
                    id='status'
                    onChange={handleChange}
                    className='select-input'
                  >
                    <option value=''>--Please choose an option--</option>
                    <option value='to do'>To Do</option>
                    <option value='in progress'>In Progress</option>
                    <option value='review'>Review</option>
                    <option value='done'>Done</option>
                  </select>
                </div>
                <div className='form-inputs'>
                  <label className='label' htmlFor='priority'>
                    Priority
                  </label>
                  <select
                    name='priority'
                    id='priority'
                    onChange={handleChange}
                    className='select-input'
                  >
                    <option value=''>--Please choose an option--</option>
                    <option value='minor'>Minor</option>
                    <option value='major'>Major</option>
                    <option value='critical'>Critical</option>
                    <option value='blocker'>Blocker</option>
                  </select>
                </div>
                <div className='form-inputs'>
                  <label className='label' htmlFor='labels'>
                    Labels
                  </label>
                  <select
                    name='labels'
                    id='labels'
                    onChange={handleChange}
                    className='select-input'
                  >
                    <option value=''>--Please choose an option--</option>
                    <option value='feedback'>Feedback</option>
                    <option value='bug'>Bug</option>
                    <option value='enhancement'>Enhancement</option>
                    <option value='design'>Design</option>
                  </select>
                </div>
                <div className='form-inputs'>
                  <label className='label' htmlFor='startDate'>
                    Start Date
                  </label>
                  <input
                    type='date'
                    className='input'
                    name='startDate'
                    value={inputData.startDate}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label' htmlFor='deadline'>
                    Deadline
                  </label>
                  <input
                    id='deadline'
                    type='date'
                    className='input'
                    name='deadline'
                    value={inputData.deadline}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <fieldset>
                    <legend>Recurring:</legend>
                    <div>
                      <input
                        type='radio'
                        id='choice1'
                        name='recurring'
                        value='true'
                        checked
                        onChange={handleChange}
                      />
                      <label htmlFor='choice1'>Yes</label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        id='choice2'
                        name='recurring'
                        value='false'
                        onChange={handleChange}
                      />
                      <label htmlFor='choice2'>No</label>
                    </div>
                  </fieldset>
                </div>
                <div className='btn-container'>
                  <button
                    type='button'
                    className='button'
                    onClick={() => {
                      contextData.setIsOpen(false);
                    }}
                  >
                    <IoMdCheckmarkCircleOutline size={"1.5rem"} />
                    Annuler
                  </button>
                  <button type='submit' className='button'>
                    <IoMdCheckmarkCircleOutline size={"1.5rem"} />
                    Ajouter
                  </button>
                </div>
              </Form>
            </div>
          </div>
          {/** activities container */}
        </div>
      </div>
    </Wrapper>
  );
}
export default AddTaskModal;
