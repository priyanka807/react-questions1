import React from 'react'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import './Calender.css'
const Calender = () => {
 
    return (
    <div className='control-pane'>
        <div className='control-section'>
            <div className='daterangepicker-control-section'>
                <DateRangePickerComponent></DateRangePickerComponent>
            </div>
        </div>
    </div>
    );
  
}

export default Calender