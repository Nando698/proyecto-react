import Container from '@mui/material/Container';
import { TextField, Button } from '@mui/material';




export default function Contactform () {
    return (
        <Container className="general-container">
            <form className='formularioContacto'>
                <TextField fullWidth label="Tu nombre"/>
                <TextField fullWidth label="Tu correo"/>
                <TextField fullWidth  multiline label="Tu mensaje"/>
                <Button>Enviar</Button>
            </form>
        </Container>
    )
}

