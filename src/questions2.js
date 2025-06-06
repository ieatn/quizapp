const questions = [
  {
    "question": "Which cluster A personality disorder is characterized by magical thinking and ideas of reference?",
    "options": [
      "Paranoid",
      "Schizoid",
      "Schizotypal",
      "Avoidant"
    ],
    "answer": "Schizotypal",
    "chapter": 1
  },
  {
    "question": "What percentage of individuals with borderline personality disorder have comorbid substance use disorders?",
    "options": [
      "30%",
      "50%",
      "67%",
      "80%"
    ],
    "answer": "67%",
    "chapter": 1
  },
  {
    "question": "Which personality disorder is most associated with 'incel' behavior according to the notes?",
    "options": [
      "Antisocial",
      "Borderline",
      "Avoidant",
      "Narcissistic"
    ],
    "answer": "Avoidant",
    "chapter": 1
  },
  {
    "question": "What is the core biological factor in Linehan's biosocial model of borderline personality disorder?",
    "options": [
      "Dopamine dysregulation",
      "Emotion dysregulation",
      "Serotonin deficiency",
      "Amygdala hyperactivity"
    ],
    "answer": "Emotion dysregulation",
    "chapter": 1
  },
  {
    "question": "Which treatment modality specifically targets shame and low self-esteem in borderline personality disorder?",
    "options": [
      "Exposure therapy",
      "Pharmacotherapy",
      "DBT skills training",
      "Psychodynamic therapy"
    ],
    "answer": "DBT skills training",
    "chapter": 1
  },
  {
    "question": "What physical complication is characteristic of bulimia nervosa due to purging?",
    "options": [
      "Brittle hair",
      "Chipmunk cheeks",
      "Irregular heartbeat",
      "Osteoporosis"
    ],
    "answer": "Chipmunk cheeks",
    "chapter": 2
  },
  {
    "question": "Which medication is FDA-approved for binge eating disorder?",
    "options": [
      "Prozac",
      "Zyprexa",
      "Vyvanse",
      "Wellbutrin"
    ],
    "answer": "Vyvanse",
    "chapter": 2
  },
  {
    "question": "What distinguishes anorexia nervosa binge-eating/purging type from bulimia nervosa?",
    "options": [
      "Frequency of episodes",
      "Body weight status",
      "Presence of tooth erosion",
      "Comorbid depression"
    ],
    "answer": "Body weight status",
    "chapter": 2
  },
  {
    "question": "Which psychological factor is commonly addressed in CBT-E for eating disorders?",
    "options": [
      "Magical thinking",
      "Perfectionism",
      "Callous unemotional traits",
      "Ideas of reference"
    ],
    "answer": "Perfectionism",
    "chapter": 2
  },
  {
    "question": "What BMI range indicates severe anorexia nervosa?",
    "options": [
      "BMI > 17",
      "BMI > 16",
      "BMI > 15",
      "BMI < 15"
    ],
    "answer": "BMI > 15",
    "chapter": 2
  },
  {
    "question": "Which neurotransmitter system does alcohol primarily affect to produce intoxication?",
    "options": [
      "Dopamine and norepinephrine",
      "GABA and glutamate",
      "Serotonin and endorphins",
      "Acetylcholine and cannabinoids"
    ],
    "answer": "GABA and glutamate",
    "chapter": 3
  },
  {
    "question": "What is a characteristic sign of opioid withdrawal?",
    "options": [
      "Pinpoint pupils",
      "Excessive yawning",
      "Delirium tremens",
      "Chipmunk cheeks"
    ],
    "answer": "Excessive yawning",
    "chapter": 3
  },
  {
    "question": "Which harm reduction strategy specifically targets opioid users?",
    "options": [
      "Weekly unit limits",
      "Naloxone distribution",
      "Designated driver programs",
      "THC reduction"
    ],
    "answer": "Naloxone distribution",
    "chapter": 3
  },
  {
    "question": "What mechanism explains amphetamine's effect as a stimulant?",
    "options": [
      "Blocks dopamine reuptake",
      "Directly releases dopamine",
      "Agonizes nicotinic receptors",
      "Enhances GABA inhibition"
    ],
    "answer": "Directly releases dopamine",
    "chapter": 3
  },
  {
    "question": "Which substance's withdrawal can include delirium tremens requiring medical detox?",
    "options": [
      "Cannabis",
      "Cocaine",
      "Alcohol",
      "Inhalants"
    ],
    "answer": "Alcohol",
    "chapter": 3
  },
  {
    "question": "What genetic contribution is noted for autism spectrum disorder?",
    "options": [
      "20%",
      "50%",
      "80%",
      "100%"
    ],
    "answer": "80%",
    "chapter": 4
  },
  {
    "question": "Which disorder requires evidence of conduct disorder before age 15 for diagnosis at 18?",
    "options": [
      "Oppositional defiant disorder",
      "ADHD",
      "Antisocial personality disorder",
      "Intermittent explosive disorder"
    ],
    "answer": "Antisocial personality disorder",
    "chapter": 4
  },
  {
    "question": "What is the primary focus of Applied Behavior Analysis (ABA) for autism?",
    "options": [
      "Medication management",
      "Social skills training",
      "Emotion regulation",
      "Early behavioral intervention"
    ],
    "answer": "Early behavioral intervention",
    "chapter": 4
  },
  {
    "question": "Which neurodevelopmental disorder shows 3x higher prevalence in males?",
    "options": [
      "Conduct disorder",
      "Binge eating disorder",
      "ADHD",
      "Borderline personality disorder"
    ],
    "answer": "ADHD",
    "chapter": 4
  },
  {
    "question": "What distinguishes conduct disorder from oppositional defiant disorder?",
    "options": [
      "Anger toward authority figures",
      "Violation of others' basic rights",
      "Presence of hyperactivity",
      "Need for early intervention"
    ],
    "answer": "Violation of others' basic rights",
    "chapter": 4
  },
  {
    "question": "Which biological factor is strongly associated with antisocial traits in children?",
    "options": [
      "Elevated serotonin levels",
      "Reduced amygdala response to threat",
      "Overactive prefrontal cortex",
      "Enhanced dopamine sensitivity"
    ],
    "answer": "Reduced amygdala response to threat",
    "chapter": 5
  },
  {
    "question": "What neurobiological system is primarily implicated in borderline personality disorder?",
    "options": [
      "Frontolimbic circuitry",
      "Cerebellar networks",
      "Hippocampal pathways",
      "Occipital lobe activation"
    ],
    "answer": "Frontolimbic circuitry",
    "chapter": 5
  },
  {
    "question": "Which hormonal system dysregulation is directly linked to eating disorders?",
    "options": [
      "Cortisol stress response",
      "Ghrelin and leptin signaling",
      "Thyroid hormone regulation",
      "Insulin production"
    ],
    "answer": "Ghrelin and leptin signaling",
    "chapter": 5
  },
  {
    "question": "What brain structure's hyperactivity contributes to drug-seeking behavior in SUD?",
    "options": [
      "Nucleus accumbens/ventral striatum",
      "Occipital cortex",
      "Brainstem nuclei",
      "Corpus callosum"
    ],
    "answer": "Nucleus accumbens/ventral striatum",
    "chapter": 5
  },
  {
    "question": "Which genetic contribution percentage is documented for ADHD?",
    "options": [
      "30%",
      "50%",
      "65%",
      "80%"
    ],
    "answer": "80%",
    "chapter": 5
  },
  {
    "question": "What biological process is most affected by advanced paternal age in autism?",
    "options": [
      "Myelination patterns",
      "De novo mutations",
      "Neurotransmitter synthesis",
      "Cerebral blood flow"
    ],
    "answer": "De novo mutations",
    "chapter": 5
  },
  {
    "question": "A 35-year-old male displays pervasive distrust, interprets colleagues' actions as malicious, and remains socially isolated despite evidence of their goodwill. Neuroimaging shows intact amygdala function but heightened prefrontal sensitivity to perceived threats. Explanation: This presentation illustrates Paranoid PD's core features of suspiciousness and misinterpretation of motives without the reduced amygdala response characteristic of ASPD.",
    "options": [
      "Schizotypal Personality Disorder",
      "Antisocial Personality Disorder",
      "Paranoid Personality Disorder",
      "Borderline Personality Disorder"
    ],
    "answer": "Paranoid Personality Disorder",
    "chapter": 5
  },
  {
    "question": "A patient with BPD exhibits chronic emptiness and frantic abandonment fears. DBT treatment includes diary cards, chain analysis, and brief phone coaching between sessions. What is the PRIMARY purpose of phone coaching? Explanation: Phone coaching in DBT specifically targets skills generalization to natural environments while repairing therapist-client ruptures, distinct from other components' focus on behavioral analysis or crisis management.",
    "options": [
      "Conduct behavioral chain analysis",
      "Generalize skills to daily life",
      "Adjust medication regimens",
      "Process childhood trauma"
    ],
    "answer": "Generalize skills to daily life",
    "chapter": 5
  },
  {
    "question": "A 28-year-old woman (BMI 15.8) uses laxatives after consuming two apples, fearing weight gain. Physical exam shows lanugo and bradycardia. She exhibits rigid thinking about food purity. Explanation: This case demonstrates AN binge/purge subtype with subjective binge episodes and compensatory behaviors, distinguished from BN by significantly low weight.",
    "options": [
      "Bulimia Nervosa",
      "Anorexia Nervosa Restricting Type",
      "Binge Eating Disorder",
      "Anorexia Nervosa Binge-Eating/Purging Type"
    ],
    "answer": "Anorexia Nervosa Binge-Eating/Purging Type",
    "chapter": 5
  },
  {
    "question": "A construction worker needs escalating heroin doses to avoid withdrawal, continues use despite job losses, and spends 50% income on drugs. Urine screen shows opioids only. Explanation: This presentation meets 6+ criteria for severe Opioid Use Disorder (tolerance, withdrawal, time spent, cravings, social impairment, hazardous use), beyond acute intoxication/withdrawal.",
    "options": [
      "Opioid Intoxication",
      "Opioid Withdrawal",
      "Opioid Use Disorder, Severe",
      "Stimulant Use Disorder"
    ],
    "answer": "Opioid Use Disorder, Severe",
    "chapter": 5
  },

    
  ];
  
  export default questions;