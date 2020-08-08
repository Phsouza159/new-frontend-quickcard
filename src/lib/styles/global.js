import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import WebFont from 'webfontloader';
import 'react-perfect-scrollbar/dist/css/styles.css';

WebFont.load({
  google: {
    families: ['Rubik', 'Roboto'],
  },
});

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Rubik, sans-serif;
  font-size: 3rem;
  line-height: 1.3;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;

  ${media.lessThan('56.25em')`
    font-size: 56.25%;
  `}
}

body {
  font-family: Roboto, sans-serif;
  font-weight: 300;
  line-height: 1.6;
  background: ${(props) => (props.theme ? props.theme.background : `#fff`)};
  color: ${(props) => (props.theme ? props.theme.textColorPrimary : `#414D55`)};
  -webkit-font-smoothing: antialiased !important;
}

${'' /* material ui */}

.MuiButton-root {
  font-size: 1.4rem!important;
}




.css-12jo7m5 {
  font-size: 1.4rem!important;
  color: ${(props) =>
    props.theme ? props.theme.textColorPrimary : `#414D55`}!important;
}

.MuiFormHelperText-root {
  font-size: 1.2rem!important;
  color: ${(props) =>
    props.theme ? props.theme.textColorPrimary : `#414D55`}!important;
}

.MuiPaginationItem-root {
  color: ${(props) =>
    props.theme ? props.theme.textColorPrimary : `#414D55`}!important;

}

.css-1n7v3ny-option {
  color: ${(props) =>
    props.theme ? props.theme.textColorPrimary : `#414D55`}!important;

  background: ${(props) =>
    props.theme ? props.theme.selectBackground : `#edeff569`}!important;
}


.css-11hpcgx-control {
  border-bottom: 1px solid ${(props) =>
    props.theme ? props.theme.textColorPrimary : `#414D55`}!important;}
}


.css-1rhbuit-multiValue {
  background: ${(props) =>
    props.theme ? props.theme.backgroundSecondary : `#f9f9f9`}!important;
}

.css-26l3qy-menu {
  font-size: 1.2rem!important;
  background: ${(props) =>
    props.theme ? props.theme.backgroundSecondary : `#fff`}!important;

}

.MuiFormLabel-root {
  font-size: 1.4rem!important;
  color: ${(props) =>
    props.theme ? props.theme.textColorPrimary : `#414D55`}!important;
}

.MuiOutlinedInput-notchedOutline {
  border-color: ${(props) =>
    props.theme ? props.theme.borderColor : `#A2C0D4`}!important;
}

.MuiInput-underline:before {
  border-bottom: 1px solid ${(props) =>
    props.theme ? props.theme.textColorPrimary : `#414D55`}!important;}


.MuiTypography-caption {
  font-size: 1.4rem!important;
}
.MuiTypography-body1 {
  font-size: 1.4rem!important;
}

.MuiTypography-body2 {
  font-size: 1.4rem!important;
}

.MuiTypography-h2 {
  font-size: 5.75rem!important;
}

.MuiTypography-h4 {
  font-size: 3.4rem!important;
}
.MuiTypography-subtitle1 {
  font-size: 1.4rem!important;
}


${'' /* calendar styles */}

