"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/app/style.module.css';
import AlertBox from '@/component/Alert';

const MyTable = () => {
    const [data, setData] = useState([]);
    const [editedData, setEditedData] = useState([]);
    const [saved, setSaved] = useState(false);
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    // const BaseUrl = 'http://localhost:3000';
    const BaseUrl = 'https://node-test-server-lac.vercel.app';


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/users`);
            setData(response.data.users);
            setEditedData(response.data.users);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const handleEdit = (index) => {
        setEditingRowIndex(index);
    };

    const handleSave = async (_id) => {
        try {
            const data = editedData.filter((val) => val._id === _id)
            const response = await axios.post(`${BaseUrl}/update/user`, data[0]);
            setSaved(response.data.status);
        } catch (error) {
            console.error('Error fetching data', error);
        }
        setEditingRowIndex(null);
    };

    const handleChange = (index, key, value) => {
        const updatedData = [...editedData];
        updatedData[index][key] = value;
        setEditedData(updatedData);
    };

    const columns = Object.keys(data.length > 0 ? data[0] : {});

    return (
        <div className={styles.div1}>
            <AlertBox isVisible={saved} onClose={setSaved} />
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={`${index}3453`}>{column}</th>
                        ))}
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {editedData.map((item, index) => (
                        <tr key={item.id}>
                            {columns.map((column, colIndex) => (
                                <td key={`${index}-${colIndex}`}>
                                    {editingRowIndex === index && colIndex > 1 ? (
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
                                {editingRowIndex === index ? (
                                    <button className={styles.button} onClick={() => handleSave(item._id)}>
                                        <img src="/save.png" alt="save" height={20} width={20} />
                                    </button>
                                ) : (
                                    <button className={styles.button} onClick={() => handleEdit(index)}>
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
