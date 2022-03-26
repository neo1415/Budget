import React from "react";
import './home.css'
import Topbar from "../../Components/Topbar";
import ExpenseList from "../../Components/expense-list";

const Home=()=>{
    return(
        <div className='home'>
       <Topbar /> 
        <ExpenseList />
        </div>
    )
}
export default Home;