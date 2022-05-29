import { Wrapper } from './styles';
import { FormRow } from './styles';
import { Row } from './styles';
import { OverStyledButton } from './styles';
import { BuildFormStyle } from './styles';
import { WrapperCentered } from './styles';
import { Column } from './styles';
import { useFormik } from 'formik';

function BuildForm() {
    const formik = useFormik({
        initialValues: {
            type: '',
            title: '',
            players: 0,
            minAge: 0,
            time: 0
        },

        onSubmit: (values) => {
            formik.initialValues = values;
            debugger
            // add edit
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "id": values?.id ? values?.id : null,
                    "title": values.title,
                    "players": values.players,
                    "minAge": values.minAge,
                    "time": values.time,
                    "type":values.type,
                    "OwnerID": 1 //todo get from logged user session
                })
            };
            fetch("//localhost:3002/games", requestOptions)
                .then(response => response.json())
                .then(res => console.log(res));
        }
    });

    return (
        <>
            <WrapperCentered>
                {/* <h1>Search in our database</h1>
                <input type="text" id="searchInput" /> */}
                <form onSubmit={formik.handleSubmit}>
                    <BuildFormStyle>
                        <FormRow>
                            <label>Title</label>
                            <Column>
                                <input type="text"
                                    id="title"
                                    onChange={formik.handleChange}
                                    defaultValue={formik.initialValues.title} />
                            </Column>
                        </FormRow>

                        <FormRow>
                            <label>Type</label>
                            <select id="type"
                                onChange={formik.handleChange}
                                defaultValue={formik.initialValues.type}>
                                <option>Horror</option>
                                <option>Adventure</option>
                                <option>Criminal</option>
                            </select>
                        </FormRow>

                        <FormRow>
                            <label>Minimum age</label>
                            <input type="number" id="minAge"
                                onChange={formik.handleChange}
                                defaultValue={formik.initialValues.minAge} />
                        </FormRow>

                        <FormRow>
                            <label>Time</label>
                            <input type="number" id="time" onChange={formik.handleChange}
                                defaultValue={formik.initialValues.time} />
                        </FormRow>

                        <FormRow>
                            <label>Players</label>
                            <input type="number" id="players"  onChange={formik.handleChange}
                                    defaultValue={formik.initialValues.players}/>
                        </FormRow>

                        <OverStyledButton type="submit" value="Save" />
                    </BuildFormStyle>
                </form>
            </WrapperCentered>
        </>
    )
}

export function AddGame() {
    return (
        <>
            <Wrapper>
                <h1>Add game</h1>
                <Row>
                    <BuildForm />
                </Row>
            </Wrapper>

        </>
    );

}
