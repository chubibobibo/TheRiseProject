import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faPlus,
  faFilter,
  faCalendar,
  faDownload,
  faPrint,
  faTimes,
  faCamera,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

import Wrapper from "../../assets/wrappers/SubscriptionPageWrapper";

function SubscriptionPage() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    client: "",
    firstBillingDate: "",
    nextBillingDate: "",
    repeatEvery: "",
    cycles: "",
    status: "",
    quantity: "",
  });

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubscription = {
      id: `ABONNEMENT #${subscriptions.length + 1}`,
      ...formData,
    };
    setSubscriptions([...subscriptions, newSubscription]);
    setFormData({
      title: "",
      type: "",
      client: "",
      firstBillingDate: "",
      nextBillingDate: "",
      repeatEvery: "",
      cycles: "",
      status: "",
      quantity: "",
    });
    handleCloseForm();
  };

  const calculateTotal = () => {
    return subscriptions
      .reduce((total, sub) => total + parseFloat(sub.quantity || 0), 0)
      .toFixed(2);
  };

  return (
    <Wrapper>
      <header className='header'>
        <span className='title'>Abonnements</span>
        <div className='actions'>
          <button className='btn'>
            <FontAwesomeIcon icon={faTags} /> Gérer les étiquettes
          </button>
          <button className='btn' onClick={handleOpenForm}>
            <FontAwesomeIcon icon={faPlus} /> Ajouter un abonnement
          </button>
        </div>
      </header>

      <div className='secondary-actions'>
        <button
          className='btn filter-btn'
          onClick={() => setFilterVisible(!filterVisible)}
        >
          <FontAwesomeIcon icon={faFilter} /> Filtre
        </button>
        {filterVisible && (
          <div className='filter-menu'>
            <div className='filter-option'>ID d’abonnement</div>
            <div className='filter-option'>Titre</div>
            <div className='filter-option'>Type</div>
            <div className='filter-option'>Client</div>
            <div className='filter-option'>Première date de facturation</div>
            <div className='filter-option'>Prochaine date de facturation</div>
            <div className='filter-option'>Répétez l’opération tous les</div>
            <div className='filter-option'>Cycles</div>
            <div className='filter-option'>Statut</div>
            <div className='filter-option'>Quantité</div>
          </div>
        )}
        <div className='dropdown-group'>
          <div className='dropdown'>
            <button className='dropdown-btn'>Monnaie</button>
            <div className='dropdown-menu'>
              <div>USD</div>
              <div>EURO</div>
            </div>
          </div>
          <div className='dropdown'>
            <button className='dropdown-btn'>Type de répétition</button>
            <div className='dropdown-menu'>
              <div>Jour</div>
              <div>Semaine</div>
              <div>Mois</div>
              <div>Année</div>
            </div>
          </div>
          <div className='date-selector'>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Prochaine date de facturation</span>
            <div className='date-dropdown'>
              <div>Demain</div>
              <div>7 prochains jours</div>
              <div>Ce mois-ci</div>
              <div>Cette année</div>
              <div>L’année prochaine</div>
            </div>
          </div>
        </div>
        <div className='actions-right'>
          <button className='btn'>
            <FontAwesomeIcon icon={faDownload} /> Exporter
          </button>
          <button className='btn'>
            <FontAwesomeIcon icon={faPrint} /> Imprimer
          </button>
          <input type='text' className='search' placeholder='Recherche...' />
        </div>
      </div>

      <table className='subscriptions-table'>
        <thead>
          <tr>
            <th>ID d’abonnement</th>
            <th>Titre</th>
            <th>Type</th>
            <th>Client</th>
            <th>Première date de facturation</th>
            <th>Prochaine date de facturation</th>
            <th>Répétez l’opération tous les</th>
            <th>Cycles</th>
            <th>Statut</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((sub, index) => (
            <tr key={index}>
              <td>{sub.id}</td>
              <td>{sub.title}</td>
              <td className='type-cell'>{sub.type}</td>
              <td>{sub.client}</td>
              <td>{sub.firstBillingDate}</td>
              <td>{sub.nextBillingDate}</td>
              <td>{sub.repeatEvery}</td>
              <td>{sub.cycles}</td>
              <td>{sub.status}</td>
              <td>{sub.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan='8'></td>
            <td>Total</td>
            <td>{calculateTotal()} $</td>
          </tr>
        </tbody>
      </table>

      {formVisible && (
        <div className='form-overlay'>
          <div className='form-container'>
            <header className='form-header'>
              <span>Ajouter un abonnement</span>
              <button className='close-btn' onClick={handleCloseForm}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </header>
            <form className='form-body' onSubmit={handleSubmit}>
              <div className='form-row'>
                <label>Titre</label>
                <input
                  type='text'
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-row'>
                <label>Type</label>
                <input
                  type='text'
                  name='type'
                  value={formData.type}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-row'>
                <label>Client</label>
                <select
                  name='client'
                  value={formData.client}
                  onChange={handleChange}
                  required
                >
                  <option value=''>Sélectionner un client</option>
                  <option value='Client 1'>Client 1</option>
                  <option value='Client 2'>Client 2</option>
                </select>
              </div>
              <div className='form-row'>
                <label>Première date de facturation</label>
                <input
                  type='date'
                  name='firstBillingDate'
                  value={formData.firstBillingDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-row'>
                <label>Prochaine date de facturation</label>
                <input
                  type='date'
                  name='nextBillingDate'
                  value={formData.nextBillingDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-row type-repetition-group'>
                <label>Type de répétition</label>
                <input
                  type='number'
                  name='repeatEvery'
                  value={formData.repeatEvery}
                  onChange={handleChange}
                  required
                  placeholder='Nombre positif'
                />
                <select
                  name='cycles'
                  value={formData.cycles}
                  onChange={handleChange}
                  required
                >
                  <option value='Jour'>Jour</option>
                  <option value='Semaine'>Semaine</option>
                  <option value='Mois'>Mois</option>
                  <option value='Année'>Année</option>
                </select>
              </div>
              <div className='form-row'>
                <label>Statut</label>
                <input
                  type='text'
                  name='status'
                  value={formData.status}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-row'>
                <label>Quantité</label>
                <input
                  type='text'
                  name='quantity'
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
              <footer className='form-buttons'>
                <button type='submit'>Sauvegarder</button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default SubscriptionPage;
