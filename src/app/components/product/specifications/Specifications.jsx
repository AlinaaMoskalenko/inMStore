import * as React from 'react';
import './Specifications.scss';

export const Specifications = (props) => {
    const { item, android, battery, camera, connectivity, display, hardware, sizeAndWeight, storage, availability } = props;
    console.log(item.title);

    let data;
    let className = "data__item"

    if (item.title === "Android") {
        data = <div>
            {android.ui ? <li className={className}>UI: <div>{android.ui}</div></li> : console.log()}
            {android.os ? <li className={className}>UI: <div>{android.os}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Battery") {
        data = <div>
            {battery.type ? <li className={className}>type: <div>{battery.type}</div></li> : console.log()}
            {battery.talkTime ? <li className={className}>talkTime: <div>{battery.talkTime}</div></li> : console.log()}
            {battery.standbyTime ? <li className={className}>standbyTime: <div>{battery.standbyTime}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Camera") {
        data = <div>
            {camera.primary ? <li className={className}>primary: <div>{camera.primary}</div></li> : console.log()}
            {camera.features ? <li className={className}>features: <div>{camera.features}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Connectivity") {
        data = <div>
            {connectivity.wifi ? <li className={className}>wifi: <div>{connectivity.wifi}</div></li> : console.log()}
            {connectivity.infrared ? <li className={className}>infrared: <div>{connectivity.infrared}</div></li> : console.log()}
            {connectivity.gps ? <li className={className}>gps: <div>{connectivity.gps}</div></li> : console.log()}
            {connectivity.cell ? <li className={className}>cell: <div>{connectivity.cell}</div></li> : console.log()}
            {connectivity.bluetooth ? <li className={className}>bluetooth: <div>{connectivity.bluetooth}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Display") {
        data = <div>
            {display.touchScreen ? <li className={className}>touchScreen: <div>{display.touchScreen}</div></li> : console.log()}
            {display.screenSize ? <li className={className}>screenSize: <div>{display.screenSize}</div></li> : console.log()}
            {display.screenResolution ? <li className={className}>screenResolution: <div>{display.screenResolution}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Hardware") {
        data = <div>
            {hardware.usb ? <li className={className}>usb: <div>{hardware.usb}</div></li> : console.log()}
            {hardware.physicalKeyboard ? <li className={className}>physicalKeyboard: <div>{hardware.physicalKeyboard}</div></li> : console.log()}
            {hardware.fmRadio ? <li className={className}>fmRadio: <div>{hardware.fmRadio}</div></li> : console.log()}
            {hardware.cpu ? <li className={className}>cpu: <div>{hardware.cpu}</div></li> : console.log()}
            {hardware.audioJack ? <li className={className}>audioJack: <div>{hardware.audioJack}</div></li> : console.log()}
            {hardware.accelerometer ? <li className={className}>accelerometer: <div>{hardware.accelerometer}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Size and weight") {
        data = <div>
            {sizeAndWeight.weight ? <li className={className}>weight: <div>{sizeAndWeight.weight}</div></li> : console.log()}
            {sizeAndWeight.dimensions ? <li className={className}>dimensions: <div>{sizeAndWeight.dimensions}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Storage") {
        data = <div>
            {storage.ram ? <li className={className}>ram: <div>{storage.ram}</div></li> : console.log()}
            {storage.flash ? <li className={className}>flash: <div>{storage.flash}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Availability") {
        data = <div>
            {availability ? <li className={className}>availability: <div>{availability}</div></li> : console.log()}
        </div>
    }

    return <ul className="specification__title">
        {item.title}
        {data}
    </ul>
}