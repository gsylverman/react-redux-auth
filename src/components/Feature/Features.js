import React from 'react';
import  requireAuth  from '../../requireAuth/requireAuth';

const Features = () => {
    return (
        <div>
            Features Route
        </div>
      );
}
 
export default requireAuth(Features);