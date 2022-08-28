import React, {Fragment} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCities, getCityById } from '../../redux/action';


export default function FilterPackages() {

const allCities = useSelector(state => state.allCities);
const cityById = useSelector(state => state.cityById);
console.log('cities by name en el componente:', cityById)
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getAllCities())
}, [dispatch]);


    function handleOrderByName(e) {

    }
    
    function handleOrderByPrice() {
    
    } 
    
    function handleOrderByScore() {
    
    }
    
    function handleFilterByCity(e) {
        console.log(e.target.value)
        dispatch(getCityById(e.target.value))
    }

    return (
        <Fragment>
            <div> 
                <form id='formFilter'> 
                
                <p> ORDER BY </p>
                <select onChange={e => handleOrderByName(e)}>
                    <option hidden>ALFABETIC</option>
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>

                <select onChange={e => handleOrderByPrice(e)}>
                    <option hidden>PRICE</option>
                    <option value='asc'>ASC</option>
                    <option value='desc'>DESC</option>
                </select>

                <select onChange={e => handleOrderByScore(e)}>
                    <option hidden>SCORE</option>
                    <option value='asc'>ASC</option>
                    <option value='desc'>DESC</option>
                </select>
                
                <p> FILTER RESULTS </p>
                <p> CITIES </p>
                <select onChange={e => handleFilterByCity(e)}>
                    <option value='all'>All</option>
                    {allCities && allCities.sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    })
                    .map((c) => {
                        return (
                            <option value={c.id} key={c.id}>
                            {c.name}
                            </option>
                        );
                    })};
                </select>
                    <p>{cityById?.name}</p>
                    <p>{cityById?.subTitle}</p>
                    <p>{cityById?.description}</p>
                    {cityById.packages?.map(p => {
                        return (
                            <div>
                                <p>{p.name}</p>
                                <p>{p.description}</p>
                            </div>
                        )
                    })}

                </form>

                </div>
        </Fragment>
    )
}