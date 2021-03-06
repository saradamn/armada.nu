import React from "react"
import FAQHeader from './FAQHeader'
import FAQContent from './FAQContent'
import background from '../../../content/assets/faqbanner.png'

//FAQ questions and answers. Only question and answer are used in search. Define displayAnswer to use elements such as link-tags in the answer.
const faq_data = [
    {title: "ABOUT ARMADA", body: [
        {question: "What is THS Armada?", answer: "The largest student-led career fair in Scandinavia bringing together great minds from KTH and other universities and companies from around the globe. Every year since 1981 THS Armada has created a platform where students and companies can shape their future, together."},
        {question: "Where is THS Armada?", answer: "THS Armada is taking place in Nymble, KTH Entré, and KTH Library. All located on KTH Campus Valhallavägen."},
        {question: "What is the Start-up Arena by KTH Innovation?", answer: "It is a collaboration between THS Armada and KTH Innovation to showcase start-ups that have come from KTH and are looking for more students that want to join them. So take the chance to #joinastartup at KTH Entré."},
        {question: "How can I find all the events that Armada arranges?", answer: "Head to armada.nu/events/ and sign up now! THS Armada arranges lunch lectures approximately two week prior to the fair. During the fair, THS Armada arranges Individual meetings with companies and internship pitch lectures.", displayAnswer: <span>Head to <a href="/events/">armada.nu/events</a> and sign up now! THS Armada arranges lunch lectures approximately two week prior to the fair. During the fair, THS Armada arranges Individual meetings with companies and internship pitch lectures.</span>},
    ]},
    {title: "THE FAIR", body: [
        {question: "When is the Armada fair taking place?", answer: "The Armada Career Fair takes place each year in November for 2 days. This year we will host the fair November 17-18."},
        {question: "What are the opening hours?", answer: "10.00-16.00 on November 17th and 10.00-15.00 on November 18th."},
        {question: "Does the Armada fair cost money to attend?", answer: "No, it is completely free for everyone to visit! If you are representing a company that wants to exhibit next year, contact the Project Manager at a@armada.nu."},
        {question: "I do not study at KTH, can I still attend?", answer: "Yes of course! Everybody is welcome."},
        {question: "How many companies are coming to the Armada fair?", answer: "You can see all the exhibiting companies at armada.nu/exhibitors", displayAnswer: <span>You can see all the exhibiting companies at <a href="/exhibitors/">armada.nu/exhibitors</a>.</span>},
        {question: "What is the Green Room?", answer: "A place at the fair where companies that actively work with sustainability-related questions stand."},
        {question: "What is the Diversity Room?", answer: "A place at the fair where companies that actively work with diversity-related questions stand."},
        {question: "Where can I find last year's exhibitors?", answer: "Head to armada.nu/previous to find last year's exhibitors.", displayAnswer: <span>Head to <a href="/previous/">armada.nu/previous</a> to find last years exhibitors.</span>},
]},
{title: "MAPS AND LOCATIONS", body: [
    {question: "Where are the Information Desks located?", answer: "There are two information desks. The first one is located outside KårX in Nymble and the second one is located in the Library, on the right-hand side just before entering the big hall."},
        {question: "Where can I find a map of the exhibitor area?", answer: "Go to armada.nu/maps/ there you will find an interactive map over all exhibitors.", displayAnswer: <span>Go to <a href="/maps">armada.nu/maps</a>, there you will find an interactive map over all exhibitors.</span>},
        {question: "How do I find a specific company at the fair?", answer: "You can do this in two ways, either you go to the exhibitors page, search for the company you are interested in and then click on their map position. Or you go to the map directly and search for the company there, you will then find the location of the company you are looking for."},
        {question: "Will there be any wardrobes at the fair?", answer: "Yes, there will be one wardrobe in Nymble, click here for the position, at the entrance closest to the subway and one in the library close to the information desk"},
]},
{title: "THE BANQUET", body: [
    {question: "Can I attend the banquet?", answer: "The whole Armada Team is invited to The Grand Banquet together with the companies that purchased Banquet tickets. The afterparty is open for everyone to join, you just need to purchase a ticket!"},
    {question: "Is it possible to attend the banquet even though I’m not working for Armada?", answer: "Only if you were a part of the winning team of the annual Armada Run! But you can go to the After Party at Münchenbryggeriet, buy your ticket now!"},
]},
{title: "RECRUITMENT", body: [
    {question: "How do I become a part of the Armada team?", answer: "You apply for any of the roles you are interested in during one of the recruitment periods Armada has during the year. See the question about “When do THS Armada recruit people?”"},
    {question: "When do THS Armada recruit people?", answer: "Armada recruits for different roles and responsibilities during three periods throughout the year, the project group is recruited in December-February and works for almost a year in Armada. Then the Operations team is recruited in April-May and last but not least the Hosts are recruited in August-September. If you have any questions about what it is like to be in THS Armada you can contact the Project Manager at a@armada.nu or +46 70 790 98 44."},
    {question: "Why should I engage in THS Armada?", answer: "Meet new people from all parts of KTH, learn a lot and interact with companies!"},
]}
];


class FAQContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            searchResult: faq_data
        }

        this.updateSearchResult = this.updateSearchResult.bind(this)
    }

    render() {
        return(
            <div>
                <div className="faq-search-form">
                    <img className="terre" src={background}></img>
                    <FAQHeader onQuestionUpdate={this.updateSearchResult} />   
                </div>
                <div >
                <FAQContent faq_data={this.state.searchResult}/>
    
                </div>
                
            </div>
        )
    }

    updateSearchResult(input) {
        input = input.target.value.toLowerCase()

        // actual result filtering
        let copy =  faq_data.map(a => Object.assign({}, a));

        // filter question
        copy = copy.map(group => {
            group.body = group.body.filter(question => question.question.toLowerCase().includes(input) || question.answer.toLowerCase().includes(input))
            return group
        }).filter(group => group.body.length > 0)

        this.setState({
            searchResult: copy
        })

    }
}

export default FAQContainer
