import React, {Fragment} from 'react';

export default function FilterCities() {
    return (
        <Fragment>
            <div> 
                <form id='formFilter'> 

                <p> ORDER BY </p>
                <select onChange={e => handleOrderByName(e)}>
                    <option hidden>ALFABETIC</option>
                    <option value='asc'>A - Z  ASC</option>
                    <option value='desc'>Z - A  DESC</option>
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