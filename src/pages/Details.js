import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


const Details = ()=>{
    const [content, setContent] = useState();
    const[movie, setMovie] = useState("");
    const params = useParams();

    
    console.log('params', params);
    const id = params.movieid || '';

    const fetchData = async () =>{
        try{
          const {data} = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=6c93b9ba`);
          setContent(data);
          setMovie(data)
          console.log('fetchData details',  data);
        }catch(error){
          console.error(error)
        }
    }

    useEffect(()=>{
        fetchData();
        //eslint-disable-next-line
    }, [])
    return (
        <Container className='ditailes_ctn py-5 d-flex g-2 flex-wrap'>
            <Col className='col-12 col-md-4 col-xl-4'>
                <div className='card__cover'>
                    <img className='' src={movie.Poster} alt="myimage" />
                </div>
            </Col>
            <Col className='col-12 col-md-4 col-xl-4'>
                <div>
                    <h3 className='mb-5'>{movie.Title}</h3>
                </div>
                <div>
                <h6>Year: {movie.Year}</h6>
                <h6>Released: {movie.Released}</h6>
                <h6>Runtime: {movie.Runtime}</h6>
                <h6>Genre: {movie.Genre}</h6>
                <h6>Director: {movie.Director}</h6>
                <h6>Writer: {movie.Writer}</h6>
                <h6>Actors: {movie.Actors}</h6>
                <h6>Language: {movie.Language}</h6>
                </div>
            </Col>
        </Container>
    )
}

export default Details;
