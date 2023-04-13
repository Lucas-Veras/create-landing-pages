import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';
import { theme } from '../../styles/theme';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: red;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 0.3s ease-in-out;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-bottom: 0;
      margin-top: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        margin-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
      z-index: 6;
      position: fixed;
      top: 2rem;
      right: 2rem;
      width: 4rem;
      height: 4rem;
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      border: none;
      display: none;

      @media ${theme.media.lteMedium} {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      > svg {
          width: 2.5rem;
          height: 2.5rem;
      }
   `}
`;
