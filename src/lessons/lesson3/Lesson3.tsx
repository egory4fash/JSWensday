import React, {useState} from 'react';
import API from './API';
import './lesson_3';
import {jsonAPI} from "./lesson_3";


const Lesson3 = () => {





    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<any>();
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState<any>();

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName).then(res => setSearchResult(res.data))
        console.log(searchResult)
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type).then(res => setSearchResultByType(res.data))
    }

    jsonAPI.getInfo('2')
    jsonAPI.postInfo({"userId": 200, "id": 2,title: 'Hey', body: 'TestPost'})
    jsonAPI.putInfo('3',{"userId": 1, "id": 2,title: 'HeyNew', body: 'TestPostNew'})
    jsonAPI.deleteInfo('5')

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>

                    <div>Title: {searchResult?.Title + '   '}</div>
                    <div>Year: {searchResult?.Year + '   '}</div>
                    <div>Genre:{searchResult?.Genre + '   '}</div>
                    <img src={searchResult?.Poster} alt = 'no poster available'/>

                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>

                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>

                    <div>Title: {searchResultByType?.Title + '   '}</div>
                    <div>Year: {searchResultByType?.Year + '   '}</div>
                    <div>Genre:{searchResultByType?.Genre + '   '}</div>
                    <img src={searchResultByType?.Poster} alt = 'no poster available'/>
                </div>
            </div>
        </div>
    );
}
export default Lesson3;