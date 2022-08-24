import '../styles/Gallery.scss';

export const GalleryItem = (item) => {
  return (
    <div className='GalleryItem'>
        <img src={item.url} alt={item.title}/>
        <div className='title-box'>
            <h2>{item.title}</h2>
        </div>
    </div>
  )
}
