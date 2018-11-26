import * as React from 'react';
import './Specifications.scss';

const CHECK_TRUE_TEMPLATE = <div><i className="material-icons">check</i></div>;
const CHECK_FALSE_TEMPLATE = <div><i className="material-icons">clear</i></div>;

export const Specifications = (props) => {
    const { item, android, battery, camera, connectivity, display, hardware, sizeAndWeight, storage, availability } = props;

    let data;
    let className = "data__item"

    if (item.title === "Android") {
        data = <div>
            {android.ui ? <li className={className}>UI: <div>{android.ui}</div></li> : console.log()}
            {android.os ? <li className={className}>OS: <div>{android.os}</div></li> : console.log()}
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
        let cameraFeatures = (camera.features) ? (typeof camera.features === 'object') ? camera.features.map((item, i) => {
            return <div key={i}>{item}</div>
        }) : camera.features : console.log()

        data = <div>
            {camera.primary ? <li className={className}>primary: <div>{camera.primary}</div></li> : console.log()}
            <li className={className}>features: <div>{cameraFeatures}</div></li>
        </div>
    }

    if (item.title === "Connectivity") {
        data = <div>
            {connectivity.wifi ? <li className={className}>wifi: <div>{connectivity.wifi}</div></li> : console.log()}
            {connectivity.infrared ? <li className={className}>infrared: {CHECK_TRUE_TEMPLATE}</li> : <li className={className}>infrared: {CHECK_FALSE_TEMPLATE}</li>}
            {connectivity.gps ? <li className={className}>gps: {CHECK_TRUE_TEMPLATE}</li> : <li className={className}>gps: {CHECK_FALSE_TEMPLATE}</li>}
            {connectivity.cell ? <li className={className}>cell: <div>{connectivity.cell}</div></li> : console.log()}
            {connectivity.bluetooth ? <li className={className}>bluetooth: <div>{connectivity.bluetooth}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Display") {
        data = <div>
            {display.touchScreen ? <li className={className}>touchScreen: {CHECK_TRUE_TEMPLATE}</li> : <li className={className}>touchScreen: {CHECK_FALSE_TEMPLATE}</li>}}
            {display.screenSize ? <li className={className}>screenSize: <div>{display.screenSize}</div></li> : console.log()}
            {display.screenResolution ? <li className={className}>screenResolution: <div>{display.screenResolution}</div></li> : console.log()}
        </div>
    }

    if (item.title === "Hardware") {
        data = <div>
            {hardware.usb ? <li className={className}>usb: <div>{hardware.usb}</div></li> : console.log()}
            {hardware.physicalKeyboard ? <li className={className}>physicalKeyboard: {CHECK_TRUE_TEMPLATE}</li> : <li className={className}>physicalKeyboard: {CHECK_FALSE_TEMPLATE}</li>}
            {hardware.fmRadio ? <li className={className}>fmRadio: {CHECK_TRUE_TEMPLATE}</li> : <li className={className}>fmRadio: {CHECK_FALSE_TEMPLATE}</li>}
            {hardware.cpu ? <li className={className}>cpu: <div>{hardware.cpu}</div></li> : console.log()}
            {hardware.audioJack ? <li className={className}>audioJack: <div>{hardware.audioJack}</div></li> : console.log()}
            {hardware.accelerometer ? <li className={className}>accelerometer: {CHECK_TRUE_TEMPLATE}</li> : <li className={className}>accelerometer: {CHECK_FALSE_TEMPLATE}</li>}
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
        let avalibilityFeatures = (availability) ? (typeof availability === 'object') ? availability.map((item, i) => {
            return <div key={i}>{item}</div>
        }) : availability : console.log()

        data = <div>
            <li className={className}>availability: <div>{avalibilityFeatures}</div></li>
        </div>
    }

    return <ul className="specification__title">
        {item.title}
        {data}
    </ul>
}