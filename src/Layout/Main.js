import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router";

const Main = () => {
	return (
		<>
			{/* Navbar  */}
			<Box></Box>

			{/* Outlet  */}
			<Box>
				<Outlet />
			</Box>
			{/* Footer  */}
			<Box></Box>
		</>
	);
};

export default Main;
