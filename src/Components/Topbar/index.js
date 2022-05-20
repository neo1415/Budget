import './topbar.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from './../../redux/Actions/expense';

const Topbar = () => {
    const [Query, setQuery] = useState('');
    const dispatch = useDispatch();
    const handleQuery=(e)=>{
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }
    return (
        <div className='topbar'>
            {window.location.pathname==='/'?
                <div className='home-topbar'>
                <div className='searchbar'>
                    <input placeholder='search for expenses'
                    value={Query} 
                    onChange={(e)=> handleQuery(e)} />
                </div>
                <Link to='add-expense'>
                <div className='add-button'>
                    
                    <label classname='add'>Add</label>
                </div>
                </Link>
            </div>:(
                <div className='add-topbar'>
                <Link to='/'>
                    <div className='add-topbar-button'>

                        <label>Back</label>

                    </div>
                </Link>
                <Link to='/'>
                    <div className='add-topbar-button'>

                        <label>Cancel</label>

                    </div>
                </Link>
                </div>
            )}
            
        </div>
    )
}

export default Topbar
