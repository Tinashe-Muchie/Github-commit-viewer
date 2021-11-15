import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Context = createContext();

const GlobalContext = ({ children }) => {

    const [ data, setData ] = useState([]);
    const [ repo, setRepo] = useState('');
    const [ searchRepo, setSearchRepo ] = useState('');
    const [ commits, setCommits ] = useState([]);
    let [ loading, setLoading ] = useState(false);

    async function getRepos() {
        try {
          const response = await axios({
            'method':'GET',
            'url': `https://api.github.com/search/repositories`,
            'headers': {
              'Accept': 'application/vnd.github.v3+json'
            },
            'params': {
              'q': 'hooks',
              'sort':'stars',
              'order':'desc',
            }
          });
          const {data:{items}} = response;
          const trendingRepos = items.slice(0, 5)
          setData(trendingRepos);
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(()=> {
          getRepos();
    }, []);

    useEffect(() => {
        async function getCommits() {
          setLoading(true);
            try {
              const response = await axios({
                'method':'GET',
                'url': `https://api.github.com/repos/${searchRepo}/commits`,
                'headers': {
                  'Accept': 'application/vnd.github.v3+json'
                },
              });
              setLoading(false);
              const { data } = response;
              const DATA = data.slice(0,10);
              setCommits(DATA);
            } catch (error) {
              console.error(error);
              setLoading(false);
            }
          }
          getCommits();
    }, [searchRepo])


    const value = { 
        repo,
        setRepo,
        searchRepo,
        setSearchRepo,
        commits,
        data,
        loading,
    }

    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider>
    );
}

export default GlobalContext;