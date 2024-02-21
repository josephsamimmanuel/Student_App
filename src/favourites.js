
import { useContext } from "react";
import { namecontext } from "./namecontextprovider";
import { Link } from "react-router-dom";



function Favourites()
{
  const {favorites, setFavorites}  = useContext(namecontext)
  const removeFromFavorites = (item) => {                        //removefromfavourites(2)
    const updatedFavorites = favorites.filter(favorite => favorite !== item);
    setFavorites(updatedFavorites);
  };
  return(
    <div>
        <div className=' flex justify-around bg-red-400 py-3'>
        
        <Link className=" text-white underline" to={'/'}>List of Students</Link>
        <Link className=" text-white underline" to={'/favourites'}>Favourite Students</Link>
        </div>

        {favorites.map((favorite, index) => (
          <div className=' flex justify-around'>
          <p  key={index}>
            {index+1}. {favorite} </p>
            <button className=' text-white bg-red-400 rounded-md p-1 m-1' onClick={() => removeFromFavorites(favorite)}>Remove</button>
          </div>
        ))}
    </div>
  )  
}
export default Favourites;
