import { useEffect, useState } from "react";
import { AddGame } from "./addGame";
import { Wrapper } from './styles';
import { Row } from './styles';

export function MyGames() {
    const [gameList, setGameList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("//localhost:3002/games")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setGameList(result);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                })
    },[])


    return (
        <>
            <Wrapper>
                <Row>
                    <AddGame />
                </Row>

                <h1>My games</h1>
                <Row>
                    <ul>{gameList.map(game => (
                        <li key={game.id}>
                            title: {game.title}
                            -
                            type: {game.type}
                            -
                            ownerId: {game.OwnerID}
                            -
                            age: {game.minAge}
                            -
                            time: {game.time}
                            -
                            players: {game.players}
                        </li>
                    ))}
                    </ul>
                </Row>
            </Wrapper>
        </>
    );

}