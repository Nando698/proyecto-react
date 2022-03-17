import Card from "../Card/Card";
import './ItemListContainer.css';


export default function ItemListContainer() {

    return (
        <div className="ItemListContainer">
            <Card nombre="Ramon" edad="9 meses" tamanio="mediano" />
            <Card />
            <Card />
            <Card />
            <Card />


        </div>
    );


}