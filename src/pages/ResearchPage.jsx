import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const research = () => {
  const location = useLocation();
  const research = location.state.research;
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/restaurants?country=${research}`
        );

        setData(response.data);
        console.log(research);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [research]);

  return <p>page recherche </p>;
};
export default research;
