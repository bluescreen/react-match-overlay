import { TextConfig } from "konva/lib/shapes/Text";
import { useEffect, useState, createRef, useRef } from "react";
import { Stage, Layer, Text, Image, Circle,Rect } from 'react-konva';
import { useResizeDetector } from 'react-resize-detector';

import Match from '../models/Match'
import { TeamMatch } from "../models/TeamMatch";
import Ippons from "./Ippons";

const origWidth = 1200;
//const origHeight = 540;


const Shiaijo = (props: { data: Match|TeamMatch }) => {
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
    const ratioX = stageWidth / origWidth;


    const overlayHeight = 144*ratioX;

    const offsetX = 180 * ratioX;
    const numberOffsetX = 40 * ratioX;
    const offsetY = (overlayHeight / 2);


    const fontSizeName = 25 * ratioX;
    const fontSizeNumber = (20 * ratioX) + 5;
    
    const ipponWidth = 30 * ratioX;
    const ipponPaddingX = 8 * ratioX
    const ipponBorder = 3 * ratioX
    const ipponFontSize = 22 * ratioX

    const shiaijoCircleWidth = 35*  ratioX
    const shiaijoCirclePadding = 10*  ratioX

    const imageProps = {
        x: 0,
        y: (height ?? 0) - overlayHeight,
        image: image,
        width: width,
        height: overlayHeight
    }

    const konvaLayer = useRef<any>()
    //const textWidth = konvaLayer.current?.getContext().measureText("some text").width;

    let textNameWidth, textNumberWidth = 0;
    const g = konvaLayer.current?.getContext();
    if (g) {
        g.font = fontSizeName + 'px sans-serif';
        textNameWidth = g.measureText(data.NameTareRed).width
        
        g.font = fontSizeNumber + 'px bold sans-serif';
        textNumberWidth = g.measureText(data.NumberTareRed).width
    }

    const middle = stageWidth / 2;
    const ipponY = stageHeight - offsetY;
    const ipponParams:TextConfig = {
        fill: "#000",
        fontSize: ipponFontSize,
        fontStyle: "bold",
        width: ipponWidth,
        height: ipponWidth + (ipponWidth / 15),
        align: "center",
        verticalAlign: "middle"
    }

    const ipponsWhite: TextConfig[] = [data.IpponWhite1, data.IpponWhite2, data.HansokuWhite].filter((hit) => hit).map((hit, i) => {
        return {
            x: middle - ((ipponWidth * i) + ipponWidth + (i * ipponPaddingX) + ipponPaddingX),
            y: ipponY,
            text: hit,
            ...ipponParams
        }
    });
    const ipponsRed: TextConfig[] = [data.IpponRed1, data.IpponRed2, data.HansokuRed].filter((hit) => hit).map((hit, i) => {
        return {
            x: middle + (ipponWidth * i) + (i * ipponPaddingX) + ipponPaddingX,
            y: ipponY,
            text: hit,
            ...ipponParams
        }
    });

    const shadowParams = {
        shadowColor: 'black',
            shadowBlur: 0.5,
            shadowOffset: { x: 1.5, y: 1.5 },
            shadowOpacity: 0.5
    }

    const texts: TextConfig[] = [

        // RED
        {
            x: stageWidth - offsetX - textNameWidth,
            y: stageHeight - offsetY,
            text: data.NameTareRed,
            fontSize: fontSizeName,
            fill: '#fff',
            ...shadowParams
        },

        {
            x: stageWidth - numberOffsetX - textNumberWidth,
            y: stageHeight - offsetY,
            text: data.NumberTareRed,
            fontSize: fontSizeNumber,
            fontStyle: "bold",
            fill: '#fff',
            ...shadowParams
        },


        // WHITE
        {
            x: offsetX,
            y: stageHeight - offsetY,
            text: data.NameTareWhite,
            fontSize: fontSizeName,
            fill: '#fff',
            ...shadowParams
        },
        {
            x: numberOffsetX,
            y: stageHeight - offsetY,
            text: data.NumberTareWhite,
            fontSize: fontSizeNumber,
            fontStyle: "bold",
            fill: '#fff',
            ...shadowParams
        }
    ];

   
    return (
        <div className="h-100" ref={targetRef}>
            <Stage width={width} height={height}>
                <Layer>
                    <Rect x={0} y={shiaijoCirclePadding} width={160*ratioX} height={30*ratioX} stroke="#000" strokeWidth={1} fill="#fff"></Rect>
                    <Text fontSize={20*ratioX} x={shiaijoCirclePadding} y={shiaijoCirclePadding+5*ratioX} text={"Fight "+data.Fight}></Text>
                    <Text fontSize={20*ratioX} x={shiaijoCirclePadding + 80*ratioX} y={shiaijoCirclePadding+5*ratioX} text={"Pool "+data.Pool}></Text>
                </Layer>

                <Layer>
                    <Circle x={stageWidth - shiaijoCirclePadding - shiaijoCircleWidth} y={shiaijoCirclePadding} width={shiaijoCircleWidth} height={shiaijoCircleWidth}
                        fill="#fff" strokeWidth={3} stroke="#000"
                        offsetX={-shiaijoCircleWidth / 2}
                        offsetY={-shiaijoCircleWidth / 2}
                        
                    ></Circle>
                    <Text text={data.Shiaijo} x={stageWidth - shiaijoCirclePadding - shiaijoCircleWidth}
                        y={shiaijoCirclePadding+2} fontSize={shiaijoCircleWidth*0.8}
                        width={shiaijoCircleWidth}
                        height={shiaijoCircleWidth}
                        align="center"
                        verticalAlign="middle"
                        fontStyle="bold"></Text>
                </Layer>

                <Layer ref={konvaLayer}>
                    <Image {...imageProps}></Image>
                </Layer>

                <Layer>
                    {texts.map((textProps, i) => <Text key={i} {...textProps} ></Text>)}
                    <Ippons items={ipponsWhite} width={ipponWidth} border={ipponBorder}></Ippons>
                    <Ippons items={ipponsRed} width={ipponWidth} border={ipponBorder}></Ippons>
                </Layer>
            </Stage>
        </div>
    )
}

export default Shiaijo