import styled from "styled-components";
import { SmallButton } from "../buttons/SmallButton";

const CounterWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;

    span {
        text-align: center;
    }
`;

export const Counter = ({value, onChange, max, min}) => <CounterWrapper>
    <SmallButton disabled={value === min} aria-label="Decrease cart" onClick={() => onChange(value - 1)}>-</SmallButton>
    <span>{value}</span>
    <SmallButton disabled={value === max} aria-label="Increase cart" onClick={() => onChange(value + 1)}>+</SmallButton>
</CounterWrapper>;