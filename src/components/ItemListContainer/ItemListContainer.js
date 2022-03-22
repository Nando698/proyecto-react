import Card from "../Card/Card";
import './ItemListContainer.css';


export default function ItemListContainer() {

    return (
        <div className="ItemListContainer">
            <Card nombre="Ramon" edad="" tamanio="" creditos="10" />
            <Card nombre="pedro " edad="" tamanio="" creditos="10"/>
            <Card nombre="pepe " edad="" tamanio="" creditos="10"/>
            <Card nombre="roshi " edad="" tamanio="" creditos="4"/>
            <Card nombre="jose " edad="" tamanio="" creditos="10"/>


        </div>
    );


}