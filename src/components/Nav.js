import {  Link } from 'react-router-dom';
function Nav(){
    return(
        
            <div class="container-fluid">
                <nav class="navbar">
                    <div class="navbar-brand"><Link to="/home" class="nav-link fs-2 p-2 m-2 yellow">eDriveSpace</Link></div>
                    <div class="nav">
                        <Link to="/create" class="nav-link m-2 yellow fs-5 p-2">Create Car</Link>
                        <Link to="/orders" class="nav-link m-2 yellow fs-5 p-2">Orders</Link>
                        <Link to="/list" class="nav-link m-2 yellow fs-5 p-2">List</Link>
                    </div>
                </nav>
            </div>
        
    )
}
export default Nav;