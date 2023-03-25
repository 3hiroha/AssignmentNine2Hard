
import { useState } from 'react'
import './App.css'
import List from "./components/List"
import TypeMe from "./components/TypeMe"
import MyForm from "./components/MyForm"
function App() {
    const cardArray = [
      {
        Name: "Name: John Doe",
        Job: "Job: Engineer",
        Hobby: "Hobby: Listening to music"
      },
      {
        Name: "Name: John Doe",
        Job: "Job: Engineer",
        Hobby: "Hobby: Listening to music"
      },
      {
        Name: "Name: John Smith",
        Job: "Job: Programmer",
        Hobby: "Hobby: Running"
      },
      {
        Name: "Name: John Roe",
        Job: "Job: Farmer",
        Hobby: "Hobby: Swimming"
      }];
  return (
    <div>
  <List users={cardArray}/>
    <TypeMe/>
    <MyForm/>
    </div>
  )
}

export default App

