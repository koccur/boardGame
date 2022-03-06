import styled from 'styled-components';

const StyledForm = styled.form`
    border-left:5px solid black;
    height: 100vh;
    display:flex ;
    flex-direction:column ;
`

const Row = styled.div`
    display:flex;
    margin:8px 16px;
`

export function A11yTodos(){
    return(
        <StyledForm>
            <Row>
            <label for="headings">Wielkość nagłówków</label>
            <input type="checkbox" id="headings"/>
            </Row>
            <Row>
            <label for="labels">Przypisanie labelek do inputów</label>
            <input type="checkbox" id="labels"/>
            </Row>
            <Row>
            <label for="headingsAndAnchors">Usunięcie linków,headingów z labelek</label>
            <input type="checkbox" id="headingsAndAnchors"/>
            </Row>
            <Row>
            <label for="stylesButtonsAndErrors">Stylowanie butona i errorów</label>
            <input type="checkbox" id="stylesButtonsAndErrors"/>
            </Row>
            <Row>
            <label for="outline">Outline na focus</label>
            <input type="checkbox" id="outline"/>
            </Row>
            <Row>
            <label>Odpowiednia wielkość przycisków i odleglosci</label>
            <input type="checkbox"/>
            <p>Zgodnie z wytycznymi 4.5:1 dla textów poniżej 18px</p>
            <p>3:1 dla textów powyżej 18px</p>
            </Row>
            <Row>
            <label>Widoczność elementów zero opacity, z-index off-screen</label>
            <input type="checkbox"/>
            <p>Jeśli chcemy to hidden, visibility albo display, jesli koniecznie musimy to dodajmy: aria-hidden</p>
            </Row>
            <Row>
            <label>Focus</label>
            <input type="checkbox"/>
            <p>Wszystkie elementy linki/buttony/kontrolki powinny byc focusowalne</p>
            <p>Inne elementy jesli mają byc to dodajmy do nich aria-role</p>
            <p>Porządek powinien być zachowany od lewej do prawej i od gory do dolu, nie używamy tabindexu o ile nie musimy.</p>
            </Row>
        </StyledForm>
    )
}

// zrodła
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist
// https://www.w3.org/standards/webdesign/accessibility
// https://www.tpgi.com/using-the-html-title-attribute-updated/

