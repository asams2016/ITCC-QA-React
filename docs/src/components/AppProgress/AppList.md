# AppList.js

## Summary:
This file renders a search bar, which, on giving input, filters through the applications and lists the searched app with a progress bar and shows at what that specific application is in.

## Function:
`constructor(props) {}` holds the default state of the search bar.

`handleShow(e, stage) {}` opens up the modal upon clicking the `View Activity` button.
Upon clicking the close button in modal page, `handleClose()` function is called.

`progressBar(stage) {}` renders the progress bar and its progress depending on the stage the application is in.

## Common Issues:
None
