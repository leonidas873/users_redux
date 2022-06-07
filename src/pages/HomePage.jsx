import styled from "styled-components";

const HomePage = () => {
    return <Container>
        <h1>home page</h1>
    <h4>ძირითადი ფუნქციონალები: </h4>
    <ul>
        <li>add user ფეიჯიდან შესაძლებელია რეგისტრაცია</li>
        <li>რეგისტრაცისას მომხმარებელი ემატება რედაქსის სტეიტში</li>
        <li>users ფეიჯზე განთავსებულ ცხრილში ემატება add user ში დარეგისტრირებული მომხმარებლები</li>
        <li>შესაძლებელია ცხრილში მოცემული ინფორმაციის ედითი და წაშლა</li>
        
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