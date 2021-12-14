Live Demo: https://andrewmaxwell.github.io/check-request/

Form Configuration: https://docs.google.com/spreadsheets/d/1tWi8kCqXBHd2F0pMFDyLPWG1MpXZLQ3rhzA4MNAWEI8/edit?usp=sharing

## Why?
I was asked by some other leaders at my church if I would like to come up with an electronic way to do reimbursement requests. I said yes and decided it would be fun to slightly over-engineer the thing. So I made the form renderer and state manager that I always wished DART had (my previous project at Bayer).

We decided the simplest solution would be to collect the relevant information in a web form and send it via email. No server-side code, authentication, or consolidated storage of the requests is necessary.

I spent 28+ hours this past week writing, refining, and trimming down the code for this thing, and I enjoyed every second of it.

## Configuration:
- The configuration for the form comes from a workbook published on Google Sheets.
- Drop-down fields are configured to get their options from dedicated sheets in the workbook.
- Any field can be configured to have dynamic behavior by including some JavaScript in the spreadsheet. For example:
- If the Account/Explanation/Amount list is ever empty, it is replaced with a single blank row.
- The Total field gets updated with the sum of the amounts.
- The Address field is only visible when "Check Delivery" is set to "Mail Check".
- See "Configuration Documentation" below for more info.

## Other Features
- Fields are validated when clicking submit (they must not be blank).
- If no fields are blank, an email is generated when clicking submit.

## The Code
__App.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/App.js
- If there is no state, it shows a spinner and loads the state.
- Once the state is loaded, it calls `runUpdaters` on every render and renders the form.

__loadState.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/loadState.js
- Asynchronously creates a data structure representing the initial state of the app.

__runUpdaters.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/runUpdaters.js
- Goes through the fields and runs their update functions. If an update function returns an object, it gets merged into the field.

__RenderFields.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/RenderFields.js
- Renders the fields from the field state and wires them up to be able to update field state when changed.
- Currently supports text fields, calculated fields, drop-down selectors, and repeating sections (which contain their own fields and can be added and deleted).
- The field renderers are state agnostic. I just included them all in the same file because they are relatively small.

__submit.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/submit.js
- If any fields are blank, it adds a validation message to the field.
- If all fields are filled in, it generates a big `mailto` url from the field data and opens it.

## Configuration Documentation
The workbook is required to have a `config` sheet, and a `fields` sheet. Other sheets are allowed and can be referenced in the `options` column in `fields`. 

The `config` sheet contains `key`/`value` pairs that are used in the form.

The `fields` sheet has the field configuration. Each row is a field.
- `key` is the internal name of the field. It is only important if the field affects dynamic behavior.
- `label` is the visible name of the field.
- `type` can be `text`, `number`, `select`, `repeatingSection`, or `calculated`
- `columns` defines the width of the field. `12` is full width. In repeating sections, `11` would be full width because the "Delete" button takes up 1 column.
- `parentField` specifies the `key` of the `repeatingSection` that a field belongs to. It should be empty for top-level fields.
- `format` specifies a formatter. Currently, only `dollars` is supported.
- `options` can contain JavaScript that is executed at form initialization. It has access to a `data` object, which contains a key for each sheet in the configuration. The values are arrays of objects (similar to CSV).
- `update` can contain JavaScript that is executed continuously when the form is being filled out. It has access to the field state. If it returns an object, the object is merged into the field.


## For local development: 
```
npm i
npm start
```

## To deploy to Github Page:
```
npm run deploy
```