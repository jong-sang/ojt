import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import '../css/fetchApi.css'

const FetchApi = () => {
  const URL = 'http://132.226.224.62:3000/api';
  const [data,setData] = useState();

  useEffect(() =>{
    
    axios.get(URL)
    .then((res) =>{
      const { data } = res
      setData(data)
    })
  
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>SALARY</th>
          <th>AGE</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, i)=> (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.employee_name}</td>
            <td>{item.employee_salary}</td>
            <td>{item.employee_age}</td>
          </tr>
        ))}   
      </tbody>
    </table>
   
  )
}
// {data && data.map((item, i)=> (
//   <li className='qwer' key={i}>
//     <span className="zxczxcz">{item.id}</span>
//     <span className="zxczxc">{item.employee_name}</span>
//   </li>
// ))}

export default FetchApi;



// const fetchData = async () => {
    //   try {
    //     setError(null);
    //     sethata(null);
    //     setLoading(true);

    //     const response = await axios.get(target);
    //     TouchEvent.
    //     sethata(response.data);
    //   } catch (e) {
    //     setError(e)
    //   }
    //   setLoading(false);
    // };

    // fetchData();

    // for(let i=0; i<data.length; i++)
    //       {
            // <tr key={data[i].id}>
            //   <td>{data[i].id}</td>
            //   <td>{data[i].employee_age}</td>
            //   <td>{data[i].employee_name}</td>
            //   <td>{data[i].employee_salary}</td>
            // </tr> 
    //       }
    //     }

// {data && data.map((item, i)=> (
//   <li className='qwer' key={i}>
//     <span className="zxczxcz">{item.id}</span>
//     <span className="zxczxc">{item.employee_name}</span>
//   </li>
// ))}