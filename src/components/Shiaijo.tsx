import { TextConfig } from "konva/lib/shapes/Text";
import { useEffect, useState, createRef, useRef } from "react";
import { Stage, Layer, Text, Image,Rect } from 'react-konva';
import { useResizeDetector } from 'react-resize-detector';

import Match from '../models/Match'
import { TeamMatch } from "../models/TeamMatch";
import CircleText from "./CircleTest";
import RoundedCorner from "./RoundedCorner";
import Ippons from "./Ippons";
import ISO from 'iso-3166-1';

const origWidth = 1200;
//const origHeight = 540;


const Shiaijo = (props: { data: any }) => {

    const targetRef = createRef<HTMLDivElement>()
    const { width, height } = useResizeDetector({ targetRef });
    const [image, setImage] = useState()
    const [imageFlagRed, setImageFlagRed] = useState()
    const [imageFlagWhite, setImageFlagWhite] = useState()
    const konvaLayer = useRef<any>()
    const data = props.data;

    const mapNumberToFlag = (tareNumber: string) => {
        const countryMatch = tareNumber.match(/.[A-Z]*/) ?? []
        const countryId:string = countryMatch[0];

        const entry = ISO.whereAlpha3(countryId);
        const entryName = countryId == 'GER' ? 'de' : entry?.alpha2.toLowerCase()

        return "/flags/big/"+entryName+".gif"
    }

    /*
    data.TeamRed = "Germany"
    data.TeamWhite = "Austria"
    data.FightNumber = 5;
    data.SetWhite = 3;
    data.WinsWhite = 1;
    data.SetRed = 4;
    data.WinsRed = 2;
    data.TeamHikiwake = 1;
    */
    

    useEffect(() => {    
        const imageObj: HTMLImageElement = new window.Image();
        imageObj.src = "/trans_overlay_1.png";
        imageObj.onload = () => {
            setImage(imageObj as any)
        }

        const flagRed: HTMLImageElement = new window.Image();
        flagRed.src = mapNumberToFlag(data.NumberTareRed);
        flagRed.onload = () => {
            setImageFlagRed(flagRed as any)
        }

        const flagWhite: HTMLImageElement = new window.Image();
        flagWhite.src = mapNumberToFlag(data.NumberTareWhite);
        flagWhite.onload = () => {
            setImageFlagWhite(flagWhite as any)
        }
    }, [])

    const stageWidth = width ?? 0;
    const stageHeight = height ?? 0;
    const middle = stageWidth / 2;
    const ratioX = stageWidth / origWidth;


    const overlayHeight = 144*ratioX;

    const nameOffsetX = 220 * ratioX;
    const numberOffsetX = 50 * ratioX;
    const offsetY = 45 * ratioX;


    const fontSizeName = 25 * ratioX;
    const fontSizeTeam = 25 * ratioX;
    const fontSizeNumber = (20 * ratioX) + 5;
    
    const ipponWidth = 30 * ratioX;
    const ipponPaddingX = 12 * ratioX
    const ipponBorder = 3 * ratioX
    const ipponFontSize = 22 * ratioX
    const ippponOffsetY = ((data.FightNumber) ? 45 : 50) * ratioX;
    const ipponY = stageHeight - ippponOffsetY;

    const pointsOffsetY = ipponY - ipponWidth - 5 * ratioX;
    const pointsRadius = 8 * ratioX;

    const shiaijoCircleWidth = 55 *  ratioX
    const shiaijoCirclePadding = 10 *  ratioX

    const imageProps = {
        x: 0,
        y: (height ?? 0) - overlayHeight,
        image: image,
        width: width,
        height: overlayHeight
    }

    const flagWidth = 80 * ratioX;
    const flagHeight = 40 * ratioX;
    const flagY = stageHeight - offsetY - 90 * ratioX;

    const imageFlagRedProps = {
        x: stageWidth - numberOffsetX - flagWidth + (10 * ratioX),
        y: flagY,
        image: imageFlagRed,
        width: flagWidth,
        height: flagHeight,
    }

    const imageFlagWhiteProps = {
        x: numberOffsetX,
        y: flagY,
        image: imageFlagWhite,
        width: flagWidth,
        height: flagHeight
    }

    let textNameWidth, textNumberWidth, textTeamWidth = 0;
    const g = konvaLayer.current?.getContext();
    if (g) {
        g.font = fontSizeName + 'px sans-serif';
        textNameWidth = g.measureText(data.NameTareRed).width
        
        g.font = fontSizeNumber + 'px bold sans-serif';
        textNumberWidth = g.measureText(data.NumberTareRed).width

        g.font = fontSizeTeam + 'px bold sans-serif';
        textTeamWidth = g.measureText(data.TeamRed).width
    }

   
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
            x: middle - ((ipponWidth * i) + ipponWidth + (i * ipponPaddingX) + ipponPaddingX* 2),
            y: ipponY,
            text: hit,
            ...ipponParams
        }
    });

    const ipponsRed: TextConfig[] = [data.IpponRed1, data.IpponRed2, data.HansokuRed].filter((hit) => hit).map((hit, i) => {
        return {
            x: middle + (ipponWidth * i) + (i * ipponPaddingX) + ipponPaddingX *2,
            y: ipponY,
            text: hit,
            ...ipponParams
        }
    });

    const pointsWhite: TextConfig[] = [data.SetWhite, data.WinsWhite].filter((hit) => hit).map((hit, i) => {
        return {
            x: middle - ((ipponWidth * i) + ipponWidth + (i * ipponPaddingX) + ipponPaddingX * 2),
            y: pointsOffsetY,
            text: hit,
            type: i > 0 ? 'rounded' : 'circle',
            radius: pointsRadius,
            ...ipponParams
        }
    });
    const pointsRed: TextConfig[] = [data.SetRed, data.WinsRed].filter((hit) => hit).map((hit, i) => {
        return {
            x: middle + (ipponWidth * i) + (i * ipponPaddingX) + ipponPaddingX * 2,
            y: pointsOffsetY,
            text: hit,
            type: i > 0 ? 'rounded' : 'circle',
            radius: pointsRadius,
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
            x: stageWidth - nameOffsetX - textNameWidth,
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
        {
            x: stageWidth - numberOffsetX - textTeamWidth,
            y: stageHeight - offsetY - 40 * ratioX,
            text: data.TeamRed,
            fontSize: fontSizeNumber,
            fontStyle: "bold",
            fill: '#fff',
            ...shadowParams
        },


        // WHITE
        {
            x: nameOffsetX,
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
        },
        {
            x: numberOffsetX,
            y: stageHeight - offsetY -40 * ratioX,
            text: data.TeamWhite,
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
                    <Rect x={0} y={shiaijoCirclePadding} width={(data.FightNumber ? 220 : 160)*ratioX} height={30*ratioX} stroke="#000" strokeWidth={1} fill="#fff"></Rect>
                    <Text fontSize={20*ratioX} x={shiaijoCirclePadding} y={shiaijoCirclePadding+5*ratioX} text={"Fight "+data.Fight}></Text>
                    <Text fontSize={20*ratioX} x={shiaijoCirclePadding + 80*ratioX} y={shiaijoCirclePadding+5*ratioX} text={"Pool "+data.Pool}></Text>
                    {data.FightNumber && <Text fontSize={20*ratioX} x={shiaijoCirclePadding + 160*ratioX} y={shiaijoCirclePadding+5*ratioX} text={"# "+data.FightNumber}></Text>}
                </Layer>

                <Layer>
                    <CircleText text={data.Shiaijo}
                        x={stageWidth - shiaijoCirclePadding - shiaijoCircleWidth}
                        y={shiaijoCirclePadding}
                        width={shiaijoCircleWidth}
                        height={shiaijoCircleWidth}></CircleText>
                </Layer>

                <Layer ref={konvaLayer}>
                    <Image {...imageProps}></Image>
                </Layer>

                <Layer>
                    {data.TeamHikiwake && <RoundedCorner text={data.TeamHikiwake}
                        x={middle - ipponWidth / 2}
                        y={pointsOffsetY}
                        width={ipponWidth}
                        height={ipponWidth}
                        border={ipponBorder}
                        radius={8 * ratioX}></RoundedCorner>}
                    
                    <Image {...imageFlagWhiteProps}></Image>
                    <Image {...imageFlagRedProps}></Image>

                    {texts.map((textProps, i) => <Text key={i} {...textProps} ></Text>)}
                    <Ippons items={ipponsWhite} width={ipponWidth} border={ipponBorder}></Ippons>
                    <Ippons items={ipponsRed} width={ipponWidth} border={ipponBorder}></Ippons>
                    
                    
                    <Ippons items={pointsWhite} width={ipponWidth} border={ipponBorder}></Ippons>
                    <Ippons items={pointsRed} width={ipponWidth} border={ipponBorder}></Ippons>
                </Layer>
            </Stage>
        </div>
    )
}

export default Shiaijo