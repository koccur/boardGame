import styled from 'styled-components';
import { A11yTodos } from './a11yTodos';

const BuildFormStyle = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:300px;
margin: 30px 20px;
`;

const FormRow = styled.div`
display:flex;
margin:8px 0;
flex-direction:column ;
justify-content:space-between;
input{
    height: 44px;
}
`
const SubmitButton = styled.input`
margin-top:16px;
border: 0;
    line-height: 2.5;
    padding: 0 24px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: #D71414;
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
    &:hover{
        background-color: rgba(255, 0, 0, 1);
        
    }
    &:active{
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
                
    }
    &:focus{
        outline: #2081a1 dashed;
    }
`

const OverStyledButton = styled.input`
    margin-top:4px;
    border: 0;
    line-height: 2;
    padding: 0 12px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    outline: none;
    background-color: #EC4141;
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
    &:hover{
        background-color: rgba(255, 0, 0, 1);
    }
    &:active{
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
    }
`

const TextArea = styled.textarea`
`

const SmallerHeadingOne = styled.h1`
    font-size:24px;
`

const Wrapper = styled.div`
    display:flex;

`

const Desclaimer = styled.div`
    color: #d3d3d3;
    font-size:14px;
    letter-spacing: -1px;
    line-height: 0.85;
    margin-top:8px;
`
const DesclaimerEasyToSee =styled.div`
    color: #707070;
    font-weight: 500;
    font-size:14px;
    margin-top:8px;
    line-height: 1;
`

function BuildForm() {
    return (
        <form >
            {/* nawet jak mamy label to jest on nie widziany przez programy czytające  */}
            <BuildFormStyle>
                <FormRow>
                    <label>Title</label>
                    <input type="text" />
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
                    <input type="number" />
                </FormRow>
                <FormRow>
                    <label>Comment</label>
                    <TextArea />
                </FormRow>


                <OverStyledButton type="submit" value="Save" />
                <Desclaimer>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</Desclaimer>
            </BuildFormStyle>
        </form>
    )
}


function BuildformWithLabel() {
    return (
        <form >
            {/* nawet jak mamy label to jest on nie widziany przez programy czytające  */}
            <BuildFormStyle>
                <FormRow>
                    <label for="title">Title</label>
                    <input type="text" id="title" />
                </FormRow>
                <FormRow>
                    <label>Genre <a href="/myBooks">Check other from your collection</a></label>
                    <select id="genre">
                        <option>Horror</option>
                        <option>Adventure</option>
                        <option>Criminal</option>
                    </select>
                </FormRow>

                <FormRow>
                    <label for="raiting">Rating</label>
                    <input type="number" id="raiting" />
                </FormRow>
                <FormRow>
                    <label for="textarea">Comment</label>
                    <TextArea id="textarea" />
                </FormRow>
                <OverStyledButton type="submit" value="Save" />
                <Desclaimer>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</Desclaimer>
            </BuildFormStyle>
        </form>
    )
}

function BuildformWithLabelWithoutLink() {
    return (
        <form >
            {/* nawet jak mamy label to jest on nie widziany przez programy czytające  */}
            <BuildFormStyle>
                <FormRow>
                    <label for="title">Title</label>
                    <input type="text" id="title" />
                </FormRow>
                <FormRow>
                    <label>Genre </label>
                    <select id="genre">
                        <option>Horror</option>
                        <option>Adventure</option>
                        <option>Criminal</option>
                    </select>
                    <p>
                        <a href="/myBooks">Check other from your collection</a>
                    </p>
                </FormRow>
                <FormRow>
                    <label for="raiting">Rating</label>
                    <input type="number" id="raiting" />
                </FormRow>
                <FormRow>
                    <label for="textarea">Comment</label>
                    <TextArea id="textarea" />
                </FormRow>

                {/* <OverStyledButton type="submit" value="save" /> */}
                <SubmitButton type="submit" value="Save" />
                <DesclaimerEasyToSee>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</DesclaimerEasyToSee>
            </BuildFormStyle>
        </form>
    )
}


export function MyBooks() {
// Uzytkownicy którzy nie widzą/ mają problemy z widzeniem nie korzystają z myszki, najlepiej w ogole nie zmieniajmy orderu za pomocą tabindexu.

    return (
        <>
            <Wrapper>
                <Wrapper>
                    <h1>MyBooks</h1>
                    {/* <SmallerHeadingOne>MyBooks</SmallerHeadingOne> */}
                    {/* <h3>MyBooks</h3>  */}
                    {/* programy czytające wymagają żeby na podstronie byl znacznik h1 i dalej w kolejności,*/}
                    {/* jesli wielkość czcionki nam nie pasuje, to najlepszym rozwiązaniem jest zmiana wielkości przez klasę cssową, zamiast zmiany nagłówka */}
                    {/* <BuildForm /> */}

                    {/* <BuildformWithLabel /> */}
                    {/* Starajmy sie nie umieszczać linków w labelce jest to problem dla czytników */}
                    <BuildformWithLabelWithoutLink/>
                    {/* Warto zwrócić uwagę na kontrasty, Czasem coś w naszym odczuciu będzie wyglądało prawidłowo natomiast, wystarczy że mocne światło będzie padać na ekran i już bedziemy mieli problem z odczytaniu tej wiadomości, nie mówiąc już oczywiscie o ludziach ślepotą barw. */}
                    {/*  Przyciski według wytycznych powinny mieć przynajmniej 44x44 wielkości i dodajmy troche marginesu od innych elementów */}
                    {/* Kiedyś dostałem za zadanie usunięcie usunięcia obwódki elementów jak sie tabem klika, bo na co to komu potrzebne, brzydko wygląda. 
                    Warto przy okazji wziąć uwagę osoby z ślepotą barw, więc zastosujmy nie tylko sam kolor ale również możemy zastosować  outline: thin dotted;*/}
                </Wrapper>
                {/* <A11yTodos /> */}
            </Wrapper>
        </>
    );

}


