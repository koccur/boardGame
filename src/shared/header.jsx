import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Navigation = styled.ul`
color:blue;
font-size:24px;
font-weight:bold;
margin:0 12px ;
a{
    margin:0 12px;
}

`
export function AppHeader() {

    return (
        <header>
            <nav>
                <Navigation>
                    <Link to="/">BoardGame</Link>
                    <Link to="/mygames">My games</Link>
                    <Link to="/about">About</Link>
                </Navigation>
            </nav>
        </header>
    )
}