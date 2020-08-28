import React, { useState,useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = 'a088142d261831a58a93c5269bf4bdad2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey, 
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])
    
    return (
        <div>
            <h1>World Wide News</h1>
            <h3>With AI Alan</h3>
            <NewsCards articles={newsArticles}/>
        </div>
    );
}

export default App;