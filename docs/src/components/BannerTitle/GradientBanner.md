# BannerTitle.js

## Summary:
This file holds the banner for each page which contains an image and a title. This title and image changes based on the page the user is in.

## Function:
```
render() {
    var colorsString = this.props.colors[0];
    
    for(var i = 1; i < this.props.colors.length; i++){
        colorsString += ", " + this.props.colors[i];
    }

    const style = {
        ...
    };
}
```
This render function is responsible for generating colors, setting up gradient background and displaying the banner title.

`var colorstring` stores the colors to be generated through the input array.

Compatibility between browsers is maintained through `const style`, which ensures that the cross platform rendering for web pages is possible.

`return()` function returns the title displayed on each page.

## Common Issues:
None