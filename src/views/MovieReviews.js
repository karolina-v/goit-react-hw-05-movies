import Reviews from '../components/Reviews';

function ReviewsCast() {
  
  const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then(response => setReviews(response.reviews));
    }, [movieId]);

    return (
      <Reviews reviews={reviews} />
  )  
}

export default ReviewsCast;