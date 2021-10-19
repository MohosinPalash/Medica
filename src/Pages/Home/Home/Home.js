import React, { useState, useEffect } from 'react';
import services from '../../../AllData/services.json'
import doctors from '../../../AllData/doctors.json'
import blogs from '../../../AllData/blogs.json'
import Banner from '../Banner/Banner';
import SingleService from '../SingleService/SingleService';
import './Home.css'
import SingleDoctor from '../../Shared/SingleDoctor/SingleDoctor';
import SingleBlog from '../../Shared/SingleBlog/SingleBlog';
import { Link } from 'react-router-dom';

const Home = () => {

    const [service, setSevice] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        setSevice(services);
        console.log(services);
    }, [service]);

    useEffect(() => {
        setDoctor(doctors);
        console.log(doctors);
    }, [doctor]);

    useEffect(() => {
        setBlog(blogs);
        console.log(blogs);
    }, [blog]);


    const someDoctors = doctor.filter(dt => dt.d_id < 5)
    const someBlogs = blog.filter(bl => bl.b_id < 3)
    console.log(someBlogs)
    return (
        <div>
            <Banner></Banner>
            <h1 className="heading">OUR SERVICES</h1>
            <div className="service-container">

                {
                    service.map(service => <SingleService service={service}></SingleService>)
                }
            </div>
            <h1 className="heading">OUR DOCTORS</h1>
            <div className="doctor-container">

                {
                    someDoctors.map(doctor => <SingleDoctor doctor={doctor}></SingleDoctor>)
                }
            </div>
            <Link to="/doctor"><button className="button">See All Doctors</button></Link>
            <h1 className="heading">NEWS & EVENTS</h1>
            <div className="blog-container">
                {
                    someBlogs.map(blog => <SingleBlog blog={blog}></SingleBlog>)
                }
            </div>
            <Link to="/blog"><button className="button">See More News</button></Link>
        </div>
    );
};

export default Home;