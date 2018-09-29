import React, {Component} from 'react';
import TeamMemberEntry from './TeamMemberEntry';



// Get images
import christopherKellmeyer from '../../images/team/christopherKellmeyer.jpg';
import zahid from '../../images/team/Zahid.jpg';
import royAllen from '../../images/team/royAllen.jpg';
import alanBateman from '../../images/team/alanBateman.jpg';
import laurenLee from '../../images/team/laurenLee.jpg';
import larryMiller from '../../images/team/larryMiller.jpg';
import francisMutchlerLee from '../../images/team/francisMutchlerLee.jpg';
import johnWhite from '../../images/team/johnWhite.jpg';
import placeholder from '../../images/team/placeholder.png';

// Put images in array to loop over
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

// Set props to send
const name = [
	'Christopher Kellmeyer',
	'Zahid Al-Zahid',
	'Roy Allen',
	'Alan Bateman',
	'Lauren Lee',
	'Larry Miller',
	'Francis Mutchler-Lee',
	'Nikita Pimparwar',
	'David Rydeen',
	'Aaron Sams',
	'John White'
];
const title = [
	'Manager IT Support',
	'Software Developer III',
	'Technical Advisor',
	'Technical Principal',
	'Associate Project Management Analyst',
	'DBA Principal',
	'Technical Principal',
	'Software Developer I',
	'Associate Database Administrator',
	'Software Developer I',
	'Technical Principal'
];
const email = [
	'ckellmeyer@fedex.com',
	'zahid.khandaker@fedex.com',
	'rlallen2@fedex.com',
	'wabateman@fedex.com',
	'lauren.lee@fedex.com',
	'llmiller@fedex.com',
	'francis.mutchler-lee@fedex.com',
	'nikitapimparwar.osv@fedex.com',
	'chase.rydeen@fedex.com',
	'aaron.sams@fedex.com',
	'jcwhite@fedex.com'
];
const phone = [
	'+1 (901) 263-3248',
	'+1 (901) 263-3504',
	'+1 (901) 263-8506',
	'+1 (901) 263-6415',
	'+1 (901) 263-5451',
	'+1 (901) 263-3663',
	'+1 (901) 263-7640',
	'',
	'+1 (901) 263-6102',
	'+1 (901) 263-3250',
	'+1 (901) 263-5975'
];
const personalInfo = [
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Hobbies and stuff Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
];
	

// This is the container for the team page
class TeamPage extends Component {
		
	render() {
		var teamMembers = [];

		for(var i = 0; i < image.length; i++){
			teamMembers.push(
				<TeamMemberEntry 
					key={i}
					image={image[i]}
					name={name[i]}
					title={title[i]}
					email={email[i]}
					phone={phone[i]}
					personalInfo={personalInfo[i]}
					id={i}
				/>
			);
		}
		
		return(
			<div className="container-fluid">
				{teamMembers}
			</div>
		);
	}
}

export default TeamPage;
