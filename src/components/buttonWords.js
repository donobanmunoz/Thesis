import React from 'react'
import { NavLink} from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

const NavWords = () => {
  return  (
    <div>
     <div >
        <NavLink to="/words"><Button color="pink">Aguardar Palabra</Button></NavLink>
     </div>
    </div>
  );
};


export default NavWords;
