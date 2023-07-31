// import React from 'react'
// import {useState} from 'react'
// import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';

// export default function Crud(props) {
//     const [email,setEmail]=useState()
//     const [password,setPassword]=useState()
//     const [data,setData]=useState([])
//     const [show,setShow]=useState(true)
//     const [id,setId]=useState()
//     const submitForm=(e)=>{
//         if(!email){
//           alert("plz write email")
//         }else if(!password){
//           alert("plz enter password")
//         }else {

        
//         e.preventDefault()
//         if(show === false){
//           let editedData = data?.map((item)=>{
//              if(id == item.id){
//                 return {...item,email:email,password:password}
//              }
//              return item;
//           })
//           setData(editedData)
//           setEmail("")
//           setPassword("") 
//           setShow(!false)
//         }
//         else{
//             let obj ={
//                 email:email,
//                 password:password,
//                 id: new Date().getTime()
//             }
//             setData([...data,obj])
//             setEmail("")
//             setPassword("")
//         }
//     }
//   }
//     const onDel=(elem)=>{
//         let deletedData = data.filter((items)=>{
//            return elem.id !== items.id;
//         })
//         setData(deletedData)
//     }
//     const onEdit=(elem)=>{
//       setEmail(elem.email)
//       setPassword(elem.password)
//       setId(elem.id)
//       setShow(false)
//     }
//   return (
//  <>
//  <h2>{props.title}</h2>
//     <form onSubmit={submitForm} style={{backgroundColor:email}}>
//     <input type="color" value={email} onChange={(e)=>setEmail(e.target.value)} />
//     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//     {show ? <button>Submit</button> : <button>Edit</button>}
//     </form>
//   {
//     data?.map((elem)=>{
//         return(
//             <>
//             <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td> {elem.email} </td>
//              <td>{elem.password}</td>
//              <td><Button variant='danger' onClick={()=>onDel(elem)}>Delete</Button></td>
//              <td><Button onClick={()=>onEdit(elem)}>Edit</Button></td>
//         </tr>
        
//       </tbody>
//     </Table>
//             </>
//         )
//     })
//   }
//  </>
//   )
// }
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Crud() {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [data,setData]=useState([])
  const [id,setId]=useState()
  const [show,setShow]=useState(true)
  const useEffect=(()=>{
    let storageData= localStorage.getItem("key")
    console.log("storageData",storageData)
  })
  const submitForm=(e)=>{
    e.preventDefault()
    if(show === false){
      let Editeddata= data?.map((elem)=>{
        if(elem.id == id){
          return{...elem,email:email,password:password}
        }
                          return elem ;
      })
        setData(Editeddata)
        setEmail("")
        setPassword("")
        setShow(true)
    }
    else{
      let obj = {
      email:email,
      password:password,
      id: new Date() . getTime()
    }
    localStorage.setItem("key",JSON.stringify(obj))
    setData([...data,obj])
    setEmail("")
    setPassword("")
    }
    
  }
  const delData=(item)=>{
    let deletedData= data.filter((elem)=>{
      return(elem.id !== item.id)
    })
    setData(deletedData)
  }
  const onEdit=(item)=>{
      setEmail(item.email)
      setPassword(item.password)
      setId(item.id)
      setShow(false)
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {show ? <button>Submit</button> : <button>Edit</button>}
      </form>
      {
        data?.map((item)=>{
          return(
            <>
            <div>{item.email}</div>
            <div>{item.password}</div>
            <button onClick={()=>delData(item)}>Delete</button>
            <button onClick={()=>onEdit(item)}>Edit</button>
            </>
          )
        })
      }
    </>
  )
}

