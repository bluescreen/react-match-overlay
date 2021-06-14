import { useEffect, useState, createRef } from "react";
import { Stage, Layer, Text, Image } from 'react-konva';
import { useResizeDetector } from 'react-resize-detector';

import Match from '../models/Match'


const Shiaijo = (props: { data: Match }) => {
    const targetRef = createRef<HTMLDivElement>()
    const [image, setImage] = useState()
    const data = props.data;
    const { width, height } = useResizeDetector({ targetRef });
    
    console.log(width, height)

    useEffect(() => {
        const imageObj: HTMLImageElement = new window.Image();
        imageObj.src = "/trans_overlay.png";
        imageObj.onload = () => {
            setImage(imageObj as any)
        }    
    }, [])

    const imageProps = {
        x: 0,
        y: 0,
        image: image,
        width: width
    }

    return (
        <div ref={targetRef}>
        <Stage width={width} height={height}>
            <Layer>
                <Text text={data.Shiaijo} x={50} y={50} fontSize={30} />
                <Image {...imageProps}></Image>
            </Layer>
            </Stage>
        </div>
    )
}

export default Shiaijo