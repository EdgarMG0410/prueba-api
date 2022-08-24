import { useEffect, useState } from "react"
import { GalleryItem } from "./GalleryItem";
import '../styles/Todos.scss';

export const GalleryList = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() =>{
        getPhotos()
    }, [])
    
    const getPhotos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos')
        const info = await data.json()
        setPhotos(info)
    }
  return (
    <div className='Gallery'>
        {
            photos.map(item =>(
                <GalleryItem
                key= {item.id}
                {...item}
                />
            ))
        }
    </div>
  )
}
