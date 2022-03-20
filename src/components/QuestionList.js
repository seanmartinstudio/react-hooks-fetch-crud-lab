import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
const [questionData, setQuestionData] = useState([])

useEffect(() => {
  fetch("http://localhost:4000/questions")
  .then((response) => response.json())
  .then((data) => setQuestionData(data) )
},[])


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        <QuestionItem question={questionData}/>
      </ul>
    </section>
  );
}

export default QuestionList;
