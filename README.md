## Live Demo: https://andrewmaxwell.github.io/check-request/

## Why?
I was asked by some other leaders at my church if I would like to come up with an electronic way to do reimbursement requests. I said yes and decided it would be fun to slightly over-engineer the thing. So I made the form renderer and state manager that I always wished DART had (my previous project at Bayer).

We decided the simplest solution would be to collect the relevant information in a web form and send it via email. No server-side code, authentication, or consolidated storage of the requests is necessary.

I spent 25+ hours this past week writing, refining, and trimming down the code for this thing, and I enjoyed every second of it.

## Dynamic behaviors:
- The values for the Accounts selector come from an easily-maintained google spreadsheet.
- Can add and remove Account/Explanation/Amount rows.
- If the Account/Explanation/Amount list is ever empty, it is replaced with a single blank row.
- The Total field gets updated with the sum of the amounts.
- The Address field is only visible when "Check Delivery" is set to "Mail Check"
- Fields are validated when clicking submit.
- If all fields are valid, an email is generated when clicking submit.

## The Code
__App.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/App.js
- If there is no state, it shows a spinner and loads the state.
- Once the state is loaded, it calls `runUpdaters` on every render and renders the form.

__loadState.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/loadState.js
- Asynchronously returns a data structure representing the form.
- Lists of fields are represented as objects with multiple key/value pairs. This makes it easy for arbitrary parts of this state to be updated.
- Fields can have an `update` function to enable dynamic behavior.
- The order of the properties determine the order they appear. This isn't really best practice since property order isn't guaranteed, but it's been working fine so far in all of the browsers I've tested.

__runUpdaters.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/runUpdaters.js
- Goes through the fields and runs their update functions. If an update function returns an - object, it gets merged into the field.

__RenderFields.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/RenderFields.js
- Renders the fields from the field state and wires them up to be able to update field state when changed.
- Currently supports text fields, calculated fields, drop-down selectors, and repeating sections (which contain their own fields and can be added and deleted).
- The field renderers are state agnostic. I just included them all in the same file because they are relatively small.

__submit.js__: https://github.com/andrewmaxwell/check-request/blob/main/src/submit.js
- If any fields are blank, it adds a validation message to the field.
- If all fields are filled in, it generates a big `mailto` url from the field data and opens it.



## For local development: 
```
npm i
npm start
```

## To deploy to Github Page:
```
npm run deploy
```