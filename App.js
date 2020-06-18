import React from 'react';
import CourseList from './CourseList';
import List, { list } from './list';
import SearchBox from './searchbox';


const App = () => {
    return (
        <div className='tc'>
            <h1>Courses</h1>
            <SearchBox />
            <CourseList list={list} />
        </div>
    )
}

                                                                          






export default App;