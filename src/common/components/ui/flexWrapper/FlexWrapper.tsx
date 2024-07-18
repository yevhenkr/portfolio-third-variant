import styled from 'styled-components'

type FlexWrapperType = {
  align_i?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'| 'space-around' | 'space-between'
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  gap?: string
  justify?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  display?: 'inline-block' | 'inline' | 'flex' | "grid"
  flex?: string
  max_width?: string
  min_width?: string
  width?: string
  border?: string
  borderRadius?: string
  margin?: string
  marginRight?: string
  padding?: string
  boxShadow?: string
  backgroundColor?: string
}

export const FlexWrapper = styled.div<FlexWrapperType>`
    display: ${props => props.display || ''};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align_i || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    flex: ${props => props.flex || ''};
    gap: ${props => props.gap || '10px'};
    min-width: ${props => props.min_width || 'auto'};
    max-width: ${props => props.max_width || 'auto'};
    width: ${props => props.width || 'auto'};
    border: ${props => props.border || ''};
    border-radius: ${props => props.borderRadius || ''};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    box-shadow: ${props => props.boxShadow || ""};
    background-color: ${props => props.backgroundColor || ""};
`
