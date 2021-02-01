import React from 'react';
import _ from 'lodash';

// Components
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

/**
 * Given a whole number or a number rounded to the nearest .5: render a series
 * of five stars for a rating that includes half stars.
 */
const Stars = ({ qty, edit, parentId }) => {
  const isHalf = qty % 1 !== 0;
  const qtyFloor = Math.floor(qty);
  const qtyLeft = 5 - qtyFloor - (isHalf ? 1 : 0);
  return (
    <>
      {qty && (
        <div className='stars'>
          {_.times(qtyFloor, i => (<BsStarFill key={`${parentId}-star-${i}`} />))}
          {isHalf && <BsStarHalf key={`${parentId}-star-half`}/>}
          {_.times(qtyLeft, i => (<BsStar key={`${parentId}-star-left-${i}`}/>))}
        </div>
      )}
    </>
  );
};

export default Stars;
