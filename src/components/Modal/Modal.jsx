import React, { useState } from 'react';
import styles from './Modal.module.css';

const BookingModal = ({ apartment, onClose, onConfirm }) => {
    const [name, setName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !checkIn || !checkOut) {
            setError('Please fill all fields');
            return;
        }
        onConfirm({ name, checkIn, checkOut });
    };
    const handleOuter = (e) => {
        if (e.target.className == "_modalOverlay_15jep_1") {
            onClose();
        }

    }

    return (
        <div className={styles.modalOverlay} onClick={handleOuter}>
            <div className={styles.modalContainer} >
                <div className={styles.modalHeader}>
                    <h2>Book {apartment.name}</h2>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className={styles.dateInputs}>
                        <div className={styles.formGroup}>
                            <label htmlFor="checkIn">Check-in Date</label>
                            <input
                                id="checkIn"
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="checkOut">Check-out Date</label>
                            <input
                                id="checkOut"
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && <p className={styles.errorMessage}>{error}</p>}

                    <div className={styles.actionButtons}>
                        <button type="button" className={styles.cancelButton} onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className={styles.submitButton}>
                            Confirm Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;