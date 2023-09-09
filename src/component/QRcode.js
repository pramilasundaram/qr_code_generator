
import React, { useState } from 'react';
import "./QRcode.css"
import QRCode from 'qrcode.react';
import { Button, Card, CardBody, FormGroup, Input, Label, Form } from 'reactstrap'

export default function QRcode() {
    const [data, setData] = useState('');
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [format, setFormat] = useState('png');
    const [foregroundColor, setForegroundColor] = useState('#000000');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    const downloadQR = () => {
        const canvas = document.getElementById("pramila");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "pramila.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };

    return (

        <div className='container' >
            <h1 align="center">QR Code Generator</h1>
            <Card
                body
                className="text-center"
            >
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="data">
                                Data
                            </Label>
                            <Input
                                id="data"
                                name="data"
                                placeholder=" enter ata"
                                type="text"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Width">
                                Width
                            </Label>
                            <Input
                                id="Width"
                                name="Width"
                                placeholder="Width"
                                type="number"
                                value={width}
                                onChange={(e) => setWidth(Number(e.target.value))}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="height">
                                height
                            </Label>
                            <Input
                                name="height"
                                placeholder="height"
                                type="number"
                                id="height"
                                value={height}
                                onChange={(e) => setHeight(Number(e.target.value))}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Format">
                                Format
                            </Label>
                            <select
                                className='box'
                                id="format"
                                value={format}
                                onChange={(e) => setFormat(e.target.value)}
                            >
                                <option value="png">PNG</option>
                                <option value="jpg">JPG</option>
                                <option value="svg">SVG</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <legendabel htmlFor="foregroundColor" className='title'>Foreground Color:</legendabel>
                            <Input
                                className='box'
                                type="color"
                                id="foregroundColor"
                                value={foregroundColor}
                                onChange={(e) => setForegroundColor(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="backgroundColor" className='title'>Background Color:</Label>
                            <Input

                                className='box'
                                type="color"
                                id="backgroundColor"
                                value={backgroundColor}
                                onChange={(e) => setBackgroundColor(e.target.value)}
                            />
                        </FormGroup>

                        <QRCode
                        id="pramila"
                            title="title"
                            value={data}
                            bgColor={backgroundColor}
                            fgcolor={foregroundColor}
                            ize={width}
                            level={"H"}                            
                        />
                        <br/>
                        <Button onClick={downloadQR}  size='lg' color="primary" style={{margin:"30px 0"}}>Download</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

