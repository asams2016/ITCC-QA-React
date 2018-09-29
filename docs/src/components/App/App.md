
# App.js

## Summary:
This file holds the container for the entire app. 

## Function:
### Following imports hold the base design of the website.
```
import NavigationBar from "../NavigationBar/NavigationBar";
import LargeBanner from "../BannerTitle/LargeBanner";
import GradientBanner from "../BannerTitle/GradientBanner";
import StickyButton from "../StickyButton/StickyButton";
import Footer from "../Footer/Footer";
```

### Following imports are used for generating content on the webpage.
```
import DataOnboardingPage from "../DataOnboardingPage/DataOnboardingPage";
import HomePage from "../HomePage/HomePage";
import AboutSplunkPage from "../AboutSplunkPage/AboutSplunkPage";
import ServiceMappingPage from "../ServiceMappingPage/ServiceMappingPage";
import SearchBar from "../SearchBar/SearchBar";
import NewsPage from "../NewsPage/NewsPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import TeamPage from "../TeamPage/TeamPage";
import ContactPage from "../ContactPage/ContactPage";
import AppProgressPage from "../AppProgress/AppProgressPage";
```

### Following imports holds the images for the webpage.
```
import homeImage from '../../images/banners/homeBannerBig.png';
import projectsImage from '../../images/banners/laptop.jpg';
import contactImage from '../../images/banners/phone-and-laptop.jpg';
import teamImage from '../../images/banners/people-at-table.jpg';
import newsImage from '../../images/banners/tablet.jpg';
import dataOnboardingImage from '../../images/banners/data-onboarding.jpg';
```

`constructor(props) {}` holds the banner displayed on the home page and the content in it.

`componentWillReceiveProps(newProps) {}` is invoked before a mounted component receives new props.

`componentDidUpdate() {}` scrolss the page to the top whenever a new page is loaded.

`renderContent(page) {}` renders the content within the pages. It contains a switch case which depending on the page,
renders the appropriate banner and title.
```
switch(page) {
    case "home":
        this.setState();
        break;
    case "aboutSplunk":
        this.setState();
        break;
    case "dataOnboarding":
        this.setState();
        break;
    case "serviceMapping":
        this.setState();
        break;
    case "news":
        this.setState();
        break;
    case "projects":
        this.setState();
        break;
    case "team":
        this.setState();
        break;
    case "contact":
        this.setState();
        break;
    case "appProgress":
        this.setState();
        break;
    default:
        this.setState();
}
```
`render() {}` checks whether the page is onboarding page or not, if not, then it adds a sticky button linking to the page, renders the content of the current page and scrolls to the top of the page.

## Common Issues:
None
