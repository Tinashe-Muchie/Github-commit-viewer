import React, { useContext } from 'react';
import { Context } from '../../context/GlobalContext';
import { Input, Button, H2 } from '../Styling/Styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function Search() {

    const { commits, repo, setRepo, setSearchRepo, searchRepo, loading } = useContext(Context);

    const handleClick = ()=> {
      setSearchRepo(repo);
      setRepo('');
    };

    return (
      <>
      <div className="headerWrapper">
        <H2>CommitViewer</H2>
        <div className="about">
          <Input 
            placeholder="&#xf002;  Eg.vuejs/vue" 
            size="0.75em"
            value = { repo }
            onChange={(e)=>setRepo(e.target.value)}
          />
          <Button 
            type="button"
            onClick={ handleClick }
          >
            See commits <FontAwesomeIcon icon={faRocket} />
          </Button>
        </div>
      </div>  
      <div className="repo-name">
        {searchRepo}
      </div>
      {
        (loading) 
        ? <div className="loading">
            Loading...
          </div>
        : <>
          <ul>
            {
              (commits) && commits.map((commit, index)=>(
                <li key={index}>
                  <div className="grid-container">
                      <div className="grid-item">
                      <div className="title">
                        <span className="filler"></span>
                        <span>{commit.committer.login}</span>
                      </div>
                    </div>
                  <div className="grid-item">
                    {commit.commit.message}
                  </div>
                  <div className="grid-item-1">
                    <span>{commit.commit.author.date.substring(11, 16)}</span> 
                    <span>{commit.commit.author.date.substring(0, 10).replace(/-/g, "/")}</span>
                  </div>
                </div>   
              </li>
          )) 
        }
    </ul>
    <ul>
            {
              (commits) && commits.map((commit, index)=>(
                <li key={index}>
                  <div className="flex-grid">
                    <div>
                      <div className="flex-item">
                        {commit.commit.message}
                      </div>
                    </div>
                    <div className="flex-item-wrapper">
                      <div className="flex-item">
                        <div className="flex-title">
                          <span className="filler"></span>
                          <span>{commit.committer.login}</span>
                        </div>
                      </div>
                      <div className="flex-item-1">
                          <span>{commit.commit.author.date.substring(11, 16)}</span> 
                          <span>{commit.commit.author.date.substring(0, 10).replace(/-/g, "/")}</span>
                      </div>
                    </div>  
                  </div>   
              </li>
          )) 
        }
    </ul>
    </>
      } 
    </>
    )
}

export default Search
