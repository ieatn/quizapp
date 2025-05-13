const questions = [
  {
    "question": "Which therapy technique uses an exposure hierarchy to reduce anxiety symptoms?",
    "options": [
      "Cognitive restructuring",
      "Systematic desensitization",
      "Exposure therapy",
      "Interpersonal therapy"
    ],
    "answer": "Exposure therapy",
    "chapter": 1
  },
  {
    "question": "Which of the following is TRUE about the relationship between anxiety and depression?",
    "options": [
      "There is minimal comorbidity between the two",
      "Depression causes anxiety but not the reverse",
      "They are comorbid in approximately 70% of social anxiety cases",
      "They are mutually exclusive diagnoses"
    ],
    "answer": "They are comorbid in approximately 70% of social anxiety cases",
    "chapter": 1
  },
  {
    "question": "Which of the following is a common cognitive distortion seen in anxiety disorders?",
    "options": [
      "Overgeneralization",
      "Euphoria",
      "Grandiosity",
      "Magical thinking"
    ],
    "answer": "Overgeneralization",
    "chapter": 1
  },
  {
    "question": "Which brain structure is most commonly overactive in individuals with anxiety disorders?",
    "options": [
      "Hippocampus",
      "Amygdala",
      "Prefrontal cortex",
      "Basal ganglia"
    ],
    "answer": "Amygdala",
    "chapter": 1
  },
  {
    "question": "Which of the following best characterizes Generalized Anxiety Disorder (GAD)?",
    "options": [
      "Fear of social situations",
      "Recurrent panic attacks without warning",
      "Excessive anxiety and worry occurring more days than not for at least 6 months",
      "Avoidance of public transportation due to fear of escape"
    ],
    "answer": "Excessive anxiety and worry occurring more days than not for at least 6 months",
    "chapter": 1
  },
  {
    "question": "Which psychological mechanism helps explain how compulsions are reinforced in OCD?",
    "options": [
      "Classical conditioning",
      "Negative reinforcement",
      "Cognitive reappraisal",
      "Positive punishment"
    ],
    "answer": "Negative reinforcement",
    "chapter": 1
  },
  {
    "question": "Which treatment is considered most effective for OCD?",
    "options": [
      "Exposure therapy",
      "Cognitive restructuring alone",
      "Exposure and Response Prevention (ERP)",
      "Benzodiazepines"
    ],
    "answer": "Exposure and Response Prevention (ERP)",
    "chapter": 1
  },
  {
    "question": "Which anxiety-related disorder involves recurrent pulling of one's own hair?",
    "options": [
      "Excoriation disorder",
      "Body dysmorphic disorder",
      "Trichotillomania",
      "Hoarding disorder"
    ],
    "answer": "Trichotillomania",
    "chapter": 1
  },
  {
    "question": "Which DSM-5 depressive disorder was newly introduced to address mood dysregulation in children?",
    "options": [
      "Persistent depressive disorder",
      "Premenstrual dysphoric disorder",
      "Disruptive mood dysregulation disorder",
      "Cyclothymic disorder"
    ],
    "answer": "Disruptive mood dysregulation disorder",
    "chapter": 2
  },
  {
    "question": "What distinguishes a manic episode from a hypomanic episode?",
    "options": [
      "Hypomanic episodes include psychotic features",
      "Manic episodes last fewer days and are less severe",
      "Manic episodes cause significant impairment, hypomanic episodes do not",
      "There is no difference"
    ],
    "answer": "Manic episodes cause significant impairment, hypomanic episodes do not",
    "chapter": 2
  },
  {
    "question": "Which medication is considered the gold standard for treating bipolar disorder?",
    "options": [
      "Fluoxetine",
      "Lithium",
      "Sertraline",
      "Lamotrigine"
    ],
    "answer": "Lithium",
    "chapter": 2
  },
  {
    "question": "What is one biological factor associated with major depressive disorder?",
    "options": [
      "High dopamine levels",
      "Increased hippocampal volume",
      "Low serotonin levels",
      "Excessive circadian rhythm regulation"
    ],
    "answer": "Low serotonin levels",
    "chapter": 2
  },
  {
    "question": "Which biological treatment is commonly used across both anxiety and mood disorders?",
    "options": [
      "Lithium",
      "SSRI medications",
      "Beta blockers",
      "Stimulants"
    ],
    "answer": "SSRI medications",
    "chapter": 2
  },

  {
    "question": "Double depression refers to which combination?",
    "options": [
      "MDD and bipolar disorder",
      "MDD and anxiety",
      "Persistent depressive disorder and MDD",
      "Cyclothymia and hypomania"
    ],
    "answer": "Persistent depressive disorder and MDD",
    "chapter": 2
  },
  {
    "question": "Which of the following is a key goal of behavioral activation therapy for depression?",
    "options": [
      "Eliminating irrational beliefs",
      "Challenging automatic thoughts",
      "Increasing engagement in pleasurable activities",
      "Improving memory"
    ],
    "answer": "Increasing engagement in pleasurable activities",
    "chapter": 2
  },
  {
    "question": "Which disorder is characterized by mood swings that do not meet full criteria for hypomanic or depressive episodes for 2 or more years?",
    "options": [
      "Cyclothymic disorder",
      "Bipolar I disorder",
      "Persistent depressive disorder",
      "MDD with atypical features"
    ],
    "answer": "Cyclothymic disorder",
    "chapter": 2
  },
  {
    "question": "Which therapy focuses on stabilizing daily routines to treat bipolar disorder?",
    "options": [
      "Behavioral activation",
      "Cognitive restructuring",
      "Interpersonal Social Rhythm Therapy (IPSRT)",
      "Exposure and response prevention"
    ],
    "answer": "Interpersonal Social Rhythm Therapy (IPSRT)",
    "chapter": 2
  },
  {
    "question": "Which of the following is a negative symptom of schizophrenia?",
    "options": [
      "Hallucinations",
      "Delusions",
      "Disorganized speech",
      "Avolition"
    ],
    "answer": "Avolition",
    "chapter": 3
  },
  {
    "question": "What is the prodromal phase of schizophrenia characterized by?",
    "options": [
      "Full-blown delusions and hallucinations",
      "Sudden and intense onset of symptoms",
      "Early subtle signs like social withdrawal and odd beliefs",
      "Immediate psychotic breaks"
    ],
    "answer": "Early subtle signs like social withdrawal and odd beliefs",
    "chapter": 3
  },
  {
    "question": "What distinguishes brief psychotic disorder from schizophrenia?",
    "options": [
      "It has no delusions",
      "Symptoms last from 1 day to less than 1 month",
      "It only occurs in adolescents",
      "It requires presence of hallucinations only"
    ],
    "answer": "Symptoms last from 1 day to less than 1 month",
    "chapter": 3
  },
  {
    "question": "What is a common side effect of antipsychotic medications that may affect compliance?",
    "options": [
      "Increased energy",
      "Improved cognition",
      "Weight gain and movement issues",
      "Enhanced sleep architecture"
    ],
    "answer": "Weight gain and movement issues",
    "chapter": 3
  }

];

export default questions;