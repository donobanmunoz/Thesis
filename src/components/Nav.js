import React from 'react'
import { NavLink} from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

const Navigation = () => {
  return  (
    <div>
     <div >
        <NavLink to="/traductor"><Button color="pink">Empezar a Aprender</Button></NavLink>
     </div>
    </div>
  );
};


export default Navigation;
