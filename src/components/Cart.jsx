import Container from "react-bootstrap/Container";
import { useContext } from "react";

import { CartContext } from "./CartContext";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const { clear, items } = useContext(CartContext);

  const total = () => items.reduce((acc, i) => acc + i.stock * i.precio, 0);

  const handleChange = (ev) => {
    setValues((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items: items,
      total: total(),
    };
  };

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  addDoc(orderCollection, order)
    .then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
      }
    })
    .finally(() => {
      clear();
      setValues(initialValues);
    });

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      {items.map((i) => {
        return (
          <ul key={i.name}>
            <li>Prod: {i.name}</li>
            <li>$ {i.precio}</li>
            <li>Cant: {i.stock}</li>
          </ul>
        );
      })}
      <div>Total: {total()}</div>
      {items?.length > 0 && (
        <form>
          {" "}
          (<label>Nombre</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label>Celular</label>
          <input
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          <label>E-mail</label>
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      )}
    </Container>
  );
};
