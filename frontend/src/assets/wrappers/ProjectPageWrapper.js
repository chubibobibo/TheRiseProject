import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1c1f26; /* Couleur de fond sombre */
  color: #898fa9; /* Couleur de texte clair */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #2b2e36;
    color: #e0e6ed;
  }

  .title {
    font-size: 24px; /* Taille du titre réduite */
  }

  .buttons {
    display: flex;
    gap: 8px; /* Espacement entre les boutons */
  }

  .btn {
    background-color: #3a3f4b;
    color: #e0e6ed;
    border: none;
    padding: 8px 12px; /* Padding réduit */
    font-size: 14px; /* Taille de police réduite */
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .btn:hover {
    background-color: #4a4f5a;
    color: #ffffff;
  }

  .btn svg {
    font-size: 16px; /* Taille des icônes réduite */
    color: #e0e6ed;
  }

  .filters {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  form {
    background-color: #2b2e36;
    padding: 20px;
    border-radius: 4px;
    margin-top: 20px;
  }

  form div {
    margin-bottom: 10px;
  }

  form label {
    display: block;
    margin-bottom: 5px;
    color: #e0e6ed;
  }

  form input,
  form select,
  form textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #3a3f4b;
    border-radius: 4px;
    background-color: #1c1f26;
    color: #e0e6ed;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  table,
  th,
  td {
    border: 1px solid #3a3f4b;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
    color: #e0e6ed;
  }

  th {
    background-color: #2b2e36;
  }

  .no-projects {
    text-align: center;
    margin-top: 20px;
    color: #898fa9;
  }

  /* Style pour le formulaire d'ajout de projet */
  .form-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    background: #1c1f26;
    color: #898fa9;
    padding: 20px;
    border-radius: 8px;
    width: 60%;
    max-width: 900px;
    max-height: 90%;
    overflow-y: auto;
    position: relative;
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .close-btn {
    background: transparent;
    border: none;
    color: #898fa9;
    font-size: 24px;
    cursor: pointer;
  }

  .form-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .form-row label {
    flex: 0 0 150px;
  }

  .form-row input,
  .form-row textarea,
  .form-row select {
    flex: 1;
    padding: 10px;
    background: #1c1f26;
    border: none;
    color: #898fa9;
    border-radius: 4px;
  }

  .form-row input:focus,
  .form-row select:focus {
    outline: none;
  }

  .form-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }

  .form-buttons button {
    background: #4246ff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  .form-buttons button:hover {
    background: #3538de;
  }

  /* Style pour la fenêtre d'importation */
  .import-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .import-container {
    background: #1c1f26;
    color: #898fa9;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 600px;
    position: relative;
  }

  .import-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .upload-button {
    display: inline-block;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #2196f3;
    color: white;
    cursor: pointer;
  }

  .upload-button span {
    display: block;
    text-align: center;
  }

  .upload-button:hover {
    background-color: #1976d2;
  }

  .import-body {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    cursor: pointer;
  }

  .import-body p {
    margin: 0;
  }

  .import-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }

  .import-buttons button {
    background: #2b2e36;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }

  .import-buttons button:hover {
    background: #424652;
  }

  .column-filter-section {
    margin-top: 20px;
  }

  .column-filter {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff; /* Couleur de fond blanche */
    width: auto; /* Largeur ajustée automatiquement */
    max-width: 300px; /* Largeur maximale */
    display: inline-block; /* Ajustement en fonction du contenu */
    position: absolute; /* Positionner le filtre correctement */
    z-index: 1000; /* Assurez-vous qu'il est au-dessus des autres éléments */
  }

  .column-filter h3 {
    margin-bottom: 10px;
  }

  .column-filter label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .column-filter input[type="checkbox"] {
    margin-right: 10px;
  }
`;

export default Wrapper;
