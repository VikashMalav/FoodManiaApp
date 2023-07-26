import * as React from 'react';
import { Box, TextField, Button, Grid, Container } from '@mui/material';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CancelOutlined } from '@mui/icons-material';

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

export default function LoginModal() {

    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState('');
console.log(user)
    const handleUser =(e)=>{setUser(e.target.value)
    console.log(user)}
    const handleOpen = () => setOpen(true);
    const handleClose = () => {

        setOpen(false);
        console.log('----------------', open)
    }
    
    // setOpen(isOpen)
    return (
        <div>
            <Typography onClick={handleOpen}>Login</Typography>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} gap={2}>
                    {/* <CancelOutlined sx={{position:'relative',right:0,fontSize: 'large'}}/> */}
                    <Grid container md={12} xs={4} spacing={3}>
                        <Grid item md={12} >
                            <item>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Sign up
                                </Typography>
                            </item>
                        </Grid>
                        <Grid item md={12} >
                            <item>
                                <TextField autoComplete='off' id="standard-basic" type='email' value={user} onChange={(e)=>setUser(e.target.value)} label="email" variant="outlined" /><br />
                            </item>
                        </Grid>

                        <Grid item md={12} >
                            <item>
                                <TextField id="standard-basic" type='password' label="password" variant="outlined" /><br />
                            </item>
                        </Grid>
                        <Box component='div' ml={4} mt={2} >

                        <Button variant='contained' color='success'  >Login</Button>
                        </Box>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
