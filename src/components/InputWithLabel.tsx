import { FC } from "react"
import styled from "styled-components"

type Props = {
  label: string
  value: string
  onChangeHandler: (changedValue: string) => void
}

export const InputWithLabel: FC<Props> = (props) => {
  return (
    <InputWithLabelWrapper>
      <p>{props.label}</p>
      <input type="text" defaultValue={props.value} onChange={(event) => props.onChangeHandler(event.target.value)} />
    </InputWithLabelWrapper>
  )
}

const InputWithLabelWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`
