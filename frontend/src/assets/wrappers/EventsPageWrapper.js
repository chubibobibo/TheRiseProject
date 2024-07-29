import styled from "styled-components";

const Wrapper = styled.div`
  /* background-color: #1c1f26;
  height: 94vh;
  max-width: 100vw;
  overflow-y: scroll; */

  background-color: #1c1f26; /* Couleur de fond principale */
  height: 94vh; /* Hauteur du conteneur */
  width: 100%; /* Largeur du conteneur */
  color: #898fa9; /* Couleur du texte */
  box-sizing: border-box; /* Inclut les bordures et le padding dans la taille totale */
  overflow: auto; /* Ajoute des barres de défilement si nécessaire */
  padding: 0 1rem; /* Espacement horizontal */

  /* Conteneur principal */
  .container {
    padding: 2rem; /* Espacement interne */
  }

  /* En-tête */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  /* Contrôles */
  .controls {
    display: flex;
    gap: 10px;
  }

  select,
  .btn {
    padding: 10px;
    margin-right: 10px;
    border: none;
    background-color: #323743;
    color: #fff;
    cursor: pointer;
  }

  hr {
    border: 0.5px solid #898fa9;
  }

  /* Formulaire et détails */
  .event-form,
  .event-details {
    background-color: #1c1f26;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    width: 40%;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    z-index: 1000;

    label {
      margin-bottom: 10px;
      color: #898fa9;
    }

    input,
    textarea,
    select,
    button {
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #323743;
      color: #fff;
      cursor: pointer;
    }

    button {
      background-color: #1c1f26;
    }

    .form-header,
    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #1c1f26;
    }

    .form-footer .left,
    .form-footer .right {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .custom-file-upload,
    .voice-record-btn {
      cursor: pointer;
      color: #fff;
      background-color: #323743;
      padding: 10px;
      border-radius: 50px;
      margin-right: 10px;
    }

    .voice-record-btn {
      background-color: #323743;
    }
  }

  /* Détails de l'événement */
  .event-details {
    color: #fff;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 40%;
    background-color: #323743;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      margin-bottom: 10px;
    }

    p {
      margin: 5px 0;
    }

    button {
      margin: 5px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #1c1f26;
      color: #fff;
      cursor: pointer;
    }

    button:hover {
      background-color: #1c1f26;
    }
  }

  /* Calendrier */
  .rbc-calendar,
  .rbc-header,
  .rbc-date-cell {
    color: #898fa9;
  }

  .rbc-toolbar button {
    color: #fff;
    background-color: #1c1f26;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    transition: transform 0.3s ease;
  }

  .rbc-toolbar button:hover {
    background-color: #1c1f26;
    transform: scale(1.1);
  }

  .rbc-toolbar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  /* Palette de couleurs */
  .color-palette {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    margin-bottom: 10px;
  }

  .color-option {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .color-option:hover {
    transform: scale(1.1);
  }

  /* En-tête et pied de page du formulaire */
  .form-header {
    position: sticky;
    top: 0;
    background-color: #1c1f26;
    padding: 10px 20px;
    border-bottom: 1px solid #898fa9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1001;
    color: #898fa9;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 10px;
    border-top: 1px solid #898fa9;
    position: sticky;
    bottom: 0;
    background-color: #1c1f26;
    z-index: 1001;
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .controls {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    .event-form,
    .event-details {
      width: 90%;
    }
  }
`;

export default Wrapper;
