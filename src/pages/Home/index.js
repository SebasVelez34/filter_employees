import React from 'react';
import Table from '../../components/Table';
import './style.scss';
import data from '../../data.json';
const Home = ()=>{
    const header = ['id','Name','Contract type','Hourly salary','Monthly salary'];
    return (
        <Table header={header}
               data  ={data}
        />
    );
}

export default Home;