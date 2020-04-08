import styled, { css } from "styled-components";

const TAB_HEIGHT = 36;
const TAB_WIDTH = TAB_HEIGHT * 2;

export const Container = styled.div`
  width: ${TAB_WIDTH}px;
  border-right: solid 1px #f0f0f0;
`;

export const AnimContainer = styled.div<{ per: number }>`
  height: ${props => props.per * TAB_HEIGHT}px;
  width: ${TAB_WIDTH}px;
  overflow-y: hidden;
`;

export const MoveContainer = styled.div<{ per: number; page: number }>`
  transition: transform 200ms ease-in-out;

  transform: translateY(-${props => props.per * (props.page - 1) * TAB_HEIGHT}px);
`;

const AfterContent = css`
  &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    background: #1890ff;
    top: 0;
    right: 0;
  }
`;

export const Tab = styled.button<{ active?: boolean }>`
  height: ${TAB_HEIGHT}px;
  width: ${TAB_WIDTH}px;
  margin: 0;
  padding: 0;
  border: none;
  appearance: none;
  outline: none;
  position: relative;

  ${props => (props.active ? AfterContent : null)}
`;

export const Prev = styled(Tab)`
  &:before {
    content: "\f106";
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
  }
`;

export const Next = styled(Tab)`
  &:before {
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
  }
`;
