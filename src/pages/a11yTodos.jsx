import styled from 'styled-components';

const StyledForm = styled.form`
    border-left:5px solid black;
    margin-left: 48px;
    height: 100vh;
    display:flex ;
    flex-direction:column ;
`

const Row = styled.div`
    display:flex;
    margin:8px 16px;
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;;
    margin:8px 16px;
    font-weight: 800;
    p,ul{
        margin: 0;
    }

`

export function A11yTodos() {
    return (
        <StyledForm>
            <Row>
                <input type="checkbox" id="headings" />
                <label for="headings">Wielkość nagłówków</label>
            </Row>
            <Row>
                <input type="checkbox" id="labels" />
                <label for="labels">Przypisanie labelek do inputów</label>
            </Row>
            <Row>
                <input type="checkbox" id="headingsAndAnchors" />
                <label for="headingsAndAnchors">Usunięcie linków,headingów z labelek</label>
            </Row>
            <Row>
                <input type="checkbox" id="stylesButtonsAndErrors" />
                <label for="stylesButtonsAndErrors">Stylowanie butona i errorów</label>
            </Row>
            <Row>
                <input type="checkbox" id="outline" />
                <label for="outline">Outline na focus</label>
            </Row>
            <Row>
                <input type="checkbox" />
                <label>Odpowiednia wielkość przycisków i odleglosci</label>
            </Row>
            <Column>
                <ul>
                    <li>Zgodnie z wytycznymi 4.5:1 dla textów poniżej 18px</li>
                    <li>3:1 dla textów powyżej 18px</li>
                </ul>
            </Column>
            <Row>
                <input type="checkbox" />
                <label>Widoczność elementów zero opacity, z-index off-screen</label>
            </Row>
            <Column>
                <ul>
                    <li>Jeśli chcemy to hidden, visibility albo display, jesli koniecznie musimy to dodajmy: aria-hidden</li>
                </ul>
            </Column>
            <Row>
                <input type="checkbox" />
                <label>Focus</label>
            </Row>
            <Column>
                <ul>
                    <li>Wszystkie elementy linki/buttony/kontrolki powinny byc focusowalne</li>
                    <li>Inne elementy jesli mają byc to dodajmy do nich aria-role</li>
                    <li>Porządek powinien być zachowany od lewej do prawej i od gory do dolu, nie używamy tabindexu o ile nie musimy</li>
                </ul>
            </Column>
            <Row>
                <input type="checkbox" />
                <label>Pola wymagane</label>
            </Row>
            <Row>
                <input type="checkbox" />
                <label>Tooltip</label>
            </Row>
        </StyledForm>
    )
}

// zrodła
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist
// https://www.w3.org/standards/webdesign/accessibility
// https://www.tpgi.com/using-the-html-title-attribute-updated/

// https://a11y-style-guide.com/style-guide/section-forms.html
// https://formidableforms.com/features/wcag-accessible-forms/