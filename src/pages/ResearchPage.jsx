import { useEffect, useState } from "react";
import axios from "axios";

const research = ({ research }) => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/restaurants/country`
        );

        setData(response.data);
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
