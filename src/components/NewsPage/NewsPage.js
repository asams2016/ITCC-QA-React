import React, {Component} from 'react';
import NewsEntryLeft from './NewsEntryLeft';
import NewsEntryRight from './NewsEntryRight';

// Get images
import image1 from '../../images/news4.jpg';
import image2 from '../../images/news4.jpg';
import image3 from '../../images/news4.jpg';
import image4 from '../../images/news4.jpg';

// Set props to send
const id = ['news1', 'news2', 'news3', 'news4'];
const title = ['News Title 1', 'News Title 2', 'News Title 3', 'News Title 4'];
const date = ['July 4, 2018', 'July 3, 2018', 'July 2, 2018', 'July 1, 2018'];
const text = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at convallis nunc. Vestibulum accumsan tristique orci, sit amet porta neque efficitur vel. Sed justo neque, consectetur ac tellus quis, pharetra hendrerit massa. Phasellus luctus hendrerit ligula, vitae convallis odio accumsan ut. In fringilla scelerisque congue. Donec ut enim tempor, congue felis sed, sollicitudin orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pulvinar nibh erat, quis egestas ex bibendum sit amet. Suspendisse lacinia nunc nec sapien convallis commodo. Quisque consequat lacus in elementum viverra. Integer convallis euismod bibendum. Aenean quis mauris interdum, tincidunt urna eget, lobortis turpis. Praesent scelerisque dui nec gravida cursus.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at convallis nunc. Vestibulum accumsan tristique orci, sit amet porta neque efficitur vel. Sed justo neque, consectetur ac tellus quis, pharetra hendrerit massa. Phasellus luctus hendrerit ligula, vitae convallis odio accumsan ut. In fringilla scelerisque congue. Donec ut enim tempor, congue felis sed, sollicitudin orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pulvinar nibh erat, quis egestas ex bibendum sit amet. Suspendisse lacinia nunc nec sapien convallis commodo. Quisque consequat lacus in elementum viverra. Integer convallis euismod bibendum. Aenean quis mauris interdum, tincidunt urna eget, lobortis turpis. Praesent scelerisque dui nec gravida cursus.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at convallis nunc. Vestibulum accumsan tristique orci, sit amet porta neque efficitur vel. Sed justo neque, consectetur ac tellus quis, pharetra hendrerit massa. Phasellus luctus hendrerit ligula, vitae convallis odio accumsan ut. In fringilla scelerisque congue. Donec ut enim tempor, congue felis sed, sollicitudin orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pulvinar nibh erat, quis egestas ex bibendum sit amet. Suspendisse lacinia nunc nec sapien convallis commodo. Quisque consequat lacus in elementum viverra. Integer convallis euismod bibendum. Aenean quis mauris interdum, tincidunt urna eget, lobortis turpis. Praesent scelerisque dui nec gravida cursus.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at convallis nunc. Vestibulum accumsan tristique orci, sit amet porta neque efficitur vel. Sed justo neque, consectetur ac tellus quis, pharetra hendrerit massa. Phasellus luctus hendrerit ligula, vitae convallis odio accumsan ut. In fringilla scelerisque congue. Donec ut enim tempor, congue felis sed, sollicitudin orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pulvinar nibh erat, quis egestas ex bibendum sit amet. Suspendisse lacinia nunc nec sapien convallis commodo. Quisque consequat lacus in elementum viverra. Integer convallis euismod bibendum. Aenean quis mauris interdum, tincidunt urna eget, lobortis turpis. Praesent scelerisque dui nec gravida cursus.'
];

// This is the container for the news page content
class NewsPage extends Component {
	render() {
		return(
			<div className="container-fluid">
				<h2>News</h2>
				<NewsEntryLeft image={image1} id={id[0]} title={title[0]} date={date[0]} text={text[0]} />
				<NewsEntryRight image={image2} id={id[1]} title={title[1]} date={date[1]} text={text[1]} />
				<NewsEntryLeft image={image3} id={id[2]} title={title[2]} date={date[2]} text={text[2]} />
				<NewsEntryRight image={image4} id={id[3]} title={title[3]} date={date[3]} text={text[3]} />
			</div>
		);
	}
}

export default NewsPage;
