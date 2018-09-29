# TeamPage.js

## Summary: 
TeamPage file displays all the team member entries made.

## Function: 
```
import christopherKellmeyer from '../../images/team/christopherKellmeyer.jpg';
import zahid from '../../images/team/Zahid.jpg';
import royAllen from '../../images/team/royAllen.jpg';
import alanBateman from '../../images/team/alanBateman.jpg';
import laurenLee from '../../images/team/laurenLee.jpg';
import larryMiller from '../../images/team/larryMiller.jpg';
import francisMutchlerLee from '../../images/team/francisMutchlerLee.jpg';
import johnWhite from '../../images/team/johnWhite.jpg';
import placeholder from '../../images/team/placeholder.png';
```
Above imports are required for the images to ber displayed on the team page.

All the member entries are stored in the form of an array `const image[]`, `const phone[]`, `const email[]`, `const title[]` and `const personalInfo[]`.
This is also to avoid re-assignment and re-declaration.
For example:
```
const image = [
	christopherKellmeyer, 
	zahid, 
	royAllen, 
	alanBateman, 
	laurenLee,
        larryMiller, 
	francisMutchlerLee, 
	placeholder, 
	placeholder, 
	placeholder, 
	johnWhite
];
```

## Common Issues: 
None