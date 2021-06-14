import { useEffect, useState, createRef } from "react";
import { Stage, Layer, Text, Image } from 'react-konva';
import { useResizeDetector } from 'react-resize-detector';

import Match from '../models/Match'


const Shiaijo = (props: { data: Match }) => {
    const targetRef = createRef<HTMLDivElement>()
    const [image, setImage] = useState()
    const data = props.data;
    const { width, height } = useResizeDetector({ targetRef });

    useEffect(() => {
        const imageObj: HTMLImageElement = new window.Image();
        imageObj.src = "/trans_overlay_1.png";
        imageObj.onload = () => {
            setImage(imageObj as any)
        }
    }, [])

    const textScale = 1;
    const offsetX = 220 * textScale;
    const offsetY = 50 * textScale

    const overlayHeight = 144;
    const imageProps = {
        x: 0,
        y: (height ?? 0) - overlayHeight,
        image: image,
        width: width,
    }

    const stageWidth = width ?? 0;
    const stageHeight = height ?? 0;


    const texts = [
        { x: 50, y: 50, fontSize: 30 },
        {
            x: offsetX,
            y: stageHeight - offsetY,
            text: data.NameTareWhite,
            fontSize: 20
        },
        {
            x: stageWidth - offsetX,
            y: stageHeight - offsetY,
            text: data.NameTareWhite,
            fontSize: 20
        }
    ];


    return (
        <div className="h-100" ref={targetRef}>
            <Stage width={width} height={height}>
                <Layer>

                    <Text text={data.Shiaijo} x={50} y={50} fontSize={30} />
                    <Image {...imageProps}></Image>

                    {texts.map((textProps) => (<Text {...textProps} ></Text>))}

                </Layer>
            </Stage>
        </div>
    )
}

export default Shiaijo