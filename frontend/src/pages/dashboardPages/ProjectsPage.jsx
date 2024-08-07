import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/ProjectPageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faFileImport,
  faPlus,
  faTimes,
  faDownload,
  faFilter,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import * as XLSX from "xlsx"; // Importer la bibliothèque XLSX

// Fonction pour déterminer la couleur de la date limite
const getDeadlineColor = (deadline) => {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  if (deadlineDate <= now) {
    return "#ff4d4d"; // Rouge pour les dates limites déjà passées
  }
  return "#898fa9"; // Couleur par défaut
};

// Composant pour afficher la barre de progression
const ProgressBar = ({ tasks }) => {
  const totalPoints = tasks.reduce((acc, task) => acc + task.points, 0);
  const completedPoints = tasks
    .filter((task) => task.status === "Completed")
    .reduce((acc, task) => acc + task.points, 0);
  const progress =
    totalPoints === 0 ? 0 : (completedPoints / totalPoints) * 100;

  return (
    <div>
      <div>Progression du projet : {Math.round(progress)}%</div>
      <div style={{ width: "100%", backgroundColor: "#ccc" }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#2196F3",
            height: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

// Composant pour gérer le filtre de colonnes avec icônes d'œil
const ColumnFilter = ({ columnVisibility, toggleColumnVisibility }) => {
  return (
    <div className='column-filter'>
      <h3>Afficher les colonnes</h3>
      {Object.keys(columnVisibility).map((column) => (
        <div
          key={column}
          className='column-filter-item'
          onClick={() => toggleColumnVisibility(column)}
          style={{
            cursor: "pointer",
            color: columnVisibility[column] ? "blue" : "black",
          }}
        >
          {column.charAt(0).toUpperCase() + column.slice(1)}
          <FontAwesomeIcon
            icon={columnVisibility[column] ? faEyeSlash : faEye}
            style={{ marginLeft: "10px" }}
          />
        </div>
      ))}
    </div>
  );
};

// Fonction pour lire et convertir le fichier .xlsx
const readExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0]; // Prendre la première feuille
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      resolve(data);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsBinaryString(file);
  });
};

