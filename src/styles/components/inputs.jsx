import styled from 'styled-components';

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