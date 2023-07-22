import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function LoginModal({ isOpen }) {
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => {

        setOpen(false);
        console.log('----------------', open)
    }
    console.log('first')
    // setOpen(isOpen)
    return (
        <div>

            <Modal
                open={isOpen === true ? isOpen : false}
                onClose={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                     Sign up
                    </Typography>
                    <TextField id="standard-basic" type='text' label="email" variant="standard" /><br/>
                    <TextField id="standard-basic" type='password' label="password" variant="standard" /><br/>
                    <Button variant='contained' color='success' onClick={handleClose} >Login</Button>
                </Box>
            </Modal>
        </div>
    );
}
