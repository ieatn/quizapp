const questions = [
  // Chapter 6
  {
    question: "Which strategy is used to reduce cognitive dissonance when a smoker justifies smoking as a stress reliever?",
    options: ["Changing behavior", "Changing cognition", "Adding consonant cognitions", "Denying responsibility"],
    answer: "Changing cognition",
    chapter: 6
  },
  {
    question: "The 'IKEA Effect' (Norton et al., 2012) demonstrates which principle of cognitive dissonance?",
    options: ["Insufficient justification", "Post-decision dissonance", "Justification of effort", "Self-persuasion"],
    answer: "Justification of effort",
    chapter: 6
  },
  {
    question: "In Festinger & Carlsmith’s (1959) study, participants paid $1 to lie about a task later rated it as enjoyable. This illustrates:",
    options: ["Self-affirmation theory", "Insufficient justification", "Post-decision dissonance", "Effort justification"],
    answer: "Insufficient justification",
    chapter: 6
  },
  {
    question: "Brehm’s (1956) appliance study found that after choosing between two items, participants:",
    options: ["Felt regret", "Upgraded the chosen item and downgraded the rejected one", "Avoided re-evaluating their choices", "Preferred cheaper options"],
    answer: "Upgraded the chosen item and downgraded the rejected one",
    chapter: 6
  },
  {
    question: "What did Knox & Inkster’s (1968) horse betting study show about post-decision dissonance?",
    options: ["Bettors became less confident after placing bets", "Bettors increased confidence after committing to a choice", "Bettors avoided risky decisions", "Bettors preferred non-monetary rewards"],
    answer: "Bettors increased confidence after committing to a choice",
    chapter: 6
  },
  {
    question: "According to cross-cultural studies (Akai, 1999; Imada, 2010), collectivist cultures primarily experience dissonance when:",
    options: ["Personal beliefs conflict", "Social harmony is disrupted", "Financial losses occur", "Individual goals are unmet"],
    answer: "Social harmony is disrupted",
    chapter: 6
  },
  {
    question: "In Aronson & Carlsmith’s (1963) forbidden toy experiment, children under mild threat devalued the toy. This supports:",
    options: ["Self-persuasion via insufficient punishment", "Justification of effort", "Post-decision dissonance", "Hypocrisy induction"],
    answer: "Self-persuasion via insufficient punishment",
    chapter: 6
  },
  {
    question: "Self-Affirmation Theory (Steele, 1986) suggests dissonance can be reduced by:",
    options: ["Changing one’s behavior", "Affirming unrelated personal values", "Denying conflicting beliefs", "Seeking social approval"],
    answer: "Affirming unrelated personal values",
    chapter: 6
  },
  {
    question: "The Coin Flip Study found that participants often:",
    options: ["Followed the coin’s result strictly", "Rationalized self-serving choices despite the coin’s outcome", "Avoided making decisions", "Preferred random outcomes"],
    answer: "Rationalized self-serving choices despite the coin’s outcome",
    chapter: 6
  },
  {
    question: "In Berscheid et al.’s (1968) shock study, participants reduced dissonance by:",
    options: ["Apologizing to the experimenter", "Devaluing the experimenter", "Changing their attitudes about shocks", "Refusing to participate"],
    answer: "Devaluing the experimenter",
    chapter: 6
  },
  // Chapter 7
  {
    question: "Which study demonstrated a disconnect between expressed attitudes and actual behavior by showing establishments served a Chinese couple despite survey refusals?",
    options: ["LaPiere (1932)", "Davidson & Jaccard (1979)", "Han & Shavitt (1994)", "Greenwald (1991)"],
    answer: "LaPiere (1932)",
    chapter: 7
  },
  {
    question: "The Theory of Planned Behavior (Ajzen, 1991) includes all the following components EXCEPT:",
    options: ["Subjective norms", "Perceived behavioral control", "Implicit attitudes", "Attitudes toward the behavior"],
    answer: "Implicit attitudes",
    chapter: 7
  },
  {
    question: "Which model distinguishes between the central route (careful analysis) and peripheral route (superficial cues) of persuasion?",
    options: ["Yale Attitude Change Approach", "Elaboration Likelihood Model", "Heuristic-Systematic Model", "Reactance Theory"],
    answer: "Elaboration Likelihood Model",
    chapter: 7
  },
  {
    question: "Brinol & Petty (2012) found that nodding while listening to a message increased agreement. This illustrates:",
    options: ["Subliminal influence", "Physical influence on attitude change", "Fear-arousing communication", "Attitude inoculation"],
    answer: "Physical influence on attitude change",
    chapter: 7
  },
  {
    question: "Reactance Theory (Pennebaker & Sanders, 1976) predicts that prohibiting behavior leads to:",
    options: ["Increased compliance", "Reduced dissonance", "Increased defiance", "Attitude alignment"],
    answer: "Increased defiance",
    chapter: 7
  },
  // Chapter 7
  {
    question: "Which component of attitudes involves unconscious, automatic associations?",
    options: ["Cognitive", "Affective", "Implicit", "Explicit"],
    answer: "Implicit",
    chapter: 7
  },
  {
    question: "Leventhal’s (1967) fear-arousing communication study found the most effective anti-smoking messages combined:",
    options: ["Humor and logic", "Graphic images and instructions to quit", "Celebrity endorsements", "Subliminal cues"],
    answer: "Graphic images and instructions to quit",
    chapter: 7
  },
  {
    question: "Han & Shavitt’s (1994) study on cultural advertising found that Korean ads emphasized:",
    options: ["Independence", "Interdependence", "Fear appeals", "Physical attractiveness"],
    answer: "Interdependence",
    chapter: 7
  },
  {
    question: "The Heuristic-Systematic Model distinguishes between:",
    options: ["Central and peripheral processing", "Deep and shallow thinking", "Systematic processing and mental shortcuts", "Fear and humor appeals"],
    answer: "Systematic processing and mental shortcuts",
    chapter: 7
  },
  {
    question: "Karremans (2006) demonstrated that subliminal exposure to 'Lipton Ice' influenced:",
    options: ["Political attitudes", "Brand preferences", "Emotional reactions", "Ethical judgments"],
    answer: "Brand preferences",
    chapter: 7
  },
  // Chapter 8
  {
    question: "In Sherif’s (1936) autokinetic effect study, participants conformed to group norms due to:",
    options: ["Normative influence", "Informational influence", "Authority pressure", "Physical arousal"],
    answer: "Informational influence",
    chapter: 8
  },
  {
    question: "Which factor reduces conformity in Asch’s line judgment experiment?",
    options: ["Ambiguity of the task", "Presence of an ally", "Larger group size", "High stakes"],
    answer: "Presence of an ally",
    chapter: 8
  },
  {
    question: "According to Bond & Smith (1996), which cultures exhibit higher conformity rates?",
    options: ["Individualist cultures", "Collectivist cultures", "Egalitarian cultures", "Secular cultures"],
    answer: "Collectivist cultures",
    chapter: 8
  },
  {
    question: "Milgram’s (1963) obedience study found that approximately what percentage of participants administered the maximum shock?",
    options: ["35%", "50%", "65%", "80%"],
    answer: "65%",
    chapter: 8
  },
  {
    question: "The Door-in-the-Face technique works due to:",
    options: ["Self-perception", "Reciprocity and contrast effects", "Fear arousal", "Minority influence"],
    answer: "Reciprocity and contrast effects",
    chapter: 8
  },
  // Chapter 8
  {
    question: "According to Latané’s Social Impact Theory, conformity increases with greater:",
    options: ["Group diversity", "Physical distance from the group", "Group strength and immediacy", "Task complexity"],
    answer: "Group strength and immediacy",
    chapter: 8
  },
  {
    question: "Wood et al. (1994) showed that minority influence is most effective when the minority is:",
    options: ["Aggressive", "Inconsistent", "Consistent", "Anonymous"],
    answer: "Consistent",
    chapter: 8
  },
  {
    question: "Schultz et al. (2007) found that people adjusted energy use to match social norms, illustrating:",
    options: ["Normative influence", "Informational influence", "Deindividuation", "Reactance"],
    answer: "Normative influence",
    chapter: 8
  },
  {
    question: "The Foot-in-the-Door technique relies on which psychological principle?",
    options: ["Reciprocity", "Self-perception and commitment", "Fear arousal", "Authority pressure"],
    answer: "Self-perception and commitment",
    chapter: 8
  },
  {
    question: "Burger’s (2009) replication of Milgram’s study found obedience levels:",
    options: ["Lower than Milgram’s", "Higher than Milgram’s", "Similar to Milgram’s", "Nonexistent due to ethics"],
    answer: "Similar to Milgram’s",
    chapter: 8
  },
  // Chapter 9
  {
    question: "Zajonc’s (1969) study on cockroaches demonstrated that social facilitation improves performance on:",
    options: ["Complex tasks", "Novel tasks", "Simple tasks", "Groupthink scenarios"],
    answer: "Simple tasks",
    chapter: 9
  },
  {
    question: "Groupthink is exemplified by which real-world event?",
    options: ["Challenger Explosion", "Milgram’s obedience study", "IKEA Effect", "Prisoner’s Dilemma"],
    answer: "Challenger Explosion",
    chapter: 9
  },
  {
    question: "Which leadership style focuses on inspiring change through vision and motivation?",
    options: ["Transactional", "Transformational", "Task-oriented", "Relationship-oriented"],
    answer: "Transformational",
    chapter: 9
  },
  {
    question: "The 'glass cliff' refers to:",
    options: ["Barriers to leadership for women", "Women being appointed to leadership roles in crises", "Social loafing in diverse groups", "Deindividuation in anonymous settings"],
    answer: "Women being appointed to leadership roles in crises",
    chapter: 9
  },
  {
    question: "In the Prisoner’s Dilemma, cooperation is most likely when:",
    options: ["Trust is absent", "Communication is prohibited", "Repeated interactions occur", "Self-interest dominates"],
    answer: "Repeated interactions occur",
    chapter: 9
  },
  // Chapter 9
  {
    question: "Deindividuation, as seen in the KKK cloak study, is linked to:",
    options: ["Enhanced critical thinking", "Increased accountability", "Reduced self-awareness", "Social facilitation"],
    answer: "Reduced self-awareness",
    chapter: 9
  },
  {
    question: "Ringelmann’s (1913) rope-pulling study demonstrated the concept of:",
    options: ["Group polarization", "Social loafing", "Transactional leadership", "Transactive memory"],
    answer: "Social loafing",
    chapter: 9
  },
  {
    question: "McLeod’s (1996) study on group diversity found that homogeneous groups reported:",
    options: ["Lower creativity", "Higher satisfaction", "Greater conflict", "Stronger leadership"],
    answer: "Higher satisfaction",
    chapter: 9
  },
  {
    question: "Group polarization refers to the tendency for group discussions to:",
    options: ["Suppress minority opinions", "Intensify pre-existing attitudes", "Encourage conformity", "Reduce social loafing"],
    answer: "Intensify pre-existing attitudes",
    chapter: 9
  },
  {
    question: "The Contingency Theory of Leadership suggests task-oriented leaders excel in:",
    options: ["Moderate-control situations", "High- or low-control extremes", "Crisis-free environments", "Diverse groups"],
    answer: "High- or low-control extremes",
    chapter: 9
  },
  // Chapter 10
  {
    question: "The Mere Exposure Effect suggests that attraction increases with:",
    options: ["Physical proximity", "Shared experiences", "Repeated exposure", "Reciprocal liking"],
    answer: "Repeated exposure",
    chapter: 10
  },
  {
    question: "Walster’s (1966) blind date study found that the best predictor of a second date was:",
    options: ["Similarity", "Physical attractiveness", "Reciprocal liking", "Shared values"],
    answer: "Physical attractiveness",
    chapter: 10
  },
  {
    question: "Which attachment style is characterized by fear of abandonment?",
    options: ["Secure", "Avoidant", "Anxious-Ambivalent", "Communal"],
    answer: "Anxious-Ambivalent",
    chapter: 10
  },
  {
    question: "According to Equity Theory, relationships thrive when:",
    options: ["Rewards exceed costs", "Both partners contribute equally", "Physical attraction is high", "Communication is minimal"],
    answer: "Both partners contribute equally",
    chapter: 10
  },
  {
    question: "Meston’s (2003) rollercoaster study demonstrated that arousal can:",
    options: ["Reduce social loafing", "Enhance companionate love", "Increase attraction", "Trigger deindividuation"],
    answer: "Increase attraction",
    chapter: 10
  },
  // Chapter 10
  {
    question: "The Propinquity Effect states that attraction increases with:",
    options: ["Similarity", "Physical proximity", "Reciprocal liking", "Shared experiences"],
    answer: "Physical proximity",
    chapter: 10
  },
  {
    question: "Reciprocal liking refers to the tendency to:",
    options: ["Value equity in relationships", "Like those who like us", "Prefer attractive partners", "Avoid communal relationships"],
    answer: "Like those who like us",
    chapter: 10
  },
  {
    question: "Finkel’s (2009) speed-dating study supported evolutionary theories by showing men prioritize:",
    options: ["Status and resources", "Youth and beauty", "Intelligence", "Shared values"],
    answer: "Youth and beauty",
    chapter: 10
  },
  {
    question: "Przybylski’s (2013) study found that phone presence during interactions reduced:",
    options: ["Attraction", "Closeness and trust", "Physical arousal", "Social loafing"],
    answer: "Closeness and trust",
    chapter: 10
  },
  {
    question: "Toma’s (2008) research on online dating profiles found most inaccuracies involved:",
    options: ["Personality traits", "Age, weight, and height", "Career details", "Hobbies"],
    answer: "Age, weight, and height",
    chapter: 10
  },
  
  ]
  

export default questions;