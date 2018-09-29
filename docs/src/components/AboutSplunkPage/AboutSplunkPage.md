
# AboutSplunkPage

## Summary:  
   This page renders the content for the about splunk
   page. It contains the about splunk video that is played
   as the banner automatically. It also has a header and description
   for the checklist of required review items as well as the
   checklist itself.

## Function:
   `import splunkVideo from '../../images/splunk-intro.mp4';` : is responsible for loading the video 
   that is played automatically.
   
   `import ReviewChecklist from './ReviewChecklist';` : Loads the checklist for the users.
   
   Following render function renders the video banner, header and directions, and checklist.
   ```
   render() {
	return(
	    <div>
		<VideoBanner 
		    url={splunkVideo} 
		    height="60%"
		/>
		<div className="container-fluid">
		    <h3>Do you want to onboard your app's data to Splunk?</h3>
		    <p>...</p>
		    <ReviewChecklist store={this.props.store} />
		</div>
	    </div>
	);
   }
```

## Common Issues:
   None
