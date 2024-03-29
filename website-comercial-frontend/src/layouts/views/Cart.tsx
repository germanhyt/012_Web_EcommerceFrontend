import { CartContext } from "@/core/hooks/CartContext";
import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import { FormEvent, useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Cart = () => {
  const { cartProducts, deleteProductToCart, calculateTotal } =
    useContext(CartContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    email2: "",
    image: "",
  });
  //   const [order, setOrder] = useState({
  //     buyer: formData,
  //     items: cartProducts.map((product) => {
  //       return {
  //         id: product.id,
  //         nombre: product.name,
  //         precio: product.price,
  //         cantidad: product.quantity,
  //       };
  //     }),
  //     total: calculateTotal(),
  //   });

  const infoBuyerPerson = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    const convertido = await toBase64(file);
    console.log("FILE ", file);
    console.log("convertido ", convertido);

    setFormData({
      ...formData,
      image: "asd",
    });
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setLoading(true);
      e;
      const formDataToSend = new FormData(form.current);

      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // if (form.current) {
      emailjs
        .sendForm(
          "service_988p1xn",
          "template_6d59zcu",
          form.current,
          "5il5XPnUwwcjNxkaM"
        )
        .then(
          (result) => {
            console.log(result.text);
            if (form.current) {
              form.current.reset(); //reset inputs of form
              setOpenModal(false);
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const continueOrder = () => {
    setOpenModal(true);
  };

  const cancelOrder = () => {
    setOpenModal(false);
    setLoading(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      email2: "",
      image: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto py-8 sm:py-16 bg-primary-light dark:bg-secondary-dark"
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
                      <div className="flex flex-col md:flex-row items-center mx-auto  my-2 sm:my-5">
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
                  <p>
                    <span className="font-bold"># artículos: </span>
                    {cartProducts.length}
                  </p>
                  <p>
                    <span className="font-bold">Total:</span> s/
                    {calculateTotal()}
                  </p>
                  <Button
                    className="bg-primary-dark text-white"
                    onClick={continueOrder}
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

      <Modal
        onClose={cancelOrder}
        open={openModal}
        className="flex items-center justify-center"
      >
        {loading ? (
          <></>
        ) : (
          <div className="w-full mx-4 sm:w-5/12 rounded-lg bg-primary-light border-2 text-center border-primary-dark ">
            <h3 className="py-4 font-nunito font-bold">Formulario de Compra</h3>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-2 px-6"
            >
              <div className="flex">
                <label className="w-1/3 text-end px-4" htmlFor="name">
                  Nombre:
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nombre ..."
                  onChange={infoBuyerPerson}
                  value={formData.name}
                  className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                />
              </div>
              <div className="flex">
                <label className="w-1/3 text-end px-4" htmlFor="email">
                  Email:
                </label>
                <input
                  required
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email..."
                  onChange={infoBuyerPerson}
                  value={formData.email}
                  className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                />
              </div>
              <div className="flex">
                <label className="w-1/3 text-end px-4" htmlFor="email2">
                  Confirmar Email:
                </label>
                <input
                  required
                  type="mail"
                  id="email2"
                  name="email2"
                  placeholder="Confirme su correo electrónico,,,"
                  onChange={infoBuyerPerson}
                  value={formData.email2}
                  pattern={formData.email2}
                  className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                />
              </div>
              <div className="flex">
                <label className="w-1/3 text-end px-4" htmlFor="phone">
                  Celular:
                </label>
                <input
                  required
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Celular ..."
                  onChange={infoBuyerPerson}
                  value={formData.phone}
                  className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                />
              </div>
              <div className="flex">
                <label className="w-1/3 text-end px-4" htmlFor="image">
                  Imagen:
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  name="image"
                  className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                  onChange={handleImageChange}
                />
              </div>
              <div className="my-4 flex gap-2 justify-end">
                <Button
                  className="bg-primary-dark text-white px-2 py-1 hover:border hover:border-primary-dark hover:text-primary-dark hover:bg-primary-light"
                  onClick={() => {
                    cancelOrder();
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="bg-primary-dark text-white px-2 py-1 hover:border hover:border-primary-dark hover:text-primary-dark hover:bg-primary-light"
                >
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </motion.section>
  );
};

export default Cart;
