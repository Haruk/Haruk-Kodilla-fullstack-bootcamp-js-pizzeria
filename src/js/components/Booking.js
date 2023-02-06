import { select, templates } from '../settings.js';
import utils from '../utils.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking {
  constructor(element){

    const thisWidget = this;

    thisWidget.render(element);
    thisWidget.initWidgets();
  }

  render(bookingWidget){
    const thisWidget = this;

    thisWidget.dom = {};
    thisWidget.dom.bookingWidget = bookingWidget;

    const generatedHTML = templates.bookingWidget();
    thisWidget.elem = utils.createDOMFromHTML(generatedHTML);

    thisWidget.dom.bookingWidget.appendChild(thisWidget.elem);

    thisWidget.dom.peopleAmount = document.querySelector(select.booking.peopleAmount);
    thisWidget.dom.hoursAmount = document.querySelector(select.booking.hoursAmount);
    thisWidget.dom.datePicker = document.querySelector(select.widgets.datePicker.wrapper);
    thisWidget.dom.timePicker = document.querySelector(select.widgets.hourPicker.wrapper);
  }

  initWidgets(){
    const thisWidget = this;

    thisWidget.peopleAmountWidget = new AmountWidget(thisWidget.dom.peopleAmount);
    thisWidget.dom.peopleAmount.addEventListener('update', () => {
    });

    thisWidget.hoursAmountWidget = new AmountWidget(thisWidget.dom.hoursAmount);
    thisWidget.dom.hoursAmount.addEventListener('update', () => {
    });

    thisWidget.datePicker = new DatePicker(thisWidget.dom.datePicker);
    thisWidget.dom.datePicker.addEventListener('update', () => {});

    thisWidget.timePicker = new HourPicker(thisWidget.dom.timePicker);
    thisWidget.dom.timePicker.addEventListener('update', () => {});

  }

}
export default Booking;