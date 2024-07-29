/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/EventsPageWrapper.js";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  FaTags,
  FaTimes,
  FaCloudUploadAlt,
  FaMicrophone,
  FaTrashAlt,
  FaEdit,
  FaPlusCircle,
} from "react-icons/fa";

const localizer = momentLocalizer(moment);

function EventsPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Réunion",
      start: new Date(2024, 6, 1, 10, 0),
      end: new Date(2024, 6, 1, 12, 0),
      description: "Description de la réunion",
      location: "Salle de réunion",
      labels: "Important",
      client: "Client A",
      shareWith: "All team members",
      color: "#FF5733",
    },
    {
      id: 2,
      title: "Présentation",
      start: new Date(2024, 6, 2, 14, 0),
      end: new Date(2024, 6, 2, 16, 0),
      description: "Présentation du projet",
      location: "Bureau",
      labels: "Client",
      client: "Client B",
      shareWith: "Only me",
      color: "#33FFA1",
    },
    {
      id: 3,
      title: "Déjeuner",
      start: new Date(2024, 6, 3, 12, 0),
      end: new Date(2024, 6, 3, 13, 0),
      description: "Déjeuner avec le client",
      location: "Restaurant",
      labels: "Client",
      client: "Client C",
      shareWith: "Specific members and teams",
      color: "#337DFF",
    },
  ]);

  const predefinedColors = [
    "#FF5733",
    "#33FFA1",
    "#337DFF",
    "#FFB833",
    "#A833FF",
    "#FF33E9",
    "#33FFE2",
    "#339CFF",
    "#FF3333",
    "#33FF33",
    "#3333FF",
    "#FFFF33",
  ];

  const [formVisible, setFormVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: "",
    labels: "",
    client: "",
    shareWith: "Only me",
    color: predefinedColors[0],
  });
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleColorChange = (color) => {
    setFormState({ ...formState, color });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDateTime = new Date(
      `${formState.startDate}T${formState.startTime}`
    );
    const endDateTime = new Date(`${formState.endDate}T${formState.endTime}`);

    if (endDateTime <= startDateTime) {
      alert("La date de fin doit être après la date de début.");
      return;
    }

    const newEvent = {
      id: isEditing ? selectedEvent.id : events.length + 1,
      title: formState.title,
      start: startDateTime,
      end: endDateTime,
      description: formState.description,
      location: formState.location,
      labels: formState.labels,
      client: formState.client,
      shareWith: formState.shareWith,
      color: formState.color,
    };

    setEvents(
      isEditing
        ? events.map((event) =>
            event.id === selectedEvent.id ? newEvent : event
          )
        : [...events, newEvent]
    );

    setFormState({
      title: "",
      description: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      location: "",
      labels: "",
      client: "",
      shareWith: "Only me",
      color: predefinedColors[0],
    });
    setFormVisible(false);
    setIsEditing(false);
    setSelectedSlot(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setDetailsVisible(true);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
    setDetailsVisible(false);
  };

  const handleCloseDetails = () => {
    setDetailsVisible(false);
    setSelectedEvent(null);
  };

  const handleEditEvent = () => {
    setFormState({
      title: selectedEvent.title,
      description: selectedEvent.description,
      startDate: moment(selectedEvent.start).format("YYYY-MM-DD"),
      startTime: moment(selectedEvent.start).format("HH:mm"),
      endDate: moment(selectedEvent.end).format("YYYY-MM-DD"),
      endTime: moment(selectedEvent.end).format("HH:mm"),
      location: selectedEvent.location,
      labels: selectedEvent.labels,
      client: selectedEvent.client,
      shareWith: selectedEvent.shareWith,
      color: selectedEvent.color,
    });
    setFormVisible(true);
    setIsEditing(true);
    setDetailsVisible(false);
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = event.color;
    const style = {
      backgroundColor,
      opacity: 0.8,
      color: "#fff",
      display: "block",
      cursor: "pointer",
      height: "auto",
      width: "100%",
    };
    return {
      style,
    };
  };

  const handleSlotSelect = (slotInfo) => {
    // Si la case cliquée n'a pas d'événements, ouvre le formulaire
    const isSlotOccupied = events.some((event) =>
      moment(slotInfo.start).isBetween(event.start, event.end, null, "[)")
    );

    if (!isSlotOccupied) {
      setFormState({
        ...formState,
        startDate: moment(slotInfo.start).format("YYYY-MM-DD"),
        startTime: moment(slotInfo.start).format("HH:mm"),
        endDate: moment(slotInfo.end).format("YYYY-MM-DD"),
        endTime: moment(slotInfo.end).format("HH:mm"),
      });
      setSelectedSlot(slotInfo);
      setFormVisible(true);
    }
  };
  return (
    <Wrapper>
      <div className='header'>
        <h1>Calendrier des événements</h1>
        <div className='controls'>
          <select>
            <option>Étiquette d'événement</option>
          </select>
          <select>
            <option>Type d'événement</option>
          </select>
          <button className='btn'>
            <FaTags /> Gérer les étiquettes
          </button>
          <button className='btn' onClick={() => setFormVisible(true)}>
            <FaPlusCircle /> Ajouter un événement
          </button>
        </div>
      </div>
      <hr />
      {formVisible && (
        <form onSubmit={handleSubmit} className='event-form'>
          <div className='form-header'>
            <h2>
              {isEditing ? "Modifier un événement" : "Ajouter un événement"}
            </h2>
            <button type='button' onClick={() => setFormVisible(false)}>
              <FaTimes />
            </button>
          </div>
          <div>
            <label>Titre</label>
            <input
              type='text'
              name='title'
              value={formState.title}
              onChange={handleInputChange}
              required
              placeholder='Titre'
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name='description'
              value={formState.description}
              onChange={handleInputChange}
              placeholder='Description'
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <label>Date de début</label>
              <input
                type='date'
                name='startDate'
                value={formState.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Heure de début</label>
              <input
                type='time'
                name='startTime'
                value={formState.startTime}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <label>Date de fin</label>
              <input
                type='date'
                name='endDate'
                value={formState.endDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Heure de fin</label>
              <input
                type='time'
                name='endTime'
                value={formState.endTime}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label>Lieu</label>
            <input
              type='text'
              name='location'
              value={formState.location}
              onChange={handleInputChange}
              placeholder='Lieu'
            />
          </div>
          <div>
            <label>Étiquettes</label>
            <input
              type='text'
              name='labels'
              value={formState.labels}
              onChange={handleInputChange}
              placeholder='Étiquettes'
            />
          </div>
          <div>
            <label>Client</label>
            <input
              type='text'
              name='client'
              value={formState.client}
              onChange={handleInputChange}
              placeholder='Client'
            />
          </div>
          <div>
            <label>Partager avec</label>
            <select
              name='shareWith'
              value={formState.shareWith}
              onChange={handleInputChange}
            >
              <option value='Only me'>Seulement moi</option>
              <option value='All team members'>
                Tous les membres de l'équipe
              </option>
              <option value='Specific members and teams'>
                Membres et équipes spécifiques
              </option>
            </select>
          </div>
          <div>
            <label>Couleur</label>
            <div className='color-palette'>
              {predefinedColors.map((color) => (
                <div
                  key={color}
                  className='color-option'
                  style={{
                    backgroundColor: color,
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  onClick={() => handleColorChange(color)}
                />
              ))}
              <input
                type='color'
                name='color'
                value={formState.color}
                onChange={(e) => handleColorChange(e.target.value)}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className='form-footer'>
            <div>
              <label htmlFor='file-upload' className='custom-file-upload'>
                <FaCloudUploadAlt /> Téléverser un fichier
              </label>
              <input id='file-upload' type='file' style={{ display: "none" }} />
              <button type='button' className='voice-record-btn'>
                <FaMicrophone />
              </button>
            </div>
            <div className='right'>
              <button type='button' onClick={() => setFormVisible(false)}>
                <FaTimes /> Fermer
              </button>
              <button type='submit'>
                {isEditing ? "Modifier" : "Enregistrer"}
              </button>
            </div>
          </div>
        </form>
      )}
      {detailsVisible && selectedEvent && (
        <div className='event-details'>
          <h2>Détails de l'événement</h2>
          <p>
            <strong>{selectedEvent.title}</strong>
          </p>
          <p>
            {moment(selectedEvent.start).format("ddd. D MMM YYYY, HH:mm")} –{" "}
            {moment(selectedEvent.end).format("HH:mm")}
          </p>
          <p>{selectedEvent.description}</p>
          <p>Lieu : {selectedEvent.location}</p>
          <p>Client : {selectedEvent.client}</p>
          <p>Partager avec : {selectedEvent.shareWith}</p>
          <div className='event-actions'>
            <button onClick={() => handleDeleteEvent(selectedEvent.id)}>
              <FaTrashAlt /> Supprimer l'événement
            </button>
            <button onClick={handleEditEvent}>
              <FaEdit /> Modifier l'événement
            </button>
            <button onClick={handleCloseDetails}>
              <FaTimes /> Fermer
            </button>
          </div>
        </div>
      )}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={handleEventClick}
        selectable
        onSelectSlot={handleSlotSelect}
      />
    </Wrapper>
  );
}
export default EventsPage;
