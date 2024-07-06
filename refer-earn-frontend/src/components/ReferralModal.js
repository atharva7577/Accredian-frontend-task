import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px'
};

const ReferralModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!form.referrerName) tempErrors.referrerName = "Referrer Name is required";
    if (!form.referrerEmail) tempErrors.referrerEmail = "Referrer Email is required";
    if (!form.refereeName) tempErrors.refereeName = "Referee Name is required";
    if (!form.refereeEmail) tempErrors.refereeEmail = "Referee Email is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form data:', form);
      onClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            label="Your Name"
            name="referrerName"
            value={form.referrerName}
            onChange={handleChange}
            error={!!errors.referrerName}
            helperText={errors.referrerName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Your Email"
            name="referrerEmail"
            value={form.referrerEmail}
            onChange={handleChange}
            error={!!errors.referrerEmail}
            helperText={errors.referrerEmail}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Friend's Name"
            name="refereeName"
            value={form.refereeName}
            onChange={handleChange}
            error={!!errors.refereeName}
            helperText={errors.refereeName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Friend's Email"
            name="refereeEmail"
            value={form.refereeEmail}
            onChange={handleChange}
            error={!!errors.refereeEmail}
            helperText={errors.refereeEmail}
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
