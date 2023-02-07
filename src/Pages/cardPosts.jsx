import { useState } from "react";
import classNames from "classnames";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom"

const CardPost = (props) => {
    const {id, title, description, imageUrl, expertComment} = props;
    const dispatch = useDispatch()

    return (
        <Link to={`/post/${title}`}>     
            <div className="card__text">
              <p className="card__title">{title}</p>
              <p className="card__description">{description}</p>
              <img src="{imageUrl}" alt="альтернативный текст"></img>
              <p className="card__expertComment">{expertComment}</p>
            </div>
          </Link>
     
    
      )
    }
    
    export default CardPost