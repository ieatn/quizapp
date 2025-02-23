const questions = [
  // Chapter 7
  {
    "question": "Which Piagetian stage is characterized by egocentrism and difficulty understanding conservation?",
    "options": ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
    "answer": "Preoperational",
    "chapter": 7
  },
  {
    "question": "A child who can solve conservation tasks and understand reversibility is in which Piagetian stage?",
    "options": ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
    "answer": "Concrete Operational",
    "chapter": 7
  },
  {
    "question": "Which Piagetian stage is marked by the ability to think abstractly and reason hypothetically?",
    "options": ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
    "answer": "Formal Operational",
    "chapter": 7
  },
  {
    "question": "What cognitive milestone is achieved during the sensorimotor stage?",
    "options": ["Object permanence", "Conservation", "Abstract reasoning", "Egocentrism"],
    "answer": "Object permanence",
    "chapter": 7
  },
  {
    "question": "Which of the following is NOT a characteristic of the preoperational stage?",
    "options": ["Egocentrism", "Make-believe play", "Logical thinking", "Rapid language development"],
    "answer": "Logical thinking",
    "chapter": 7
  },
  {
    "question": "Which term describes the process of supporting a child’s learning within their Zone of Proximal Development (ZPD)?",
    "options": ["Conservation", "Scaffolding", "Object permanence", "Egocentrism"],
    "answer": "Scaffolding",
    "chapter": 7
  },
  {
    "question": "According to Vygotsky, which of the following best describes the Zone of Proximal Development (ZPD)?",
    "options": [
      "The gap between what a child can do alone and what they can do with help",
      "A stage in Piaget’s theory where logical thinking develops",
      "The age at which abstract reasoning begins",
      "The point at which children can fully understand conservation"
    ],
    "answer": "The gap between what a child can do alone and what they can do with help",
    "chapter": 7
  },
  {
    "question": "A child using private speech to solve a puzzle is best explained by which theory?",
    "options": ["Piaget’s cognitive development theory", "Vygotsky’s sociocultural theory", "Core knowledge theory", "Information processing theory"],
    "answer": "Vygotsky’s sociocultural theory",
    "chapter": 7
  },
  {
    "question": "Which critique of Piaget’s theory suggests that cognitive development is more continuous than stage-like?",
    "options": ["Core knowledge theory", "Vygotsky’s sociocultural theory", "Information processing approach", "Behaviorism"],
    "answer": "Information processing approach",
    "chapter": 7
  },
  {
    "question": "Which of the following best describes intersubjectivity in Vygotsky’s theory?",
    "options": [
      "The understanding shared between individuals at different knowledge levels",
      "A child's ability to think abstractly",
      "The development of object permanence",
      "The ability to perform mental operations"
    ],
    "answer": "The understanding shared between individuals at different knowledge levels",
    "chapter": 7
  },
  {
    "question": "Which Piagetian stage involves rapid language development and make-believe play?",
    "options": ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
    "answer": "Preoperational",
    "chapter": 7
  },
  {
    "question": "A child who fails a conservation task is most likely in which Piagetian stage?",
    "options": ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
    "answer": "Preoperational",
    "chapter": 7
  },
  {
    "question": "Which of the following is a major limitation of the preoperational stage?",
    "options": ["Egocentrism", "Abstract reasoning", "Logical problem-solving", "Object permanence"],
    "answer": "Egocentrism",
    "chapter": 7
  },
  {
    "question": "Which Piagetian stage allows a child to understand conservation and reversibility?",
    "options": ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
    "answer": "Concrete Operational",
    "chapter": 7
  },
  {
    "question": "Which cognitive ability emerges during the formal operational stage?",
    "options": ["Make-believe play", "Abstract reasoning", "Egocentrism", "Object permanence"],
    "answer": "Abstract reasoning",
    "chapter": 7
  },
  {
    "question": "Piaget’s theory has been criticized for which of the following reasons?",
    "options": [
      "Underestimating children’s abilities",
      "Overemphasizing the role of social interaction",
      "Ignoring the role of biological maturation",
      "Suggesting that development is continuous rather than stage-like"
    ],
    "answer": "Underestimating children’s abilities",
    "chapter": 7
  },
  {
    "question": "According to Vygotsky, what is the primary mechanism of cognitive development?",
    "options": ["Innate knowledge", "Physical maturation", "Social interaction", "Logical reasoning"],
    "answer": "Social interaction",
    "chapter": 7
  },
  {
    "question": "Which concept refers to the process of adults helping children complete tasks they cannot do alone?",
    "options": ["Scaffolding", "Egocentrism", "Reversibility", "Object permanence"],
    "answer": "Scaffolding",
    "chapter": 7
  },
  {
    "question": "Vygotsky’s Zone of Proximal Development (ZPD) describes:",
    "options": [
      "The ability to think abstractly",
      "The range of tasks a child can do with assistance",
      "The development of conservation",
      "The process of habituation"
    ],
    "answer": "The range of tasks a child can do with assistance",
    "chapter": 7
  },
  {
    "question": "Which Piagetian concept suggests that children focus on one aspect of a problem while ignoring others?",
    "options": ["Egocentrism", "Centration", "Reversibility", "Object permanence"],
    "answer": "Centration",
    "chapter": 7
  },
  {
    "question": "Which of the following best describes intersubjectivity in Vygotsky’s theory?",
    "options": [
      "The understanding shared between individuals at different knowledge levels",
      "A child’s ability to think abstractly",
      "The development of object permanence",
      "The ability to perform mental operations"
    ],
    "answer": "The understanding shared between individuals at different knowledge levels",
    "chapter": 7
  },
  {
    "question": "Which theory argues that infants have innate knowledge in core domains like numbers and physics?",
    "options": ["Piaget’s theory", "Vygotsky’s sociocultural theory", "Core knowledge theory", "Information processing theory"],
    "answer": "Core knowledge theory",
    "chapter": 7
  },
  {
    "question": "Which concept describes the ability to mentally reverse an action or process?",
    "options": ["Egocentrism", "Reversibility", "Centration", "Scaffolding"],
    "answer": "Reversibility",
    "chapter": 7
  },
  {
    "question": "Which research method suggests infants stare longer at events that violate their expectations?",
    "options": ["Scaffolding", "Violation of expectation", "Habituation", "Reversibility"],
    "answer": "Violation of expectation",
    "chapter": 7
  },
  {
    "question": "Core knowledge theorists differ from Piaget in that they believe:",
    "options": [
      "Knowledge is constructed through experience",
      "Cognitive development occurs in rigid stages",
      "Infants have innate knowledge of fundamental concepts",
      "Social interaction is the primary driver of learning"
    ],
    "answer": "Infants have innate knowledge of fundamental concepts",
    "chapter": 7
  },
  {
    "question": "Which of the following is an example of private speech?",
    "options": [
      "A child repeating a phone number silently to remember it",
      "A child talking to themselves while solving a puzzle",
      "A teacher explaining a math problem to a student",
      "A child asking a parent for help"
    ],
    "answer": "A child talking to themselves while solving a puzzle",
    "chapter": 7
  },
  {
    "question": "Which theory emphasizes the role of attention and memory strategies in cognitive development?",
    "options": ["Core knowledge theory", "Vygotsky’s sociocultural theory", "Information processing theory", "Piaget’s cognitive development theory"],
    "answer": "Information processing theory",
    "chapter": 7
  },
  {
    "question": "Which memory strategy involves repeating information over and over?",
    "options": ["Rehearsal", "Elaboration", "Scaffolding", "Violation of expectation"],
    "answer": "Rehearsal",
    "chapter": 7
  },
  {
    "question": "Which of the following best describes infantile amnesia?",
    "options": [
      "The inability to form new memories",
      "The difficulty recalling events before age 3",
      "The tendency for young children to create false memories",
      "The ability to remember only emotional events"
    ],
    "answer": "The difficulty recalling events before age 3",
    "chapter": 7
  },
  {
    "question": "Which cognitive ability is necessary for hypothetical-deductive reasoning?",
    "options": ["Object permanence", "Abstract thought", "Egocentrism", "Centration"],
    "answer": "Abstract thought",
    "chapter": 7
  },
  {
    "question": "Which of the following is an example of automaticity in cognitive development?",
    "options": [
      "A child using fingers to count",
      "A child effortlessly reading words without sounding them out",
      "A child struggling to tie their shoes",
      "A child using make-believe play"
    ],
    "answer": "A child effortlessly reading words without sounding them out",
    "chapter": 7
  },
  {
    "question": "Piaget believed that children are:",
    "options": [
      "Passive learners shaped by their environment",
      "Innately knowledgeable about fundamental concepts",
      "Active learners who construct knowledge through experience",
      "Primarily influenced by social interaction"
    ],
    "answer": "Active learners who construct knowledge through experience",
    "chapter": 7
  },
  {
    "question": "Which theory suggests that young children are highly suggestible and prone to false memories?",
    "options": ["Piaget’s theory", "Vygotsky’s theory", "Core knowledge theory", "Information processing theory"],
    "answer": "Information processing theory",
    "chapter": 7
  },
  
  

  
  
  
  
  
  
  
  
  
  
  // Chapter 9
  {
    "question": "Which aspect of language refers to the rules for sentence structure?",
    "options": ["Phonology", "Morphology", "Syntax", "Pragmatics"],
    "answer": "Syntax",
    "chapter": 9
  },
  {
    "question": "What is the smallest unit of sound that can change word meaning?",
    "options": ["Morpheme", "Phoneme", "Syntax", "Semantics"],
    "answer": "Phoneme",
    "chapter": 9
  },
  {
    "question": "Which of the following is an example of a morpheme?",
    "options": ["The letter 'C'", "The word 'dogs'", "The phrase 'run fast'", "The sound 'sh'"],
    "answer": "The word 'dogs'",
    "chapter": 9
  },
  {
    "question": "Which aspect of language refers to social use, such as adjusting speech for different audiences?",
    "options": ["Phonology", "Syntax", "Semantics", "Pragmatics"],
    "answer": "Pragmatics",
    "chapter": 9
  },
  {
    "question": "Which of the following best describes mutual exclusivity constraint?",
    "options": [
      "A child assumes a word refers to the whole object",
      "A child assumes each object has only one name",
      "A child uses grammar to infer meaning",
      "A child applies a word too broadly"
    ],
    "answer": "A child assumes each object has only one name",
    "chapter": 9
  },
  {
    "question": "A child calling all four-legged animals 'doggie' is an example of:",
    "options": ["Overextension", "Underextension", "Overregularization", "Telegraphic speech"],
    "answer": "Overextension",
    "chapter": 9
  },
  {
    "question": "A child calling only their pet cat 'cat' but not other cats is an example of:",
    "options": ["Overextension", "Underextension", "Mutual exclusivity", "Syntactic bootstrapping"],
    "answer": "Underextension",
    "chapter": 9
  },
  {
    "question": "Which of the following is an example of overregularization?",
    "options": ["Saying 'foots' instead of 'feet'", "Saying 'dog' for all four-legged animals", "Calling only one specific doll 'doll'", "Using two-word phrases like 'want milk'"],
    "answer": "Saying 'foots' instead of 'feet'",
    "chapter": 9
  },
  {
    "question": "At what age do infants typically begin babbling?",
    "options": ["2 months", "4 months", "6 months", "12 months"],
    "answer": "6 months",
    "chapter": 9
  },
  {
    "question": "Which type of speech involves a higher pitch and exaggerated words to help infants learn language?",
    "options": ["Telegraphic speech", "Infant-directed speech", "Private speech", "Pragmatic speech"],
    "answer": "Infant-directed speech",
    "chapter": 9
  },
  {
    "question": "Which term refers to infants looking at the same object as an adult to learn its name?",
    "options": ["Joint attention", "Gaze following", "Protoimperative gesture", "Protodeclarative gesture"],
    "answer": "Joint attention",
    "chapter": 9
  },
  {
    "question": "Which type of preverbal gesture is used by a child to request an action, like raising arms to be picked up?",
    "options": ["Protodeclarative", "Protoimperative", "Telegraphic", "Recasting"],
    "answer": "Protoimperative",
    "chapter": 9
  },
  {
    "question": "Which language learning theory emphasizes imitation?",
    "options": ["Chomsky's nativism", "Skinner's reinforcement", "Bandura's social learning", "Statistical learning"],
    "answer": "Bandura's social learning",
    "chapter": 9
  },
  {
    "question": "Which language theory suggests that children learn through reinforcement and positive feedback?",
    "options": ["Chomsky's nativism", "Skinner's behaviorism", "Interactionism", "Statistical learning"],
    "answer": "Skinner's behaviorism",
    "chapter": 9
  },
  {
    "question": "What is the main criticism of Noam Chomsky’s nativist theory?",
    "options": [
      "It overemphasizes reinforcement in learning language",
      "It underestimates the role of social interaction",
      "Universal grammar is vague, and language learning is more gradual",
      "It suggests language is entirely learned through statistical learning"
    ],
    "answer": "Universal grammar is vague, and language learning is more gradual",
    "chapter": 9
  },
  {
    "question": "Which theory argues that infants learn language by recognizing patterns and predicting words?",
    "options": ["Chomsky's nativism", "Statistical learning", "Skinner's behaviorism", "Bandura's cognitive theory"],
    "answer": "Statistical learning",
    "chapter": 9
  },
  {
    "question": "Which term refers to the best time for acquiring language efficiently?",
    "options": ["Critical period", "Sensitive period", "Telegraphic speech", "Speech register"],
    "answer": "Sensitive period",
    "chapter": 9
  },
  {
    "question": "Which constraint suggests that children assume a word refers to the entire object rather than a part of it?",
    "options": ["Taxonomic constraint", "Whole object bias", "Syntactic bootstrapping", "Mutual exclusivity constraint"],
    "answer": "Whole object bias",
    "chapter": 9
  },
  {
    "question": "Which strategy do parents use when they correct a child's grammar by rephrasing their sentence?",
    "options": ["Expansion", "Recasting", "Syntactic bootstrapping", "Shading"],
    "answer": "Recasting",
    "chapter": 9
  },
  {
    "question": "Which speech disorder involves difficulty producing sounds correctly?",
    "options": ["Language disorder", "Speech sound disorder", "Childhood-onset fluency disorder", "Dyslexia"],
    "answer": "Speech sound disorder",
    "chapter": 9
  },
  {
    "question": "Which type of bilingualism occurs when a child learns two languages at the same time?",
    "options": ["Sequential bilingualism", "Simultaneous bilingualism", "Code-switching", "Speech register"],
    "answer": "Simultaneous bilingualism",
    "chapter": 9
  },
  {
    "question": "Which conversational skill involves asking questions to maintain a conversation?",
    "options": ["Shading", "Turnabout", "Illocutionary intent", "Expansion"],
    "answer": "Turnabout",
    "chapter": 9
  },
  {
    "question": "Which storytelling style involves jumping between events without clear order?",
    "options": ["Chronological", "Classic", "Leapfrog", "Pragmatic"],
    "answer": "Leapfrog",
    "chapter": 9
  },
  {
    "question": "Which cognitive benefit is associated with bilingualism?",
    "options": [
      "Increased difficulty in language processing",
      "Weaker executive function",
      "Enhanced selective attention and working memory",
      "Slower vocabulary development"
    ],
    "answer": "Enhanced selective attention and working memory",
    "chapter": 9
  },
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  // Chapter 10
  {
    "question": "Which of the following is NOT a basic emotion?",
    "options": ["Happiness", "Guilt", "Fear", "Disgust"],
    "answer": "Guilt",
    "chapter": 10
  },
  {
    "question": "At what age do self-conscious emotions, such as shame and pride, begin to emerge?",
    "options": ["Infancy", "Toddlerhood", "Middle childhood", "Adolescence"],
    "answer": "Toddlerhood",
    "chapter": 10
  },
  {
    "question": "Which emotion regulation strategy involves a caregiver acknowledging a child's emotions and teaching coping skills?",
    "options": ["Emotion Dismissing", "Emotion Coaching", "Social Referencing", "Temperament Training"],
    "answer": "Emotion Coaching",
    "chapter": 10
  },
  {
    "question": "At what age do infants begin to self-soothe by hugging a stuffed animal or turning away from overstimulation?",
    "options": ["4-6 months", "12 months", "18 months", "2 years"],
    "answer": "4-6 months",
    "chapter": 10
  },
  {
    "question": "Which term refers to using others' emotional expressions to guide one's own behavior?",
    "options": ["Emotion Coaching", "Social Referencing", "Goodness of Fit", "Reciprocal Relationships"],
    "answer": "Social Referencing",
    "chapter": 10
  },
  {
    "question": "Which of Thomas & Chess’s temperament dimensions refers to a child's response to new people and experiences?",
    "options": ["Activity Level", "Approach/Withdrawal", "Rhythmicity", "Mood Quality"],
    "answer": "Approach/Withdrawal",
    "chapter": 10
  },
  {
    "question": "Which temperament type is characterized by adaptability, regular routines, and generally positive mood?",
    "options": ["Difficult", "Easy", "Slow-to-Warm-Up", "Unclassified"],
    "answer": "Easy",
    "chapter": 10
  },
  {
    "question": "What does 'Goodness of Fit' refer to in temperament research?",
    "options": [
      "A child’s ability to adjust to different situations",
      "How well a child's temperament matches their environment and parenting style",
      "A caregiver’s ability to regulate emotions in children",
      "The consistency of a child's mood over time"
    ],
    "answer": "How well a child's temperament matches their environment and parenting style",
    "chapter": 10
  },
  {
    "question": "Which type of attachment is characterized by distress when the parent leaves and comfort upon their return?",
    "options": ["Insecure-Avoidant", "Secure", "Insecure-Resistant", "Disorganized"],
    "answer": "Secure",
    "chapter": 10
  },
  {
    "question": "In Ainsworth’s Strange Situation experiment, which attachment type is shown by infants who ignore their caregiver and show little distress upon separation?",
    "options": ["Insecure-Avoidant", "Secure", "Insecure-Resistant", "Disorganized"],
    "answer": "Insecure-Avoidant",
    "chapter": 10
  },
  {
    "question": "Which stage of attachment occurs around 8-24 months and is marked by separation anxiety and strong attachment to caregivers?",
    "options": ["Preattachment", "Attachment in the Making", "Clear-Cut Attachment", "Reciprocal Relationships"],
    "answer": "Clear-Cut Attachment",
    "chapter": 10
  },
  {
    "question": "Which attachment style is associated with clinginess, distress upon separation, and anger upon reunion?",
    "options": ["Secure", "Insecure-Resistant", "Insecure-Avoidant", "Disorganized"],
    "answer": "Insecure-Resistant",
    "chapter": 10
  },
  {
    "question": "Which of the following is NOT one of the temperament dimensions identified by Thomas & Chess?",
    "options": ["Activity Level", "Social Intelligence", "Attention Span/Persistence", "Reaction Intensity"],
    "answer": "Social Intelligence",
    "chapter": 10
  },
  {
    "question": "Which type of fear is most commonly experienced by toddlers?",
    "options": ["Fear of strangers", "Fear of social judgment", "Fear of public speaking", "Fear of failure"],
    "answer": "Fear of strangers",
    "chapter": 10
  },
  {
    "question": "Which major factor is NOT considered to influence attachment security?",
    "options": ["Parenting style", "Infant temperament", "Family stress", "Infant's physical size"],
    "answer": "Infant's physical size",
    "chapter": 10
  },
  {
    "question": "Which attachment stage describes infants seeking comfort from any caregiver but not yet forming specific attachments?",
    "options": ["Preattachment", "Attachment in the Making", "Clear-Cut Attachment", "Reciprocal Relationships"],
    "answer": "Preattachment",
    "chapter": 10
  },
  {
    "question": "What was the primary goal of Ainsworth’s Strange Situation experiment?",
    "options": [
      "To measure how children react to stress and reunions with caregivers",
      "To determine the best parenting style",
      "To study how children regulate their emotions",
      "To classify temperament traits"
    ],
    "answer": "To measure how children react to stress and reunions with caregivers",
    "chapter": 10
  },
  {
    "question": "Which temperament type is described as shy, cautious, and slow to adapt but improves with time?",
    "options": ["Easy", "Difficult", "Slow-to-Warm-Up", "Unclassified"],
    "answer": "Slow-to-Warm-Up",
    "chapter": 10
  },
  {
    "question": "Which emotional milestone occurs during adolescence?",
    "options": [
      "Development of self-conscious emotions",
      "Learning emotional display rules and experiencing mixed emotions",
      "Beginning to self-soothe",
      "Using preverbal gestures to communicate"
    ],
    "answer": "Learning emotional display rules and experiencing mixed emotions",
    "chapter": 10
  },
  {
    "question": "Which attachment style is characterized by fear and confusion in the Strange Situation experiment?",
    "options": ["Secure", "Insecure-Avoidant", "Insecure-Resistant", "Disorganized"],
    "answer": "Disorganized",
    "chapter": 10
  },
  {
    "question": "What is one major criticism of the Strange Situation experiment?",
    "options": [
      "It does not distinguish between secure and insecure attachment",
      "It was conducted only with children from collectivist cultures",
      "It may not fully apply across different cultures",
      "It does not include a measure of parental involvement"
    ],
    "answer": "It may not fully apply across different cultures",
    "chapter": 10
  },
  {
    "question": "During the Strange Situation experiment, what behavior indicates a secure attachment?",
    "options": [
      "The infant is indifferent to the caregiver's departure and return",
      "The infant is distressed when the caregiver leaves but is comforted upon return",
      "The infant is highly distressed upon separation and remains angry upon reunion",
      "The infant displays fearful, confused behavior throughout the process"
    ],
    "answer": "The infant is distressed when the caregiver leaves but is comforted upon return",
    "chapter": 10
  },
  {
    "question": "In the Strange Situation experiment, what would an insecure-avoidant infant most likely do when reunited with their caregiver?",
    "options": [
      "Seek comfort immediately and calm down",
      "Ignore or avoid the caregiver and show little emotion",
      "Cling to the caregiver and show signs of anger",
      "Exhibit disoriented or confused behavior"
    ],
    "answer": "Ignore or avoid the caregiver and show little emotion",
    "chapter": 10
  },
  
  
  
  
  
  
  
  
  
  
  
  // Chapter 12
  {
    "question": "What is the Theory of Mind (ToM)?",
    "options": [
      "The ability to understand that others have thoughts, beliefs, and emotions different from one's own",
      "The ability to recognize oneself in a mirror",
      "The process of learning through reinforcement and punishment",
      "The development of moral reasoning in childhood"
    ],
    "answer": "The ability to understand that others have thoughts, beliefs, and emotions different from one's own",
    "chapter": 12
  },
  {
    "question": "Which factor is NOT associated with the development of Theory of Mind?",
    "options": [
      "Language skills",
      "Parental discussions about emotions",
      "Secure attachment",
      "Fine motor skill development"
    ],
    "answer": "Fine motor skill development",
    "chapter": 12
  },
  {
    "question": "What is Perspective-Taking?",
    "options": [
      "The ability to physically see from another person’s viewpoint",
      "Imagining another person’s thoughts and feelings as separate from one’s own",
      "Copying the behaviors of others to fit into a social group",
      "The ability to memorize and repeat information about others"
    ],
    "answer": "Imagining another person’s thoughts and feelings as separate from one’s own",
    "chapter": 12
  },
  {
    "question": "Children younger than 4 years old tend to believe that others share their desires and will act accordingly. This is called:",
    "options": [
      "False Belief Paradigm",
      "Desire Theory of Mind",
      "Belief-Desire Theory of Mind",
      "Egocentric Play"
    ],
    "answer": "Desire Theory of Mind",
    "chapter": 12
  },
  {
    "question": "What is the main difference between Desire Theory of Mind and Belief-Desire Theory of Mind?",
    "options": [
      "Desire Theory of Mind includes an understanding of false beliefs",
      "Belief-Desire Theory of Mind only considers emotions",
      "Desire Theory of Mind recognizes that others may have different beliefs",
      "Belief-Desire Theory of Mind acknowledges that actions are influenced by both desires and beliefs, even if those beliefs are false"
    ],
    "answer": "Belief-Desire Theory of Mind acknowledges that actions are influenced by both desires and beliefs, even if those beliefs are false",
    "chapter": 12
  },
  {
    "question": "In the False Belief Paradigm, if a child sees a crayon box that actually contains a toy pig, what will a 3-year-old most likely say another child would expect to find inside?",
    "options": ["Crayons", "A toy pig", "Markers", "A book"],
    "answer": "A toy pig",
    "chapter": 12
  },
  {
    "question": "Which type of play involves children playing next to each other without direct interaction?",
    "options": [
      "Solitary Play",
      "Parallel Play",
      "Associative Play",
      "Cooperative Play"
    ],
    "answer": "Parallel Play",
    "chapter": 12
  },
  {
    "question": "Which of the following is an example of constructive play?",
    "options": [
      "A child bouncing a ball repeatedly",
      "A child building a tower out of blocks",
      "A child pretending to be a firefighter",
      "A child wrestling with a friend"
    ],
    "answer": "A child building a tower out of blocks",
    "chapter": 12
  },
  {
    "question": "Which of Parten’s play categories involves watching others play without participating?",
    "options": [
      "Onlooker Behavior",
      "Parallel Play",
      "Unoccupied Behavior",
      "Associative Play"
    ],
    "answer": "Onlooker Behavior",
    "chapter": 12
  },
  {
    "question": "Which type of play is characterized by repetitive movements with no clear purpose?",
    "options": [
      "Symbolic Play",
      "Rough-and-Tumble Play",
      "Rhythmic Stereotypies",
      "Cooperative Play"
    ],
    "answer": "Rhythmic Stereotypies",
    "chapter": 12
  },
  {
    "question": "Piaget’s 'Games with Rules' stage of play emerges during which cognitive stage?",
    "options": [
      "Sensorimotor Stage",
      "Preoperational Stage",
      "Concrete Operational Stage",
      "Formal Operational Stage"
    ],
    "answer": "Concrete Operational Stage",
    "chapter": 12
  },
  {
    "question": "Which type of play involves role-playing and storytelling?",
    "options": [
      "Practice Play",
      "Symbolic/Sociodramatic Play",
      "Constructive Play",
      "Exercise Play"
    ],
    "answer": "Symbolic/Sociodramatic Play",
    "chapter": 12
  },
  {
    "question": "Which of the following best describes the False Belief Paradigm?",
    "options": [
      "A task that measures how well children can solve logical puzzles",
      "An experiment that tests whether children understand that others can hold incorrect beliefs",
      "A study on how children form friendships",
      "A method for assessing peer social status"
    ],
    "answer": "An experiment that tests whether children understand that others can hold incorrect beliefs",
    "chapter": 12
  },
  {
    "question": "Which of the following is an example of associative play?",
    "options": [
      "Two children playing with separate toys but occasionally talking",
      "A child watching others play but not joining",
      "A child playing alone with blocks",
      "Two children working together to build a sandcastle"
    ],
    "answer": "Two children playing with separate toys but occasionally talking",
    "chapter": 12
  },
  {
    "question": "Which play stage did Piaget associate with repetitive movements performed for enjoyment?",
    "options": [
      "Practice Play",
      "Symbolic Play",
      "Games with Rules",
      "Constructive Play"
    ],
    "answer": "Practice Play",
    "chapter": 12
  },
  {
    "question": "What is a major critique of Piaget’s play stages?",
    "options": [
      "They do not consider the role of imagination in play",
      "Older play stages do not fully replace earlier ones",
      "They ignore the impact of social interactions",
      "They do not account for cognitive development"
    ],
    "answer": "Older play stages do not fully replace earlier ones",
    "chapter": 12
  },
  {
    "question": "Which of the following is NOT a factor that supports Theory of Mind development?",
    "options": [
      "Make-Believe Play",
      "Executive Function",
      "Parental Discussions about Emotions",
      "Physical Strength"
    ],
    "answer": "Physical Strength",
    "chapter": 12
  },
  {
    "question": "How does having siblings affect Theory of Mind development?",
    "options": [
      "It delays ToM development due to increased competition for attention",
      "It has no impact on ToM development",
      "It accelerates ToM development due to increased social interaction",
      "It only improves ToM in younger siblings"
    ],
    "answer": "It accelerates ToM development due to increased social interaction",
    "chapter": 12
  },
  {
    "question": "What is one reason autistic children often struggle with Theory of Mind?",
    "options": [
      "They lack interest in social interactions",
      "They have lower levels of intelligence",
      "They struggle with recognizing that others have different thoughts and beliefs",
      "They do not experience emotions"
    ],
    "answer": "They struggle with recognizing that others have different thoughts and beliefs",
    "chapter": 12
  },
  {
    "question": "What is sociometry?",
    "options": [
      "A method for studying peer relationships based on how children rate their classmates",
      "A technique used to measure intelligence in social settings",
      "A psychological test for diagnosing social anxiety",
      "A process of selecting friends based on similar interests"
    ],
    "answer": "A method for studying peer relationships based on how children rate their classmates",
    "chapter": 12
  },
  {
    "question": "Which of the following best describes children with a 'popular' social status?",
    "options": [
      "They receive many positive nominations and few negative ones from peers",
      "They are ignored by most of their classmates",
      "They are both highly liked and highly disliked",
      "They struggle with peer interactions and are mostly disliked"
    ],
    "answer": "They receive many positive nominations and few negative ones from peers",
    "chapter": 12
  },
  {
    "question": "Children who are both highly liked and highly disliked by peers fall into which social status category?",
    "options": [
      "Popular",
      "Controversial",
      "Neglected",
      "Rejected"
    ],
    "answer": "Controversial",
    "chapter": 12
  },
  {
    "question": "Which of the following is a characteristic of rejected children?",
    "options": [
      "They are well-liked and have many friends",
      "They struggle with peer interactions and receive mostly negative nominations",
      "They are rarely mentioned by peers, either positively or negatively",
      "They are often leaders in their peer groups"
    ],
    "answer": "They struggle with peer interactions and receive mostly negative nominations",
    "chapter": 12
  },
  {
    "question": "What is a key characteristic of neglected children?",
    "options": [
      "They are disliked by most of their peers",
      "They receive few nominations from peers, either positive or negative",
      "They are both highly liked and highly disliked",
      "They tend to be aggressive and struggle with social rules"
    ],
    "answer": "They receive few nominations from peers, either positive or negative",
    "chapter": 12
  },
  {
    "question": "Which social status category is most associated with long-term difficulties in forming friendships and social adjustment?",
    "options": [
      "Popular",
      "Neglected",
      "Rejected",
      "Controversial"
    ],
    "answer": "Rejected",
    "chapter": 12
  },
  {
    "question": "How do controversial children typically behave in peer groups?",
    "options": [
      "They are shy and withdrawn",
      "They are often leaders but also engage in aggressive or disruptive behaviors",
      "They are completely ignored by their peers",
      "They have no social skills and struggle to make friends"
    ],
    "answer": "They are often leaders but also engage in aggressive or disruptive behaviors",
    "chapter": 12
  },
  {
    "question": "Which of the following is true about neglected children?",
    "options": [
      "They are actively disliked by their peers",
      "They tend to be socially competent but prefer solitude",
      "They are aggressive and frequently engage in conflict",
      "They receive high numbers of both positive and negative nominations"
    ],
    "answer": "They tend to be socially competent but prefer solitude",
    "chapter": 12
  },
  {
    "question": "Which social status category is most likely to include children who experience long-term peer rejection and social isolation?",
    "options": [
      "Popular",
      "Controversial",
      "Neglected",
      "Rejected"
    ],
    "answer": "Rejected",
    "chapter": 12
  },
  {
    "question": "Which of the following statements about sociometric status is true?",
    "options": [
      "It is solely determined by adult observations of children’s behavior",
      "It is a stable trait that never changes over time",
      "It is assessed by asking children to identify peers they like and dislike",
      "It only applies to friendships and does not influence peer relationships"
    ],
    "answer": "It is assessed by asking children to identify peers they like and dislike",
    "chapter": 12
  }
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
];
export default questions;
