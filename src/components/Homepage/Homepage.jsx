import React, { useContext } from 'react';
import { Grid, List, Input, Button, H1, H2, H3, H4, H5 } from '../Styling/Styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Context } from '../../context/GlobalContext';

function Homepage() {

  const { repo, setRepo, setSearchRepo, data } = useContext(Context);

  const handleClick = () => {

    setSearchRepo(repo);
    setRepo('');
  }

    return (
      <>
      <div className="headerWrapper">
        <H2>CommitViewer</H2>
        <div className="about-wrapper">
            <H5>About</H5>
            <H5>Contact</H5>  
        </div>
      </div>
      <H1>Discover the world of code</H1>
      <H3>Explore open source projects from Github, and read their commit history to see the story of how they were built.</H3>
      <div>
        <span>
          <Input 
            placeholder="&#xf002;  Eg.vuejs/vue" 
            size="0.75em"
            value = { repo }
            onChange={(e)=>setRepo(e.target.value)}
          />
        </span>
        <span>
        <Link to="/search">
            <Button 
              type="button"
              onClick={ handleClick }
            >
              See commits <FontAwesomeIcon icon={faRocket} />
            </Button>
          </Link>
        </span>
      </div>
      
      <H4>Or pick one of these trending repos</H4>
        <ul>
          <Grid>
              {
                (data) && data.map((item, index)=>(
                  <List 
                    key={index}
                    onClick={()=>{setSearchRepo(`${item.owner.login}/${item.name}`)}}
                  >
                    <Link to="/search" style={{textDecoration: 'none', color: 'white'}}>
                      {item.owner.login}/{item.name}
                    </Link>  
                  </List>
                ))
              }
          </Grid>            
        </ul>
      </>
    )
}

export default Homepage
