import styled from 'styled-components';
export const BuildFormStyle = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:300px;
margin: 30px 20px;
`;

export const FormRow = styled.div`
display:flex;
margin:8px 0;
flex-direction:column ;
justify-content:space-between;

`
export const SubmitButton = styled.input`
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
        outline: solid #2081a1 medium;
    }
`

export const OverStyledButton = styled.input`
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

export const TextArea = styled.textarea`
  border: 1px solid #CCCCCC;
  border-radius: 1em;
  padding: 1.5em;
  color: $label;
  width: calc(100% - 3em);
  display: block;
  resize: none;
  &:hover {
    border: 2px solid #CCCCCC;
    padding: calc(1.5em - 1px);
  }
  &:focus {
    box-shadow: $focus;
    outline: none;
  }
  &.disabled {
    background-color: #F1F1F1;
  }
  &.error {
    border: 2px solid #B54916;
    &:hover {
      padding: 1.5em;
    }
  }
`

export const SmallerHeadingOne = styled.h1`
    font-size:24px;
`

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`
export const WrapperCentered = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction: column;
`

export const Desclaimer = styled.div`
    color: #d3d3d3;
    font-size:14px;
    letter-spacing: -1px;
    line-height: 0.85;
    margin-top:8px;
`
export const DesclaimerEasyToSee = styled.div`
    color: #707070;
    font-weight: 500;
    font-size:14px;
    margin-top:8px;
    line-height: 1;
`
export const ColumnFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
        display: flex;
    flex-direction: column;
`

export const RequiredLabel = styled.label`
    &:after{
        content: '*';
        color: #e00000;
        display: inline-block;
    }
`
export const ErrorMessage = styled.span`
    border: 1px solid #e00000;
    padding: 8px;
    display: block;
    color: #e00000;
    margin-top: 8px;
    border-radius: 16px;
`

export const Tooltip = styled.span`
    background: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    left: 50%;
    margin-top: 16px;
    max-width: 400px;
    opacity: 0;
    padding: 0.5rem 1rem;
    pointer-events: none;
    position: absolute;
    text-align: left;
    top: 100%;
    -webkit-transform: translate(-50%, 10px);
    -ms-transform: translate(-50%, 10px);
    transform: translate(-50%, 10px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: opacity 0.2s 1s ease-in-out;
    -o-transition: opacity 0.2s 1s ease-in-out;
    transition: opacity 0.2s 1s ease-in-out;
    visibility: hidden;
    width: 100%;
    z-index: 10;
    position: relative;
`
export const TooltipSource = styled.div`
    &:hover{
        span{
            display: block;
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transform: translate(-50%, -50%);
        }   
    }
`

export const Input = styled.input`
    border-radius: 24px;
    border: 1px solid #CCCCCC;;
    width: 100%;
    color: #888888;
    position: relative;
    padding: 0 1.5em 0;
    display: block;
    background-color: white;
    font-size: 16px;
    background-clip: padding-box;
    min-height: 32px;
    box-sizing: border-box;
    &::placeholder {
    font-weight: 400;
    color: #888888;
    &:hover {
    border: 2px solid #CCCCCC;;
    min-height: 32px;
    box-sizing: border-box;
    padding: 0 calc(1.5em - 1px) 0;

    &.input-search-after {
      padding: 17px calc(1.5em - 1px) 0;
      @media screen and (min-width: $resolutionDesktop) {
        padding: 18px calc(1.5em - 1px) 0;
      }
      background: url(/assets/icons/search.svg);
      background-repeat: no-repeat;
      background-position-x: calc(100% - 23px);
      background-position-y: calc(50% - 1px);
      background-size: 16px;
    }
  }
  }
`

export const A11YLabel = styled.label`
    padding: 12px;
    cursor: pointer;
`

export const BorderdDiv = styled.div`
border:1px solid black;
padding:24px;
flex-direction: column;
display:flex;`

export const SmallCheckbox = styled.input`
width: 12px;
height: 12px;
cursor: pointer;
`
export const MediumCheckbox = styled.input`
width: 16px;
cursor: pointer;
height:16px;`

export const BigSearch = styled.label`
font-size: 28px;
margin-bottom:4px;
display: block;
`
export const ContrastButton = styled.button`
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
    background-color: #C70000;
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
    &:hover{
        background-color: #ff0000;
    }
    &:active{
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
    }
`