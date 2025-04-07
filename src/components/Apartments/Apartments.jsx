import React, { useEffect, useState } from 'react';
import styles from './Apartment.module.css';
import { useBookingContext } from '../../context/bookingContext';
import { FaMapMarkerAlt } from 'react-icons/fa';
import SkeletonCard from '../Skeleton/SkeletonCard';
import Pagination from '../Pagination/Pagination';
import { useFilterSearchContext } from '../../context/filterSearchContext';
import BookingModal from '../Modal/Modal';
import { toast } from 'react-toastify';
import { useTheme } from '../../context/ThemeConext';


const Apartments = () => {
    const { data, loading, page, setPage } = useBookingContext();
    const { filteredData, setFilteredData } = useFilterSearchContext();
    const [selectedApartment, setSelectedApartment] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme } = useTheme()
    const [hasFiltered, setHasFiltered] = useState(false);



    useEffect(() => {
        if (data.length > 0) {
            setFilteredData(data);
            setHasFiltered(true)
        }
    }, [data]);

    console.log(filteredData);

    useEffect(() => {
        setPage(1);
    }, [filteredData, setPage]);



    const handleBookNow = (apartment) => {
        setSelectedApartment(apartment);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedApartment(null);

    };
    const handleConfirmBooking = (bookingData) => {
        // Handle the booking confirmation
        toast.success("Booking successful!");

        console.log('Booking confirmed:', {
            apartment: selectedApartment,
            ...bookingData
        });
        handleCloseModal();
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'

        }} className={`${theme == 'light' ? 'bgDark' : 'bgLight'}`}>
            <div className={`${styles.apartmentsParent} ${theme == 'light' ? 'bgDark' : 'bgLight'}`}>
                {filteredData.length > 0 ? filteredData.slice(page * 6 - 6, page * 6).map((apartment) => (
                    <div className={`${styles.card} ${theme == 'light' ? 'cardDark' : 'cardLight'}`} key={apartment.id}>
                        <div className={styles.price}>{`${apartment.price}/Night`}</div>
                        <div className={styles.content}>
                            <img className={styles.Img} src={apartment?.image} alt={apartment.name} />
                            <div>
                                <h3>{apartment.name}</h3>
                                <p><FaMapMarkerAlt /> {apartment.location}</p>
                            </div>
                        </div>
                        <div
                            onClick={() => handleBookNow(apartment)}
                            className={styles.btn}>Book Now</div>
                    </div>
                )) : <div className={styles.noResults}>
                    {hasFiltered && <p>No matching apartments found for your filters.</p>}
                </div>}
                {loading && [...Array(6)].map((_, idx) => <SkeletonCard key={idx} />)}

            </div>

            <div className={`${styles.pagination} `} >

                {(data && filteredData.length >= 6) && <Pagination />}
            </div>
            {/* modal */}
            {isModalOpen && selectedApartment && (
                <BookingModal
                    apartment={selectedApartment}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmBooking}
                />
            )}
        </div>
    );
};

export default Apartments;

