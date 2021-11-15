import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
  }
`;

export const Input = styled.input.attrs( props => ({
    type: "text",
    size: props.size || "1em",
  }))`
    font-family: FontAwesome, "Open Sans", Verdana, sans-serif;
    border: hidden;
    border-radius: 5px;
    
    background-color: #C5C6C7;
    margin-right: ${props => props.size};
    padding: ${props => props.size};

    @media (max-width: 425px) {
      display: flex;
      flex-direction:row;
      justify-content: center;
      align-item: center; 
      width: 94.25%; 
    }
    
    @media (min-width: 768px) {
      width: 35vw;
    }

    @media (min-width: 1440px) {
      font-size: 16px;
    }

    @media (min-width: 2560px) {
      font-size: 35px;
      border-radius: 10px;
    }
  `;

export const Button = styled.button`
    display: inline-block;
    color: white;
    background-color: #F13C20;
    font-size: 1.1em;
    font-weight: 600;
    padding: 0.575em 1.40em;    
    border: hidden;
    border-radius: 5px;

    @media (max-width: 425px) {
      display: inline-block;
      color: white;
      background-color: #F13C20;
      font-size: 0.75em;
      font-weight: normal;
      padding: 0.80em 6em;   
      border: hidden;
      border-radius: 5px;
      margin: 1em 0em;
      width: 100%;
    }

    @media (min-width: 768px) {
      font-size: 0.90em;
    }

    @media (min-width: 1024px) {
      font-size: 0.95em;
    }
    
    @media (min-width: 2560px) {
      font-size: 2.5em;
      border-radius: 10px;
    }  
`;

export const H1 = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 72px;
    font-weight: 630;
    color: #080F5B;
    padding-left: 20vw;
    padding-right: 20vw;
    margin: 0px;

    @media (max-width: 425px) {
      font-size: 28px;
      margin-top: 0.5em;
      font-weight: bold;
    }

    @media (min-width: 768px) {
      font-size: 42px;
    }

    @media (min-width: 1024px) {
      font-size: 62px;
    }

    @media (min-width: 2560px) {
      font-size: 142px;
    }
`;

export const H2 = styled.h2`
    font-size: 26px;
    font-weight: 600;
    color: #080F5B;

    @media (max-width: 425px) {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      font-size: 23px;
    }

    @media (min-width: 2560px) {
      font-size: 62px;
    }
`;

export const H3 = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #080F5B;
    padding-left: 20vw;
    padding-right: 20vw;

    @media (max-width: 425px) {
      font-size: 11px;
      margin-bottom: 2.5em;
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 1024px) {
      font-size: 20px;
    }

    @media (min-width: 2560px) {
      font-size: 55px;
    }
`;

export const H4 = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: light;
    color: #080F5B;

    @media (max-width: 425px) {
      font-size: 11px;
    }

    @media (min-width: 768px) {
      font-size: 13px;
    }

    @media (min-width: 1024px) {
      font-size: 15px;
    }

    @media (min-width: 2560px) {
      font-size: 35px;
    }
`;

export const H5 = styled.h5`
    font-size: 26px;
    color: #080F5B;
    font-weight: normal;

    @media (max-width: 425px) {
      font-size: 14px;
      margin: 0em 1em;
    }

    @media (min-width: 768px) {
      font-size: 16px;
      margin-left: 2em; 
    }

    @media (min-width: 1024px) {
      font-size: 16px;
      margin-left: 2em; 
    }

    @media (min-width: 1440px) {
      font-size: 20px;
      margin-left: 2em; 
    }

    @media (min-width: 2560px) {
      font-size: 35px;
      margin-left: 2em; 
    }  
`;

export const Grid = styled.div`
    display:grid;
    grid-template-columns:  repeat(5, auto);
    justify-content: space-evenly;
    padding: 2%;
    color: white;

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    @media (min-width: 1024px) {
      display:grid;
      grid-template-columns:  repeat(5, auto);
      justify-content: space-evenly;
      padding: 2%;
      color: white;
    }

    @media (min-width: 2560px) {
      display:grid;
      grid-template-columns:  repeat(5, auto);
      justify-content: space-evenly;
      padding: 2%;
      color: white;
    }
`;

export const List = styled.li`
  list-style-type: none;
  background-color: #080F5B;
  padding: 0.40em 0.75em;
  border: hidden;
  border-radius: 5px;

  @media (max-width: 425px) {
      font-size: 11px;
      padding: 0.40em 0.75em;
      border-radius: 3px;
  }

  @media (min-width: 768px) {
      font-size: 10px;
  }

  @media (min-width: 1024px) {
      font-size: 12px;
  }

  @media (min-width:2560px) {
    font-size: 35px;
    padding: 0.25em 0.5em;
  } 
`;
