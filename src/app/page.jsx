"use client"


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/app/style.module.css';

const MyTable = () => {
    const [data, setData] = useState([]);
    const [editedData, setEditedData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const fetchedData = response.data.slice(0, 50); // Limiting to 50 items for demo
            setData(fetchedData);
            setEditedData([...fetchedData]);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        console.log("Data saved:", editedData);
        setIsEditing(false);
    };

    const handleChange = (index, key, value) => {
        const updatedData = [...editedData];
        updatedData[index][key] = value;
        setEditedData(updatedData);
    };

    const columns = Object.keys(data.length > 0 ? data[0] : {}).slice(0, 10); // Take first 10 keys dynamically

    return (
        <div className={styles.div1}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {editedData.map((item, index) => (
                        <tr key={item.id}>
                            {columns.map((column, colIndex) => (
                                <td key={`${index}-${colIndex}`}>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editedData[index][column]}
                                            onChange={(e) => handleChange(index, column, e.target.value)}
                                        />
                                    ) : (
                                        editedData[index][column]
                                    )}
                                </td>
                            ))}
                            <td>
                                {isEditing ? (
                                    <button className={styles.button} onClick={handleSave}>
                                        <img src="/save.png" alt="save" height={20} width={20} />
                                    </button>
                                ) : (
                                    <button className={styles.button} onClick={handleEdit}>
                                        <img src="/edit.png" alt="edit" height={20} width={20} />
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTable;


