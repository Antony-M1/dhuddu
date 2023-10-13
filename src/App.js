import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

function App() {
    let list_items = [];
    if(localStorage.getItem('todo_list')){
      list_items = JSON.parse(localStorage.getItem('todo_list'));
    }

    const API_URL = "http://localhost:3500/items";

   const [items, setItems] = useState([]);

   const [newItem, setNewItem] = useState('')
    
   const [search, setSearch] = useState('')

   const [fetchError, setFetchError] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchItems = async () => {
        try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("Data not received")
          console.log(response)
          const listItems = await response.json();
          setItems(listItems)
          setFetchError(null)
        }catch(err){
          console.log(err.message);
          setFetchError(err.message)
        }finally{
          setIsLoading(false)
        }
      }

      setTimeout(() => {
        (async () => await fetchItems())();
      }, 3000)

      
   }, []);
   


   const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1 
      const addNewItem = {
        id,
        checked:false,
        item
      }
      const listItems = [...items, addNewItem]

      setItems(listItems)

   }

   const handleCheckboxChange = (id) => {
     console.log(id);
     const listItems = items.map((item) =>
       item.id === id ? { ...item, checked: !item.checked } : item
     );
     setItems(listItems);
   };

   const handleDelete = (id) => {
     const listItems = items.filter((item) => item.id !== id);
     setItems(listItems);
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!newItem){
      return;
    }
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
      <main>
        {isLoading && <p>{`Loading items ...`}</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search)
          )}
          handleCheckboxChange={handleCheckboxChange}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
