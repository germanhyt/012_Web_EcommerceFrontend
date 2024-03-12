import { CartContext } from "@/core/hooks/CartContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProducts, deleteProductToCart, calculateTotal } =
    useContext(CartContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" mx-auto py-8 sm:py-16 bg-primary-light dark:bg-secondary-dark"
    >
      <div className="container mt-28 ">
        {cartProducts.length > 0 ? (
          <>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="sm:w-3/4 ">
                {cartProducts.map((cp) => {
                  return (
                    <div className="flex flex-col sm:flex-row gap-2 py-4 mt-4  border-2 border-primary-dark rounded-lg">
                      <img
                        src={cp.img}
                        alt="img"
                        className="mx-auto w-32 sm:w-48 rounded-lg"
                      />
                      <div className="flex flex-col sm:flex-row items-center mx-auto  my-2 sm:my-5">
                        <p>{cp.name}</p>
                        <p>
                          <span className="font-nunito font-bold">
                            Unidades:
                          </span>{" "}
                          {cp.quantity}
                        </p>
                        <p>
                          <span className="font-nunito font-bold">
                            Subtotal:{" "}
                          </span>{" "}
                          s/. {cp.price}
                        </p>
                      </div>
                      <div className="flex items-center justify-center mx-auto my-2 sm:my-5">
                        <button
                          onClick={() => deleteProductToCart(cp)}
                          className="btnDelete hover:bg-primary-dark hover:text-white"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="sm:w-1/4 font-nunito flex flex-col gap-8 items-center">
                <h3 className="text-lg">Detalles de Compra</h3>
                <div className="flex flex-col gap-4">
                  <p><span className="font-bold"># artículos: </span>{cartProducts.length}</p>
                  <p>
                    <span className="font-bold">Total:</span> s/
                    {calculateTotal()}
                  </p>
                  <Button
                    className="bg-primary-dark text-white"
                    onClick={() => {}}
                  >
                    Finalizar Compra
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-[75vh] w-full flex flex-col gap-2 justify-center items-center">
              <p className="font-nunito">
                El carrito está vacío, para comprar agregue productos
              </p>
              <Link to={"/"}>
                <div className="px-4 py-2 bg-primary-dark text-white rounded-md">
                  Inicio
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default Cart;
