import { Text, Circle } from 'react-konva';


const CircleText = (props: { x: number, y: number, width: number, height: number, text: string }) => {


  return (
    <>
      <Circle
        x={props.x}
        y={props.y}
        width={props.width}
        height={props.height}
        fill="#fff" strokeWidth={3} stroke="#000"
        offsetX={-props.width / 2}
        offsetY={-props.height / 2}

      ></Circle>
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

export default CircleText