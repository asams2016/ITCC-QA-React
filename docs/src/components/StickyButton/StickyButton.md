# StickyButton.js

## Summary: 
StickyButton file contains the code for the button which appears
on every page at the side.

## Function: 
Following function handle the click event and redirects users to the about Splunk page upon button click.

```
handleClick() {
    this.props.changePage("aboutSplunk");
}
```
Button design and rendering is being handleded by the `render()` function. This function is also responsible for onClick event.

## Common Issues: 
None