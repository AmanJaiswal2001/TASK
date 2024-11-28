import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import geek from './Academics/img/GeeksforGeeks.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Home() {
    const [academics, setAcademics] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/academics")
            .then((response) => {
                setAcademics(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the academic data:", error);
            });
    }, []);

    const displayedAcademics = academics.slice(0, 6);

    return (
        <>
            <div
            className="relative">

            <img src="https://img.freepik.com/premium-photo/back-school-school-supplies-apple-yellow-background-layout-school-accessories-distance-learning_215990-1234.jpg?w=826" alt="Background"
                className="w-full h-[450px] object-cover mb-10 md:mb-10"
            />

            <div 
            id="text"
            className="absolute top-1/3 left-5 pt-11 sm:left-10 sm:pt-0 flex justify-center items-center text-black font-sans font-bold text-xl sm:text-5xl">
                <p>Welcome To
                <br /><span className="font-mono text-white">StudyPathFinder
                <span className="animate-ping">_</span></span>
                <br />
               One Stop Destination for Personalized <br />Course Recommendations!</p>
            </div>

            </div>

            <p className="text-center underline text-3xl font-bold">Explore our top resources to enhance your skills and achieve your goals!</p>
            <div className="flex flex-wrap md:gap-14 py-4 md:py-8 lg:py-10 justify-center">
                {displayedAcademics.map((academic, index) => (
                    <div key={index} className="w-full sm:w-[300px] md:w-[350px] lg:w-[300px] m-5 md:m-0 bg-slate-500 rounded-3xl shadow-2xl overflow-hidden">
                        <a href={academic.website || "#"} className="group block relative">
                            <img
                                src={academic.image?.url || geek}
                                alt={academic.academicname}
                                className="w-[100%] md:w-[100%] h-[200px] md:h-[250px] rounded-t-3xl transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <p className="text-center mt-2 text-black group-hover:text-yellow-600 group-hover:font-bold transition-colors duration-300">
                                For More Details Click Here
                            </p>
                        </a>

                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center bg-gray-100">
                <Link to="/Academics" className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out" >
                    Click For More
                </Link>
            </div>
        </>
    );
}

export default Home;
