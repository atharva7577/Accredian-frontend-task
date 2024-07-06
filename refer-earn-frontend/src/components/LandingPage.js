import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import ReferralModal from './ReferralModal';

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h5" gutterBottom>
        Invite your friends and earn rewards!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <ReferralModal open={open} onClose={handleClose} />
    </Container>
  );
};

export default LandingPage;
