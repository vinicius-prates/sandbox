import axios from 'axios';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  logoExo  from '../../assets/logoExo.png'

export const UserNavBar = () => {

    return(
        <div className="bg-[#112D4E] w-screen text-[whitesmoke] flex flex-col py-6 px-4 gap-6">
            <div className="">

            <div>
                <img src={logoExo} className="w-10 "></img>
            </div>
            <div>
                <img />
                <img/>
                <img/>
            </div>
            
            </div>
            <div>
                <div>
                    <h1>Welcome Prates!</h1>
                </div>
            </div>
        </div>

    )
}