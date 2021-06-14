import { TextConfig } from "konva/lib/shapes/Text"
import { Circle, RegularPolygon, Text } from 'react-konva';


const Ippons = (props: { items: TextConfig[], width: number, border: number }) => {
  const ipponWidth = props.width;
  const hansokuWidth = props.width * 0.5;
  const ipponBorder = props.border;

  return <>
    {props.items.map((textProps: TextConfig, i: number) =>
      textProps.text === 'h' ?
        <>
          <RegularPolygon fill="#000" x={textProps.x} y={textProps.y} offsetX={-ipponWidth / 2} offsetY={(-ipponWidth / 2)-hansokuWidth*0.2}  sides={3} radius={hansokuWidth}></RegularPolygon>
        </>
        :
        <>
          <Circle x={textProps.x}
            offsetX={-ipponWidth / 2}
            offsetY={-ipponWidth / 2} y={textProps.y} width={ipponWidth}
            height={ipponWidth} stroke="#000" strokeWidth={ipponBorder} fill="#fff"></Circle>
          <Text key={i} {...textProps} ></Text>
        </>)}
    </>  
}

export default Ippons