function ProjectsPage() {
  // État pour les projets et leur affichage
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [importVisible, setImportVisible] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    type: "Projet Client",
    client: "Client 1",
    description: "",
    startDate: "",
    deadline: "",
    price: "",
    tasks: [],
    status: "Pending",
    labels: "parfait", // Valeur par défaut pour les étiquettes
  });
  const [filter, setFilter] = useState({
    status: "",
    deadline: "",
    labels: [],
  });
  const [columnVisibility, setColumnVisibility] = useState({
    id: true,
    title: true,
    client: true,
    price: true,
    startDate: true,
    deadline: true,
    progress: true,
    status: true,
  });
  const [showColumnFilter, setShowColumnFilter] = useState(false);

  // Fonction pour gérer les changements de champ dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  // Fonction pour formater le prix
  const handlePriceChange = (e) => {
    const { value } = e.target;
    const formattedPrice = value ? `${value} €` : "";
    setNewProject({ ...newProject, price: formattedPrice });
  };

  // Fonction pour gérer les changements dans les tâches
  const handleTaskChange = (index, e) => {
    const { name, value } = e.target;
    const newTasks = [...newProject.tasks];
    newTasks[index] = { ...newTasks[index], [name]: value };
    setNewProject({ ...newProject, tasks: newTasks });
  };

  // Fonction pour ajouter une nouvelle tâche
  const handleAddTask = () => {
    setNewProject({
      ...newProject,
      tasks: [...newProject.tasks, { name: "", points: 1, status: "Pending" }],
    });
  };

  // Fonction pour soumettre le formulaire d'ajout de projet
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProj = { ...newProject, id: projects.length + 1 };
    setProjects([...projects, newProj]);
    setFilteredProjects([...projects, newProj]);
    setNewProject({
      title: "",
      type: "Projet Client",
      client: "Client 1",
      description: "",
      startDate: "",
      deadline: "",
      price: "",
      tasks: [],
      status: "Pending",
      labels: "parfait",
    }); // Réinitialisation avec valeur par défaut pour labels
    setFormVisible(false);
  };

  // Fonction pour gérer les changements de filtre
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    applyFilters({ ...filter, [name]: value });
  };

  // Fonction pour appliquer les filtres
  const applyFilters = (newFilter) => {
    let filtered = projects;
    if (newFilter.status) {
      filtered = filtered.filter(
        (project) => project.status === newFilter.status
      );
    }
    if (newFilter.deadline) {
      filtered = filtered.filter(
        (project) => new Date(project.deadline) <= new Date(newFilter.deadline)
      );
    }
    setFilteredProjects(filtered);
  };

  // Fonction pour gérer les événements de survol pour le glisser-déposer
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Fonction pour gérer le dépôt du fichier
  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      try {
        const file = files[0];
        const data = await readExcelFile(file);
        // Traiter les données du fichier Excel ici
        // Exemple : convertir les données en format projet attendu
        // Cela dépend du format de votre fichier Excel
        // Voici un exemple simple :
        const projectsFromExcel = data.map((row) => ({
          id: row[0],
          title: row[1],
          client: row[2],
          price: row[3],
          startDate: row[4],
          deadline: row[5],
          status: row[6],
          // Ajoutez d'autres champs si nécessaire
        }));
        setProjects(projectsFromExcel);
        setFilteredProjects(projectsFromExcel);
        setImportVisible(false);
      } catch (error) {
        console.error("Erreur lors de l'importation du fichier :", error);
        alert("Erreur lors de l'importation du fichier");
      }
    }
  };

  // Fonction pour basculer la visibilité des colonnes
  const toggleColumnVisibility = (column) => {
    setColumnVisibility((prevState) => ({
      ...prevState,
      [column]: !prevState[column],
    }));
  };

  return (
    <Wrapper>
      {/* En-tête avec boutons d'action */}
      <div className='header'>
        <span className='title'>Projet</span>
        <div className='buttons'>
          <button className='btn'>
            <FontAwesomeIcon icon={faTags} /> Gérer les étiquettes
          </button>
          <button className='btn' onClick={() => setImportVisible(true)}>
            <FontAwesomeIcon icon={faFileImport} /> Importer des projets
          </button>
          <button className='btn' onClick={() => setFormVisible(true)}>
            <FontAwesomeIcon icon={faPlus} /> Ajouter un projet
          </button>
        </div>
      </div>

      {/* Filtre de colonnes */}
      <div className='column-filter-section'>
        <button
          className='btn'
          onClick={() => setShowColumnFilter(!showColumnFilter)}
        >
          <FontAwesomeIcon icon={faFilter} /> Filtrer les colonnes
        </button>

        {showColumnFilter && (
          <ColumnFilter
            columnVisibility={columnVisibility}
            toggleColumnVisibility={toggleColumnVisibility}
          />
        )}
      </div>

      {/* Formulaire d'ajout de projet */}
      {formVisible && (
        <div className='form-overlay'>
          <div className='form-container'>
            <div className='form-header'>
              <h2>Ajouter un projet</h2>
              <button
                className='close-btn'
                onClick={() => setFormVisible(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='form-row'>
                <label>Titre</label>
                <input
                  type='text'
                  name='title'
                  value={newProject.title}
                  onChange={handleInputChange}
                  placeholder='Titre du projet'
                  required
                />
              </div>
              <div className='form-row'>
                <label>Type</label>
                <select
                  name='type'
                  value={newProject.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value='Projet Client'>Projet Client</option>
                  <option value='Projet Interne'>Projet Interne</option>
                </select>
              </div>
              <div className='form-row'>
                <label>Client</label>
                <select
                  name='client'
                  value={newProject.client}
                  onChange={handleInputChange}
                  required
                >
                  <option value='Client 1'>Client 1</option>
                  <option value='Client 2'>Client 2</option>
                  <option value='Client 3'>Client 3</option>
                  <option value='Client 4'>Client 4</option>
                  <option value='Client 5'>Client 5</option>
                  <option value='Client 6'>Client 6</option>
                </select>
              </div>
              <div className='form-row'>
                <label>Description</label>
                <textarea
                  name='description'
                  value={newProject.description}
                  onChange={handleInputChange}
                  placeholder='Description'
                  required
                />
              </div>
              <div className='form-row'>
                <label>Date de début</label>
                <input
                  type='date'
                  name='startDate'
                  value={newProject.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='form-row'>
                <label>Date limite</label>
                <input
                  type='date'
                  name='deadline'
                  value={newProject.deadline}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='form-row'>
                <label>Prix</label>
                <input
                  type='number'
                  name='price'
                  value={newProject.price.replace(" €", "")}
                  onChange={handlePriceChange}
                  placeholder='Prix'
                  required
                />
              </div>
              <div className='form-row'>
                <label>Étiquettes</label>
                <select
                  name='labels'
                  value={newProject.labels}
                  onChange={handleInputChange}
                  required
                >
                  <option value='parfait'>Parfait</option>
                  <option value='urgent'>Urgent</option>
                  <option value='prochain'>prochain</option>
                  <option value='sur_la_bonne_voie'>sur la bonne voie</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Tâches</label>
                {newProject.tasks.map((task, index) => (
                  <div key={index} className='task-row'>
                    <input
                      type='text'
                      name='name'
                      value={task.name}
                      onChange={(e) => handleTaskChange(index, e)}
                      placeholder='Nom de la tâche'
                      required
                    />
                    <input
                      type='number'
                      name='points'
                      value={task.points}
                      onChange={(e) => handleTaskChange(index, e)}
                      placeholder='Points'
                      min='1'
                      required
                    />
                    <select
                      name='status'
                      value={task.status}
                      onChange={(e) => handleTaskChange(index, e)}
                    >
                      <option value='Pending'>En attente</option>
                      <option value='Completed'>Terminé</option>
                    </select>
                  </div>
                ))}
                <button type='button' onClick={handleAddTask}>
                  Ajouter une tâche
                </button>
              </div>
              <div className='form-buttons'>
                <button type='button' onClick={() => setFormVisible(false)}>
                  <FontAwesomeIcon icon={faTimes} /> Fermer
                </button>
                <button type='submit'>
                  <FontAwesomeIcon icon={faDownload} /> Enregistrer et Continuer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Fenêtre d'importation */}
      {importVisible && (
        <div
          className='import-overlay'
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className='import-container'>
            <div className='import-header'>
              <h2>Importer des projets</h2>
              <button
                className='close-btn'
                onClick={() => setImportVisible(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div
              className='import-body'
              onClick={() => document.getElementById("file-upload").click()}
            >
              <div className='import-message'>
                <p>
                  Glissez-déposez les documents ici (ou cliquez pour
                  parcourir...)
                </p>
              </div>
              <input
                type='file'
                id='file-upload'
                style={{ display: "none" }}
                onChange={async (e) => {
                  const file = e.target.files[0];
                  if (file) {
                    try {
                      const data = await readExcelFile(file);
                      // Traiter les données du fichier Excel ici
                      const projectsFromExcel = data.map((row) => ({
                        id: row[0],
                        title: row[1],
                        client: row[2],
                        price: row[3],
                        startDate: row[4],
                        deadline: row[5],
                        status: row[6],
                        // Ajoutez d'autres champs si nécessaire
                      }));
                      setProjects(projectsFromExcel);
                      setFilteredProjects(projectsFromExcel);
                      setImportVisible(false);
                    } catch (error) {
                      console.error(
                        "Erreur lors de l'importation du fichier :",
                        error
                      );
                      alert("Erreur lors de l'importation du fichier");
                    }
                  }
                }}
              />
            </div>
            <div className='import-buttons'>
              <button
                className='btn'
                onClick={() => {
                  const exampleData = [
                    [
                      "ID",
                      "Titre",
                      "Client",
                      "Prix",
                      "Date de début",
                      "Date limite",
                      "Statut",
                    ],
                    [
                      1,
                      "Exemple Projet",
                      "Client 1",
                      "1000 €",
                      "2024-01-01",
                      "2024-12-31",
                      "Pending",
                    ],
                  ];
                  const ws = XLSX.utils.aoa_to_sheet(exampleData);
                  const wb = XLSX.utils.book_new();
                  XLSX.utils.book_append_sheet(wb, ws, "Projets");
                  XLSX.writeFile(wb, "exemple_projets.xlsx");
                }}
              >
                <FontAwesomeIcon icon={faDownload} /> Télécharger le fichier
                d'exemple
              </button>
              <button className='btn' onClick={() => setImportVisible(false)}>
                <FontAwesomeIcon icon={faTimes} /> Fermer
              </button>
              <button className='btn' onClick={() => alert("Prochaine étape")}>
                Prochaine
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tableau des projets */}
      {filteredProjects.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              {columnVisibility.id && <th>ID</th>}
              {columnVisibility.title && <th>Titre</th>}
              {columnVisibility.client && <th>Client</th>}
              {columnVisibility.price && <th>Prix</th>}
              {columnVisibility.startDate && <th>Date de début</th>}
              {columnVisibility.deadline && <th>Date limite</th>}
              {columnVisibility.progress && <th>Progrès</th>}
              {columnVisibility.status && <th>Statut</th>}
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <React.Fragment key={project.id}>
                <tr>
                  {columnVisibility.id && (
                    <td style={{ color: "#2196F3" }}>{project.id}</td>
                  )}
                  {columnVisibility.title && (
                    <td style={{ color: "#2196F3" }}>
                      {project.title}
                      <div style={{ fontStyle: "italic", color: "#ff0000" }}>
                        {project.labels}
                      </div>
                    </td>
                  )}
                  {columnVisibility.client && (
                    <td style={{ color: "#2196F3" }}>{project.client}</td>
                  )}
                  {columnVisibility.price && <td>{project.price}</td>}
                  {columnVisibility.startDate && <td>{project.startDate}</td>}
                  {columnVisibility.deadline && (
                    <td>
                      <span
                        style={{ color: getDeadlineColor(project.deadline) }}
                      >
                        {project.deadline}
                      </span>
                    </td>
                  )}
                  {columnVisibility.progress && (
                    <td>
                      <ProgressBar tasks={project.tasks} />
                    </td>
                  )}
                  {columnVisibility.status && <td>{project.status}</td>}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Pas de projet enregistré pour le moment</p>
      )}
    </Wrapper>
  );
}

export default ProjectsPage;
