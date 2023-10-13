import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

function App() {
    let list_items = [];
    if(localStorage.getItem('todo_list')){
      list_items = JSON.parse(localStorage.getItem('todo_list'));
    }
   const [items, setItems] = useState(list_items);

   const [newItem, setNewItem] = useState('')
    
   const [search, setSearch] = useState()

   const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1 
      const addNewItem = {
        id,
        checked:false,
        item
      }
      const listItems = [...items, addNewItem]

      setItems(listItems)

      localStorage.setItem("todo_list", JSON.stringify(listItems))
   }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted')
    
    if(!newItem){
      console.log('Empty')
      return;
    }
    console.log(newItem);
    addItem(newItem);
    // addItem
    setNewItem('')
  }

  return (
    <div>
      <Header title="ToDo" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) => (((item.item).toLowerCase()).includes(search)))}
        handleCheckboxChange={handleCheckboxChange}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
