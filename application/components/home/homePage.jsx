import React from 'react';
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <h1>Glowna Strona</h1>
                <p>strona w React Redux i innych</p>
                <Link to={about}> wiecej info </Link>
            </div>
        )
    }
}

export default HomePage;
