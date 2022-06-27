import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }
  return (
    <> 
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* input */}
        <AddCategory 
           /*  setCategories = { setCategories } */
           onNewCategory={onAddCategory}
        />
        {/* <button onClick= { onAddCategory } >Agregar</button> */}
        {/* lista */}
        {/* <ol> */}
         {
            categories.map(category =>(<GifGrid key={category} category ={category}/> ))
                        
                        /* <div key={  category }>
                             <h3>{  category }</h3>
                             <li key= { category }> { category } </li>
                        </div> */
        }
        {/*    </ol> */}    
    </>    
  )
}
