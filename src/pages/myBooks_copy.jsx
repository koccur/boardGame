import { SubmitButton, Wrapper } from './styles';
import { FormRow } from './styles';
import { A11yTodos } from './a11yTodos';
import { Row } from './styles';
import { ColumnFieldSet } from './styles';
import { TextArea } from './styles';
import { OverStyledButton } from './styles';
import { Desclaimer } from './styles';
import { Input } from './styles';
import { BuildFormStyle } from './styles';
import { WrapperCentered } from './styles';
import { A11YLabel } from './styles';
import { BorderdDiv } from './styles';
import { SmallCheckbox } from './styles';
import { MediumCheckbox } from './styles';
import { BigSearch } from './styles';
import { ErrorMessage } from './styles';
import { SearchLabel } from './styles';
import { DesclaimerEasyToSee } from './styles';
import { Column } from './styles';
import { RequiredLabel } from './styles';
import { TooltipSource } from './styles';
import { Tooltip } from './styles';
import { ContrastButton } from './styles';

function BuildForm() {
    return (
        <>
            <WrapperCentered>
                <h1>Search</h1>
                <input type="text" id="searchInput" />
                <form >
                    <BuildFormStyle>
                        <FormRow>
                            <label>Title</label>
                            <Column>
                                <input type="text" id="title"  />
                                <p style={{color: "red"}}>There was an error with the input above</p>
                            </Column>
                        </FormRow>

                        <FormRow>
                            <label>Genre <a href="/myBooks">Click here</a>to check books from your collection</label>
                            <select id="genre">
                                <option>Horror</option>
                                <option>Adventure</option>
                                <option>Criminal</option>
                            </select>
                        </FormRow>

                        <FormRow>
                            <label>Rating</label>
                            <input type="number" id="raiting" />
                        </FormRow>

                        <p>Description of field</p>
                        <BorderdDiv>
                            <Row>
                                <input type="checkbox" value="option1" id="option1" />
                                <label>Option1</label>
                            </Row>
                            <Row>
                                <input type="checkbox" value="optionTWO" id="option2" />
                                <label>optionTWO</label>
                            </Row>
                            <Row>
                                <input type="checkbox" value="option III" id="option3" />
                                <label>OptionIII</label>
                            </Row>
                            <Row>
                                <input type="checkbox" value="option $" id="option4" />
                                <label>Option$</label>
                            </Row>
                        </BorderdDiv>

                        <FormRow>
                            <label>Comment</label>
                            <TextArea id="textarea" />
                        </FormRow>

                        <OverStyledButton type="submit" value="Save" />
                        <Desclaimer>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa,
                             officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</Desclaimer>
                        <a href="/privacypolicy">Read more</a> 
                    </BuildFormStyle>
                </form>
            </WrapperCentered>
        </>
    )
}

export function MyBooks() {
    return (
        <>
            <Wrapper>
                <h1>MyBooks</h1>
                <Row>
                    <BuildForm />
                    <A11yTodos />
                </Row>
            </Wrapper>

        </>
    );

}

// https://a11y-style-guide.com/style-guide/section-forms.html
// https://formidableforms.com/features/wcag-accessible-forms/