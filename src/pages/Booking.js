import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
//import emailjs from "@emailjs/browser";
//import emailjs from "@emailjs-com";

export default function MaterialUIPickers() {
  const [date, setDate] = React.useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  //console.log(date);
  return (
    <>
      <div className="datepicker-container">
        <div className="datepicker">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DateTimePicker
                variant="dialog"
                hintText="Weekends Disabled"
                //variant="dialog"
                label="Date&Time picker"
                value={date}
                onChange={handleChange}
                //minDateTime={new Date()}
                disablePast={true}
                minDateTime={new Date().setHours(new Date().getHours() + 6)}
                //maxDateTime={new Date().setHours(18)}
                maxDate={new Date().setHours(new Date().getHours() + 450)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
      </div>
      <div>
        <h1>{}</h1>
      </div>
    </>
  );
}
//input fields for email and number
//conditional: required info from inputs fields
//submit button triggers a function
//add your message body use a mail server
//sends the email to the carpenter
//email.js
