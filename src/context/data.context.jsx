import React, { 
   useEffect,
   useState, 
   createContext } from 'react';


const DataContext = createContext();
const { Provider } = DataContext;

const DataProvider = ({ children }) => {
   const [ data, setData ] = useState([]);
   
   const getData = () => {
      fetch('data.json'
      ,{
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      })
      .then(response => {
         return response.json();
      })
      .then(data => {
         setData(data)
      })
   }

   useEffect(() => {
      getData();
   }, []);   

   const deleteDataRecord = (id) => {
      setData(data.filter(e => e.id !== id));
   }

   return (
      <Provider value={
         {
            data,
            deleteData: id => deleteDataRecord(id)
         }
      }>
         {children}
      </Provider>
   );
}

export { DataContext, DataProvider };