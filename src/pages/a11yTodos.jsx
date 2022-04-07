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
        <aside>
        <StyledForm>
        
            <Row>
                <input type="checkbox" id="headings" />
                <label for="headings">Wielkość nagłówków</label>
            </Row>
            <Row>
                <input type="checkbox" id="contrast" />
                <label for="contrast">Kontrasty</label>
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
                <label for="stylesButtonsAndErrors">Odpowiednia wielkość przycisków i ich rozmiar</label>
            </Row>

            <Row>
                <input type="checkbox" id="hiding"/>
                <label for="hiding">Ukrywanie elementow na stronie</label>
            </Row>
            <Row>
                <input type="checkbox" id="errors"/>
                <label for="errors">Błędy</label>
            </Row>
            <Row>
                <input type="checkbox" id="focus"/>
                <label for="focus">Focus</label>
            </Row>
            <Row>
                <input type="checkbox" id="outline" />
                <label for="outline">Outline na focus</label>
            </Row>
            <Row>
                <input type="checkbox" id="tooltip"/>
                <label for="tooltip">Tooltip, SVG</label>
            </Row>

            <Row>
                <input type="checkbox" id="semantic"/>
                <label for="semantic">Semantyka html5</label>
            </Row>
            <Row>
                <input type="checkbox" id="ariaAndRoles"/>
                <label for="ariaAndRoles">Aria i role</label>
            </Row>
        </StyledForm>
        </aside>
    )
}

// zrodła
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist
// https://www.w3.org/standards/webdesign/accessibility
// https://www.tpgi.com/using-the-html-title-attribute-updated/

// https://a11y-style-guide.com/style-guide/section-forms.html
// https://formidableforms.com/features/wcag-accessible-forms/