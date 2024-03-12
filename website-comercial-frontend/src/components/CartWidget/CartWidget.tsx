import { CartContext } from "@/core/hooks/CartContext";
import { Menu, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CartWidget = () => {
  // Hooks
  const { cartProducts, deleteProductToCart } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Methods
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const qtyCartProducts = cartProducts.length;

  return (
    <>
      <Button
        className="relative ml-8 border-none bg-primary-light text-ternary-dark hover:text-gray-400 dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
        id="basic-button"
        onClick={handleClick}
      >
        <FaShoppingCart className=" text-xl" />
        <div className="absolute -right-2  px-2 py-0 bg-secondary-dark text-white rounded-full">
          <span className="text-sm text-center">{qtyCartProducts}</span>
        </div>
      </Button>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className="menuCart shadow-inner"
        >
          <p className="font-nunito text-start px-2">Lista de Productos</p>
          {cartProducts.map((cp) => {
            return (
              <>
                <MenuItem
                  key={cp.id}
                  onClick={handleClose}
                  className="flex flex-col sm:flex-row gap-2 h-auto w-auto"
                >
                  <img src={cp.img} alt="img" className="w-12 sm:w-14" />
                  <div className="flex flex-col sm:flex-row items-center justify-center my-2 sm:my-5">
                    <p>{cp.name}</p>
                    <p>s/. {cp.price}</p>
                    <p>Cantidad: {cp.quantity}</p>
                  </div>
                  <button
                    onClick={() => deleteProductToCart(cp)}
                    className="btnDelete"
                  >
                    <MdDelete />
                  </button>
                </MenuItem>
              </>
            );
          })}
          <Link to={"/cart"}>
            <div className="w-full text-center bg-primary-dark text-white py-1">
              Concluir compra
            </div>
          </Link>
        </Menu>
      </motion.div>
    </>
  );
};

export default CartWidget;
