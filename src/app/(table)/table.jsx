import React from 'react';
import styles from '@/app/(table)/style.module.css';

const Table = ({ data, isEditing, handleChange }) => {
    return (
        <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={item.name}
                                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                                    />
                                ) : (
                                    item.name
                                )}
                            </td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={item.username}
                                        onChange={(e) => handleChange(index, 'username', e.target.value)}
                                    />
                                ) : (
                                    item.username
                                )}
                            </td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={item.email}
                                        onChange={(e) => handleChange(index, 'email', e.target.value)}
                                    />
                                ) : (
                                    item.email
                                )}
                            </td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={item.phone}
                                        onChange={(e) => handleChange(index, 'phone', e.target.value)}
                                    />
                                ) : (
                                    item.phone
                                )}
                            </td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={item.website}
                                        onChange={(e) => handleChange(index, 'website', e.target.value)}
                                    />
                                ) : (
                                    item.website
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
