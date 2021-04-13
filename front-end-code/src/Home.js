import React from 'react';

const Home = ({handleLogOut}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Welcome to the Document Analyzer Web Page</h2>
                <button onClick = {handleLogOut}>Logout</button>
            </nav>
        </section>
    )
};

export default Home;