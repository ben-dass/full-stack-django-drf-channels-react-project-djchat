import { Box, useTheme } from '@mui/material';

type SecondaryDrawProps = {
	children: React.ReactNode;
};

const SecondaryDraw = ({ children }: SecondaryDrawProps) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				mt: `${theme.primaryAppBar.height}px`,
				height: `calc(100vh - ${theme.primaryAppBar.height}px)`,
				minWidth: `${theme.secondaryDraw.width}px`,
				borderRight: `1px solid ${theme.palette.divider}`,
				display: { xs: 'none', sm: 'block' },
				overflow: 'auto',
			}}
		>
			{children}
		</Box>
	);
};

export default SecondaryDraw;
