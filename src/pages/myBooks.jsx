import { A11yTodos } from './a11yTodos';
import { Wrapper } from './styles';
import { FormRow } from './styles';
import { Row } from './styles';
import { ColumnFieldSet } from './styles';
import { TextArea } from './styles';
import { OverStyledButton } from './styles';
import { Desclaimer } from './styles';
import { Input } from './styles';
import { BuildFormStyle } from './styles';

function BuildForm() {
    return (
        <>
            <Wrapper style={{ width: "500px", margin: "0 auto" }}>
                <div>
                    <h2>Search</h2>
                    <Input type="text" />
                </div>
                <form >
                    {/* nawet jak mamy label to jest on nie widziany przez programy czytające  */}
                    <BuildFormStyle>
                        <FormRow>
                            <label>Title</label>
                            <Input type="text" />
                        </FormRow>
                        <FormRow>
                            <label>Genre <a href="/myBooks">Check other from your collection</a></label>
                            <select id="genre">
                                <option>Horror</option>
                                <option>Adventure</option>
                                <option>Criminal</option>
                            </select>
                        </FormRow>
                        {/* todo: przerobić na gwiazdki */}
                        <FormRow>
                            <label>Rating</label>
                            <Input type="number" />
                        </FormRow>

                        <p>Some multiselect field</p>
                        <ColumnFieldSet>
                            <Row>
                                <input type="checkbox" value="option1" id="option1" />
                                <span>Option1</span>
                            </Row>
                            <Row>
                                <input type="checkbox" value="optionTWO" id="option2" />
                                <span>optionTWO</span>
                            </Row>
                            <Row>
                                <input type="checkbox" value="option III" id="option3" />
                                <span>option III</span>
                            </Row>
                            <Row>
                                <input type="checkbox" value="option $" id="option4" />
                                <span>option $</span>
                            </Row>
                        </ColumnFieldSet>


                        <FormRow>
                            <label>Comment</label>
                            <TextArea />
                        </FormRow>


                        <OverStyledButton type="submit" value="Save" />
                        <Desclaimer>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</Desclaimer>
                    </BuildFormStyle>
                </form>
            </Wrapper>
        </>
    )
}
export function MyBooks() {
    // Uzytkownicy którzy nie widzą/ mają problemy z widzeniem nie korzystają z myszki, najlepiej w ogole nie zmieniajmy orderu za pomocą tabindexu.

    return (
        <>
            <Wrapper>
                <h1>MyBooks</h1>
                {/* <SmallerHeadingOne>MyBooks</SmallerHeadingOne> */}
                {/* <h3>MyBooks</h3>  */}
                {/* programy czytające wymagają żeby na podstronie byl znacznik h1 i dalej w kolejności, */}
                {/* jesli wielkość czcionki nam nie pasuje, to najlepszym rozwiązaniem jest zmiana wielkości przez klasę cssową, zamiast zmiany nagłówka */}
                <Row>
                    <BuildForm />
                    <A11yTodos />
                </Row>
            </Wrapper>

        </>
    );

}
