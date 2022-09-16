import axios from "axios";
import { useEffect, useState } from "react";

export const useQuestionsData = () => {

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const baseURL =
    "https://opentdb.com/api.php?amount=10&category=32&type=multiple";

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        const response = await axios.get(baseURL);
        const data = await response.data;
        setQuestions(data);
        setIsLoading(false)


      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return {
    questions,
    setIsLoading,
    isLoading
  }
}


