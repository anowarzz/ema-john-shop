import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {

const {user} = useContext(AuthContext)
 

    return (
        <div>
            <h2 className='text-2xl'>This is about section</h2>
       
        </div>
    );
};

export default About;