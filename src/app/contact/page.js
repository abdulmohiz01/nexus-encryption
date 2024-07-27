'use client';
import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#555555',
    },
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or email service)
    setFormSubmitted(true);
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);

  };

  return (
    <>

      <ThemeProvider theme={theme}>
        <Container maxWidth="md" className=" text-white p-6 rounded-lg shadow-md mt-10">
          <Typography variant="h3" component="h1" className="text-center mb-6 text-white">
            Contact Us
          </Typography>
          <Typography variant="subtitle1" className="text-center mb-6 text-gray-400">
            We would love to hear from you! Whether you have a question, need support, or want to provide feedback, feel free to reach out to us using the form below or via our social media.
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gray',
                  },
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gray',
                  },
                },
              }}
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gray',
                  },
                },
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gray',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                backgroundColor: 'gray',
                color: 'white',
                fontWeight: 'bold',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                mt: '1rem',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'lightgray',
                  color: 'black',
                },
              }}
            >
              Send Message
            </Button>
          </form>
          {formSubmitted && (
            <Typography
              variant="h6"
              className={`text-center mt-6 text-gray-300 ${formSubmitted ? 'slide-down' : ''}`}
            >
              Thank you for your message! We will get back to you soon.
            </Typography>
          )}
          <div className="mt-10 text-center">


          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Contact;
