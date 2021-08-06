import React, { useState, useEffect }from 'react'
import '../css/SearchBox.css'
import axios from 'axios';

const SearchBox = () => {
  const [text,setText] = useState('');
  const URL = 'http://132.226.224.62:3000/api';
  const [data,setData] = useState('');
  const [result,setResult] = useState('');
  
  useEffect(() =>{
    axios.get(URL)
    .then((res) =>{
      const { data } = res
      setData(data);
    })
  },[])

  const handleonKeyPress = (e) => {
    if(e.key === 'Enter'){
      setResult(data.filter(a => String(a.id) === text))
      console.log(typeof(text));
    }   
  };
  
  const handleonChange = (e) => {
    const { value } = e.target
    setText(value);
  }
  console.log('data',data);
  console.log('text',text);
  console.log('result',result);
  
  return (
    <section className="Search Box">
      <input onKeyPress={handleonKeyPress} onChange={handleonChange} value={text} placeholder='INPUT ID'/>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>SALARY</th>
              <th>AGE</th>
            </tr>
          </thead>
          {result && result.map((item, i)=> (
            <tbody>  
              <tr key = {i}>
                <td>{item.id}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
              </tr>
            </tbody>
          ))}  
        </table>
      </div>
    </section>
  );
}

export default SearchBox;