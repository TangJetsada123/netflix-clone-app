import profile1 from '../assets/6d2e9d056be58730a4fc969a83b4b03c.png'
import profile2 from '../assets/S__4874253.jpg'
import profile3 from '../assets/monkey.jpg'
import profile4 from '../assets/pramod-tiwari-9-PRNoVSDQk-unsplash.jpg'
import profile5 from '../assets/pramod-tiwari-9-PRNoVSDQk-unsplash.jpg'
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding-top: 15%;
`;

export const Header = styled.div`
    font-size: 3.5vw;
    font-weight: unset;
    color: white;
    margin-bottom: 20px;
`

export const UserContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 900px; /* Adjust the max-width based on your requirements */
    gap: 20px;
`;
export const Card = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    color: #767676;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    &:hover {
        div:first-child {
            padding: none;
            border-radius: 4px;
            border: 1px solid white;
        }
        div:last-child {
            color: white;
        }
    }
`

export const ImageLayout = styled.img`
    border-radius: 4px;
    width:123px;
    height: 123px;
    object-fit: fill;
`



export default function ManageProfile() {
    return (
        <Container>
            <Header>
                Who's watching?
            </Header>
            <UserContainer>
                <Card>
                    <div><ImageLayout src={profile1}></ImageLayout></div>
                    <div>Tang</div>
                </Card>
                <Card>
                    <div><ImageLayout src={profile2}></ImageLayout></div>
                    <div>Tang</div>
                </Card>
                <Card>
                    <div><ImageLayout src={profile3}></ImageLayout></div>
                    <div>Tang</div>
                </Card>
                <Card>
                    <div><ImageLayout src={profile4}></ImageLayout></div>
                    <div>Tang</div>
                </Card>
                <Card>
                    <div><ImageLayout src={profile5}></ImageLayout></div>
                    <div>Tang</div>
                </Card>
            </UserContainer>
        </Container>
    )
}