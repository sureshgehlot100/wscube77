import React, { useEffect, useState } from 'react'
import TitleSection from '../Common/TitleSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faArrowDown, faArrowsUpDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { tabsdata } from '../Common/AllData'
import SearchData from '../Common/SearchData'
import Header from '../Common/Header'
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";

function Courses() {

  let [catelog, setcatelog] = useState('')
  let [search, setsearch] = useState('')
  let [faq, setFaq] = useState(false);

  const [courseData, setcourseData] = useState([]);

  const getCourses = async (req, res) => {
    const response = await axios.get('http://localhost:5500/course/true_courses');
    setcourseData(response.data.data);
    console.log(courseData);
  };
  useEffect(() => {
    getCourses();
  }, []);

  const handleBuyCourse = async (e) => {

    const courseDetails = courseData.filter((item) => item._id === e.target.value);
    // console.log(courseDetails);
    try {
      const response = await axios.post('http://localhost:5500/payment/req-payment', {
        data: {
          items: JSON.stringify(courseDetails)
        },
        headers: {}
      });
      console.log(response);
    } catch (error) {
      console.log(error)

    }

  }



  useEffect(() => {

    setcatelog("All")

  }, [])



  return (
    <>
      <Header />
      <TitleSection title={"Courses"} />
      <div className='max-w-[1300px] m-auto   mt-4 py-5'>
        <div className='grid grid-cols-[73%_auto] gap-4'>
          <div className=' py-5 px-4'>
            <form action="" >
              <div className='flex gap-4'>
                <div className='w-[25%]'>
                  <select name="" id="" onChange={(e) => setcatelog(e.target.value)} className='w-full h-[45px]  rounded-[3px] px-3 border border-[gray] text-[gray]'>
                    <option value="All">Select...</option>
                    <option value="Desgin">Desgin</option>
                    <option value="3D + Animation">3D + Animation</option>
                  </select>
                    
                </div>
                <div className='w-[35%] flex items-center relative'>
                  <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} className='w-full h-[45px] rounded-[3px] px-3 border border-[gray] focus:outline-none ' placeholder='Search Our Course' />
                  <FontAwesomeIcon icon={faSearch} className='absolute text-[gray] text-[20px] top-[13px] right-[10px] z-[99]' />
                </div>
              </div>
            </form>

            <div className='grid grid-cols-2 gap-8 mt-[40px] d-flex'>
              {
                courseData.map((course, index) => (
                  (
                    <Card className="mt-6 w-96">
                      <CardHeader color="blue-gray" className="relative h-56">
                        <img
                          src={course.thumbnail}
                          alt="card-image"
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                          {course.status}
                        </Typography>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                          {course.coursename}
                        </Typography>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                          {course.courseprice}
                        </Typography>
                        <Typography>
                          {course.courseuration}
                        </Typography>
                        <Typography>
                          {course.coursedes}
                        </Typography>
                      </CardBody>
                      <CardFooter className="pt-0">
                        <Button onClick={handleBuyCourse} value={course._id} className='p-[10px_20px] bg-[blue] block'>Buy</Button>
                      </CardFooter>
                    </Card>

                  )
                ))
              }
              {
                //   catelog!=""  ?
                //  <SearchData category={catelog} searchcat={search}   />
                //   :
                ""
              }
            </div>
          </div>
          <div className=' py-5 px-3'>
            <div className='faq border-[2px] rounded-[10px] py-6 '>
              <div onClick={() => setFaq(!faq)} className={`flex  justify-between items-center px-6`}>
                <h4 className='text-[20px] font-bold'>Category Filter</h4>
                <FontAwesomeIcon icon={faq != true ? faAngleDown : faAngleUp} />
              </div>
              <ul className={`mx-[25px]   ${faq != true ? "duration-[1s] mt-4 visible opacity-[1] max-h-[500px]" : "mt-0 duration-[1s] invisible opacity-0 max-h-[0]"} `}>
                <li className='mb-2 text-[20px]'>Desgin</li>
                <li className='mb-2 text-[20px]'>Desgin</li>
                <li className='mb-2 text-[20px]'>Desgin</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Courses