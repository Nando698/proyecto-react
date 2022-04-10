import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./BotonCarrito.css";
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export default function Carrito() {
  const { cartProducts, deleteProduct } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container-cart-button">
      <ShoppingCartIcon
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      />

      <p>{cartProducts.length}</p>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        className="cart-modal"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "flex",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {cartProducts == 0 ? (
          <p>No agregaste nada al carrito...</p>
        ) : (
          <p>Carrito</p>
        )}
        <Divider />

        {cartProducts.map((cartProduct) => {
          return (
            <>
              <MenuItem className="item-cart-modal" key={cartProduct.id}>
                <div className="item-cart-modal__info">
                  <p>{cartProduct.title}</p>
                  <span>$ {cartProduct.price}</span>
                  <span> x {cartProduct.qty}</span>
                </div>
                <div className="item-cart-modal__action">
                  <DeleteIcon />
                </div>
              </MenuItem>
              <Divider />
            </>
          );
        })}

        <div className="footer-modal-cart">
          <Button sx={{ backgroundColor: "green" }}>
            <Link to="/carrito">Iniciar la compra</Link>
          </Button>
        </div>
      </Menu>
    </div>
  );
}
