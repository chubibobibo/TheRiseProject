import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #252932;
  border-radius: 5px;
  padding: 1rem;
  max-width: 98%;
  color: white;
  font-family: Arial, Helvetica, sans-serif;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 1px solid #444;
    padding-bottom: 0.5rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .actions {
    display: flex;
    gap: 1rem;
  }

  .btn {
    background: #2f3541;
    color: #888ea8;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn:hover {
    background: black;
    color: white;
  }

  .secondary-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .filter-btn {
    background: #2f3541;
    color: #888ea8;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .filter-menu {
    position: absolute;
    background: #2f3541;
    border-radius: 5px;
    padding: 1rem;
    z-index: 10;
  }

  .filter-option {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .filter-option:hover {
    background: #1e1e1e;
  }

  .dropdown-group {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-btn {
    background: #2f3541;
    color: #888ea8;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #2f3541;
    border-radius: 5px;
    padding: 0.5rem;
    z-index: 10;
  }

  .dropdown-menu div {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .dropdown-menu div:hover {
    background: #1e1e1e;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .date-selector {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  }

  .date-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #2f3541;
    border-radius: 5px;
    padding: 0.5rem;
    z-index: 10;
  }

  .date-selector:hover .date-dropdown {
    display: block;
  }

  .search {
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background: #2f3541;
    color: #888ea8;
    width: 100px;
    max-width: 100%;
  }

  .actions-right {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* Style du formulaire d'ajout d'abonnement */

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

  .form-body {
    display: flex;
    flex-direction: column;
  }

  .form-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .form-row label {
    flex: 0 0 200px; /* Largeur ajustée pour éviter que les labels ne soient trop grands */
  }

  .form-row input,
  .form-row textarea,
  .form-row select {
    flex: 1;
    padding: 10px;
    background: #898fa9; /* Fond des champs en rouge ajusté */
    border: none;
    color: #1c1f26;
    border-radius: 4px;
    margin-left: 10px; /* Espace entre les champs et le label */
  }

  .form-row input:focus,
  .form-row select:focus {
    outline: none;
  }

  .type-repetition-group {
    display: flex;
    align-items: center;
    gap: 15px; /* Espace entre les champs de type de répétition */
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

  .subscriptions-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    color: white;
  }

  .subscriptions-table th,
  .subscriptions-table td {
    padding: 0.5rem;
    border: 1px solid #444;
    text-align: left;
  }

  .subscriptions-table th {
    background-color: #2f3541;
  }

  .subscriptions-table tr:nth-child(even) {
    background-color: #3a3f4a;
  }

  .subscriptions-table tfoot td {
    font-weight: bold;
  }

  .type-cell {
    color: orange; /* Applique une couleur orange au texte du type */
  }

  .form-buttons button {
    background-color: #ff5722; /* Applique une couleur de fond orange */
    color: white; /* Applique une couleur de texte blanche */
  }

  .form-buttons button:hover {
    background-color: #e64a19; /* Applique une couleur de fond plus foncée au survol */
  }
`;

export default Wrapper;
