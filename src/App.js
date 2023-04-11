import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import Spinner from "./components/Spinner";

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(apiUrl);
      const resData = await res.json();
      setCourses(resData.data)
    } catch (error) {
      toast.error("Something went wrong!")
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="flex flex-col min-h-screen bg-[#0C102A] bg-opacity-70">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          category={category}
          setCategory={setCategory}
          filterData={filterData}
        />
      </div>
      <div className="w-11/12 flex flex-wrap justify-center mx-auto items-center mx-w-[1200px] min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  );
}

export default App;
