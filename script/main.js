import {countdownTimer} from './modules/timer.js';
import './modules/accordion.js'
import './modules/burgerMenu.js'
import './modules/fly.js'
import './modules/createOptions.js'
import {formReservationControl, formEmailControl } from './modules/formControl.js';
import { renderOptions } from './modules/createOptions.js';
import { loadDb } from './modules/fetch.js';
import  './modules/slider.js';

countdownTimer();

loadDb(renderOptions)
loadDb(formReservationControl)
loadDb(formEmailControl)