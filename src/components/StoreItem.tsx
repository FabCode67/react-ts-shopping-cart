import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemsProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}

export function StoreItem( {id, name, price, imgUrl}: StoreItemsProps ){

    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();

    const quantity = getItemQuantity(id);
    return (
     <Card className="h-100">
        <Card.Img variant="top" src={imgUrl} height= "200px" style={{ objectFit:"cover" }} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="fs-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={()=> increaseCartQuantity(id)}>+Add to Cart</Button>
                ): <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                    <div className="d-flex align-items-center justfy-content-center" style={{ gap: ".5rem" }}>
                        <Button variant="outline-primary" size="sm" onClick={()=> decreaseCartQuantity(id)}>-</Button>
                        <div>
                        <span className="fs-3">{quantity}</span>in cart
                        </div>
                        <Button variant="outline-primary" size="sm" onClick={()=> increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button variant="outline-danger" onClick={()=> removeFromCart(id)}>Remove</Button>
                </div> }
            </div>
        </Card.Body>
    </Card>
    )

}