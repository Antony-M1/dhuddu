import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
   const [items, setItems] = useState([
     {
       id: 1,
       checked: true,
       item: "Preactice coding",
     },
     {
       id: 2,
       checked: true,
       item: "Play Cricked",
     },
     {
       id: 3,
       checked: false,
       item: "Read about AI",
     },
     {
       id: 4,
       checked: true,
       item: "Django Practice",
     },
   ]);

   const handleCheckboxChange = (id) => {
     console.log(id);
     const listItems = items.map((item) =>
       item.id === id ? { ...item, checked: !item.checked } : item
     );
     setItems(listItems);
     localStorage.setItem("todo_list", JSON.stringify(listItems));
   };

   const handleDelete = (id) => {
     const listItems = items.filter((item) => item.id !== id);
     setItems(listItems);
     localStorage.setItem("todo_list", JSON.stringify(listItems));
   };

  return (
    <div>
      <Header title="ToDo" />
      <Content
        items={items}
        handleCheckboxChange={handleCheckboxChange}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
