

import { useContext } from "react";
import { namecontext } from "./namecontextprovider";
import { Link } from "react-router-dom";




function Students()

{
    
  const {favorites, setFavorites}=useContext(namecontext)
  const addToFavorites = (item) => {                              // addtofavourites(1)
    setFavorites([...favorites, item]);
    console.log(favorites)
  };
  const handleClick = (item) => {
    // Check if the item is already in favorites(3)
    if (favorites.includes(item.name)) {
      // removeFromFavorites(item);
    } else {
      addToFavorites(item.name);
     
    }
  };
  return(
    <div>
              <div className=' flex justify-around bg-red-400 py-3'>
                <Link className=" text-white underline" to={'/'}>List of Students</Link>
                <Link className=" text-white underline" to={'/favourites'}>Favourite Students</Link>
      
      </div>
      
        {/* Assume you have a list of items */}
        {[{id:0,name:"Barath"},{id:1,name:"Praveen"},{id:2,name:"Kumar"},{id:3,name:"Ramya"},{id:4,name:"Monica"}].map((item, id) => (
          <div className=' flex justify-around'>
          <p key={id}>
           {id+1} . {item.name}</p>
           <button  className=' bg-black text-white p-1 m-1 rounded-md hover:bg-slate-500' onClick={() => handleClick(item)}>Add to Favourites</button>
          </div>
        ))}
    </div>
  )
}
export default Students;