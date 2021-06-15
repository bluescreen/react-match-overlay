import { Text, Rect } from 'react-konva';


const RoundedCorner = (props: { x: number, y: number, width: number, height: number, text: string, border: number, radius?: number }) => {


  return (
    <>
      <Rect
        x={props.x}
        y={props.y}
        width={props.width}
        height={props.height}
        fill="#fff" strokeWidth={props.border} stroke="#000"
        cornerRadius={props.radius ?? 8}
      ></Rect>

      <Text text={props.text}
        x={props.x}
        y={props.y + 2}
        fontSize={props.width * 0.8}
        width={props.width}
        height={props.height}
        align="center"
        verticalAlign="middle"
        fontStyle="bold"></Text>
    </>
  )
}

export default RoundedCorner