.rbc-btn {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button.rbc-btn {
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled].rbc-btn {
    cursor: not-allowed;
  }

  button.rbc-input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  .rbc-calendar {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    padding: 2rem;
    border-radius: 0.8rem;
    background-color: ${(props) =>
      props.theme ? props.theme.backgroundCalendar : `#FAFBFD`};
    flex-direction: column;
    align-items: stretch;
  }

  .rbc-calendar *,
  .rbc-calendar *:before,
  .rbc-calendar *:after {
    box-sizing: inherit;
  }

  .rbc-abs-full,
  .rbc-row-bg {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .rbc-ellipsis,
  .rbc-event-label,
  .rbc-row-segment .rbc-event-content,
  .rbc-show-more {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .rbc-rtl {
    direction: rtl;
  }

  .rbc-off-range {
    color: #999999;
  }

  .rbc-off-range-bg {
      background: repeating-linear-gradient(
  -55deg,
  ${(props) => (props.theme ? props.theme.stripesCalendar : `#DCE2E8`)},
  ${(props) => (props.theme ? props.theme.stripesCalendar : `#DCE2E8`)} 2px,
  ${(props) => (props.theme ? props.theme.stripesBackground : `#FAFBFD`)} 2px,
  ${(props) => (props.theme ? props.theme.stripesBackground : `#FAFBFD`)} 10px
);
  }

  .rbc-header {
    overflow: hidden;
    flex: 1 0 0%;
    font-family: Roboto;
    color: ${(props) =>
      props.theme ? props.theme.calendarTextColor2 : `#414D55`};
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2rem;
    font-size: 1.4rem;
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    min-height: 0;

  }
  .rbc-header + .rbc-header {
    border-left: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};;
  }
  .rbc-rtl .rbc-header + .rbc-header {
    border-left-width: 0;
    border-right: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-header > a,
  .rbc-header > a:active,
  .rbc-header > a:visited {
    color: inherit;
    text-decoration: none;
  }

  .rbc-row-content {
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    z-index: 4;
  }

  .rbc-today {
  background: ${(props) =>
    props.theme ? props.theme.daysWeekCalendar : `#F1F5F8`};

  }

  .rbc-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .rbc-toolbar .rbc-toolbar-label {
    flex-grow: 1;
    padding: 0 10px;
    text-align: center;
  }
  .rbc-toolbar button {
    color: ${(props) =>
      props.theme ? props.theme.textButtonCalendar : `#2662F0`};
      font-size: 1.4rem;
      font-family: Roboto;
    display: inline-block;
    margin: 0;
    text-align: center;
    vertical-align: middle;
    background: none;
    background-image: none;
    border: none;
    padding: 0.375rem 1rem;
    border-radius: 4px;
    line-height: normal;
    white-space: nowrap;
  }
  .rbc-toolbar button:active,
  .rbc-toolbar button.rbc-active {
    background-image: none;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    background-color:  ${(props) =>
      props.theme ? props.theme.activeButtonCalendar : `#fff`};
    border-color: #adadad;
  }
  .rbc-toolbar button:active:hover,
  .rbc-toolbar button:active:focus,
  .rbc-toolbar button.rbc-active:hover,
  .rbc-toolbar button.rbc-active:focus {
    color:  ${(props) =>
      props.theme ? props.theme.textButtonCalendar : `#2662F0`};
    background-color:  ${(props) =>
      props.theme ? props.theme.InputBackground : `#FAFBFD`};


  }
  .rbc-toolbar button:focus {
    color:  ${(props) =>
      props.theme ? props.theme.textButtonCalendar : `#2662F0`};
      background-color:  ${(props) =>
        props.theme ? props.theme.InputBackground : `#FAFBFD`};

  }
  .rbc-toolbar button:hover {
    color:  ${(props) =>
      props.theme ? props.theme.textButtonCalendar : `#2662F0`};
      background-color:  ${(props) =>
        props.theme ? props.theme.InputBackground : `#FAFBFD`};

  }

  .rbc-btn-group {
    display: inline-block;
    white-space: nowrap;
    font-size: 1.4rem;
    font-family: Roboto;
    border-radius: 0.8rem;

  }
  .rbc-btn-group > button:first-child:not(:last-child) {
    border-top-right-radius: 0;
    padding: 1rem 3rem;
    border-bottom-right-radius: 0;
  }
  .rbc-btn-group > button:last-child:not(:first-child) {
    border-top-left-radius: 0;
    padding: 1rem 3rem;
    border-bottom-left-radius: 0;
  }
  .rbc-rtl .rbc-btn-group > button:first-child:not(:last-child) {
    border-radius: 4px;
    padding: 1rem 3rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .rbc-rtl .rbc-btn-group > button:last-child:not(:first-child) {
    border-radius: 4px;
    padding: 1rem 3rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .rbc-btn-group > button:not(:first-child):not(:last-child) {
    border-radius: 0;
    padding: 1rem 3rem;
  }
  .rbc-btn-group button + button {
    margin-left: -1px;
    padding: 1rem 3rem;
  }
  .rbc-rtl .rbc-btn-group button + button {
    margin-left: 0;
    margin-right: -1px;
  }
  .rbc-btn-group + .rbc-btn-group,
  .rbc-btn-group + button {
    margin-left: 10px;
  }

  .rbc-event {
    border: none;
    box-sizing: border-box;
    box-shadow: none;
    margin: 0;
    padding: 2px 5px;
    background-color: #2662F0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    width: 100%;
    text-align: left;
  }
  .rbc-slot-selecting .rbc-event {
    cursor: inherit;
    pointer-events: none;
  }
  .rbc-event.rbc-selected {
    background-color: #2662F0;
  }
  .rbc-event:focus {
    outline: 5px auto #3b99fc;
  }

  .rbc-event-label {
    font-size: 80%;
  }

  .rbc-event-overlaps {
    box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);
  }

  .rbc-event-continues-prior {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .rbc-event-continues-after {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rbc-event-continues-earlier {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .rbc-event-continues-later {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rbc-row {
    display: flex;
    flex-direction: row;
  }

  .rbc-row-segment {
    padding: 0 1px 1px 1px;
  }

  .rbc-selected-cell {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .rbc-show-more {
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 4;
    font-weight: bold;
    font-size: 85%;
    height: auto;
    line-height: normal;
  }

  .rbc-month-view {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    width: 100%;
    user-select: none;
    -webkit-user-select: none;
    height: 100%;
  }

  .rbc-month-header {
    display: flex;
    flex-direction: row;
    background: ${(props) =>
      props.theme ? props.theme.daysWeekCalendar : `#F1F5F8`};
    border-radius: 0.8rem;
  }

  .rbc-month-row {
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 1 0 0;
    flex-basis: 0px;
    overflow: hidden;
    height: 100%;
  }
  .rbc-month-row + .rbc-month-row {
    border-top: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }

  .rbc-date-cell {
    flex: 1 1 0;
    min-width: 0;
    padding: 1.8rem 0 0 2rem;
    text-align: left;
    font-family: Rubik;
    font-size: 2rem;
    ${media.lessThan('1280px')`
    font-size: 1.3rem;
    `}
    color: ${(props) =>
      props.theme ? props.theme.calendarTextColor : `#636D73`};
  }
  .rbc-date-cell.rbc-now {
    font-weight: bold;
  }
  .rbc-date-cell > a,
  .rbc-date-cell > a:active,
  .rbc-date-cell > a:visited {
    color: inherit;
    text-decoration: none;
  }

  .rbc-row-bg {
    display: flex;
    flex-direction: row;
    flex: 1 0 0;
    overflow: hidden;
  }

  .rbc-day-bg {
    flex: 1 0 0%;
  }
  .rbc-day-bg + .rbc-day-bg {
    border-left: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-rtl .rbc-day-bg + .rbc-day-bg {
    border-left-width: 0;
    border-right: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }

  .rbc-overlay {
    position: absolute;
    z-index: 5;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    padding: 10px;
  }
  .rbc-overlay > * + * {
    margin-top: 1px;
  }

  .rbc-overlay-header {
    border-bottom: 1px solid #e5e5e5;
    margin: -10px -10px 5px -10px;
    padding: 2px 10px;
  }

  .rbc-agenda-view {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    overflow: auto;
  }
  .rbc-agenda-view table.rbc-agenda-table {
    width: 100%;

    border-spacing: 0;
    border-collapse: collapse;
  }
  .rbc-agenda-view table.rbc-agenda-table tbody > tr > td {
    padding: 5px 10px;
    vertical-align: top;
  }
  .rbc-agenda-view table.rbc-agenda-table .rbc-agenda-time-cell {
    padding-left: 15px;
    padding-right: 15px;
    text-transform: lowercase;
  }
  .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
    border-left: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
    border-left-width: 0;
    border-right: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-agenda-view table.rbc-agenda-table tbody > tr + tr {
    border-top: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-agenda-view table.rbc-agenda-table thead > tr > th {
    padding: 3px 5px;
    text-align: left;
    border-bottom: 2px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-rtl .rbc-agenda-view table.rbc-agenda-table thead > tr > th {
    text-align: right;
  }

  .rbc-agenda-time-cell {
    text-transform: lowercase;
  }
  .rbc-agenda-time-cell .rbc-continues-after:after {
    content: ' »';
  }
  .rbc-agenda-time-cell .rbc-continues-prior:before {
    content: '« ';
  }

  .rbc-agenda-date-cell,
  .rbc-agenda-time-cell {
    white-space: nowrap;
  }

  .rbc-agenda-event-cell {
    width: 100%;
  }

  .rbc-time-column {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  .rbc-time-column .rbc-timeslot-group {
    flex: 1;
  }

  .rbc-timeslot-group {
    border-bottom: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
    min-height: 40px;
    display: flex;
    flex-flow: column nowrap;
  }

  .rbc-time-gutter,
  .rbc-header-gutter {
    flex: none;
  }

  .rbc-label {
    padding: 0 5px;
  }

  .rbc-day-slot {
    position: relative;
  }
  .rbc-day-slot .rbc-events-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    margin-right: 10px;
    top: 0;
  }
  .rbc-day-slot .rbc-events-container.rbc-rtl {
    left: 10px;
    right: 0;
  }
  .rbc-day-slot .rbc-event {
    border: 1px solid #265985;
    display: flex;
    max-height: 100%;
    min-height: 20px;
    flex-flow: column wrap;
    align-items: flex-start;
    overflow: hidden;
    position: absolute;
  }
  .rbc-day-slot .rbc-event-label {
    flex: none;
    padding-right: 5px;
    width: auto;
  }
  .rbc-day-slot .rbc-event-content {
    width: 100%;
    flex: 1 1 0;
    word-wrap: break-word;
    line-height: 1;
    height: 100%;
    min-height: 1em;
  }
  .rbc-day-slot .rbc-time-slot {
    ${
      '' /* border-top: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`}; */
    }
  }

  .rbc-time-view-resources .rbc-time-gutter,
  .rbc-time-view-resources .rbc-time-header-gutter {
    position: sticky;
    left: 0;
    background-color: white;
    border-right: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
    z-index: 10;
    margin-right: -1px;
  }

  .rbc-time-view-resources .rbc-time-header {
    overflow: hidden;
  }

  .rbc-time-view-resources .rbc-time-header-content {
    min-width: auto;
    flex: 1 0 0;
    flex-basis: 0px;
  }

  .rbc-time-view-resources .rbc-time-header-cell-single-day {
    display: none;
  }

  .rbc-time-view-resources .rbc-day-slot {
    min-width: 140px;
  }

  .rbc-time-view-resources .rbc-header,
  .rbc-time-view-resources .rbc-day-bg {
    width: 140px;
    flex: 1 1 0;
    flex-basis: 0 px;
  }

  .rbc-time-header-content + .rbc-time-header-content {
    margin-left: -1px;
  }

  .rbc-time-slot {
    flex: 1 0 0;
  }
  .rbc-time-slot.rbc-now {
    font-weight: bold;
  }

  .rbc-day-header {
    text-align: center;
  }

  .rbc-slot-selection {
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 75%;
    width: 100%;
    padding: 3px;
  }

  .rbc-slot-selecting {
    cursor: move;
  }

  .rbc-time-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    min-height: 0;
  }
  .rbc-time-view .rbc-time-gutter {
    white-space: nowrap;
  }
  .rbc-time-view .rbc-allday-cell {
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .rbc-time-view .rbc-allday-cell + .rbc-allday-cell {
    border-left: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-time-view .rbc-allday-events {
    position: relative;
    z-index: 4;
  }
  .rbc-time-view .rbc-row {
    box-sizing: border-box;
    min-height: 20px;
  }

  .rbc-time-header {
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
  }
  .rbc-time-header.rbc-overflowing {
    border-right: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-rtl .rbc-time-header.rbc-overflowing {
    border-right-width: 0;
    border-left: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-time-header > .rbc-row:first-child {
    border-bottom: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-time-header > .rbc-row.rbc-row-resource {
    border-bottom: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }

  .rbc-time-header-cell-single-day {
    display: none;
  }

  .rbc-time-header-content {
    flex: 1;
    display: flex;
    min-width: 0;
    flex-direction: column;
    border-left: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-rtl .rbc-time-header-content {
    border-left-width: 0;
    border-right: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-time-header-content > .rbc-row.rbc-row-resource {
    border-bottom: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
    flex-shrink: 0;
  }

  .rbc-time-content {
    display: flex;
    flex: 1 0 0%;
    align-items: flex-start;
    width: 100%;
    border-top: 2px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
    overflow-y: auto;
    position: relative;
  }
  .rbc-time-content > .rbc-time-gutter {
    flex: none;
  }
  .rbc-time-content > * + * > * {
    border-left: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};


  }
  .rbc-rtl .rbc-time-content > * + * > * {
    border-left-width: 0;
    border-right: 1px solid ${(props) =>
      props.theme ? props.theme.borderCalendar : `#DCE2E8`};
  }
  .rbc-time-content > .rbc-day-slot {
    width: 100%;
    user-select: none;
    -webkit-user-select: none;
  }

  .rbc-current-time-indicator {
    position: absolute;
    z-index: 3;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #74ad31;
    pointer-events: none;
  }


`;
