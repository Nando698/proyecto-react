import './Card.css';



export default function Card(props) {
    
    return (

        <div className='Card'>
            <h2>{props.nombre}</h2>
            <img src='https://st.depositphotos.com/2398521/2608/i/950/depositphotos_26089317-stock-photo-cute-small-dog.jpg' alt=""></img>
            <p>Edad: {props.edad}</p>
            <p>Tamaño : {props.tamanio}</p>
            <button> Agregar a favs </button>
        </div>

    )
}