import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams()
    return (
        <div>
            this is check our page{serviceId}
        </div>
    );
};

export default CheckOut;