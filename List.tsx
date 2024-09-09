/*
interface PropV{
    data: string[]
}
function User({data}: PropV){
    const handleClick=(e: string)=>{
        console.log(e)
    }
     return(<ul>
        {data.map((elem)=>(<li key={elem} onClick={()=>handleClick(elem)}>{elem}</li>))}
        </ul>);
}
export default User*/






















import {useState} from "react"
interface Prop{
    data: string[]
}
function List({data}: Prop){
    const [index,setIndex]=useState(-1);/*index=i(valor que recibe setIndex) y useState provoca una renderizacion*/
    const printE=(i: number)=>{
        setIndex(i);
    }
    return(<ul 
                className="list-group"
           >{data.map((elemento, i)=>(
                <li 
                    onClick={()=>printE(i)} 
                    key={elemento}
                    className={`list-group-item ${index === i ? "active" : ""}`}
                    /*-el uso de {} evalua codigo de js
                    -el uso`` me permite interpolar variables y expresiones*/
                >
                {elemento}
                </li>))}
            </ul>);
}
export default List