import React from 'react';


//NOT USED

const usStates = [
    {id: 1, statename:"Alabama", abbrev:"AL"},
    {id: 2, statename:"Alaska"},
    {id: 3, statename:"Arizona"},
    {id: 4, statename:"Arkansas"},
    {id: 5, statename:"California"},
    {id: 6, statename:"Colorado"},
    {id: 7, statename:"Connecticut"},
    {id: 8, statename:"Delaware"},
    {id: 9, statename:"Florida"},
    {id: 10, statename:"Georgia"},
    {id: 11, statename:"Hawaii"},
    {id: 12, statename:"Idaho"},
    {id: 13, statename:"Illinois"},
    {id: 14, statename:"Indiana"},
    {id: 15, statename:"Iowa"},
    {id: 16, statename:"Kansas"},
    {id: 17, statename:"Kentucky"},
    {id: 18, statename:"Louisiana"},
    {id: 19, statename:"Maine"},
    {id: 20, statename:"Maryland"},
    {id: 21, statename:"Massachusetts"},
    {id: 22, statename:"Michigan"},
    {id: 23, statename:"Minnesota"},
    {id: 24, statename:"Mississippi"},
    {id: 25, statename:"Missouri"},
    {id: 26, statename:"Montana"},
    {id: 27, statename:"Nebraska"},
    {id: 28, statename:"Nevada"},
    {id: 29, statename:"New Hampshire"},
    {id: 30, statename:"New Jersey"},
    {id: 31, statename:"New Mexico"},
    {id: 32, statename:"New York"},
    {id: 33, statename:"North Carolina"},
    {id: 34, statename:"North Dakota"},
    {id: 35, statename:"Ohio"},
    {id: 36, statename:"Oklahoma"},
    {id: 37, statename:"Oregon"},
    {id: 38, statename:"Pennsylvania"},
    {id: 39, statename:"Rhode Island"},
    {id: 40, statename:"South Carolina"},
    {id: 41, statename:"South Dakota"},
    {id: 42, statename:"Tennessee"},
    {id: 43, statename:"Texas"},
    {id: 44, statename:"Utah"},
    {id: 45, statename:"Vermont"},
    {id: 46, statename:"Virginia"},
    {id: 47, statename:"Washington"},
    {id: 48, statename:"West Virginia"},
    {id: 49, statename:"Wisconsin"},
    {id: 50, statename:"Wyoming"}
]


export function GetStateList() {
    const listStates = usStates.map( state => <option key={state.id}>{state.statename}</option>)

    return (
        <div class="form-group">
            <label>State of Residency</label>
            <select class="form-control" id="stateOfResidency">{listStates}</select>
        </div>
    )
}

export default GetStateList;




