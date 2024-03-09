import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React from 'react';

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 37, mb: 3, mr: 0 }}
    >
      <Link color="inherit" href="#">
        Справка и поддержка
      </Link>{' '}
      {'© 2001-2024, Яндекс'}
    </Typography>
  );
};

export default Copyright;
