import React from 'react'
import { NavLink} from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

const NavGato = () => {
  return  (
    <div>
     <div >
        <NavLink to="/gato"><Button color="pink">Jugar Gato</Button></NavLink>
     </div>
    </div>
  );
};


export default NavGato;
