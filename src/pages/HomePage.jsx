import styled from "styled-components";

const HomePage = () => {
    return <Container>
        <h1>home page</h1>
    <h4>functionalities: </h4>
    <ul>
        <li>you can register from add user page</li>
        <li>after registration user is added to redux state and is rendered on users page</li>
        <li>you can edit information on user's table</li>
        
    </ul>
    </Container>
}

export default HomePage;


const Container = styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    & > ul {
        text-align:left;
    }

`