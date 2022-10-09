import { FC } from "react"
import styled from "styled-components"

// === Component Prop
type Props = {
  text: string
}

// === Component
export const Label: FC<Props> = (props) => {
  return <TextLabel>{props.text}</TextLabel>
}

// === Style
const TextLabel = styled.p`
  color: darkorange;
  font-size: 18px;
  font-weight: bold;
`
