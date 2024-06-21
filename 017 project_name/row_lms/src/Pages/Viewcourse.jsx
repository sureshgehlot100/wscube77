import React, { useContext } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';

function Viewcourse() {
  let {changemenu} = useContext(mainContext);
  return (
    <div>

<Header/>
    
    <div className='flex  bg-[#F5F7FF]'>
      <Sidebar/>
      
      <div className={` ${changemenu==true ? 'w-[95%]':'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

        <h1 className='text-[25px] font-[500] mb-[10px]'>
        Course Table
        </h1>
        <div className=''>
        <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
          <table >
            <tr>
              <th>S.no</th>
              <th>Course Name</th>
              <th>Fees</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>React</td>
              <td>20000</td>
              <td>1 month</td>
              <td>This is new React Course</td>
              <td>React.png</td>
              <td>1</td>
              <td className='text-center'>

              <button className='bg-green-500 text-white px-5 mr-5 py-1'>Edit</button>
              <button className='bg-red-400 text-white px-5 py-1'>Delete</button>


              </td>
            </tr>
          </table>
        </div>
        </div>
      <Footer/>
      </div>
    </div>

    </div>
  )
}

export default Viewcourse