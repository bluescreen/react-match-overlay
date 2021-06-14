import { TextConfig } from "konva/lib/shapes/Text";
import { useEffect, useState, createRef, useRef } from "react";
import { Stage, Layer, Text, Image, Circle, RegularPolygon } from 'react-konva';
import { useResizeDetector } from 'react-resize-detector';

import Match from '../models/Match'
import Ippons from "./Ippons";

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
    const offsetY = (overlayHeight / 2) - 10;

    const ratioX = stageWidth / origWidth;

    const fontSizeName = 25 * stageWidth / origWidth;
    const fontSizeNumber = (20 * stageWidth / origWidth) + 5;
    const ipponWidth = 25 * stageWidth / origWidth;
    const ipponPaddingX = 12 * stageWidth / origWidth
    const ipponBorder = 3 * stageWidth / origWidth
    const ipponFontSize = 18 * stageWidth / origWidth

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
    const ipponParams = {
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

    const texts: TextConfig[] = [
        { text: data.Shiaijo, x: 50, y: 50, fontSize: 50, fontStyle: "bold" },

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
            fill: '#fff',
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
                    <Ippons items={ipponsWhite} width={ipponWidth} border={ipponBorder}></Ippons>
                    <Ippons items={ipponsRed} width={ipponWidth} border={ipponBorder}></Ippons>
                </Layer>
            </Stage>
        </div>
    )
}

export default Shiaijo