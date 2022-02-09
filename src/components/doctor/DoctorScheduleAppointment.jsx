import React from 'react'
import moment from "moment";

export const  DoctorScheduleAppointment = () => {

    let today = moment();

    let timeSlots = [
        moment('2022-02-09 10:00:00', moment.ISO_8601),
        moment('2022-02-09 10:30:00', moment.ISO_8601),
        moment('2022-02-09 11:00:00', moment.ISO_8601),
        moment('2022-02-09 12:00:00', moment.ISO_8601),
        moment('2022-02-09 12:30:00', moment.ISO_8601),
        moment('2022-02-09 13:00:00', moment.ISO_8601),
        moment('2022-02-09 13:30:00', moment.ISO_8601),
        moment('2022-02-09 14:00:00', moment.ISO_8601),
        moment('2022-02-11 10:00:00', moment.ISO_8601),
        moment('2022-02-11 10:30:00', moment.ISO_8601),
        moment('2022-02-11 12:30:00', moment.ISO_8601),
        moment('2022-02-11 13:00:00', moment.ISO_8601),
        moment('2022-02-11 13:30:00', moment.ISO_8601),
        moment('2022-02-11 14:00:00', moment.ISO_8601),
        moment('2022-02-13 10:00:00', moment.ISO_8601),
        moment('2022-02-13 10:30:00', moment.ISO_8601),
        moment('2022-02-13 11:00:00', moment.ISO_8601),
        moment('2022-02-13 12:00:00', moment.ISO_8601),
        moment('2022-02-13 12:30:00', moment.ISO_8601),
        moment('2022-02-13 13:00:00', moment.ISO_8601),
        moment('2022-02-13 13:30:00', moment.ISO_8601),
        moment('2022-02-13 14:00:00', moment.ISO_8601),
        moment('2022-02-14 10:00:00', moment.ISO_8601),
        moment('2022-02-14 10:30:00', moment.ISO_8601),
        moment('2022-02-14 11:00:00', moment.ISO_8601),
        moment('2022-02-14 12:00:00', moment.ISO_8601),
        moment('2022-02-14 12:30:00', moment.ISO_8601),
        moment('2022-02-14 13:00:00', moment.ISO_8601),
        moment('2022-02-14 13:30:00', moment.ISO_8601),
        moment('2022-02-14 14:00:00', moment.ISO_8601),
    ]

    console.log(today.format('LL') + " " + moment('2022-02-09 10:00:00', moment.ISO_8601).format('LL'));
    console.log(today.format('LL') === moment('2022-02-09 10:00:00', moment.ISO_8601).format('LL'));



    return (


        <div className="container">
            <div className="row">
                <div className="col">Today <br/>
                    {today.format('MMMM DD').toString()}<br/>
                    {timeSlots.map((timeSlot) => {
                        if (timeSlot.isSame(today,'days'))
                            return (<button class = "button">
                                {timeSlot.format("hh:mm").toString()}
                            </button>);
                        else return null;
                    })}
                </div>
                <div className="col">
                    Tomorrow
                    <br/>
                    {today.add(1,'days').format('MMMM DD').toString()}<br/>
                    {timeSlots.map((timeSlot) => {
                           if (timeSlot.isSame(today,'days'))
                               return (<button>
                                   {timeSlot.format("hh:mm").toString()}
                               </button>);
                           else return null;
                        })}
                </div>
                <div className="col">{today.add(1,'days').format('dddd').toString()} <br/>
                    {today.format('MMMM DD').toString()}<br/>
                    {timeSlots.map((timeSlot) => {
                        if (timeSlot.isSame(today,'days'))
                            return (<button>
                                {timeSlot.format("hh:mm").toString()}
                            </button>);
                        else return null;
                    })}
                </div>
                <div className="col">{today.add(1,'days').format('dddd').toString()} <br/>
                    {today.format('MMMM DD').toString()}<br/>
                    {timeSlots.map((timeSlot) => {
                        if (timeSlot.isSame(today,'days'))
                            return (<button>
                                {timeSlot.format("hh:mm").toString()}
                            </button>);
                        else return null;
                    })}
                </div>
                <div className="col">{today.add(1,'days').format('dddd').toString()} <br/>
                    {today.format('MMMM DD').toString()}<br/>
                    {timeSlots.map((timeSlot) => {
                        if (timeSlot.isSame(today,'days'))
                            return (<button>
                                {timeSlot.format("hh:mm").toString()}
                            </button>);
                        else return null;
                    })}
                </div>
            </div>
        </div>
    )
}

