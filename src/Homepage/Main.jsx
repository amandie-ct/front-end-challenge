import { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Movielist from './Movielist';

const Main = () => {

    const [ genres, setGenres ] = useState('');
    const [ popularMoviesList, setPopularMoviesList ] = useState('');

    const genreQuery = () => {
        const baseURL = 'https://api.themoviedb.org/3/genre/movie/list';
        const apiKey = '27356b4d294f73dd67d7feb0d32d50e9';
        const language = 'pt-BR';

        const queryParams = new URLSearchParams({
            api_key: apiKey,
            language: language
        });

        const genreQueryString = baseURL.concat('?', queryParams.toString());

        return genreQueryString;
    }
    // genre (para botões de filtro)
    const getGenres = () => {
        fetch(genreQuery())
        .then(res => {
            if (!res.ok){
                throw Error('Não foi possível encontrar o conteúdo')
            }
            return res.json()
        })
        .then(data => {
            setGenres(data.genres)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getGenres()
    }, []);

    const popularQuery = () => {
        const baseURL = 'https://api.themoviedb.org/3/movie/popular';
        const apiKey = '27356b4d294f73dd67d7feb0d32d50e9';
        const language = 'pt-BR';
        const page = 1;

        const queryParams = new URLSearchParams({
            api_key: apiKey,
            language: language,
            page: page
        });

        const popularQueryString = baseURL.concat('?', queryParams.toString());

        return popularQueryString;
    }

    const getPopular = () => {
        fetch(popularQuery())
        .then(res => {
            if (!res.ok){
                throw Error('Não foi possível encontrar o conteúdo')
            }
            return res.json()
        })
        .then(data => {
            setPopularMoviesList(data.results)
        })
    }

    useEffect(() => {
        getPopular();
    }, [])

    return (
        <main className="main responsive">
                <Header/>
                <Navigation genres={genres}/>
                <Movielist popularMoviesList={popularMoviesList}/>
        </main>
    );
}
 
export default Main;