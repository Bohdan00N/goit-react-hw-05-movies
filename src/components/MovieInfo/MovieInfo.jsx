import css from './movieInfo.module.scss'
import { Link } from "react-router-dom";

export const MovieInfo = ({listTitle, location}) => {       
    return (
        <ul className={css.info}>{listTitle}
            <li>
                <Link to="cast" state={{ from: location }}>Cast</Link>         
            </li>                              
            <li>
                <Link to="reviews" state={{ from: location }}>Reviews</Link>   
            </li>                                        
        </ul>                                                                                    
    )     
  }