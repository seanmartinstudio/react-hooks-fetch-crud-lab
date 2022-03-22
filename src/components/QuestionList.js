import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
const [questionData, setQuestionData] = useState([])

useEffect(() => {
  fetch("http://localhost:4000/questions")
  .then((response) => response.json())
  .then((data) => setQuestionData(data) )
},[])

function handleDeleteUI(id) {
  const newArrDelete = questionData.filter((q) => {
    if(q.id !== id) {
      return q.id
    }
  })
  setQuestionData(newArrDelete)
}

const newArr = questionData.map((q) => (
  <QuestionItem handleDeleteUI={handleDeleteUI} question = {q} key = {q.id} />
))



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {newArr}
      </ul>
    </section>
  );
}

export default QuestionList;
