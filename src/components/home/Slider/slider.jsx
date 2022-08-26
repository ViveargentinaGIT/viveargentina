
import React, { Fragment } from 'react'

import './Slider.css'


function Slider() {
    return (
        <Fragment>
            <form>
			<input type="radio" name="fancy" autofocus value="mendoza" id="mendoza" />
			<input type="radio" name="fancy" value="salta" id="salta" />
			<input type="radio" name="fancy" value="cordoba" id="cordoba" />
			<input type="radio" name="fancy" value="buenosaires" id="buenosaires" />		    			
			<input type="radio" name="fancy" value="bariloche" id="bariloche" />		
			<label for="mendoza">MENDOZA</label><label for="salta">SALTA</label><label for="cordoba">CÓRDOBA</label><label for="buenosaires"> BUENOS AIRES </label><label for="bariloche"> BARILOCHE </label>
	        </form>
        </Fragment>
    )
	}
    export default Slider