import moment from 'moment';
import React from 'react'
import './card.css'
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/Actions/expense';

const Card = ({item, notifySuccess}) => {
    const time= moment (item.createdAt).fromNow();
    const dispatch= useDispatch()
    const handleDelete=()=>{
        dispatch(deleteExpense(item));
        notifySuccess();

    }
    return (
        <div className='card' style={{borderRight:`6px solid ${item.Category.color}`}}>
           <div className='card-image-container'>
                <img src={item.Category.icon.default} alt={item.Category.Title} className='card-image' />
           </div>
           <div className='card-info'>
                <label className='card-title'>{item.Title}</label>
                <label className='card-time'>{time}</label>
           </div>
           <div className='card-right'>
               <div>
                   <label className='card-amount'>#{item.Amount}</label>
               </div>
               <div className='delete-icon' onClick={handleDelete}>
                   X
               </div>
           </div>
        </div>
    )
};

export default Card
