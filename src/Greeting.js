

const Greeting = ( )=> {
    const dispatch = useDispatch();
    const randomGreeting = useSelector(state => state.greeting);

    useEffect(() => {
        dispatch(fetchRandomGreeting());
    }, [dispatch]);

    return (
        <div>
            <h1>Random Greeting:</h1>
            <p>{randomGreeting}</p>
        </div>
    );
};

export default Greeting;