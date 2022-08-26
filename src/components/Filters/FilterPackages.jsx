import React, {Fragment} from 'react';

export default function FilterPackages() {
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

                <select onChange={e => handleOrderByRating(e)}>
                    <option hidden>RATING</option>
                    <option value='asc'>ASC</option>
                    <option value='desc'>DESC</option>
                </select>
                
                <p> FILTER RESULTS </p>
                <p> CITIES </p>
                <select onChange={e => handleFilterCities(e)}>
                    <option value='all'>ALL</option>
                    {cities && cities.sort((a, b) => {
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