import React from 'react'
import "./listcard.scss"



import {BiChevronLeft,BiChevronRight} from "react-icons/bi"
const Listcard = (items) => {

    const {item}=items

    const leftArrowClick=(item)=>{

    }

    const rightArrowClick=(item)=>{

    }
    
  return (
    <div>
            <ul className="menu">
                    <li>{item._id}</li>
                    <li>{item.task}</li>
                    <li>{item.status}</li>
                    <li>
                        <button disabled={item.status==='backllog'}   onClick={()=>leftArrowClick(item)}> 
                                <BiChevronLeft/>
                        </button>
                        <button disabled={item.status==='done'} onClick={()=>rightArrowClick(item)}>
                                <BiChevronRight/>
                        </button>
                    </li>


            </ul>


    </div>
  )
}

export default Listcard