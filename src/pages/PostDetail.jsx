import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import  Thumbnail from '../images/1.jpg'

const PostDetail = () => {
  return (
    <section className='post-detail'>
     <div className='.container post_detail_container'>
      <div className='post-detail_header'>

     
      <PostAuthor />
      <div className="post_detail_buttons">
        <Link to={'/post/werwer/edit'} className='btn sm primary'>Editar</Link>
        <Link to={'/post/werwer/delete'} className='btn sm danger'>Eliminar</Link>
      </div>
       </div>
      <h1>Titulo del post!</h1>
      <div className='post_detail_thumbnail'>
        <img src={Thumbnail} alt="" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ea et aperiam debitis quos iusto optio possimus nesciunt architecto. Iusto at, cupiditate deserunt natus possimus voluptates illum vel a saepe!

      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ea et aperiam debitis quos iusto optio possimus nesciunt architecto. Iusto at, cupiditate deserunt natus possimus voluptates illum vel a saepe!
        
      </p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ea et aperiam debitis quos iusto optio possimus nesciunt architecto. Iusto at, cupiditate deserunt natus possimus voluptates illum vel a saepe!
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ea et aperiam debitis quos iusto optio   </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ea et aperiam debitis quos iusto optio possimus nesciunt architecto. Iusto at, cupiditate deserunt natus possimus voluptates illum vel a saepe!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ea et aperiam debitis quos iusto optio possimus nesciunt architecto. Iusto at, cupiditate deserunt natus possimus voluptates illum vel a saepe!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ea et aperiam debitis quos iusto optio possimus nesciunt architecto. Iusto at, cupiditate deserunt natus possimus voluptates illum vel a saepe!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ea et aperiam debitis quos iusto optio possimus nesciunt architecto. Iusto at, cupiditate deserunt natus possimus voluptates illum vel a saepe!
        
      </p>
      </div> 

    </section>
  )
}

export default PostDetail