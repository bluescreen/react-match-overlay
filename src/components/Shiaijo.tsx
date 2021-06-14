import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Text,Image } from 'react-konva';
import Match from '../models/Match'


const Shiaijo = (props: {data: Match}) => {
    const canvasRef = useRef(null);
    const wrapper = useRef(null);
    const [image, setImage] = useState()
    const data = props.data;
    /*
    useEffect(() => {
        

        const clearRect = (g, width, height) => {
            g.clearRect(0, 0, width, height);
            g.fillStyle = '#fff';
            g.fillRect(0, 0, width, height);
        }

        const renderOverlay = () => {

            const textScale = 0.6
            wrapper.current.width = document.width / 2

            const canvas = canvasRef.current    
            canvas.width = canvas.clientWidth * 2
            canvas.height = canvas.clientHeight * 2

            //canvas.width  = wrapper.current.offsetWidth;
            //canvas.height = wrapper.current.offsetHeight;

            const width = canvas.width /2
            const height = canvas.height /2   
            const g      = canvas.getContext("2d");
            g.scale(2, 2)
            clearRect(g, width, height)
 
            

            g.font = 36*textScale+'px sans-serif';
            g.strokeStyle = '#000';
            g.fillStyle = '#000';

            g.fillText(data.Shiaijo, 50, 50);


            g.font = 24*textScale+'24px sans-serif';
            
            const offsetX = 180*textScale
            const offsetY = 30*textScale
            const textWidthRed = g.measureText(data.NameTareRed).width
            
            g.fillText(data.NameTareWhite, offsetX, height-offsetY);
            g.fillText(data.NameTareRed, width - offsetX - textWidthRed, height-offsetY);

            g.font = 18*textScale+'px sans-serif';
            const numberOffsetX = 20*textScale
            const numberWidthRed = g.measureText(data.NumberTareRed).width
            g.fillText(data.NumberTareWhite, numberOffsetX, height - offsetY)
            g.fillText(data.NumberTareRed, width - numberOffsetX -numberWidthRed, height - offsetY)

            
            image.onload = () => {
                g.drawImage(image, 0, 0, width, height)
            }
        }
        renderOverlay()
        //window.addEventListener('resize', renderOverlay)
    }, [data]);*/

    useEffect(() => {
        const imageObj = new window.Image();
        imageObj.src = "/trans_overlay.png";
        imageObj.onload = () => {
            setImage(imageObj)
        }
    }, [])

    const stageWidth = 960;
    const stageHeight = 540;


    return (
        <Stage width={stageWidth} height={stageHeight}>
            <Layer>
                <Text text={data.Shiaijo} x="50" y="50" fontSize="30" />
                <Image image={image} x="0" y="0" width={stageWidth}></Image>
            </Layer>
        </Stage>
    )
}

export default Shiaijo