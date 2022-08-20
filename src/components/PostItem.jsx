import '../styles/PostItem.scss';

export const PostItem = (item
) => {
  return (
    <div className='PostItem'>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
    </div>
  )
}
