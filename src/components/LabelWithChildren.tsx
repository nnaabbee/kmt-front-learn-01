import { FC, PropsWithChildren } from "react"
import styled from "styled-components"

type Props = {}

/**
 * 要素を受け取るコンポーネントのサンプル
 * `PropsWithChildren`を使用する
 * @param props
 * @returns h1相当のラベルを返す
 */
export const LabelWithChildren: FC<Props & PropsWithChildren> = (props) => {
  return <Label>{props.children}</Label>
}

const Label = styled.h1`
  color: red;
`
