import { TextConfig } from "konva/lib/shapes/Text";
import { useEffect, useState, createRef, useRef } from "react";
import { Stage, Layer, Text, Image, Circle } from 'react-konva';
import { useResizeDetector } from 'react-resize-detector';

import Match from '../models/Match'

const origWidth = 960;
const origHeight = 540;


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

    const stageWidth = width ?? 0;
    const stageHeight = height ?? 0;

    const overlayHeight = 144;

    const offsetX = 180 * stageWidth / origWidth;
    const numberOffsetX = 40 * stageWidth / origWidth;
    const offsetY = (overlayHeight / 2)-10;

    const fontSizeName = 25 * stageHeight/origHeight;
    const fontSizeNumber = (20 * stageHeight / origHeight) + 5;
    const ipponWidth = 35 * stageWidth / origWidth;


    
    const imageProps = {
        x: 0,
        y: (height ?? 0) - overlayHeight,
        image: image,
        width: width,
    }

    const konvaLayer = useRef<any>()
    //const textWidth = konvaLayer.current?.getContext().measureText("some text").width;

    let textNameWidth, textNumberWidth = 0;
    const g = konvaLayer.current?.getContext();
    if (g) {
        g.font = fontSizeName + 'px sans-serif';
        textNameWidth = g.measureText(data.NameTareWhite).width

        g.font = fontSizeNumber + 'px bold sans-serif';
        textNumberWidth = g.measureText(data.NumberTareWhite).width
    }

    const middle = stageWidth / 2;
    const ipponY = stageHeight - offsetY;

    const ipponsWhite: TextConfig[] = [data.IpponWhite1, data.IpponWhite2, data.HansokuWhite].map((hit,i) => {
        return {
            x:  middle - (ipponWidth * (i+1)),
            y: ipponY,
            text: hit,
            fill: "#000",
            fontSize: 20
        }
    });
    const ipponsRed: TextConfig[] = [data.IpponRed1, data.IpponRed2, data.HansokuRed].map((hit,i) => {
        return {
            x: middle + (ipponWidth* (i+1)),
            y: ipponY,
            text: hit,
            fill: "#000",
            fontSize: 20

        }
    });

    const texts: TextConfig[] = [
        { text:data.Shiaijo, x: 50, y: 50, fontSize: 50, fontStyle:"bold" },

        // RED
        {
            x: stageWidth - offsetX - textNameWidth,
            y: stageHeight - offsetY,
            text: data.NameTareRed,
            fontSize: fontSizeName,
            fill: '#fff'
        },
        
        {
            x: stageWidth - numberOffsetX - textNumberWidth,
            y: stageHeight - offsetY,
            text: data.NumberTareRed,
            fontSize: fontSizeNumber,
            fontStyle: "bold",
            fill: '#fff'
        },
        
        
        // WHITE
        

        {
            x: offsetX,
            y: stageHeight - offsetY,
            text: data.NameTareWhite,
            fontSize: fontSizeName,
            fill: '#fff'
        },
        {
            x: numberOffsetX,
            y: stageHeight - offsetY,
            text: data.NumberTareWhite,
            fontSize: fontSizeNumber,
            fontStyle: "bold",
            fill: '#fff'
        },
    ];
     


    return (
        <div className="h-100" ref={targetRef}>
            <Stage width={width} height={height}>
                <Layer ref={konvaLayer}>
                    <Image {...imageProps}></Image> 

                    {texts.map((textProps, i) => <Text key={i} {...textProps} ></Text>)}


                    {ipponsWhite.map((textProps, i) => <Text key={i} {...textProps} ></Text>)}
                    {ipponsRed.map((textProps, i) => <>
                        <Circle x={textProps.x} y={textProps.y} width={ipponWidth} height={ipponWidth} fill="#fff"></Circle><Text key={i} {...textProps} ></Text>
                    </>)}

                </Layer>
            </Stage>
        </div>
    )
}

export default Shiaijo