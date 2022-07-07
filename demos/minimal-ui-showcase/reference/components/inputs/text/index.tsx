import React from 'react';
import styled, { css } from 'styled-components';

// import Loader from '/src/components/atoms/loader';
import theme from '/libs/theme';
// import { PropsOf } from '/src/types/utils';

export type InputState = 'idle' | 'invalid' | 'disabled' | 'valid';

const Wrap = styled.div`
  position: relative;
  width: 100%;
`;

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

  padding: 14px 18px;

  border: none;
  border-radius: 8px;
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.dark};

  transition: border 100ms ease;

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.primary};
  }

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
