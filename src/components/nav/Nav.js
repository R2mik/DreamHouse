import React, {useState} from 'react';
import { NavView } from './NavView';


export default function Nav(){
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);
    const closeMobileMenu = () => setSidebar(true);
     
    return(
        <NavView {...{
            closeMobileMenu, 
            showSidebar, 
            sidebar
        }} />
    );
}