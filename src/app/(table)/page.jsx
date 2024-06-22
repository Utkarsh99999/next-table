"use client"

import React, { useState, useEffect } from 'react';
import styles from '@/app/(table)/style.module.css';
import Table from '@/app/(table)/table';
import axios from 'axios';

const MyTable = () => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState([]);

  useEffect(() => {
    // Fetch fake data from the API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
        setEditedData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log("Data saved:", editedData);
    setData(editedData);
    setIsEditing(false);
  };

  const handleChange = (index, key, value) => {
    const updatedData = [...editedData];
    updatedData[index][key] = value;
    setEditedData(updatedData);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.tableleft}>
        <table>
          <thead>
            <tr>
              <th>Agent Name</th>
              <th>Agent Phone Number</th>
              <th>Date of Lead Created</th>
              <th>Lead Source</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{new Date().toLocaleDateString()}</td> {/* Fake lead creation date */}
                <td>{item.company.name}</td> {/* Using company name as lead source */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Table
        data={editedData}
        isEditing={isEditing}
        handleChange={handleChange}
      />

      <div className={styles.tableright}>
        <table>
          <thead>
            <tr>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>
                  {isEditing ? (
                    <button onClick={handleSave}><img src="/save.png" alt="save" height={20} width={20} /></button>
                  ) : (
                    <button onClick={handleEdit}><img src="/edit.png" alt="edit" height={20} width={20} /></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;
