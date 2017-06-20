/********************************/
/* 		Configuration File 		*/
/********************************/

const config = {

	/** ABOUT PAGE **/
	ABOUT : {
		TEXT : [{
			header: "Our Goal",
			paragraphs: [
			"Our goal here at ACM is to advance the science and application of information technology by providing students with real world information through guest speakers, workshops, seminars, projects, and other activities. Information about job trends, internships, and scholarships is always updated to help students take a stand in their future career.",
			"We also work to strengthen the bond between the studetns, the faculty, and the Computer Engineering and Computer Science (CECS) department. A stronger, tighter relationship students and their instructors engerders a friendly, energetic, close-knit and secure learning atmosphere.",
			"Moreover, we provide services back to the community by tutoring, volunteering, and spreading our knowledge about the information technology to others."]
		},{
			header: "More about acm@thebeach",
			paragraphs: ["The Association for Computing Machinery is an active branch of the globe's largest computer science society. Here at the Long Beach chapter, we blieve in the principles of Gladwell's book, Outliers: The Story of Success. We commit our time and energy to producing, engaging in, and ultimately mastering the technologies of the computing age."]
		}],
	} ,
	/****************/

	BOARD: [
		{
			year: '2010-2011',
			active: false,
			photo: "",
			officers: {}
		},

		{
			
			year: '2016-2017',
			active: true,
			photo: "/img/board/2016-2017/boards.JPG", 
			officers: {
				core: {
					President: {
						name: 'Aleks Kivuls',
						email: 'chair@csulb.acm.org'
					},
					'Vice President (1)':{
						name: "Cherie Woo",
						email: 'vicechair@csulb.acm.org'
					},
					'Vice President (2)':{
						name: 'Victoria Hong',
						email: 'vicechair@csulb.acm.org'
					},
					Treasurer:{
						name: 'Cesar Montelongo',
						email: 'treasurer@csulb.acm.org'
					},
					Secretary:{
						name: 'Phuong Huynh',
						email: 'secretary@csulb.acm.org'
					},
					'Event Coordinator': {
						name: 'Wesley Huang',
						email: 'events@csulb.acm.org'
					},
					'Beachhacks Director': {
						name: 'Michael Botsko',
						email: ''
					}
				},
				others: {
					Historian: {
						name: 'Crystal Chun',
					},
					'Office Tech': {
						name: 'Jonathan Nuno',
					},
					'Industry Chair': {
						name: 'Varderes Barsegyan'
					}, 
					'Publicity & Recruitment Chair': {
						name: 'Chris Meyer',
						email: 'publicity@csulb.acm.org'
					},
					'Media Designer': {
						name: 'Stormy Jackson',
					},
					'Internal Commmunications':{
						name: 'Ryan Cole',
						email: 'interalcommunications@csulb.acm.org'
					},
					'Marketing Chair': {
						name: 'Greg Dailey',
						email: 'marketing@csulb.acm.org'
					},
					'Social Media Chair': {
						name: 'Josh (Hasup) Song',
						email: 'socialmedia@csulb.acm.org'
					},
					'Scheduling Chair': {
						name: 'Dongxuan Li',
						email: 'scheduling@csulb.acm.org'
					},
					'Career Chair': {
						name: 'Eunice Chinchilla',
						email: 'careerchair@csulb.acm.org'
					}
				}
			}
			
		}]

}