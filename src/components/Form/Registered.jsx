import React, { useState } from 'react';
import Modal from './Modal';
import './Registered.css'
import './Modal.css'
const Registered = ({ data }) => {
  const [modalStates, setModalStates] = useState({});

  const handlebtn = (key) => {
    setModalStates((prevModalStates) => ({
      ...prevModalStates,
      [key]: true,
    }));
  };

  const closeModal = (key) => {
    setModalStates((prevModalStates) => ({
      ...prevModalStates,
      [key]: false,
    }));
  };

  return (
    <div className='registeration-container'>
      <h2>Registered Users </h2>
      <table id='table-container'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, key) => {
              const isOpen = modalStates[key] || false;

              return (
                <tr key={key}>
                  <td>{item.fullName}</td>
                  <td>{item.time}</td>
                  <td>
                    <button id="detail-btn" onClick={() => handlebtn(key)}>Details</button>
                    {isOpen && (
                      <Modal open={isOpen} onClose={() => closeModal(key)}>
                        <div className='modalCard-info'>
                          <div className="name"><label>Name :</label><span>{item.fullName}</span></div>
                          <div className="name"><label>Email :</label><span>{item.email}</span></div>
                          <div className="name"><label>Contact No. :</label><span>{item.contactNo}</span></div>
                          <div className="name"><label>Bio :</label><span>{item.bio}</span></div>
                          <div className="name"><label>Registration Date :</label><span>{item.time}</span></div>
                        </div>
                      </Modal>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Registered;
