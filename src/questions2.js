const questions = [
    {
      "question": "What does cognitive dissonance refer to?",
      "options": ["Mental discomfort from conflicting beliefs and behaviors", "A form of memory loss", "The tendency to conform to a group", "A strategy for conflict resolution"],
      "answer": "Mental discomfort from conflicting beliefs and behaviors"
    },
    {
      "question": "Which of the following is an example of cognitive dissonance?",
      "options": ["Believing smoking is bad but still smoking", "Choosing a product because it is on sale", "Agreeing with others in a group", "Making a decision based on facts alone"],
      "answer": "Believing smoking is bad but still smoking"
    },
    {
      "question": "What is the concept behind Festinger's cognitive dissonance theory?",
      "options": ["People avoid information that challenges their beliefs", "People seek consistency between their beliefs and actions", "People automatically conform to others", "People always justify their actions without thought"],
      "answer": "People seek consistency between their beliefs and actions"
    },
    {
      "question": "In which study did participants rate appliances higher after choosing them?",
      "options": ["Brehm (1956)", "Asch (1951)", "Sherif (1936)", "Norton (2012)"],
      "answer": "Brehm (1956)"
    },
    {
      "question": "Which study demonstrated the concept of insufficient justification?",
      "options": ["Festinger (1959)", "Norton (2012)", "Aronson (1963)", "LaPiere (1932)"],
      "answer": "Festinger (1959)"
    },
    {
      "question": "What is an example of the self-affirmation theory?",
      "options": ["Complaining about your behavior but doing nothing about it", "Reassuring yourself of your worth by focusing on your strengths", "Denying personal mistakes to reduce discomfort", "Reframing your behavior as part of who you are"],
      "answer": "Reassuring yourself of your worth by focusing on your strengths"
    },
    {
      "question": "What does the self-evaluation maintenance theory explain?",
      "options": ["Why we try to outperform others", "Why we avoid situations that challenge our self-esteem", "Why we are motivated to help others", "Why we engage in group behavior"],
      "answer": "Why we avoid situations that challenge our self-esteem"
    },
    {
      "question": "Which of the following describes the Theory of Planned Behavior?",
      "options": ["Attitudes are always strong predictors of behavior", "Behavior is influenced by attitudes, subjective norms, and perceived control", "Behavior is entirely unconscious", "Only the attitude toward behavior matters for decision-making"],
      "answer": "Behavior is influenced by attitudes, subjective norms, and perceived control"
    },
    {
      "question": "What does the elaboration likelihood model propose?",
      "options": ["There is only one route to persuasion", "Attitudes cannot change once they are formed", "Persuasion occurs through central or peripheral routes", "People never change their attitudes through persuasion"],
      "answer": "Persuasion occurs through central or peripheral routes"
    },
    {
      "question": "Which type of attitude involves thoughtful, detailed consideration of the information?",
      "options": ["Peripheral route", "Central route", "Implicit attitude", "Explicit attitude"],
      "answer": "Central route"
    },
    {
      "question": "Which of these is an example of normative social influence?",
      "options": ["Conforming to a group to avoid conflict", "Changing your behavior because you believe others are right", "Adopting an attitude based on your own experiences", "Making decisions in isolation"],
      "answer": "Conforming to a group to avoid conflict"
    },
    {
      "question": "What was the main finding of Asch’s Line Judgment study?",
      "options": ["People conform to group pressure even when the group is wrong", "People rarely conform in ambiguous situations", "People are more likely to rebel than conform", "People conform only when they agree with the group’s opinion"],
      "answer": "People conform to group pressure even when the group is wrong"
    },
    {
      "question": "Which of these is a method of influencing behavior by asking for a small request first?",
      "options": ["Foot-in-the-door", "Door-in-the-face", "Normative influence", "Central route"],
      "answer": "Foot-in-the-door"
    },
    {
      "question": "What does the door-in-the-face technique involve?",
      "options": ["Starting with a large request followed by a smaller one", "Asking for a small request first", "Applying consistent pressure", "Providing rewards after a request"],
      "answer": "Starting with a large request followed by a smaller one"
    },
    {
      "question": "What is groupthink?",
      "options": ["Group members prioritize harmony over accuracy in decision-making", "Groups always make better decisions than individuals", "People in groups are always more rational", "Group members work independently on decisions"],
      "answer": "Group members prioritize harmony over accuracy in decision-making"
    },
    {
      "question": "Which of the following describes social loafing?",
      "options": ["People exert less effort when working in a group", "People perform better when working in groups", "People are more likely to conform to the majority", "People perform worse when working alone"],
      "answer": "People exert less effort when working in a group"
    },
    {
      "question": "What does deindividuation refer to?",
      "options": ["The process of becoming more self-aware in groups", "A loss of self-awareness and personal responsibility in groups", "The tendency to avoid group decision-making", "The process of enforcing social norms"],
      "answer": "A loss of self-awareness and personal responsibility in groups"
    },
    {
      "question": "Which is a key factor in attraction according to social psychology?",
      "options": ["Proximity", "Conformity", "Self-esteem", "Stress level"],
      "answer": "Proximity"
    },
    {
      "question": "Which of the following is an example of the halo effect?",
      "options": ["Attractiveness influencing judgments of other qualities", "Negative feedback causing self-doubt", "Focusing only on negative aspects of a situation", "Believing a person is always wrong because of one mistake"],
      "answer": "Attractiveness influencing judgments of other qualities"
    },
    {
      "question": "What does similarity in attraction refer to?",
      "options": ["The idea that opposites attract", "The tendency to be attracted to people with similar attitudes and interests", "The attraction between people from different cultures", "The belief that attraction is determined by shared experiences"],
      "answer": "The tendency to be attracted to people with similar attitudes and interests"
    },
    {
      "question": "What type of love is characterized by deep friendship and mutual respect?",
      "options": ["Companionate love", "Passionate love", "Romantic love", "Infatuation"],
      "answer": "Companionate love"
    },
    {
      "question": "Which of the following is an example of passionate love?",
      "options": ["Intense feelings of attraction and desire", "Deep mutual respect and understanding", "Love based on shared experiences", "Love that develops over a long period"],
      "answer": "Intense feelings of attraction and desire"
    },
    {
      "question": "What was the purpose of the Stanford Prison Experiment?",
      "options": ["To explore group dynamics and decision-making", "To study the effects of role assignment in a simulated prison environment", "To measure people's resistance to authority", "To observe the impact of physical punishment in prisons"],
      "answer": "To study the effects of role assignment in a simulated prison environment"
    },
    {
      "question": "Which study is associated with the finding that people obey authority even when it involves harming others?",
      "options": ["Milgram's obedience study", "Asch's conformity study", "Zimbardo's prison experiment", "Sherif's Robbers Cave experiment"],
      "answer": "Milgram's obedience study"
    },
    {
      "question": "What is the concept of social facilitation?",
      "options": ["Improved performance on simple tasks in the presence of others", "Decreased performance in groups", "The tendency to seek out new environments", "The process of avoiding group conflict"],
      "answer": "Improved performance on simple tasks in the presence of others"
    },
    {
      "question": "What is the main reason for social loafing?",
      "options": ["People think others will do the work", "People prefer individual tasks", "People enjoy competition", "People work better when they are alone"],
      "answer": "People think others will do the work"
    },
    {
      "question": "Which of the following is an example of implicit attitude?",
      "options": ["Unconscious bias toward a particular group", "A consciously expressed opinion", "A behavior you are aware of", "An attitude you articulate openly"],
      "answer": "Unconscious bias toward a particular group"
    },
    {
      "question": "Which theory suggests that we form attitudes by observing our own behaviors?",
      "options": ["Self-Perception Theory", "Theory of Planned Behavior", "Cognitive Dissonance Theory", "Self-Affirmation Theory"],
      "answer": "Self-Perception Theory"
    },
    {
      "question": "What does the theory of planned behavior emphasize as influencing behavior?",
      "options": ["Attitudes, subjective norms, and perceived control", "Implicit beliefs and automatic responses", "Cognitive dissonance and behavioral change", "Conformity to social standards"],
      "answer": "Attitudes, subjective norms, and perceived control"
    },
    {
      "question": "What is an example of the foot-in-the-door technique?",
      "options": ["First asking someone for a small favor, then a larger one", "Making a large request that is likely to be refused", "Asking for help only when absolutely necessary", "Building trust by providing rewards"],
      "answer": "First asking someone for a small favor, then a larger one"
    },
    {
      "question": "What does the peripheral route to persuasion involve?",
      "options": ["Being persuaded by superficial cues like attractiveness", "Making decisions based on careful, logical thought", "Examining the pros and cons of a choice", "Reaching decisions based on factual information"],
      "answer": "Being persuaded by superficial cues like attractiveness"
    },
    {
      "question": "Which of these best describes the concept of group polarization?",
      "options": ["The tendency for groups to make more extreme decisions after discussion", "The tendency to seek out social approval", "The reduction in effort in group settings", "The tendency to avoid risky decisions in groups"],
      "answer": "The tendency for groups to make more extreme decisions after discussion"
    }
  ]
  

export default questions;