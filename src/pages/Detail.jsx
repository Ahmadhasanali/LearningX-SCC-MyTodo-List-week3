import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getTodoByID } from '../redux/modules/todos';

function Detail() {
    const dispatch = useDispatch();
    const {id} = useParams();

    // const data = todos.filter(item => item.id === Number(id);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getTodoByID(id));
    }, [id, dispatch])

  return (
    <div>Detail {id} 
        <button onClick={()=> {navigate("/")}}>Back</button>
    </div>
  )
}

export default Detail