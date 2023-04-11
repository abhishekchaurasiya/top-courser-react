import { useState } from "react";
import Card from "./Card"

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    // Agar category all hai to all cards show karo 
    if (category === "All") {
      const allCourses = [];
      Object.values(courses).forEach((coursesCategory) => {
        coursesCategory.forEach((courseData) => {
          allCourses.push(courseData)
        })
      })
      return allCourses;
    } else {
      // esme only specific category ka array pass karna padega
      return courses[category]
    }
  }


  return (
    <div className="flex flex-wrap justify-center gap-5 mb-4">
      {
        getCourses().map((course, id) => {
          return <Card
            course={course} key={id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        })
      }
    </div>
  )
}

export default Cards
