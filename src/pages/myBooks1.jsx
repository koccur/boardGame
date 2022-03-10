function BuildForm() {
    return (
        <>
        <WrapperCentered>
            <div>
                <h2>Search</h2>
                <input type="text" />
            </div>
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
            </WrapperCentered>
        </>
    )
}


function BuildformWithLabel() {
    return (
        <>
        <WrapperCentered>
            <div>
                <h2>Search</h2>
                <input type="text" />
            </div>
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


                    <p>Some multiselect field</p>
                    <ColumnFieldSet>
                        <Row>
                            <input type="checkbox" value="option1" id="option1" />
                            <label for="option1">Option1</label>
                        </Row>
                        <Row>
                            <input type="checkbox" value="optionTWO" id="option2" />
                            <label for="option2">optionTWO</label>
                        </Row>
                        <Row>
                            <input type="checkbox" value="option III" id="option3" />
                            <label for="option3">option III</label>
                        </Row>
                        <Row>
                            <input type="checkbox" value="option $" id="option4" />
                            <label for="option4">option $</label>
                        </Row>
                    </ColumnFieldSet>


                    <FormRow>
                        <label for="textarea">Comment</label>
                        <TextArea id="textarea" />
                    </FormRow>
                    <OverStyledButton type="submit" value="Save" />
                    <Desclaimer>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</Desclaimer>
                </BuildFormStyle>
            </form>
            </WrapperCentered>
        </>
    )
}

function BuildformWithLabelWithoutLink() {
    return (
        <>
        <WrapperCentered>
            <div>
                <h2>Search</h2>
                <input type="text" />
            </div>
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

                    <p>Some multiselect field</p>
                    <ColumnFieldSet>

                        <Row>
                            <input type="checkbox" value="option1" id="option1" />
                            <label for="option1">Option1</label>
                        </Row>
                        <Row>
                            <input type="checkbox" value="optionTWO" id="option2" />
                            <label for="option2">optionTWO</label>
                        </Row>
                        <Row>
                            <input type="checkbox" value="option III" id="option3" />
                            <label for="option3">option III</label>

                        </Row>
                        <Row>
                            <input type="checkbox" value="option $" id="option4" />
                            <label for="option4">option $</label>
                        </Row>
                    </ColumnFieldSet>


                    <FormRow>
                        <label for="textarea">Comment</label>
                        <TextArea id="textarea" />
                    </FormRow>

                    {/* <OverStyledButton type="submit" value="save" /> */}
                    <SubmitButton type="submit" value="Save" />
                    <DesclaimerEasyToSee>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</DesclaimerEasyToSee>
                </BuildFormStyle>
            </form>
            </WrapperCentered>
        </>
    )
}

function BuildformUsingFieldSets() {
    return (
        <>
            <WrapperCentered>
                <div role="search">
                    <label for="searchInput">Search</label>
                    <input type="text" id="searchInput" />
                </div>
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

                        <ColumnFieldSet>
                            <legend>Some multiselect field</legend>
                            <Row>
                                <input type="checkbox" value="option1" id="option1" />
                                <label for="option1">Option1</label>
                            </Row>
                            <Row>
                                <input type="checkbox" value="optionTWO" id="option2" />

                                <label for="option2">optionTWO</label>
                            </Row>
                            <Row>
                                <input type="checkbox" value="option III" id="option3" />
                                <label for="option3">option III</label>

                            </Row>
                            <Row>
                                <input type="checkbox" value="option $" id="option4" />
                                <label for="option4">option $</label>
                            </Row>
                        </ColumnFieldSet>
                        {/* ewentualnie */}
                        {/* <div role="group" aria-labelledby='some nice name for field'>
                <p>Some multiselect field</p>
                    <Row>
                    <input type="checkbox" value="option1" id="option1"/>
                    <label for="option1">Option1</label>
                    </Row>
                    <Row>
                    <input type="checkbox" value="optionTWO" id="option2"/>

                    <label for="option2">optionTWO</label>
                    </Row>
                    <Row>
                    <input type="checkbox" value="option III"id="option3"/>
                    <label for="option3">option III</label>
                    
                    </Row>
                    <Row>
                    <input type="checkbox" value="option $" id="option4"/>
                    <label for="option4">option $</label>
                    </Row>
                </div> */}



                        <FormRow>
                            <label for="textarea">Comment</label>
                            <TextArea id="textarea" />
                        </FormRow>

                        {/* <OverStyledButton type="submit" value="save" /> */}
                        <SubmitButton type="submit" value="Save" />
                        <DesclaimerEasyToSee>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</DesclaimerEasyToSee>
                    </BuildFormStyle>
                </form>
            </WrapperCentered>
        </>
    )
}

