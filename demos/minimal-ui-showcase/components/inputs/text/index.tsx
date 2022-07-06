import React from 'react';
import styled, { css } from 'styled-components';

// import Loader from '/src/components/atoms/loader';
import $theme from '/libs/theme';
// import { PropsOf } from '/src/types/utils';

console.log('todo - refactor text input');

export type InputState = 'idle' | 'invalid' | 'disabled' | 'valid';

const Wrap = styled.div`
  position: relative;
  width: 100%;
`;

const theme = {
  font: {
    family: $theme.font.family,
  },
  colors: {
    black: '#000',
    primary: 'red',
    grey: 'grey',
    'red': 'red',
    'green': 'green',
  }
}

const StyledInput = styled.input<{ state: InputState, nonEditable: boolean }>`
  font-family: ${theme.font.family};
  font-weight: 500;
  font-size: 16px;
  letter-spacing: .1px;

  box-sizing: border-box;
  display: block;
  width: 100%;
  max-width: unset;
  min-width: unset;
  // padding: 14px;



  // color: #2F3951;
  background: #f1f1f4;
  color: #29274F;
  border: none;
  border-radius: 4px;
  // border: 1px solid rgba(47, 57, 81, 0.1);
  // border-bottom: 2px solid ${props => props.nonEditable ? 'transparent' : theme.colors.black};
  // font-family: ${theme.font.family};
  transition: padding 100ms ease;
  padding: 10px 12px;

  &:focus {
    background: #f1f1f4;
    outline: none;
    // border: 1px solid ${theme.colors.primary}80;
    // border-bottom: 2px solid ${theme.colors.primary};
  }

  // text-align: center;

  // ${props => props.state === 'disabled' && css`
  //   pointer-events: none;
  //   color: ${theme.colors.grey};
  //   border: 1px solid ${theme.colors.grey}80;
  //   border-bottom: 2px solid ${theme.colors.grey};
  // `};
  //
  // ${props => props.state === 'invalid' && css`
  //   border: 1px solid ${theme.colors.red}80;
  //   border-bottom: 2px solid ${theme.colors.red};
  // `};
  //
  // ${props => props.state === 'valid' && css`
  //   border: 1px solid ${theme.colors.green}80;
  //   border-bottom: 2px solid ${theme.colors.green};
  // `};

  &::placeholder {
    font-style: italic;
  }
`;

const SuffixWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  z-index: 2;
  pointer-events: none;
`;

export type Props<T> = {
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
  filter?: ({ text }: { text: string }) => T;
  format?: (value: T) => string;
  state?: InputState;
  suffix?: React.ReactNode;
  loading?: boolean;
  nonEditable?: boolean;
};

export default <T,>({
  nonEditable = false, loading = false, suffix = null, state = 'idle', value, onChange, placeholder, format, filter, ...props
}: any) => {
// }: Props<T> & Pick<Partial<PropsOf<typeof Wrap>>, 'className' | 'style' | 'onFocus' | 'onBlur'>) => {
  const change = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value || '';
    const v = filter ? filter({ text }) : text;

    onChange(v as any);
  }, [onChange, filter]);

  const view = React.useMemo(() => format ? format(value) : String(value), [format, value]);

  return (
    <Wrap {...props}>
      <StyledInput state={state} placeholder={placeholder} value={view} onChange={nonEditable ? () => {} : change} nonEditable={nonEditable} />

      {loading && (
        <SuffixWrap>
          {/* <Loader style={{ transform: 'translateX(30px) scale(.3) ' }} /> */}
        </SuffixWrap>
      )}

      {suffix && !loading && (
        <SuffixWrap>
          {suffix}
        </SuffixWrap>
      )}
    </Wrap>
  );
};
