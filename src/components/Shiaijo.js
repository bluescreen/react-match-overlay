import { useEffect, useRef } from "react";

const Shiaijo = (props) => {
    const canvasRef = useRef(null);
    const wrapper = useRef(null);
    const data = props.data;

    console.log(props)

   

    useEffect(() => {
        const renderOverlay = () => {
            wrapper.current.width = document.width / 2

            const canvas = canvasRef.current    
            canvas.width  = wrapper.current.offsetWidth;
            canvas.height = wrapper.current.offsetHeight;

            const width = canvas.width
            const height = canvas.height
    
            const g      = canvas.getContext("2d");

            g.clearRect(0, 0, width, height);
            g.fillStyle = '#fff';
            g.fillRect(0, 0, width, height);

            g.font = '14px sans-serif';
            g.strokeStyle = '#000';
            g.fillStyle = '#000';
            g.fillText(data.NameTareWhite, 120, height-30);
            g.fillText(data.NameTareRed, width - 150, height-30);

            const image = new Image;
            image.src = "trans_overlay.png";
            image.onload = () => {
                g.drawImage(image, 0, 0, width, height)
            }
            //tree.draw(props.type, data);
            //props.onTreeInit(canvas);
        }
        renderOverlay()
        window.addEventListener('resize', renderOverlay)
    }, [data]);

    return (
        <div>
            <div id="canvas_wrapper" className="shiaijo" ref={wrapper}>
                {<canvas id="canvas1" ref={canvasRef} className="canvas resizeable mt-4" width="600" height="300"></canvas>}
            </div>
        </div>
    )
}

export default Shiaijo