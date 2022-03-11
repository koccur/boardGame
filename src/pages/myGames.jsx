import { Row } from '../styles/styles';
import { FormRow } from '../styles/styles';
import { Alert } from '../styles/components/alerts';
import { useFormik } from 'formik';
import { OverStyledButton } from '../styles/styles';
import { Wrapper } from '../styles/styles';
import { TextArea } from '../styles/styles';
import { ColumnFieldSet } from '../styles/styles';
import { BuildFormStyle } from '../styles/styles';
import { Input } from '../styles/components/inputs';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore, auth, appFirebase } from '../config/firebase'
import { getFirestore } from 'firebase/firestore';
import { useState } from 'react';

const db = getFirestore(appFirebase);
const storeRef = firestore.collection('games');
const query = storeRef.orderBy('name').limit(25);


function BuildForm() {

    const formik = useFormik({
        initialValues: {
            title: '',
            comment: '',
            uid: ''
        },
        onSubmit: (values) => {
            if (formik.errors) {
                // showerrors
            }
            saveGame(formik.values);
        }
    });




    const saveGame = (values) => {
        // todo ogarnac 
        let uid = '';
        let timestamp = ''
        if (auth?.currentUser) {
            uid = auth.currentUser.uid
        }
        if (firestore?.FieldValue?.serverTimestamp()) {
            timestamp = firestore.FieldValue.serverTimestamp()
        }
        const title = values.title;
        const comment = values.comment;

        storeRef.add({
            title: title,
            comment: comment,
            createdAt: timestamp,
            uid: uid
        }).then(()=>{
            // todo: reset form
            formik.resetForm();
        });

        
    }


    return (
        <>
            <Wrapper>
                {/* <div> */}
                {/* todo get data from bggg database */}
                {/* <h2>Wyszukaj po nazwie (tbd)</h2> */}
                {/* <Input type="text" /> */}
                {/* </div> */}
                <form onSubmit={formik.handleSubmit} >
                    {/* nawet jak mamy label to jest on nie widziany przez programy czytające  */}
                    <BuildFormStyle>
                        <FormRow>
                            <label htmlFor="title">Tytuł</label>
                            <Input type="text" id="title" name="title" defaultValue={formik.initialValues.title} onChange={formik.handleChange} />
                        </FormRow>

                        <FormRow>
                            <label>Comment</label>
                            <TextArea name="comment" defaultValue={formik.initialValues.comment} onChange={formik.handleChange} />
                        </FormRow>


                        <OverStyledButton type="submit" value="Save" />
                    </BuildFormStyle>
                </form>
            </Wrapper>
        </>
    )
}

function GamesLibrary() {
    const [games] = useCollectionData(query, { idField: 'id' });
    // const isUserLogged = auth.currentUser.uid === uid;
    return (
        <>
            <h2>GamesLibrary</h2>
            <div>
                {games ? games.map(game => <p>{game?.name || game?.title}</p>) : null}
            </div>
        </>
    )
}

export function MyGames() {

    return (
        <>
            <Wrapper>
                <h1>My games</h1>
                <Row>
                    <GamesLibrary />
                </Row>
                <Row>
                    <BuildForm />
                </Row>
            </Wrapper>

        </>
    );

}
