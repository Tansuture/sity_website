import './Background.css'
import search from '../../img/search.svg'
const Background =()=>{
    return(
        <>
        <div className = 'container'>
        <div className="search">
      <input type="text" className="searchTerm" placeholder="Найти...."/>
      <button type="submit" className="searchButton">
        <img  className = 'searchIcon'src = {search}/>
     </button>
   </div>
        </div>
        </>
    )
}

export default Background;