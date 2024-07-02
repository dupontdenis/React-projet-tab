import Tab from "./components/Tab";
import Form from "./components/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FormFilter from "./components/FormFilter";

const head = ["name", "price"];

const start = [
  ["Apple", 1],
  ["Banana", 3],
];

function App() {
  const [products, setProducts] = useState(start);
  const [filterValue, setFilterValue] = useState("All");

  return (
    <>
      <Form
        onSubmit={(data) => {
          console.log(Object.values(data));
          {
            setProducts([...products, Object.values(data)]);
          }
        }}
      />
      <FormFilter
        onSelect={(value) => {
          setFilterValue(value);
        }}
      />
      <Tab
        header={head}
        data={
          filterValue == "All"
            ? products
            : products.filter(([name]) => {
                console.log(name);
                return name == filterValue;
              })
        }
        onRemove={(index) => {
          setProducts(products.filter((_, i) => i !== index));
        }}
      />
    </>
  );
}

export default App;
