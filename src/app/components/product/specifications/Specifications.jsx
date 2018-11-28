import * as React from 'react';
import './Specifications.scss';

const CLASS_NAME_LI = "specification__item";
const CLASS_NAME_CONTEINER = "specification__conteiner";
const CLASS_NAME_TEXT = "specification__text";
const CLASS_NAME_TITLE = "specification__item-title";

const CHECK_TRUE_TEMPLATE = <div className={CLASS_NAME_TEXT}><i className="material-icons icons-style icons-style__green">check</i></div>;
const CHECK_FALSE_TEMPLATE = <div className={CLASS_NAME_TEXT}><i className="material-icons icons-style icons-style__red">clear</i></div>;

export class Specifications extends React.Component {
    constructor() {
        super();
        this.toggleSpecification = this.toggleSpecification.bind(this);
    }

    toggleSpecification(event) {
        event.target.classList.toggle('specification__title_active');
    }

    render() {
        const { item, android, battery, camera, connectivity, display, hardware, sizeAndWeight, storage, availability } = this.props;

        let data;

        if (item.title === "Android") {
            data = <div className={CLASS_NAME_CONTEINER}>
                {android.ui ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>UI:</div> <div className={CLASS_NAME_TEXT}>{android.ui}</div></li> : console.log()}
                {android.os ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>OS:</div> <div className={CLASS_NAME_TEXT}>{android.os}</div></li> : console.log()}
            </div>
        }

        if (item.title === "Battery") {
            data = <div className={CLASS_NAME_CONTEINER}>
                {battery.type ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Type:</div> <div className={CLASS_NAME_TEXT}>{battery.type}</div></li> : console.log()}
                {battery.talkTime ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Talk time:</div> <div className={CLASS_NAME_TEXT}>{battery.talkTime}</div></li> : console.log()}
                {battery.standbyTime ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Stand by time:</div> <div className={CLASS_NAME_TEXT}>{battery.standbyTime}</div></li> : console.log()}
            </div>
        }

        if (item.title === "Camera") {
            console.log(camera.features);
            let cameraFeatures = (camera.features) ? (typeof camera.features === 'object') ? camera.features.map((item, i) => {
                return <div key={i} className={CLASS_NAME_TEXT}>{item}</div>
            }) : camera.features : console.log()

            data = <div className={CLASS_NAME_CONTEINER}>
                {camera.primary ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Primary:</div> <div className={CLASS_NAME_TEXT}>{camera.primary}</div></li> : console.log()}
                <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Features:</div> <div className={CLASS_NAME_TEXT}>{cameraFeatures}</div></li>
            </div>
        }

        if (item.title === "Connectivity") {
            data = <div className={CLASS_NAME_CONTEINER}>
                {connectivity.wifi ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>WI-FI:</div> <div className={CLASS_NAME_TEXT}>{connectivity.wifi}</div></li> : console.log()}
                {connectivity.infrared ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Infrared:</div> {CHECK_TRUE_TEMPLATE}</li> : <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Infrared:</div> {CHECK_FALSE_TEMPLATE}</li>}
                {connectivity.gps ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>GPS:</div> {CHECK_TRUE_TEMPLATE}</li> : <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>GPS:</div> {CHECK_FALSE_TEMPLATE}</li>}
                {connectivity.cell ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Cell:</div> <div className={CLASS_NAME_TEXT}>{connectivity.cell}</div></li> : console.log()}
                {connectivity.bluetooth ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Bluetooth:</div> <div className={CLASS_NAME_TEXT}>{connectivity.bluetooth}</div></li> : console.log()}
            </div>
        }

        if (item.title === "Display") {
            data = <div className={CLASS_NAME_CONTEINER}>
                {display.touchScreen ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Touch screen:</div> {CHECK_TRUE_TEMPLATE}</li> : <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Touch screen:</div> {CHECK_FALSE_TEMPLATE}</li>}
                {display.screenSize ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Screen size:</div> <div className={CLASS_NAME_TEXT}>{display.screenSize}</div></li> : console.log()}
                {display.screenResolution ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Screen resolution:</div> <div className={CLASS_NAME_TEXT}>{display.screenResolution}</div></li> : console.log()}
            </div>
        }

        if (item.title === "Hardware") {
            data = <div className={CLASS_NAME_CONTEINER}>
                {hardware.usb ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>USB:</div> <div className={CLASS_NAME_TEXT}>{hardware.usb}</div></li> : console.log()}
                {hardware.physicalKeyboard ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Physical keyboard:</div> {CHECK_TRUE_TEMPLATE}</li> : <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Physical keyboard:</div> {CHECK_FALSE_TEMPLATE}</li>}
                {hardware.fmRadio ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>FM radio:</div> {CHECK_TRUE_TEMPLATE}</li> : <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>FM radio:</div> {CHECK_FALSE_TEMPLATE}</li>}
                {hardware.cpu ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>CPU:</div> <div className={CLASS_NAME_TEXT}>{hardware.cpu}</div></li> : console.log()}
                {hardware.audioJack ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Audio Jack:</div> <div className={CLASS_NAME_TEXT}>{hardware.audioJack}</div></li> : console.log()}
                {hardware.accelerometer ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Accelerometer:</div> {CHECK_TRUE_TEMPLATE}</li> : <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Accelerometer:</div> {CHECK_FALSE_TEMPLATE}</li>}
            </div>
        }

        if (item.title === "Size and weight") {
            data = <div className={CLASS_NAME_CONTEINER}>
                {sizeAndWeight.weight ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Weight:</div> <div className={CLASS_NAME_TEXT}>{sizeAndWeight.weight}</div></li> : console.log()}
                {sizeAndWeight.dimensions ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Dimensions:</div> <div className={CLASS_NAME_TEXT}>{sizeAndWeight.dimensions}</div></li> : console.log()}
            </div>
        }

        if (item.title === "Storage") {
            data = <div className={CLASS_NAME_CONTEINER}>
                {storage.ram ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>RAM:</div> <div className={CLASS_NAME_TEXT}>{storage.ram}</div></li> : console.log()}
                {storage.flash ? <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Flash:</div> <div className={CLASS_NAME_TEXT}>{storage.flash}</div></li> : console.log()}
            </div>
        }

        if (item.title === "Availability") {
            let avalibilityFeatures = (availability) ? (typeof availability === 'object') ? availability.map((item, i) => {
                return <div key={i} className={CLASS_NAME_TEXT}>{item}</div>
            }) : availability : console.log()

            data = <div className={CLASS_NAME_CONTEINER}>
                <li className={CLASS_NAME_LI}><div className={CLASS_NAME_TITLE}>Availability:</div> <div className={CLASS_NAME_TEXT}>{avalibilityFeatures}</div></li>
            </div>
        }

        return <ul className="specification__title specification__title_active"
            onClick={this.toggleSpecification}>
            {item.title}
            <div className="item-toggle" ></div>
            {data}
        </ul>
    }
}