import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink href='/about' activeStyle>
						About
					</NavLink>
					<NavLink href='/events' activeStyle>
						Events
					</NavLink>
					<NavLink href='/annual' activeStyle>
						Annual Report
					</NavLink>
					<NavLink href='/team' activeStyle>
						Teams
					</NavLink>
					<NavLink href='/blogs' activeStyle>
						Blogs
					</NavLink>
					<NavLink href='/sign-up' activeStyle>
						Sign Up
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink href='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink href='/signin'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
