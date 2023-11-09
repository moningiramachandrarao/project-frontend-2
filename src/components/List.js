import Axios from "axios";
import { useState, useEffect } from "react";
import ShopList from "./shoplist";
function List() {
  const [arr, setArr] = useState([]);
  
  useEffect(() => {
    Axios
      .get("http://localhost:4000/useRoute/")
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () =>{
    return arr.map((val,ind)=>{ 
        return <ShopList obj={val}/>
    })
}

  return (
    <div className="container mt-4">
      <div className="row">
        {ListItems()}
      </div>
    </div>
  );
}

export default List;
