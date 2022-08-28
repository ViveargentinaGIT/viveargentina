import React, {Fragment} from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllExperiences, getAllPackages, getAllCategories, filterExperiences, orderExperiences } from '../../redux/action';

export default function FilterExperiencies() {

    const allExperiences = useSelector(state => state.allExperiences);
    const allCategories = useSelector(state => state.allCategories);
    const allPackages = useSelector(state => state.allPackages);
    const [state, setState] = useState({
        selectedPackage: false,
        selectedCategory: false
    }) 
    const [Order, setOrder] = useState('');


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllExperiences())
        dispatch(getAllPackages())
        dispatch(getAllCategories())
    }, [dispatch]);

function handleOrder(e) {
    setOrder(e.target.value)
    dispatch(orderExperiences(e.target.value))
}



function handleFilterByCategory(e) {
    if(e.target.value === 'all') {
        setState({
            ...state,
            selectedCategory: false
        })
    } else {
        setState({
            ...state,
            selectedCategory: e.target.value
        })
    }
}

function handleFilterByPackage(e) {
    if(e.target.value === 'all') {
        setState({
            ...state,
            selectedPackage: false
        })
    } else {
        setState({
            ...state,
            selectedPackage: e.target.value
        })
    }
}

function handleChange(e) {
    e.preventDefault();
    dispatch(filterExperiences({categoryId: state.selectedCategory, packageId: state.selectedPackage}))
}

    return (
        <Fragment>
            <div> 
                <form id='formFilter'> 
                
                <p> ORDER BY </p>
                <p>ALFABETIC: 
                <select onChange={e => handleOrder(e)}>
                    <option value='sort'>Sort</option>
                    <option value='ascendant by name'>A - Z</option>
                    <option value='descendant by name'>Z - A</option>
                </select>
                </p> 

                <p>PRICE: 
                <select onChange={e => handleOrder(e)}>
                    <option value='sort'>Sort</option>
                    <option value='ascendant by price'>ASC</option>
                    <option value='descendant by price'>DESC</option>
                </select>
                </p> 

                <p>SCORE: 
                <select onChange={e => handleOrder(e)}>
                    <option value='sort'>Sort</option>
                    <option value='ascendant by score'>ASC</option>
                    <option value='descendant by score'>DESC</option>
                </select>
                </p> 
                
                <p> FILTER RESULTS </p>
                <p> CATEGORIES </p>
                <select onChange={e => handleFilterByCategory(e)}>
                    <option value='all'>ALL</option>
                    {allCategories && allCategories.sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    })
                    .map((cat) => {
                        return (
                            <option value={cat.id} key={cat.id}>
                            {cat.name}
                            </option>
                        );
                    })};
                </select>

                <p> PACKAGES </p>
                <select onChange={e => handleFilterByPackage(e)}>
                    <option value='all'>ALL</option>
                    {allPackages && allPackages.sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    })
                    .map((p) => {
                        return (
                            <option value={p.id} key={p.id}>
                            {p.name}
                            </option>
                        );
                    })};
                </select> 

                <button onClick={e =>handleChange(e)}>FILTER</button>

                {allExperiences?.map(exp => {
                        return (
                            <div>
                                <p>{exp.name}</p>
                                <p>{exp.description}</p>
                                <p>{exp.price}</p>
                                <p>{exp.score}</p>
                            </div>
                        )
                    })}

                </form>
                </div>
        </Fragment>
    )
}