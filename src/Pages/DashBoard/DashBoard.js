import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashBoard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <span className='text-blue-700 font-bold text-2xl'>WelCome To Your <span className='text-purple-500 font-bold text-4xl'>D</span>ashBoard</span>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashBoard" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dash'>My Appointments</Link></li>
                    <li><Link to='myreview'>My Reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;