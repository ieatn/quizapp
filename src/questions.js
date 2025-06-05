const questions = [
  {
    "question": "What are the four primary modes of Dialectical Behavior Therapy (DBT)?",
    "options": [
      "Individual therapy, group skills training, phone coaching, therapist consultation",
      "Medication management, exposure therapy, cognitive restructuring, family therapy",
      "Psychoanalysis, mindfulness, emotion regulation, interpersonal effectiveness",
      "Support groups, crisis intervention, journaling, relapse prevention"
    ],
    "answer": "Individual therapy, group skills training, phone coaching, therapist consultation",
    "chapter": 1
  },
  {
    "question": "Which four skills are core components of Dialectical Behavior Therapy (DBT)?",
    "options": [
      "Mindfulness, emotion regulation, distress tolerance, interpersonal effectiveness",
      "Cognitive restructuring, exposure response prevention, assertiveness, relaxation",
      "Tolerance, withdrawal management, harm reduction, motivational interviewing",
      "Self-monitoring, problem-solving, social skills, biofeedback"
    ],
    "answer": "Mindfulness, emotion regulation, distress tolerance, interpersonal effectiveness",
    "chapter": 1
  },
  {
    "question": "According to Linehan's Biosocial Theory, what combination causes borderline personality disorder?",
    "options": [
      "Biological emotion dysregulation + an invalidating environment",
      "Genetic predisposition + childhood trauma",
      "Neurotransmitter imbalances + social isolation",
      "Cognitive distortions + maladaptive parenting"
    ],
    "answer": "Biological emotion dysregulation + an invalidating environment",
    "chapter": 1
  },
  {
    "question": "What are the two diagnostic subtypes of anorexia nervosa?",
    "options": [
      "Restricting type and binge-eating/purging type",
      "Emotional eating type and avoidant type",
      "Bulimic type and non-bulimic type",
      "Compensatory type and non-compensatory type"
    ],
    "answer": "Restricting type and binge-eating/purging type",
    "chapter": 2
  },
  {
    "question": "Which physical consequences are commonly associated with bulimia nervosa?",
    "options": [
      "Electrolyte imbalance, tooth decay, esophageal damage",
      "Osteoporosis, amenorrhea, cardiac issues",
      "Obesity, diabetes, hypertension",
      "Liver failure, kidney stones, pancreatitis"
    ],
    "answer": "Electrolyte imbalance, tooth decay, esophageal damage",
    "chapter": 2
  },
  {
    "question": "Which physical consequences are commonly associated with binge-eating disorder (BED)?",
    "options": [
      "Obesity, diabetes, hypertension",
      "Osteoporosis, amenorrhea, cardiac issues",
      "Electrolyte imbalance, tooth decay, esophageal damage",
      "Gastrointestinal paralysis, hypoglycemia, hair loss"
    ],
    "answer": "Obesity, diabetes, hypertension",
    "chapter": 2
  },
  {
    "question": "Which of the following is NOT a physical consequence that can develop in anorexia nervosa?",
    "options": [
      "Decreased bone density",
      "Weak tooth enamel",
      "Swollen salivary glands",
      "All of the above are potential physical consequences"
    ],
    "answer": "All of the above are potential physical consequences",
    "chapter": 2
  },
  {
    "question": "What is the key difference between OCD and OCPD?",
    "options": [
      "OCD involves intrusive thoughts/compulsions; OCPD involves rigid personality traits",
      "OCPD includes psychosis; OCD does not",
      "OCD is genetic; OCPD is environmentally caused",
      "OCPD responds to medication; OCD requires therapy"
    ],
    "answer": "OCD involves intrusive thoughts/compulsions; OCPD involves rigid personality traits",
    "chapter": 3
  },
  {
    "question": "What special rule applies when diagnosing antisocial personality disorder?",
    "options": [
      "Patient must be ≥18 years with a history of conduct disorder",
      "Patient must exhibit callous-unemotional traits before age 10",
      "Symptoms must persist for ≥5 years",
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
      "Compulsive lying and manipulativeness",
      "Impulsivity and risk-taking behaviors"
    ],
    "answer": "Lack of guilt, empathy, and remorse",
    "chapter": 3
  },
  {
    "question": "Which disorders are most comorbid with antisocial personality disorder?",
    "options": [
      "Substance use disorders and ADHD",
      "Depression and eating disorders",
      "Bipolar disorder and OCD",
      "PTSD and generalized anxiety"
    ],
    "answer": "Substance use disorders and ADHD",
    "chapter": 3
  },
  {
    "question": "Which disorders are most comorbid with borderline personality disorder?",
    "options": [
      "Depression, PTSD, and eating disorders",
      "Schizophrenia, bipolar disorder, and OCD",
      "ADHD, autism, and intellectual disability",
      "Panic disorder, phobias, and somatic symptoms"
    ],
    "answer": "Depression, PTSD, and eating disorders",
    "chapter": 3
  },
  {
    "question": "Acute discomfort with close relationships, peculiar thoughts, and odd beliefs are key symptoms of which personality disorder?",
    "options": [
      "Schizotypal Personality Disorder",
      "Obsessive-Compulsive Personality Disorder",
      "Histrionic Personality Disorder",
      "Antisocial Personality Disorder"
    ],
    "answer": "Schizotypal Personality Disorder",
    "chapter": 3
  },
  {
    "question": "What distinguishes Substance Use Disorder (SUD) from intoxication and withdrawal syndromes?",
    "options": [
      "SUD involves chronic misuse/impairment; intoxication/withdrawal are acute states",
      "SUD requires legal problems; intoxication/withdrawal focus on physical symptoms",
      "Intoxication is voluntary; SUD is involuntary",
      "Withdrawal lasts longer than SUD symptoms"
    ],
    "answer": "SUD involves chronic misuse/impairment; intoxication/withdrawal are acute states",
    "chapter": 4
  },
  {
    "question": "What are the four symptom categories in Substance Use Disorder (SUD) criteria?",
    "options": [
      "Impaired control, social impairment, risky use, tolerance",
      "Withdrawal, cravings, blackouts, health issues",
      "Mood swings, cognitive deficits, financial problems, legal troubles",
      "Intoxication, dependence, remission, relapse"
    ],
    "answer": "Impaired control, social impairment, risky use, tolerance",
    "chapter": 4
  },
  {
    "question": "How is 'tolerance' different from 'withdrawal' in Substance Use Disorder?",
    "options": [
      "Tolerance: needing more substance for same effect; Withdrawal: symptoms after stopping",
      "Tolerance: psychological cravings; Withdrawal: physical dependence",
      "Tolerance: legal problems; Withdrawal: social isolation",
      "Tolerance: short-term effect; Withdrawal: chronic condition"
    ],
    "answer": "Tolerance: needing more substance for same effect; Withdrawal: symptoms after stopping",
    "chapter": 4
  },
  {
    "question": "What biological process underlies physiological dependence in Substance Use Disorder?",
    "options": [
      "Brain adaptation altering neurotransmitter balance (e.g., GABA/glutamate from alcohol)",
      "DNA mutation in reward pathways",
      "Immune system suppression",
      "Hormonal cascade disruption"
    ],
    "answer": "Brain adaptation altering neurotransmitter balance (e.g., GABA/glutamate from alcohol)",
    "chapter": 4
  },
  {
    "question": "Which substances have the HIGHEST addictive potential?",
    "options": [
      "Opioids, nicotine, methamphetamine",
      "Cannabis, hallucinogens, inhalants",
      "Alcohol, caffeine, prescription stimulants",
      "Barbiturates, benzodiazepines, kratom"
    ],
    "answer": "Opioids, nicotine, methamphetamine",
    "chapter": 4
  },
  {
    "question": "Which substances are associated with the MOST overdose deaths?",
    "options": [
      "Opioids (fentanyl/heroin), cocaine, alcohol",
      "Cannabis, LSD, psilocybin",
      "MDMA, ketamine, prescription sedatives",
      "Nicotine, caffeine, anabolic steroids"
    ],
    "answer": "Opioids (fentanyl/heroin), cocaine, alcohol",
    "chapter": 4
  },
  {
    "question": "How is mild Substance Use Disorder (SUD) distinguished from severe SUD?",
    "options": [
      "Mild: 2-3 symptoms; Severe: 6+ symptoms",
      "Mild: no withdrawal; Severe: life-threatening withdrawal",
      "Mild: social use; Severe: daily use",
      "Mild: no cravings; Severe: intense cravings"
    ],
    "answer": "Mild: 2-3 symptoms; Severe: 6+ symptoms",
    "chapter": 4
  },
  {
    "question": "What are common short-term effects of substance use?",
    "options": [
      "Slurred speech, sedation, euphoria, increased energy",
      "Osteoporosis, amenorrhea, cardiac issues",
      "Diabetes, hypertension, tooth decay",
      "Memory loss, organ failure, psychosis"
    ],
    "answer": "Slurred speech, sedation, euphoria, increased energy",
    "chapter": 4
  },
  {
    "question": "How do opioids typically cause fatal overdose?",
    "options": [
      "Respiratory depression leading to stopped breathing",
      "Cardiac arrest from electrolyte imbalance",
      "Seizures or stroke from hypertension",
      "Liver toxicity or kidney failure"
    ],
    "answer": "Respiratory depression leading to stopped breathing",
    "chapter": 4
  },
  {
    "question": "How do heroin and fentanyl differ from morphine?",
    "options": [
      "Heroin/fentanyl are more potent and faster-acting",
      "Morphine has higher addiction potential",
      "Heroin/fentanyl cause less respiratory depression",
      "Morphine is synthetic; heroin/fentanyl are natural"
    ],
    "answer": "Heroin/fentanyl are more potent and faster-acting",
    "chapter": 4
  },
  {
    "question": "How do cocaine and amphetamines affect the brain?",
    "options": [
      "Increase dopamine and norepinephrine activity",
      "Block GABA receptors, causing overstimulation",
      "Reduce serotonin reuptake, enhancing mood",
      "Alter endocannabinoid system functioning"
    ],
    "answer": "Increase dopamine and norepinephrine activity",
    "chapter": 4
  },
  {
    "question": "What is the primary psychoactive ingredient in cannabis?",
    "options": [
      "THC (affecting CB1 receptors)",
      "CBD (modulating serotonin)",
      "Opiorphin (activating opioid receptors)",
      "Myrcene (enhancing GABA)"
    ],
    "answer": "THC (affecting CB1 receptors)",
    "chapter": 4
  },
  {
    "question": "How has cannabis use changed in the last decade?",
    "options": [
      "Higher potency strains and increased legalization",
      "Lower addiction rates and reduced availability",
      "Decreased use among adolescents",
      "Shift to synthetic alternatives"
    ],
    "answer": "Higher potency strains and increased legalization",
    "chapter": 4
  },
  {
    "question": "Which brain regions/neurotransmitters are central to addiction development?",
    "options": [
      "Dopamine pathways (VTA, nucleus accumbens, prefrontal cortex)",
      "Serotonin receptors in the amygdala",
      "GABAergic neurons in the cerebellum",
      "Glutamate circuits in the hippocampus"
    ],
    "answer": "Dopamine pathways (VTA, nucleus accumbens, prefrontal cortex)",
    "chapter": 4
  },
  {
    "question": "What is the core principle of harm reduction in substance use treatment?",
    "options": [
      "Any reduction in use is valuable; patient autonomy is prioritized",
      "Complete abstinence is the only acceptable goal",
      "Medication-assisted treatment is prohibited",
      "Treatment focuses solely on biological factors"
    ],
    "answer": "Any reduction in use is valuable; patient autonomy is prioritized",
    "chapter": 4
  },
  {
    "question": "How do internalizing disorders DIFFER from externalizing and neurodevelopmental disorders?",
    "options": [
      "Internalizing: inward-focused (anxiety/depression); Externalizing: outward-focused (anger/impulsivity); Neurodevelopmental: brain development impairments",
      "Internalizing: genetic; Externalizing: environmental; Neurodevelopmental: infectious",
      "Internalizing: acute; Externalizing: chronic; Neurodevelopmental: degenerative",
      "Internalizing: medication-responsive; Externalizing: therapy-responsive; Neurodevelopmental: untreatable"
    ],
    "answer": "Internalizing: inward-focused (anxiety/depression); Externalizing: outward-focused (anger/impulsivity); Neurodevelopmental: brain development impairments",
    "chapter": 5
  },
  {
    "question": "What does genetics reveal about autism and ADHD?",
    "options": [
      "Both are highly heritable (ADHD 70-80%; autism 80-90%)",
      "Neither has genetic links; environment is primary",
      "Only autism is heritable; ADHD is environmental",
      "Heritability is higher in ADHD than autism"
    ],
    "answer": "Both are highly heritable (ADHD 70-80%; autism 80-90%)",
    "chapter": 5
  },
  {
    "question": "What defines the developmental psychopathology approach?",
    "options": [
      "Studying how disorders evolve across lifespan via interconnected influences",
      "Focusing solely on childhood trauma as the root cause",
      "Prioritizing medication over therapy in development",
      "Classifying disorders based only on biological markers"
    ],
    "answer": "Studying how disorders evolve across lifespan via interconnected influences",
    "chapter": 5
  },
  {
    "question": "What is heterotypic continuity versus homotypic continuity?",
    "options": [
      "Heterotypic: different symptoms over time; Homotypic: same symptoms persist",
      "Heterotypic: diagnosis worsens; Homotypic: diagnosis improves",
      "Heterotypic: genetic expression; Homotypic: environmental triggers",
      "Heterotypic: childhood-limited; Homotypic: lifelong"
    ],
    "answer": "Heterotypic: different symptoms over time; Homotypic: same symptoms persist",
    "chapter": 5
  },
 

];

export default questions;