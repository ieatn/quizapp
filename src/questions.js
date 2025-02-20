const questions = [
  {
    question: "What is object permanence?",
    options: ["Knowing objects exist when unseen", "Understanding conservation", "Abstract reasoning", "Egocentric thinking"],
    answer: "Knowing objects exist when unseen"
  },
  {
    question: "Egocentrism is a hallmark of which Piagetian stage?",
    options: ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
    answer: "Preoperational"
  },
  {
    question: "Vygotsky’s ZPD refers to:",
    options: ["Tasks kids can do alone", "Tasks needing adult help", "Innate knowledge domains", "Memory strategies"],
    answer: "Tasks needing adult help"
  },
  {
    question: "Infants stare longer at impossible events in:",
    options: ["Habituation", "Violation of expectations", "Object permanence", "Circular reactions"],
    answer: "Violation of expectations"
  },
  {
    question: "Automaticity in attention means:",
    options: ["Ignoring distractions", "Mastering skills to use effortlessly", "Preferring novelty", "Rehearsing information"],
    answer: "Mastering skills to use effortlessly"
  },
  {
    question: "The smallest meaningful language unit is a:",
    options: ["Phoneme", "Morpheme", "Syntax", "Pragmatic"],
    answer: "Morpheme"
  },
  {
    question: "Chomsky’s LAD refers to:",
    options: ["Learned vocabulary", "Innate grammar capacity", "Social interaction", "Bilingualism"],
    answer: "Innate grammar capacity"
  },
  {
    question: "“Foots” instead of “feet” is:",
    options: ["Underextension", "Overregularization", "Telegraphic speech", "Syntax error"],
    answer: "Overregularization"
  },
  {
    question: "Bilingualism improves:",
    options: ["Vocabulary size", "Selective attention", "Grammar errors", "Egocentrism"],
    answer: "Selective attention"
  },
  {
    question: "Critical period for language ends around:",
    options: ["Infancy", "Puberty", "Adulthood", "Toddlerhood"],
    answer: "Puberty"
  },
  {
    question: "Self-conscious emotions require:",
    options: ["Basic needs met", "Sense of self", "Social referencing", "Temperament"],
    answer: "Sense of self"
  },
  {
    question: "A child who ignores their parent in the Strange Situation has:",
    options: ["Secure attachment", "Insecure-avoidant", "Insecure-resistant", "Disorganized"],
    answer: "Insecure-avoidant"
  },
  {
    question: "Emotion dismissing involves:",
    options: ["Validating feelings", "Ignoring negative emotions", "Teaching regulation", "Social referencing"],
    answer: "Ignoring negative emotions"
  },
  {
    question: "Temperament type most likely to adapt slowly:",
    options: ["Easy", "Difficult", "Slow-to-warm-up", "Unclassified"],
    answer: "Slow-to-warm-up"
  },
  {
    question: "Separation anxiety peaks in:",
    options: ["Sensorimotor stage", "Clear-cut attachment (8-24m)", "Preoperational stage", "Adolescence"],
    answer: "Clear-cut attachment (8-24m)"
  },
  {
    question: "False belief understanding is tested via:",
    options: ["Conservation task", "Strange Situation", "Crayon-box task", "ZPD"],
    answer: "Crayon-box task"
  },
  {
    question: "Parallel play involves:",
    options: ["Shared goals", "Playing alone", "Side-by-side without interaction", "Role-playing"],
    answer: "Side-by-side without interaction"
  },
  {
    question: "Bullying prevention is MOST effective with:",
    options: ["Zero-tolerance policies", "Peer mediation", "Expelling bullies", "Parental punishment"],
    answer: "Peer mediation"
  },
  {
    question: "A “controversial” peer status means:",
    options: ["Liked by all", "Liked and disliked", "Ignored", "Disliked"],
    answer: "Liked and disliked"
  },
  {
    question: "Cliques are:",
    options: ["Large reputation groups", "Close-knit friend groups", "Family members", "Online communities"],
    answer: "Close-knit friend groups"
  },
  {
    question: "Core Knowledge Theory argues infants are born with understanding of:",
    options: ["Abstract math", "Object solidity and gravity", "Social norms", "Grammar rules"],
    answer: "Object solidity and gravity"
  },
  {
    question: "Rehearsal and elaboration are:",
    options: ["Play types", "Memory strategies", "Language errors", "Temperament traits"],
    answer: "Memory strategies"
  },
  {
    question: "ADHD is linked to poor:",
    options: ["Object permanence", "Inhibitory control", "Phonological development", "Attachment security"],
    answer: "Inhibitory control"
  },
  {
    question: "Piaget’s 'inability to conserve' occurs in which stage?",
    options: ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
    answer: "Preoperational"
  },
  {
    question: "Vygotsky emphasized ______ as key to cognitive development.",
    options: ["Innate schemas", "Social interaction", "Genetic factors", "Solitary play"],
    answer: "Social interaction"
  },
  {
    question: "A child sorting toys by size demonstrates:",
    options: ["Egocentrism", "Seriation", "Overregularization", "Habituation"],
    answer: "Seriation"
  },
  {
    question: "Infantile amnesia refers to:",
    options: ["Forgetting traumatic events", "No memories before age 3", "Poor working memory", "False memories"],
    answer: "No memories before age 3"
  },
  {
    question: "Scaffolding involves:",
    options: ["Ignoring a child’s mistakes", "Providing structured support", "Testing innate knowledge", "Encouraging egocentrism"],
    answer: "Providing structured support"
  },
  {
    question: "Automaticity is critical for:",
    options: ["Learning first words", "Effortless reading", "Pretend play", "Secure attachment"],
    answer: "Effortless reading"
  },
  {
    question: "Piaget’s Circular Reactions involve:",
    options: ["Abstract reasoning", "Repeating body/object actions", "Social learning", "Emotion regulation"],
    answer: "Repeating body/object actions"
  },
  {
    question: "Phonemes are:",
    options: ["Word meanings", "Distinct sounds (e.g., /k/)", "Social rules", "Memory strategies"],
    answer: "Distinct sounds (e.g., /k/)"
  },
  {
    question: "Telegraphic speech example:",
    options: ["“I goed to park”", "“Want cookie”", "“The dog ran”", "“Why is the sky blue?”"],
    answer: "“Want cookie”"
  },
  {
    question: "Code-switching is part of:",
    options: ["Phonology", "Pragmatics", "Syntax", "Semantics"],
    answer: "Pragmatics"
  },
  {
    question: "Children with dyslexia struggle with:",
    options: ["Emotional regulation", "Reading/writing", "False beliefs", "Object permanence"],
    answer: "Reading/writing"
  },
  {
    question: "The Wernicke’s area is responsible for:",
    options: ["Speech production", "Language comprehension", "Executive function", "Emotional expression"],
    answer: "Language comprehension"
  },
  {
    question: "The Mutual Exclusivity Constraint assumes:",
    options: ["Words refer to categories", "One name per object", "Grammar is innate", "Speech must be formal"],
    answer: "One name per object"
  },
  {
    question: "A child says “cat” only for their pet, not others. This is:",
    options: ["Overextension", "Underextension", "Overregularization", "Syntax error"],
    answer: "Underextension"
  },
  {
    question: "Statistical Learning Theory focuses on:",
    options: ["Universal grammar", "Pattern recognition in speech", "Operant conditioning", "Self-conscious emotions"],
    answer: "Pattern recognition in speech"
  },
  {
    question: "Babbling typically begins at:",
    options: ["2 months", "6 months", "12 months", "18 months"],
    answer: "6 months"
  },
  {
    question: "The Critical Period Hypothesis states language must be learned by:",
    options: ["Toddlerhood", "Puberty", "Adolescence", "Adulthood"],
    answer: "Puberty"
  },
  {
    question: "A parent validating a child’s anger uses:",
    options: ["Emotion dismissing", "Emotion coaching", "Social referencing", "Habituation"],
    answer: "Emotion coaching"
  },
  {
    question: "Separation anxiety first appears in:",
    options: ["Preoperational stage", "Clear-cut attachment stage (8–24m)", "Sensorimotor stage", "Concrete operational stage"],
    answer: "Clear-cut attachment stage (8–24m)"
  },
  {
    question: "Disorganized attachment is characterized by:",
    options: ["Ignoring the caregiver", "Fearful, confused reactions", "Clinginess and anger", "Secure base exploration"],
    answer: "Fearful, confused reactions"
  },
  {
    question: "A child’s temperament is MOST influenced by:",
    options: ["Parenting style only", "Genetics and environment", "Peer relationships", "Language exposure"],
    answer: "Genetics and environment"
  },
  {
    question: "Self-conscious emotions like pride require:",
    options: ["Basic motor skills", "Sense of self", "Theory of Mind", "Executive function"],
    answer: "Sense of self"
  },
  {
    question: "In Japan, attachment research finds more:",
    options: ["Avoidant attachment", "Resistant attachment", "Secure attachment", "Disorganized attachment"],
    answer: "Resistant attachment"
  },
  {
    question: "Goodness of Fit refers to:",
    options: ["Physical health", "Matching caregiving to temperament", "Peer compatibility", "Cognitive schemas"],
    answer: "Matching caregiving to temperament"
  },
  {
    question: "A child who clings to a parent but resists comfort has:",
    options: ["Secure attachment", "Insecure-resistant attachment", "Insecure-avoidant attachment", "Disorganized attachment"],
    answer: "Insecure-resistant attachment"
  },
  {
    question: "Emotional display rules are:",
    options: ["Universal across cultures", "Cultural norms for expressing emotions", "Innate temperament traits", "Linked to object permanence"],
    answer: "Cultural norms for expressing emotions"
  },
  {
    question: "The Strange Situation assesses:",
    options: ["Language development", "Attachment style", "Theory of Mind", "Executive function"],
    answer: "Attachment style"
  }
];

  
  export default questions;