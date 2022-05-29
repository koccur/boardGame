import { OverStyledButton, WrapperCentered } from "./styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import { Column, Row } from './styles';

function BuildSearchForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
        },

        onSubmit: (values) => {
            formik.initialValues = values;
            debugger;
            const requestOptions = {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: values.name
                })
            };

            fetch(`//localhost:3002/users?name=${values.name}`).then(res => res.json()).then(res => console.log(res));
        }
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label> Friend name</label>
                <Column>
                    <input type="text"
                        id="name"
                        onChange={formik.handleChange}
                        defaultValue={formik.initialValues.name} />
                </Column>
                <button type="submit"> Search</button>
            </form>
        </>
    )
}


export function MyFriends() {
    const userListData = useSelector(selectUsers);
    debugger;
    const dispatch = useDispatch();
    const [userList, setUserList] = useState([]);
    return (
        <>
            <WrapperCentered>
                <h1>My friends </h1>
                <BuildSearchForm />

                <h1>My friends</h1>
                <Row>
                    <ul>{userList.map(user => (
                        <li key={user.id}>
                            name: {user.name}
                        </li>
                    ))}
                    </ul>
                </Row>
            </WrapperCentered>
        </>
    )
}

export const selectUsers = state => {
    debugger;
    return state.users.value;
}