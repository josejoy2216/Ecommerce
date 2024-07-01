import React from 'react';

const SmallCard = ({ card }) => {
  return (
    <div className="cardA">
      <table className="card-body">
        <tr>
          <td rowspan="2"> <img src={card.Aimg} className="card-img" alt={card.Aname} /></td>
          <td colspan="2"> <p className="card-title"> {card.Aname}<hr/></p> </td>
        </tr>
        <tr>
          <td colspan="2"> <p className='card-text description'> {card.Adescription} </p></td>
        </tr>
      </table>
    </div>
  );
};

export default SmallCard;
