import React from 'react'
import "./listcard.scss"



import {BiChevronLeft,BiChevronRight} from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { arrowClick} from '../../redux/taskSlice'
const Listcard = (items) => {

    const {item}=items
    const dispatch=useDispatch()
    

//     const ArrowClick=(item)=>{
//                 dispatch(arrowClick(item))
//     }
     const handleArrowClick = (string) => {
        dispatch(arrowClick(item,string)); // Pass 'item' to arrowClick function
    }
  return (
    <div>
            <ul className={`${item.status==='done'?'completed menu':'menu'}`}>
                    <li>{item._id}</li>
                    <li>{item.task}</li>
                    <li>{item.status}</li>
                    <li>
                        <button disabled={item.status=='backlog'}   onClick={()=>handleArrowClick("left")}> 
                                <BiChevronLeft/>
                        </button>
                        <button disabled={item.status=='done'} onClick={()=>handleArrowClick("right")}>
                                <BiChevronRight/>
                        </button>
                    </li>


            </ul>


    </div>
  )
}

export default Listcard