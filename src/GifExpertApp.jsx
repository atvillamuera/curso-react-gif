import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
    

        if( categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
   
    }


  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={ onAddCategory }/>

        {/* Listado de GIFs */}
        {   categories.map( category => {
                return (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                )
            })
        }
    </>
  )
}
