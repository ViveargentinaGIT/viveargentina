import React, {Fragment} from 'react';
import { getAllPackages } from '../../redux/action';

export default function FilterExperiencies() {

function handleOrderByName() {

}

function handleOrderByPrice() {

} 

function handleOrderByScore() {

}

function handleFilterByCategory() {

}

function handleFilterByPackage() {

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
                <p> CATEGORIES </p>
                <select onChange={e => handleFilterByCategory(e)}>
                    <option value='all'>ALL</option>
                    {categories && categories.sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    })
                    .map((cat) => {
                        return (
                            <option value={cat.name} key={cat.id}>
                            {cat.name}
                            </option>
                        );
                    })};
                </select>

                <p> PACKAGES </p>
                <select onChange={e => handleFilterByPackage(e)}>
                    <option value='all'>ALL</option>
                    {packages && packages.sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    })
                    .map((c) => {
                        return (
                            <option value={c.name} key={c.id}>
                            {c.name}
                            </option>
                        );
                    })};
                </select> 

                </form>
                </div>
        </Fragment>
    )
}