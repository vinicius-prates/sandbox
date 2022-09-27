import axios from 'axios';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserNavBar } from '../components/userComponents/userNavBar';

import './../App.css';

export const UserPage = () => {
    return(
        <>
        <UserNavBar/>
        </>
    )
}