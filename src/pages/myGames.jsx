import {Row} from '../styles/styles';
import {FormRow} from '../styles/styles';
import {Alert} from '../styles/components/alerts';
import {OverStyledButton} from '../styles/styles';
import {Wrapper} from '../styles/styles';
import {TextArea} from '../styles/styles';
import {ColumnFieldSet} from '../styles/styles';
import {BuildFormStyle} from '../styles/styles';
import {Input} from '../styles/components/inputs';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {firestore, auth, appFirebase} from '../config/firebase'
import { getFirestore } from 'firebase/firestore';

const db = getFirestore(appFirebase);
const storeRef = firestore.collection('games');
const query = storeRef.orderBy('name').limit(25);


function BuildForm() {
    return (
        <>
            <Wrapper>
                {/* <div> */}
                    {/* todo get data from bggg database */} 
                    {/* <h2>Wyszukaj po nazwie (tbd)</h2> */}
                    {/* <Input type="text" /> */}
                {/* </div> */}
                <form >
                    {/* nawet jak mamy label to jest on nie widziany przez programy czytające  */}
                    <BuildFormStyle>
                        <FormRow>
                            <label for="title">Tytuł</label>
                            <Input type="text" id="title"/>
                        </FormRow>

                        <FormRow>
                            <label>Comment</label>
                            <TextArea />
                        </FormRow>


                        <OverStyledButton type="submit" value="Save" />
                    </BuildFormStyle>
                </form>
            </Wrapper>
        </>
    )
}

function GamesLibrary(){
    const [games] = useCollectionData(query, {idField:'id'});
    debugger;
    return(
        <>
        <h2>GamesLibrary</h2>
        <div>
           {games? games.map(game=><p>{game?.name}</p>): null} 
        </div>
        </>
    )https://www.youtube.com/watch?v=zQyrwxMPm88
}

export function MyGames() {

    return (
        <>
            <Wrapper>
                <h1>My games</h1>
                <Row>
                
                    <GamesLibrary/>
                </Row>
                <Row>
                    <BuildForm />
                </Row>
            </Wrapper>

        </>
    );

}
