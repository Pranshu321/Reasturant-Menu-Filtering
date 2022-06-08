import React , {useState} from "react";
import Card from "./Card";
import Menu from "../MenuData";
import Nav from "./Nav";

const uniqueListnav = [...new Set(Menu.map((curele)=>{
    return curele.category;
})
), "All",
];

const App = ()=>{
    const [menuData , setMenudata] = useState(Menu);
    const [menulist , setmenulist] = useState(uniqueListnav);
    
    const filterItem = (cat)=>{
        if(cat === "All"){
            setMenudata(Menu);
            return;
        }

     const updateList = Menu.filter((curele)=>{
         return curele.category === cat;
     });

     setMenudata(updateList);
    }
 return (
     <>
         <Nav filterItem={filterItem} menulist={menulist}/>
         <Card menuData={menuData} />
     </>
 )
}

export default App;