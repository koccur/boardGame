import { A11YLabel } from './styles';

function BuildFormWithTooltips() {
    return (
        <>
            <WrapperCentered>
                <div role="search">
                    {/* bez fora przeczyta tylko "edit blank" */}
                    <BigSearch for="searchInput">Search</BigSearch>
                    <Input type="text" id="searchInput" />
                </div>
                <form >
                    <BuildFormStyle>
                        <FormRow>
                            {/* <Label> for="title">Title</</Label> */}
                            <RequiredLabel for="title">Title</RequiredLabel>
                            <Column>
                                <input type="text" id="title" aria-describedby='error-message-id' required />
                                <ErrorMessage id="error-message-id">There was an error with the input above</ErrorMessage>
                            </Column>
                        </FormRow>

                        <FormRow>
                            {/* Przeczyta tylko click here, a nie bedzie czytać tego co jest w labelce */}
                            <label for="genre">Genre </label>
                            <select id="genre">
                                <option label="Horror">Horror</option>
                                <option label="Adventure">Adventure</option>
                                <option label="Criminal">Criminal</option>
                            </select>
                            <p>
                                <a href="/myBooks">Check other from your collection</a>
                            </p>
                        </FormRow>
                        <FormRow>
                            <TooltipSource>
                                <a href="" aria-discribedby="tooltip1">How to score it?</a>
                                <Tooltip role="tooltip" id="tooltip1">Its on you</Tooltip>
                            </TooltipSource>
                            <label for="raiting">Rating</label>
                            <input type="number" id="raiting" />
                        </FormRow>

                        <ColumnFieldSet>
                            <legend>Some multiselect field</legend>
                            <Row>
                                <MediumCheckbox type="checkbox" value="option1" id="option1" />
                                <A11YLabel for="option1">Option1</A11YLabel>
                            </Row>
                            <Row>
                                <MediumCheckbox type="checkbox" value="optionTWO" id="option2" />
                                <A11YLabel for="option2">optionTWO</A11YLabel>
                            </Row>
                            <Row>
                                <MediumCheckbox type="checkbox" value="option III" id="option3" />
                                <A11YLabel for="option3">option III</A11YLabel>

                            </Row>
                            <Row>
                                <MediumCheckbox type="checkbox" value="option $" id="option4" />
                                <A11YLabel for="option4">option $</A11YLabel>
                            </Row>
                        </ColumnFieldSet>

                        <FormRow>
                            <label for="textarea">Comment</label>
                            <TextArea id="textarea" />
                        </FormRow>

                        {/* <OverStyledButton type="submit" value="save" /> */}
                        <SubmitButton type="submit" value="Save" />
                        <DesclaimerEasyToSee>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt
                             iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</DesclaimerEasyToSee>

                        <a href="/privacypolicy" aria-label="Read more about our privacy policy">Our privacy policy</a>
                        <svg role="img" style={{background:'gray'}} aria-describedby="desc"><desc id="desc">Alternative text to SVG</desc>...</svg>
                        <img src='lab.jpg' alt="Picture of labrador" role="presentation"/> {/* bez role presentation nvda bedzie czytala alt z obrazka*/ }

                    </BuildFormStyle>
                </form>
            </WrapperCentered>
        </>
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
                    {/* <BuildformWithLabelWithoutLink/> */}
                    {/* Warto zwrócić uwagę na kontrasty, Czasem coś w naszym odczuciu będzie wyglądało prawidłowo natomiast, wystarczy że mocne światło będzie padać na ekran i już bedziemy mieli problem z odczytaniu tej wiadomości, nie mówiąc już oczywiscie o ludziach ślepotą barw. */}
                    {/*  Przyciski według wytycznych powinny mieć przynajmniej 44x44 wielkości i dodajmy troche marginesu od innych elementów */}
                    {/* Kiedyś dostałem za zadanie usunięcie usunięcia obwódki elementów jak sie tabem klika, bo na co to komu potrzebne, brzydko wygląda. 
                    Warto przy okazji wziąć uwagę osoby z ślepotą barw, więc zastosujmy nie tylko sam kolor ale również możemy zastosować  outline: thin dotted;*/}

                    {/* <BuildformUsingFieldSets /> */}
                    {/* Gdy mamy pare pól do wyboru mozemy użyć albo fieldset albo aria group options */}
                    {/* jesli korzystamy z searcha, powinnismy użyć role=search na kontener inputa*/}

                    {/* <BuildformWithErrorsAndRequiredFields /> */}

                    {/* tooltips advices */}
                    <BuildFormWithTooltips />
                </Wrapper>
                {/* <A11yTodos /> */}
            </Wrapper>
        </>
    );

}


// add toggles and tooltips
// https://a11y-style-guide.com/style-guide/section-forms.html
// https://formidableforms.com/features/wcag-accessible-forms/