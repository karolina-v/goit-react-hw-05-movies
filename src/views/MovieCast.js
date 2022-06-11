import Cast from '../components/Cast';

function MovieCast() {

  const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId)
            .then(response => setCast(response.cast));
    }, [movieId]);
  
    return (
      <Cast cast={cast}/>
  )  
}

export default MovieCast;