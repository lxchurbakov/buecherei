import React from 'react';
import styled, { css } from 'styled-components';

import theme from '/libs/theme';
import { PropsOf, KeyOf } from '/libs/utils';

export type ButtonType = 'primary' | 'secondary' | 'text';
export type ButtonSize = KeyOf<typeof theme.font.size>;

const Wrap = styled.div<{ size: ButtonSize; disabled?: boolean; color: string, type: ButtonType }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: ${props => `${.7 * theme.font.size[props.size]}px ${theme.font.size[props.size]}px`};
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  will-change: transform;

  font-family: ${theme.font.family};
  font-size: ${props => theme.font.size[props.size]}px;
  font-weight: bold;

  cursor: pointer;
  user-select: none;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }

  ${props => props.disabled && css`
    opacity: .6;
    pointer-events: none;
  `};

  ${props => props.type === 'primary' && css`
    background: ${props.color};
    color: ${theme.colors.white};
  `};

  ${props => props.type === 'secondary' && css`
    border: 1px solid ${props.color};
    color: ${props.color};
  `};

  ${props => props.type === 'text' && css`
    color: ${props.color};
  `};
`;

export type Props = {
  size?: ButtonSize;
  color?: string;
  type?: ButtonType;
  children: React.ReactNode;
  disabled?: boolean;
};

export default ({ size = 'normal', color = theme.colors.primary, type = 'primary', children, disabled, ...props }: Props & Partial<PropsOf<typeof Wrap>>) => {
  return (
    <Wrap size={size} type={type} color={color} disabled={disabled} {...props}>
      {children}
    </Wrap>
  );
};
