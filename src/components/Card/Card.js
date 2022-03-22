import './Card.css';
import DonationCount from '../DonationCount/DonationCount';


export default function Card({nombre, especie, edad, tamanio, creditos}) {
    
    return (

        <div className='Card'>
            
            <div id="imagen">
            <img src='https://st.depositphotos.com/2398521/2608/i/950/depositphotos_26089317-stock-photo-cute-small-dog.jpg' alt=""></img>
            </div>
        <div id="datos">
            <h2>{nombre}</h2>
            <p>Especie: {especie}</p>
            <p>Edad: {edad}</p>
            <p>Tamaño : {tamanio}</p>
        </div>   
            <DonationCount creditos={creditos} nombre={nombre} />
            <p>Creditos:{creditos}</p>
        </div>

    )
}