import React, { useState, useEffect } from 'react'
import './home.scss'
import axios from 'axios'
import { BsPlayFill } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'


const apiKey = '8a7fe88916c8a7678229a14ffc534372';
const url = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/original/';
const popular = 'popular';
const upcoming = 'upcoming';
const top_rated = 'top_rated';
const nowPlaying = 'now_playing';


const Card = ({ img }) => (
    <img className='card' src={img} alt="cover" />
)

const Row = ({ title, arr = [], }) => (
    <div className='row'>
        <h2>{title}</h2>

        <div>
            {arr.map((item, index) => (
                <Card key={index} img={`${imgUrl + item.poster_path}`} />
            ))}

        </div>
    </div>
)

const Home = () => {

    const [index, setIndex] = useState(0);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setupcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    const getApiData = async () => {
        const ind = Math.floor(Math.random() * 10);
        setIndex(ind);

        const popularData = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&language=en-US&page=1`)
        setPopularMovies(popularData.data.results);

        const topRatedData = await axios.get(`${url}/movie/${top_rated}?api_key=${apiKey}&language=en-US&page=1`)
        setTopRatedMovies(topRatedData.data.results);

        const upcomingData = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&language=en-US&page=1`)
        setupcomingMovies(upcomingData.data.results);

        const nowPlayingData = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}&language=en-US&page=1`)
        setNowPlayingMovies(nowPlayingData.data.results);
    }

    useEffect(() => {
        getApiData();
    }, [])

    return (
        <section className="home">
            <div
                className="banner" style={{
                    backgroundImage: popularMovies[index] ? `url(${`${imgUrl + popularMovies[index].backdrop_path}`})` : "rgb(16, 16, 16)"
                    
                }}
            >
                <div className='content'>
                    <div className="heading">
                        {popularMovies[index] && <h1>{popularMovies[index].original_title}</h1>}
                    </div>

                    <div className="brief">
                        <div className="buttons">
                            <div className="btn"><BsPlayFill /> <h2>Play</h2> </div>
                            <div className="btn"><IoMdAdd /> <h2>My List</h2> </div>
                        </div>
                        {popularMovies[index] && <p>{popularMovies[index].overview}</p>}
                    </div>
                    
                </div>
            </div>

            <Row title={"Popular on Netflix"} arr={popularMovies} />
            <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Top Rated"} arr={topRatedMovies} />
            <Row title={"Now Playing"} arr={nowPlayingMovies} />

        </section>
    )
}

export default Home