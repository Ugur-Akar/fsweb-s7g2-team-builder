import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Form';
import MemberList from './Components/MemberList'

function App() {

  const initList = [
    {
      "name": "A",
      "email": "A@email.com",
      "role": "A",
      "age": 20
    },
    {
      "name": "B",
      "email": "B@email.com",
      "role": "B",
      "age": 30
    },
    {
      "name": "C",
      "email": "C@email.com",
      "role": "C",
      "age": 40
    }
];

  const [memberList, setMemberList] = useState(initList);

  const addNewMember = (newMember => {
    let tmpArr = [...memberList];
    tmpArr.push(newMember);
    setMemberList(tmpArr);
  })

  return (
    <div className="App">
      <header>
        <h3>TITLE</h3>
      </header>

      <MemberList memberList = {memberList} />

      <Form func = {addNewMember}/>     
      
    </div>
  );
}

export default App;
