import React, { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { Container, Button, Menu, OptionsGroup, Option } from "./styles";

export interface OptionType {
  label: string;
  value: string | number;
}

interface Props {
  options: OptionType[];
  value?: OptionType;
  onChange?: (option: OptionType) => void;
}

export const Selector = (props: Props) => {
  const { options, value, onChange } = props;
  const [isFocus, setIsFocus] = useState(false);
  const onClick = useCallback(
    (option: OptionType) => {
      setIsFocus(false);
      onChange && onChange(option);
    },
    [onChange],
  );
  const isActive = useCallback((option: OptionType) => option.value === value?.value, [value]);
  const buttonLabel = useMemo(() => value?.label || "click", [value]);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: Event) => {
      // Blurを制御したい親Elementのselector(クラス)を作る
      const selector = ref.current?.className
        .split(" ")
        .map(s => `.${s}`)
        .join();

      // eはクリックしたところから発火されるイベント
      // eをclosestで比較し,eの親にrefが含まれるか確認する
      const blur = !(e.target as HTMLElement).closest(selector || "");

      // 親にrefが含まれていなければフォーカスを外す
      if (blur) setIsFocus(false);
    };

    document.addEventListener("click", handler);
    return () => document.addEventListener("click", handler);
  }, []);

  return (
    <Container ref={ref}>
      <Button onClick={() => setIsFocus(f => !f)}>{buttonLabel}</Button>
      <Menu unmountOnExit timeout={300} in={isFocus}>
        <OptionsGroup>
          {options.map(option => (
            <Option key={option.label} onClick={() => onClick(option)} active={isActive(option)}>
              {option.label}
            </Option>
          ))}
        </OptionsGroup>
      </Menu>
    </Container>
  );
};
