const questions = [
  {
    "question": "What are the four primary modes of Dialectical Behavior Therapy (DBT)?",
    "options": [
      "Psychoanalysis, mindfulness, emotion regulation, interpersonal effectiveness",
      "Medication management, exposure therapy, cognitive restructuring, family therapy",
      "Individual therapy, group skills training, phone coaching, therapist consultation",
      "Support groups, crisis intervention, journaling, relapse prevention"
    ],
    "answer": "Individual therapy, group skills training, phone coaching, therapist consultation",
    "chapter": 1
  },
  {
    "question": "Which four skills are core components of Dialectical Behavior Therapy (DBT)?",
    "options": [
      "Tolerance, withdrawal management, harm reduction, motivational interviewing",
      "Cognitive restructuring, exposure response prevention, assertiveness, relaxation",
      "Self-monitoring, problem-solving, social skills, biofeedback",
      "Mindfulness, emotion regulation, distress tolerance, interpersonal effectiveness"
    ],
    "answer": "Mindfulness, emotion regulation, distress tolerance, interpersonal effectiveness",
    "chapter": 1
  },
  {
    "question": "According to Linehan's Biosocial Theory, what combination causes borderline personality disorder?",
    "options": [
      "Genetic predisposition + childhood trauma",
      "Biological emotion dysregulation + an invalidating environment",
      "Cognitive distortions + maladaptive parenting",
      "Neurotransmitter imbalances + social isolation"
    ],
    "answer": "Biological emotion dysregulation + an invalidating environment",
    "chapter": 1
  },
  {
    "question": "What are the two diagnostic subtypes of anorexia nervosa?",
    "options": [
      "Emotional eating type and avoidant type",
      "Restricting type and binge-eating/purging type",
      "Bulimic type and non-bulimic type",
      "Compensatory type and non-compensatory type"
    ],
    "answer": "Restricting type and binge-eating/purging type",
    "chapter": 2
  },
  {
    "question": "Which physical consequences are commonly associated with bulimia nervosa?",
    "options": [
      "Osteoporosis, amenorrhea, cardiac issues",
      "Electrolyte imbalance, tooth decay, esophageal damage",
      "Liver failure, kidney stones, pancreatitis",
      "Obesity, diabetes, hypertension"
    ],
    "answer": "Electrolyte imbalance, tooth decay, esophageal damage",
    "chapter": 2
  },
  {
    "question": "Which physical consequences are commonly associated with binge-eating disorder (BED)?",
    "options": [
      "Gastrointestinal paralysis, hypoglycemia, hair loss",
      "Osteoporosis, amenorrhea, cardiac issues",
      "Obesity, diabetes, hypertension",
      "Electrolyte imbalance, tooth decay, esophageal damage"
    ],
    "answer": "Obesity, diabetes, hypertension",
    "chapter": 2
  },
  {
    "question": "Which of the following is NOT a physical consequence that can develop in anorexia nervosa?",
    "options": [
      "Decreased bone density",
      "All of the above are potential physical consequences",
      "Weak tooth enamel",
      "Swollen salivary glands"
    ],
    "answer": "All of the above are potential physical consequences",
    "chapter": 2
  },
  {
    "question": "What is the key difference between OCD and OCPD?",
    "options": [
      "OCPD responds to medication; OCD requires therapy",
      "OCD involves intrusive thoughts/compulsions; OCPD involves rigid personality traits",
      "OCD is genetic; OCPD is environmentally caused",
      "OCPD includes psychosis; OCD does not"
    ],
    "answer": "OCD involves intrusive thoughts/compulsions; OCPD involves rigid personality traits",
    "chapter": 3
  },
  {
    "question": "What special rule applies when diagnosing antisocial personality disorder?",
    "options": [
      "Symptoms must persist for ≥5 years",
      "Patient must be ≥18 years with a history of conduct disorder",
      "Patient must exhibit callous-unemotional traits before age 10",
      "Diagnosis requires comorbid substance use disorder"
    ],
    "answer": "Patient must be ≥18 years with a history of conduct disorder",
    "chapter": 3
  },
  {
    "question": "What do 'callous-unemotional' traits predict in antisocial behavior?",
    "options": [
      "Lack of guilt, empathy, and remorse",
      "High anxiety and emotional volatility",
      "Impulsivity and risk-taking behaviors",
      "Compulsive lying and manipulativeness"
    ],
    "answer": "Lack of guilt, empathy, and remorse",
    "chapter": 3
  },
  {
    "question": "Which disorders are most comorbid with antisocial personality disorder?",
    "options": [
      "Depression and eating disorders",
      "PTSD and generalized anxiety",
      "Bipolar disorder and OCD",
      "Substance use disorders and ADHD"
    ],
    "answer": "Substance use disorders and ADHD",
    "chapter": 3
  },
  {
    "question": "Which disorders are most comorbid with borderline personality disorder?",
    "options": [
      "Schizophrenia, bipolar disorder, and OCD",
      "PTSD, and eating disorders",
      "ADHD, autism, and intellectual disability",
      "Panic disorder, phobias, and somatic symptoms",
      "Depression, PTSD, and eating disorders"
    ],
    "answer": "Depression, PTSD, and eating disorders",
    "chapter": 3
  },
  {
    "question": "Acute discomfort with close relationships, peculiar thoughts, and odd beliefs are key symptoms of which personality disorder?",
    "options": [
      "Obsessive-Compulsive Personality Disorder",
      "Antisocial Personality Disorder",
      "Schizotypal Personality Disorder",
      "Histrionic Personality Disorder"
    ],
    "answer": "Schizotypal Personality Disorder",
    "chapter": 3
  },
  {
    "question": "What distinguishes Substance Use Disorder (SUD) from intoxication and withdrawal syndromes?",
    "options": [
      "Withdrawal lasts longer than SUD symptoms",
      "Intoxication is voluntary; SUD is involuntary",
      "SUD involves chronic misuse/impairment; intoxication/withdrawal are acute states",
      "SUD requires legal problems; intoxication/withdrawal focus on physical symptoms"
    ],
    "answer": "SUD involves chronic misuse/impairment; intoxication/withdrawal are acute states",
    "chapter": 4
  },
  {
    "question": "What are the four symptom categories in Substance Use Disorder (SUD) criteria?",
    "options": [
      "Withdrawal, cravings, blackouts, health issues",
      "Impaired control, social impairment, risky use, tolerance",
      "Intoxication, dependence, remission, relapse",
      "Mood swings, cognitive deficits, financial problems, legal troubles"
    ],
    "answer": "Impaired control, social impairment, risky use, tolerance",
    "chapter": 4
  },
  {
    "question": "How is 'tolerance' different from 'withdrawal' in Substance Use Disorder?",
    "options": [
      "Tolerance: psychological cravings; Withdrawal: physical dependence",
      "Tolerance: short-term effect; Withdrawal: chronic condition",
      "Tolerance: needing more substance for same effect; Withdrawal: symptoms after stopping",
      "Tolerance: legal problems; Withdrawal: social isolation"
    ],
    "answer": "Tolerance: needing more substance for same effect; Withdrawal: symptoms after stopping",
    "chapter": 4
  },
  {
    "question": "What biological process underlies physiological dependence in Substance Use Disorder?",
    "options": [
      "DNA mutation in reward pathways",
      "Immune system suppression",
      "Hormonal cascade disruption",
      "Brain adaptation altering neurotransmitter balance (e.g., GABA/glutamate from alcohol)"
    ],
    "answer": "Brain adaptation altering neurotransmitter balance (e.g., GABA/glutamate from alcohol)",
    "chapter": 4
  },
  {
    "question": "Which substances have the HIGHEST addictive potential?",
    "options": [
      "Alcohol, caffeine, prescription stimulants",
      "Opioids, nicotine, methamphetamine",
      "Barbiturates, benzodiazepines, kratom",
      "Cannabis, hallucinogens, inhalants"
    ],
    "answer": "Opioids, nicotine, methamphetamine",
    "chapter": 4
  },
  {
    "question": "Which substances are associated with the MOST overdose deaths?",
    "options": [
      "MDMA, ketamine, prescription sedatives",
      "Cannabis, LSD, psilocybin",
      "Nicotine, caffeine, anabolic steroids",
      "Opioids (fentanyl/heroin), cocaine, alcohol"
    ],
    "answer": "Opioids (fentanyl/heroin), cocaine, alcohol",
    "chapter": 4
  },
  {
    "question": "How is mild Substance Use Disorder (SUD) distinguished from severe SUD?",
    "options": [
      "Mild: no cravings; Severe: intense cravings",
      "Mild: 2-3 symptoms; Severe: 6+ symptoms",
      "Mild: social use; Severe: daily use",
      "Mild: no withdrawal; Severe: life-threatening withdrawal"
    ],
    "answer": "Mild: 2-3 symptoms; Severe: 6+ symptoms",
    "chapter": 4
  },
  {
    "question": "What are common short-term effects of substance use?",
    "options": [
      "Memory loss, organ failure, psychosis",
      "Slurred speech, sedation, euphoria, increased energy",
      "Diabetes, hypertension, tooth decay",
      "Osteoporosis, amenorrhea, cardiac issues"
    ],
    "answer": "Slurred speech, sedation, euphoria, increased energy",
    "chapter": 4
  },
  {
    "question": "How do opioids typically cause fatal overdose?",
    "options": [
      "Cardiac arrest from electrolyte imbalance",
      "Liver toxicity or kidney failure",
      "Respiratory depression leading to stopped breathing",
      "Seizures or stroke from hypertension"
    ],
    "answer": "Respiratory depression leading to stopped breathing",
    "chapter": 4
  },
  {
    "question": "How do heroin and fentanyl differ from morphine?",
    "options": [
      "Morphine is synthetic; heroin/fentanyl are natural",
      "Heroin/fentanyl cause less respiratory depression",
      "Morphine has higher addiction potential",
      "Heroin/fentanyl are more potent and faster-acting"
    ],
    "answer": "Heroin/fentanyl are more potent and faster-acting",
    "chapter": 4
  },
  {
    "question": "How do cocaine and amphetamines affect the brain?",
    "options": [
      "Reduce serotonin reuptake, enhancing mood",
      "Block GABA receptors, causing overstimulation",
      "Alter endocannabinoid system functioning",
      "Increase dopamine and norepinephrine activity"
    ],
    "answer": "Increase dopamine and norepinephrine activity",
    "chapter": 4
  },
  {
    "question": "What is the primary psychoactive ingredient in cannabis?",
    "options": [
      "CBD (modulating serotonin)",
      "Opiorphin (activating opioid receptors)",
      "Myrcene (enhancing GABA)",
      "THC (affecting CB1 receptors)"
    ],
    "answer": "THC (affecting CB1 receptors)",
    "chapter": 4
  },
  {
    "question": "How has cannabis use changed in the last decade?",
    "options": [
      "Lower addiction rates and reduced availability",
      "Shift to synthetic alternatives",
      "Decreased use among adolescents",
      "Higher potency strains and increased legalization"
    ],
    "answer": "Higher potency strains and increased legalization",
    "chapter": 4
  },
  {
    "question": "Which brain regions/neurotransmitters are central to addiction development?",
    "options": [
      "Glutamate circuits in the hippocampus",
      "GABAergic neurons in the cerebellum",
      "Dopamine pathways (VTA, nucleus accumbens, prefrontal cortex)",
      "Serotonin receptors in the amygdala"
    ],
    "answer": "Dopamine pathways (VTA, nucleus accumbens, prefrontal cortex)",
    "chapter": 4
  },
  {
    "question": "What is the core principle of harm reduction in substance use treatment?",
    "options": [
      "Complete abstinence is the only acceptable goal",
      "Medication-assisted treatment is prohibited",
      "Any reduction in use is valuable; patient autonomy is prioritized",
      "Treatment focuses solely on biological factors"
    ],
    "answer": "Any reduction in use is valuable; patient autonomy is prioritized",
    "chapter": 4
  },
  {
    "question": "How do internalizing disorders DIFFER from externalizing and neurodevelopmental disorders?",
    "options": [
      "Internalizing: acute; Externalizing: chronic; Neurodevelopmental: degenerative",
      "Internalizing: genetic; Externalizing: environmental; Neurodevelopmental: infectious",
      "Internalizing: inward-focused (anxiety/depression); Externalizing: outward-focused (anger/impulsivity); Neurodevelopmental: brain development impairments",
      "Internalizing: medication-responsive; Externalizing: therapy-responsive; Neurodevelopmental: untreatable"
    ],
    "answer": "Internalizing: inward-focused (anxiety/depression); Externalizing: outward-focused (anger/impulsivity); Neurodevelopmental: brain development impairments",
    "chapter": 5
  },
  {
    "question": "What does genetics reveal about autism and ADHD?",
    "options": [
      "Heritability is higher in ADHD than autism",
      "Neither has genetic links; environment is primary",
      "Both are highly heritable (ADHD 70-80%; autism 80-90%)",
      "Only autism is heritable; ADHD is environmental"
    ],
    "answer": "Both are highly heritable (ADHD 70-80%; autism 80-90%)",
    "chapter": 5
  },
  {
    "question": "What defines the developmental psychopathology approach?",
    "options": [
      "Focusing solely on childhood trauma as the root cause",
      "Studying how disorders evolve across lifespan via interconnected influences",
      "Classifying disorders based only on biological markers",
      "Prioritizing medication over therapy in development"
    ],
    "answer": "Studying how disorders evolve across lifespan via interconnected influences",
    "chapter": 5
  },
  {
    "question": "What is heterotypic continuity versus homotypic continuity?",
    "options": [
      "Heterotypic: genetic expression; Homotypic: environmental triggers",
      "Heterotypic: diagnosis worsens; Homotypic: diagnosis improves",
      "Heterotypic: different symptoms over time; Homotypic: same symptoms persist",
      "Heterotypic: childhood-limited; Homotypic: lifelong"
    ],
    "answer": "Heterotypic: different symptoms over time; Homotypic: same symptoms persist",
    "chapter": 5
  }
 

];

export default questions;