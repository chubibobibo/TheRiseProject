import Wrapper from "../../assets/wrappers/ClientPageModalWrapper";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useContext, useState } from "react";

import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
/** react icons */
import { RiCloseLine } from "react-icons/ri";
import { StatusContext } from "../../utils/StatusProvider";

function ClientPageModal() {
  const data = useContext(StatusContext);
  //   console.log(data);
  const [inputData, setInputData] = useState({
    clientType: "",
    companyName: "",

    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    website: "",
    vatNumber: "",
    gstNumber: "",
    clientGroup: "",
    currency: "",
    currencySymbol: "",
    label: "",
    clientName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/clients/addClient", inputData);
      setInputData({
        clientType: "",
        companyName: "",

        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phone: "",
        website: "",
        vatNumber: "",
        gstNumber: "",
        clientGroup: "",
        currency: "",
        currencySymbol: "",
        labels: "",
        clientName: "",
      });
      toast.success("Added a new client");
      navigate("/dashboard/clients-clients");
      return inputData;
    } catch (err) {
      console.log(err);
      toast.error(
        Array.isArray(err?.response?.data?.message)
          ? err?.response?.data?.message[0]
          : err?.response?.data?.message
      );
    }
  };

  return (
    <Wrapper>
      {/* <div
        className='darkBG'
        // onClick={() => {
        //   data.setIsOpen(false);
        // }}
      >
        <div className='centered'>
          <button className='closeBtn' onClick={() => data.setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className='modal-container'>
            <div className='header'>Add Client</div>
            <Form
              method='post'
              onSubmit={handleSubmit}
              className='form-container'
            >
              <div className='form-row'>
                <label className='form-label' style={{ color: "white" }}>
                  Type
                </label>
                <div className='radio-group'>
                  <label style={{ color: "white" }}>
                    <input
                      type='radio'
                      name='clientType'
                      value={"organization"}
                      //   checked={"organization"}
                      onChange={handleChange}
                    />
                    Organisation
                  </label>
                  <label style={{ color: "white" }}>
                    <input
                      type='radio'
                      name='clientType'
                      value={"person"}
                      //   checked={"person"}
                      onChange={handleChange}
                    />
                    Personne
                  </label>
                </div>
              </div>
              <div>
                <label className='label'>Nom</label>
                <input
                  type='text'
                  className='input'
                  name='clientName'
                  value={inputData.clientName}
                  onChange={handleChange}
                  placeholder='Nom'
                />
              </div>

              <label className='label'>Adresse</label>
              <div>
                <textarea
                  name='address'
                  id=''
                  value={inputData.address}
                  onChange={handleChange}
                  rows={10}
                  cols={50}
                  className='textInput'
                >
                  hello
                </textarea>
              </div>
              <div>
                <label className='label'>Ville</label>
                <input
                  type='text'
                  className='input'
                  name='city'
                  value={inputData.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>État</label>
                <input
                  type='text'
                  className='input'
                  name='state'
                  value={inputData.state}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Zip</label>
                <input
                  type='text'
                  className='input'
                  name='zip'
                  value={inputData.zip}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Pays</label>
                <input
                  type='text'
                  className='input'
                  name='country'
                  value={inputData.country}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Téléphone</label>
                <input
                  type='text'
                  className='input'
                  name='phone'
                  value={inputData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Site web</label>
                <input
                  type='text'
                  className='input'
                  name='website'
                  value={inputData.website}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Numéro de TVA</label>
                <input
                  type='text'
                  className='input'
                  name='vatNumber'
                  value={inputData.vatNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Numéro TPS</label>
                <input
                  type='text'
                  className='input'
                  name='gstNumber'
                  value={inputData.gstNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Groupes de clients</label>
                <input
                  type='text'
                  className='input'
                  name='clientGroup'
                  value={inputData.clientGroup}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Monnaie</label>
                <input
                  type='text'
                  className='input'
                  name='currency'
                  value={inputData.currency}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Symbole de monnaie</label>
                <input
                  type='text'
                  className='input'
                  name='currencySymbol'
                  value={inputData.currencySymbol}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='label'>Étiquettes</label>
                <input
                  type='text'
                  className='input'
                  name='label'
                  value={inputData.label}
                  onChange={handleChange}
                />
              </div>
              <div className='btn-container'>
                <button
                  type='button'
                  className='button'
                  onClick={() => {
                    data.setIsOpen(false);
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
      </div>
      <p>{inputData.type}</p> */}

      {/************** */}
      {/* using setIsOpen from context data to close the modal by setting isOpen to false*/}
      {/* setting setIsOpen in a div separate from the modal to close it when clicking outside the modal component */}
      <div className='darkBG' onClick={() => data.setIsOpen(false)}></div>
      <div className='centered'>
        <div className='modalHeader'>
          <div className='header'>Add Client</div>
        </div>
        <div className='modal'>
          {/* button to close */}
          <button className='closeBtn' onClick={() => data.setIsOpen(false)}>
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
                <div className='form-row'>
                  <label className='form-label' style={{ color: "white" }}>
                    Type
                  </label>
                  <div className='radio-group'>
                    <label style={{ color: "white" }}>
                      <input
                        type='radio'
                        name='clientType'
                        value={"organization"}
                        //   checked={"organization"}
                        onChange={handleChange}
                      />
                      Organisation
                    </label>
                    <label style={{ color: "white" }}>
                      <input
                        type='radio'
                        name='clientType'
                        value={"person"}
                        //   checked={"person"}
                        onChange={handleChange}
                      />
                      Personne
                    </label>
                  </div>
                </div>
                <div className='form-inputs'>
                  <label className='label'>Nom</label>
                  <input
                    type='text'
                    className='input'
                    name='clientName'
                    value={inputData.clientName}
                    onChange={handleChange}
                    placeholder='Nom'
                  />
                </div>

                <div className='form-inputs'>
                  <label>Adresse</label>
                  <textarea
                    name='address'
                    id=''
                    value={inputData.address}
                    onChange={handleChange}
                    rows={10}
                    cols={50}
                    className='textInput'
                  ></textarea>
                </div>
                <div className='form-inputs'>
                  <label className='label'>Ville</label>
                  <input
                    type='text'
                    className='input'
                    name='city'
                    value={inputData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>État</label>
                  <input
                    type='text'
                    className='input'
                    name='state'
                    value={inputData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Zip</label>
                  <input
                    type='text'
                    className='input'
                    name='zip'
                    value={inputData.zip}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Pays</label>
                  <input
                    type='text'
                    className='input'
                    name='country'
                    value={inputData.country}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Téléphone</label>
                  <input
                    type='text'
                    className='input'
                    name='phone'
                    value={inputData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Site web</label>
                  <input
                    type='text'
                    className='input'
                    name='website'
                    value={inputData.website}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Numéro de TVA</label>
                  <input
                    type='text'
                    className='input'
                    name='vatNumber'
                    value={inputData.vatNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Numéro TPS</label>
                  <input
                    type='text'
                    className='input'
                    name='gstNumber'
                    value={inputData.gstNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Groupes de clients</label>
                  <input
                    type='text'
                    className='input'
                    name='clientGroup'
                    value={inputData.clientGroup}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Monnaie</label>
                  <input
                    type='text'
                    className='input'
                    name='currency'
                    value={inputData.currency}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Symbole de monnaie</label>
                  <input
                    type='text'
                    className='input'
                    name='currencySymbol'
                    value={inputData.currencySymbol}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='label'>Étiquettes</label>
                  <input
                    type='text'
                    className='input'
                    name='label'
                    value={inputData.label}
                    onChange={handleChange}
                  />
                </div>
                <div className='btn-container'>
                  <button
                    type='button'
                    className='button'
                    onClick={() => {
                      data.setIsOpen(false);
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
            {/** Container for the details of the author of the task  (right side)*/}
          </div>
          {/** activities container */}
        </div>
        <p>{inputData.type}</p>
      </div>
    </Wrapper>
  );
}
export default ClientPageModal;
