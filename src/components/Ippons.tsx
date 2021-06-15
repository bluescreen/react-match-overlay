import { TextConfig } from "konva/lib/shapes/Text"
import { Circle, Rect, RegularPolygon, Text } from 'react-konva';


const Ippons = (props: { items: TextConfig[], width: number, border: number }) => {
  const ipponWidth = props.width;
  const hansokuWidth = props.width * 0.5;
  const ipponBorder = props.border;

  return <>
    {props.items.map((textProps: TextConfig, i: number) =>
      textProps.text === 'h' ?
        <>
          <RegularPolygon fill="#f00" x={textProps.x} y={textProps.y} offsetX={-ipponWidth / 2} offsetY={(-ipponWidth / 2)-hansokuWidth*0.2}  sides={3} radius={hansokuWidth}></RegularPolygon>
        </>
        :
        <>
          {textProps.type === 'rounded' ?
            <Rect x={textProps.x}
             y={textProps.y} width={ipponWidth} cornerRadius={textProps.radius}
              height={ipponWidth} stroke="#000" strokeWidth={ipponBorder} fill="#fff"></Rect>
            :
            <Circle x={textProps.x}
              offsetX={-ipponWidth / 2}
              offsetY={-ipponWidth / 2} y={textProps.y} width={ipponWidth}
              height={ipponWidth} stroke="#000" strokeWidth={ipponBorder} fill="#fff"></Circle>}
            <Text key={i} {...textProps} ></Text>
        </>)}
    </>  
}

export default Ippons