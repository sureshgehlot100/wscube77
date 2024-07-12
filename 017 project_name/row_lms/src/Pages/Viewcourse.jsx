import React, { useContext, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


function Viewcourse() {
  const nav = useNavigate();

  let { changemenu } = useContext(mainContext);
  const [courseData, setcourseData] = useState([]);
  const [filePath, setfilePath] = useState('');
  const [checked, SetChecked] = useState([]);

  const handlefetchCourse = async () => {
    try {
      const response = await axios.get('http://localhost:5500/course/read_courses');
      if (response.status !== 200) return alert('something went wrong');

      setfilePath(response.data.filePath);

      setcourseData(response.data.data);


    } catch (error) {
      console.log(error);
      alert('something went wrong');

    }
  };
  useEffect(() => {
    handlefetchCourse()

  }, []);

  const handleStatus = async (e) => {
    const statusData = {
      id: e.target.value,
      Status: (e.target.textContent === 'Active') ? false : true
    }
    const response = await axios.put('http://localhost:5500/course/change_course_status', statusData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    handlefetchCourse();

  };
  const handleUpdate = async (e) => {
    nav(`/addcourse/${e.target.value}`);

  };
  const handleDelete = async (e) => {

    if (!window.confirm('Are you sure to delete')) return;

    try {
      const response = await axios.delete(`http://localhost:5500/course/delete_single_course/${e.target.value}`);
      console.log(response);
      if (response.status !== 200) return alert('Something went wrong');

      alert('Course deleted successfully');
      handlefetchCourse();
    }
    catch (err) {
      console.log(err);
      alert('Something Went wrong');
    }

  };
  const handleCheckInput = async (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
    if (e.target.checked) {
      const newArr = [...checked, e.target.value];
      SetChecked(newArr);

    }
    else {
      const newArr = [...checked];
      const currentIndex = newArr.findIndex((item) => item === e.target.value);
      newArr.splice(currentIndex, 1);
      console.log(currentIndex);
      SetChecked(newArr);
    }
  };
  const handleMultiDelete = async () => {
    if (!window.confirm('Are you sure to delete')) return;
    try {
      const response = axios.delete('http://localhost:5500/course/multi_delete', { data: checked });

      if (response.status !== 200) return alert('Something went Wrong');
      handlefetchCourse();
    } catch (error) {
      console.log(error);
      alert('Something went Wrong');

    }

  }
  return (
    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={` ${changemenu == true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Course Table
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <table >
                <tr>
                  <th>S.no</th>
                  <th>
                    <input type="checkbox"></input>
                    <button className='bg-[red] p-[6px_10px] rounded text-[white]' onClick={handleMultiDelete}>Delete</button>
                  </th>
                  <th>Course Name</th>
                  <th>Fees</th>
                  <th>Duration</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  courseData.map((course, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <input type="checkbox" value={course._id} onClick={handleCheckInput} ></input>
                        </td>
                        <td>{course.coursename}</td>
                        <td>{course.courseprice
                        }</td>
                        <td>{course.courseduration}</td>
                        <td>{course.coursedes
                        }</td>
                        <td>
                          <img src={filePath + course.thumbnail} alt="" className='w-[100px]' />
                        </td>
                        <td>
                          <button value={course._id} onClick={handleStatus} className={`p-[4px_8px] ${((course.status) ? 'bg-[green]' : 'bg-[red]')} rounded text-[white]`}>{(course.status) ? 'Active' : 'Inactive'}</button>
                        </td>
                        <td className='text-center'>

                          <button value={course._id} className='bg-green-500 text-white px-5 mr-5 py-1' onClick={handleUpdate}>Edit</button>
                          <button value={course._id} className='bg-red-400 text-white px-5 py-1' onClick={handleDelete}>Delete</button>

                        </td>
                      </tr>
                    )
                  })
                }
              </table>
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Viewcourse