function BuildformWithErrorsAndRequiredFields() {
    return (
        <>
            <WrapperCentered>
                <div role="search">
                    <label for="searchInput">Search</label>
                    <input type="text" id="searchInput" />
                </div>
                <form >
                    <BuildFormStyle>
                        <FormRow>
                            {/* wprowadzmy pole required powinno się one odrozniac albo gwiazdką, atrybutem required, mozna też doda aria-describedby*/}
                            <RequiredLabel for="title">Title</RequiredLabel>
                            <Column>
                                <input type="text" id="title" aria-describedby='error-message-id' required />
                                <ErrorMessage id="error-message-id">There was an error with the input above</ErrorMessage>
                            </Column>
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

                        <ColumnFieldSet>
                            <legend>Some multiselect field</legend>
                            <Row>
                                <input type="checkbox" value="option1" id="option1" />
                                <label for="option1">Option1</label>
                            </Row>
                            <Row>
                                <input type="checkbox" value="optionTWO" id="option2" />

                                <label for="option2">optionTWO</label>
                            </Row>
                            <Row>
                                <input type="checkbox" value="option III" id="option3" />
                                <label for="option3">option III</label>

                            </Row>
                            <Row>
                                <input type="checkbox" value="option $" id="option4" />
                                <label for="option4">option $</label>
                            </Row>
                        </ColumnFieldSet>

                        <FormRow>
                            <label for="textarea">Comment</label>
                            <TextArea id="textarea" />
                        </FormRow>

                        {/* <OverStyledButton type="submit" value="save" /> */}
                        <SubmitButton type="submit" value="Save" />
                        <DesclaimerEasyToSee>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</DesclaimerEasyToSee>
                    </BuildFormStyle>
                </form>
            </WrapperCentered>
        </>
    )
}

function BuildFormWithTooltips() {
    return (
        <>
            <WrapperCentered>
                <div role="search">
                    <label for="searchInput">Search</label>
                    <input type="text" id="searchInput" />
                </div>
                <form >
                    <BuildFormStyle>
                        <FormRow>
                            <RequiredLabel for="title">Title</RequiredLabel>
                            <Column>
                                <input type="text" id="title" aria-describedby='error-message-id' required />
                                <ErrorMessage id="error-message-id">There was an error with the input above</ErrorMessage>
                            </Column>
                        </FormRow>

                        <FormRow>
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
                                <input type="checkbox" value="option1" id="option1" />
                                <label for="option1">Option1</label>
                            </Row>
                            <Row>
                                <input type="checkbox" value="optionTWO" id="option2" />
                                <label for="option2">optionTWO</label>
                            </Row>
                            <Row>
                                <input type="checkbox" value="option III" id="option3" />
                                <label for="option3">option III</label>

                            </Row>
                            <Row>
                                <input type="checkbox" value="option $" id="option4" />
                                <label for="option4">option $</label>
                            </Row>
                        </ColumnFieldSet>

                        <FormRow>
                            <label for="textarea">Comment</label>
                            <TextArea id="textarea" />
                        </FormRow>

                        {/* <OverStyledButton type="submit" value="save" /> */}
                        <SubmitButton type="submit" value="Save" />
                        <DesclaimerEasyToSee>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit exercitationem veniam quos quibusdam nesciunt iure architecto ex quaerat ipsa, officiis quae amet beatae quis. Ad tempore temporibus dolorem cumque?</DesclaimerEasyToSee>
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