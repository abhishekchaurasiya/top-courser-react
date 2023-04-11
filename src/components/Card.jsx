import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';


const Card = ({ course, likedCourses, setLikedCourses }) => {

    const clickHandler = () => {
        // logic
        if (likedCourses.includes(course.id)) {
            console.log(course.id)
            // pahle se liye hua pada hai 
            setLikedCourses((prevData) => prevData.filter((currid) => currid != course.id))
            toast.warning("like removed")
        } else {
            // pahle se jo like nahi hua hai 
            // insert karna hai jo pahle se course liked courses me 
            if (likedCourses.length === 0) {
                setLikedCourses([course.id])
                console.log(course.id)
            } else {
                setLikedCourses((prevData) => [...prevData, course.id])
            }
            toast.success("Liked successfully")
        }
    };

    return (
        <div className='card w-[400px] bg-[#13193f] bg-opacity-90 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt={course.image.alt} />
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 
                bottom-5 grid place-items-center'>
                    <button className=''
                        onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                (<FcLike fontSize="1.6rem" />) :
                                (<FcLikePlaceholder fontSize="1.6rem" />)
                        }

                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6 mb-2'>{course.title}</p>
                <p className='text-white font-light'>
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100)) + "..." :
                            (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card
