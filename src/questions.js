const questions = [
  {
    "question": "Which of the following is a key DSM-5 criterion for Obsessive-Compulsive Disorder (OCD)?",
    "options": [
      "Fear of open spaces and public transportation",
      "Persistent depressive mood for at least two years",
      "Obsessions and compulsions lasting more than one hour per day",
      "Worry occurring more days than not for 6+ months"
    ],
    "answer": "Obsessions and compulsions lasting more than one hour per day",
    "chapter": 1
  },
  {
    "question": "At what age does Social Anxiety Disorder typically emerge?",
    "options": [
      "Early childhood",
      "Adolescence",
      "Mid-30s",
      "Late adulthood"
    ],
    "answer": "Adolescence",
    "chapter": 1
  },
  {
    "question": "Which treatment is most commonly used for Post-Traumatic Stress Disorder (PTSD)?",
    "options": [
      "Tricyclic antidepressants",
      "Exposure and response prevention",
      "EMDR (Eye Movement Desensitization and Reprocessing)",
      "Interoceptive exposure"
    ],
    "answer": "EMDR (Eye Movement Desensitization and Reprocessing)",
    "chapter": 1
  },
  {
    "question": "What distinguishes Agoraphobia from other anxiety disorders?",
    "options": [
      "Fear of social evaluation",
      "Fear of being unable to escape in open or public places",
      "Obsession with personal appearance",
      "Repetitive behaviors to relieve anxiety"
    ],
    "answer": "Fear of being unable to escape in open or public places",
    "chapter": 1
  },
  {
    "question": "Which disorder involves difficulty discarding possessions regardless of their value?",
    "options": [
      "Body Dysmorphic Disorder",
      "Hoarding Disorder",
      "OCD",
      "Cyclothymic Disorder"
    ],
    "answer": "Hoarding Disorder",
    "chapter": 1
  },
  {
    "question": "Which of the following is a core symptom of Major Depressive Disorder (MDD)?",
    "options": [
      "Hallucinations",
      "Elevated self-esteem",
      "Anhedonia",
      "Obsessions"
    ],
    "answer": "Anhedonia",
    "chapter": 1
  },
  {
    "question": "What best differentiates Bipolar I Disorder from Bipolar II Disorder?",
    "options": [
      "Presence of psychosis",
      "Presence of hypomania but no mania in Bipolar II",
      "Mood swings within the same day",
      "Predominantly depressive symptoms"
    ],
    "answer": "Presence of hypomania but no mania in Bipolar II",
    "chapter": 1
  },
  {
    "question": "Which treatment is commonly used across most anxiety disorders?",
    "options": [
      "Lithium",
      "SSRIs and CBT",
      "Electroconvulsive Therapy (ECT)",
      "Benzodiazepines only"
    ],
    "answer": "SSRIs and CBT",
    "chapter": 1
  },
  {
    "question": "Schizophrenia requires symptoms to persist for at least:",
    "options": [
      "1 month",
      "3 months",
      "6 months",
      "2 years"
    ],
    "answer": "6 months",
    "chapter": 1
  },
  {
    "question": "Which antipsychotic is considered an atypical medication used for schizophrenia?",
    "options": [
      "Haloperidol",
      "Tranylcypromine",
      "Clozapine",
      "Imipramine"
    ],
    "answer": "Clozapine",
    "chapter": 1
  },
  {
    "question": "Which of the following is a key DSM-5 criterion for Generalized Anxiety Disorder (GAD)?",
    "options": [
      "Recurrent unexpected panic attacks",
      "Persistent worry occurring more days than not for at least 6 months",
      "Obsessions and compulsions",
      "Fear of being in situations where escape might be difficult"
    ],
    "answer": "Persistent worry occurring more days than not for at least 6 months",
    "chapter": 1
  },
  {
    "question": "Which symptom is NOT typically associated with GAD?",
    "options": [
      "Muscle tension",
      "Mind going blank",
      "Elevated mood",
      "Sleep disturbances"
    ],
    "answer": "Elevated mood",
    "chapter": 1
  },
  {
    "question": "What is the typical age of onset for GAD?",
    "options": ["Early childhood", "Early teens to 20s", "Mid-30s", "Late adulthood"],
    "answer": "Early teens to 20s",
    "chapter": 1
  },
  {
    "question": "What treatment is most specific to OCD?",
    "options": ["Exposure and Response Prevention", "Interoceptive Exposure", "Behavioral Activation", "IPT"],
    "answer": "Exposure and Response Prevention",
    "chapter": 1
  },
  {
    "question": "What is the minimum duration for PTSD symptoms to qualify for diagnosis?",
    "options": ["Less than 1 month", "At least 1 month", "3 months", "6 months"],
    "answer": "At least 1 month",
    "chapter": 1
  },
  {
    "question": "Which anxiety disorder often begins in childhood between ages 7-11?",
    "options": ["Phobia", "Panic Disorder", "PTSD", "Body Dysmorphic Disorder"],
    "answer": "Phobia",
    "chapter": 1
  },
  {
    "question": "What is the best treatment for a specific phobia?",
    "options": ["CBT", "Gradual hierarchy exposure therapy", "SSRIs", "EMDR"],
    "answer": "Gradual hierarchy exposure therapy",
    "chapter": 1
  },
  {
    "question": "What distinguishes Agoraphobia from Panic Disorder?",
    "options": [
      "Presence of compulsions",
      "Recurrent panic attacks",
      "Fear and avoidance of public transport/open spaces",
      "Worry about appearance"
    ],
    "answer": "Fear and avoidance of public transport/open spaces",
    "chapter": 1
  },
  {
    "question": "What is the hallmark symptom of Panic Disorder?",
    "options": [
      "Persistent depressive mood",
      "Hair pulling behavior",
      "Recurrent panic attacks with fear of additional attacks",
      "Flashbacks to traumatic events"
    ],
    "answer": "Recurrent panic attacks with fear of additional attacks",
    "chapter": 1
  },
  {
    "question": "Which disorder involves imagined physical flaws and repetitive behaviors?",
    "options": [
      "Hoarding Disorder",
      "Body Dysmorphic Disorder",
      "Trichotillomania",
      "Social Anxiety Disorder"
    ],
    "answer": "Body Dysmorphic Disorder",
    "chapter": 1
  },
  {
    "question": "What age group is most associated with the onset of Trichotillomania and Excoriation?",
    "options": ["Childhood", "Teens/Young Adults", "Midlife", "Older Adults"],
    "answer": "Teens/Young Adults",
    "chapter": 1
  },
  {
    "question": "Which disorder is considered 'PTSD but lasting less than 1 month'?",
    "options": ["Brief Psychotic Disorder", "ASD (Acute Stress Disorder)", "PDD", "PMDD"],
    "answer": "ASD (Acute Stress Disorder)",
    "chapter": 1
  },
  {
    "question": "Which treatment is common to most anxiety disorders?",
    "options": ["Tricyclics", "Lithium", "SSRIs and CBT", "Clozapine"],
    "answer": "SSRIs and CBT",
    "chapter": 1
  },
  {
    "question": "How long must symptoms last for Major Depressive Disorder (MDD) diagnosis?",
    "options": ["2 days", "1 week", "2+ weeks", "6+ months"],
    "answer": "2+ weeks",
    "chapter": 1
  },
  {
    "question": "Which symptom is required for an MDD diagnosis?",
    "options": [
      "Obsessions",
      "Delusions",
      "Mania",
      "Depressed mood or anhedonia"
    ],
    "answer": "Depressed mood or anhedonia",
    "chapter": 1
  },
  {
    "question": "What differentiates Persistent Depressive Disorder (PDD) from MDD?",
    "options": [
      "PDD includes psychosis",
      "PDD lasts for 2+ years with milder symptoms",
      "PDD occurs in old age only",
      "PDD is treated with EMDR"
    ],
    "answer": "PDD lasts for 2+ years with milder symptoms",
    "chapter": 1
  },
  {
    "question": "What defines Disruptive Mood Dysregulation Disorder (DMDD)?",
    "options": [
      "Mood changes related to menstruation",
      "Hair pulling and skin picking",
      "Recurrent temper outbursts and irritability for 12+ months",
      "Fear of scrutiny"
    ],
    "answer": "Recurrent temper outbursts and irritability for 12+ months",
    "chapter": 1
  },
  {
    "question": "Which episode is required for a Bipolar I diagnosis?",
    "options": [
      "Major depressive episode",
      "Hypomanic episode",
      "Manic episode",
      "Mixed episode"
    ],
    "answer": "Manic episode",
    "chapter": 1
  },
  {
    "question": "Which is a hallmark of a manic episode?",
    "options": [
      "Low self-esteem",
      "Recurrent panic attacks",
      "Elevated mood and decreased need for sleep",
      "Irrational fears"
    ],
    "answer": "Elevated mood and decreased need for sleep",
    "chapter": 1
  },
  {
    "question": "What is the typical treatment for mood disorders like bipolar disorder?",
    "options": ["SSRIs only", "Lithium and antipsychotics plus CBT", "EMDR", "Exposure therapy"],
    "answer": "Lithium and antipsychotics plus CBT",
    "chapter": 1
  },
  {
    "question": "Which of the following is a key DSM-5 criterion for Generalized Anxiety Disorder (GAD)?",
    "options": [
      "Recurrent unexpected panic attacks",
      "Persistent worry occurring more days than not for at least 6 months",
      "Obsessions and compulsions",
      "Fear of being in situations where escape might be difficult"
    ],
    "answer": "Persistent worry occurring more days than not for at least 6 months",
    "chapter": 1
  },
  {
    "question": "Which symptom is NOT typically associated with GAD?",
    "options": [
      "Muscle tension",
      "Mind going blank",
      "Elevated mood",
      "Sleep disturbances"
    ],
    "answer": "Elevated mood",
    "chapter": 1
  },
  {
    "question": "What is the typical age of onset for GAD?",
    "options": ["Early childhood", "Early teens to 20s", "Mid-30s", "Late adulthood"],
    "answer": "Early teens to 20s",
    "chapter": 1
  },
  {
    "question": "What treatment is most specific to OCD?",
    "options": ["Exposure and Response Prevention", "Interoceptive Exposure", "Behavioral Activation", "IPT"],
    "answer": "Exposure and Response Prevention",
    "chapter": 1
  },
  {
    "question": "What is the minimum duration for PTSD symptoms to qualify for diagnosis?",
    "options": ["Less than 1 month", "At least 1 month", "3 months", "6 months"],
    "answer": "At least 1 month",
    "chapter": 1
  },
  {
    "question": "Which anxiety disorder often begins in childhood between ages 7-11?",
    "options": ["Phobia", "Panic Disorder", "PTSD", "Body Dysmorphic Disorder"],
    "answer": "Phobia",
    "chapter": 1
  },
  {
    "question": "What is the best treatment for a specific phobia?",
    "options": ["CBT", "Gradual hierarchy exposure therapy", "SSRIs", "EMDR"],
    "answer": "Gradual hierarchy exposure therapy",
    "chapter": 1
  },
  {
    "question": "What distinguishes Agoraphobia from Panic Disorder?",
    "options": [
      "Presence of compulsions",
      "Recurrent panic attacks",
      "Fear and avoidance of public transport/open spaces",
      "Worry about appearance"
    ],
    "answer": "Fear and avoidance of public transport/open spaces",
    "chapter": 1
  },
  {
    "question": "What is the hallmark symptom of Panic Disorder?",
    "options": [
      "Persistent depressive mood",
      "Hair pulling behavior",
      "Recurrent panic attacks with fear of additional attacks",
      "Flashbacks to traumatic events"
    ],
    "answer": "Recurrent panic attacks with fear of additional attacks",
    "chapter": 1
  },
  {
    "question": "Which disorder involves imagined physical flaws and repetitive behaviors?",
    "options": [
      "Hoarding Disorder",
      "Body Dysmorphic Disorder",
      "Trichotillomania",
      "Social Anxiety Disorder"
    ],
    "answer": "Body Dysmorphic Disorder",
    "chapter": 1
  },
  {
    "question": "What age group is most associated with the onset of Trichotillomania and Excoriation?",
    "options": ["Childhood", "Teens/Young Adults", "Midlife", "Older Adults"],
    "answer": "Teens/Young Adults",
    "chapter": 1
  },
  {
    "question": "Which disorder is considered 'PTSD but lasting less than 1 month'?",
    "options": ["Brief Psychotic Disorder", "ASD (Acute Stress Disorder)", "PDD", "PMDD"],
    "answer": "ASD (Acute Stress Disorder)",
    "chapter": 1
  },
  {
    "question": "Which treatment is common to most anxiety disorders?",
    "options": ["Tricyclics", "Lithium", "SSRIs and CBT", "Clozapine"],
    "answer": "SSRIs and CBT",
    "chapter": 1
  },
  {
    "question": "How long must symptoms last for Major Depressive Disorder (MDD) diagnosis?",
    "options": ["2 days", "1 week", "2+ weeks", "6+ months"],
    "answer": "2+ weeks",
    "chapter": 1
  },
  {
    "question": "Which symptom is required for an MDD diagnosis?",
    "options": [
      "Obsessions",
      "Delusions",
      "Mania",
      "Depressed mood or anhedonia"
    ],
    "answer": "Depressed mood or anhedonia",
    "chapter": 1
  },
  {
    "question": "What differentiates Persistent Depressive Disorder (PDD) from MDD?",
    "options": [
      "PDD includes psychosis",
      "PDD lasts for 2+ years with milder symptoms",
      "PDD occurs in old age only",
      "PDD is treated with EMDR"
    ],
    "answer": "PDD lasts for 2+ years with milder symptoms",
    "chapter": 1
  },
  {
    "question": "What defines Disruptive Mood Dysregulation Disorder (DMDD)?",
    "options": [
      "Mood changes related to menstruation",
      "Hair pulling and skin picking",
      "Recurrent temper outbursts and irritability for 12+ months",
      "Fear of scrutiny"
    ],
    "answer": "Recurrent temper outbursts and irritability for 12+ months",
    "chapter": 1
  },
  {
    "question": "Which episode is required for a Bipolar I diagnosis?",
    "options": [
      "Major depressive episode",
      "Hypomanic episode",
      "Manic episode",
      "Mixed episode"
    ],
    "answer": "Manic episode",
    "chapter": 1
  },
  {
    "question": "Which is a hallmark of a manic episode?",
    "options": [
      "Low self-esteem",
      "Recurrent panic attacks",
      "Elevated mood and decreased need for sleep",
      "Irrational fears"
    ],
    "answer": "Elevated mood and decreased need for sleep",
    "chapter": 1
  },
  {
    "question": "What is the typical treatment for mood disorders like bipolar disorder?",
    "options": ["SSRIs only", "Lithium and antipsychotics plus CBT", "EMDR", "Exposure therapy"],
    "answer": "Lithium and antipsychotics plus CBT",
    "chapter": 1
  },
  {
    "question": "Which of the following best describes the Multipath Model of Anxiety Disorders?",
    "options": [
      "Genetics, cognitive distortions, trauma, serotonin imbalance",
      "Overactive amygdala, anxiety cycle, stressful relationships, gender norms",
      "Fear extinction, negative schemas, family history, poverty",
      "HPA axis dysfunction, learned helplessness, peer rejection, urban stress"
    ],
    "answer": "Overactive amygdala, anxiety cycle, stressful relationships, gender norms",
    "chapter": 2
  },
  {
    "question": "Which combination correctly represents the Multipath Model of PTSD?",
    "options": [
      "Low serotonin, distorted thoughts, peer rejection, poverty",
      "Amygdala hyperactivity, operant conditioning, abuse history, gender roles",
      "HPA axis dysfunction, negative appraisal styles, abuse history, discrimination",
      "Fight-or-flight activation, cognitive distortions, social conflict, urban living"
    ],
    "answer": "HPA axis dysfunction, negative appraisal styles, abuse history, discrimination",
    "chapter": 2
  },
  {
    "question": "What are the four components of the Multipath Model of OCD?",
    "options": [
      "Low serotonin, learned helplessness, trauma, poverty",
      "Orbitofrontal circuit issues, operant conditioning, parental overprotection, culture",
      "HPA axis dysregulation, negative triad, family stress, socioeconomic status",
      "Amygdala hyperactivity, cognitive schemas, peer conflict, discrimination"
    ],
    "answer": "Orbitofrontal circuit issues, operant conditioning, parental overprotection, culture",
    "chapter": 2
  },
  {
    "question": "Which of the following describes the Multipath Model of Major Depressive Disorder (MDD)?",
    "options": [
      "Low serotonin, Beck’s triad, social isolation, gender roles",
      "Overactive dopamine, distorted thoughts, trauma, urban stress",
      "Circadian rhythm disruption, learned helplessness, conflict, prejudice",
      "Amygdala shrinkage, reward seeking, peer rejection, socioeconomic status"
    ],
    "answer": "Low serotonin, Beck’s triad, social isolation, gender roles",
    "chapter": 2
  },
  {
    "question": "Which set best matches the Multipath Model for Bipolar Disorder?",
    "options": [
      "Low dopamine, pessimism, social rejection, gender roles",
      "High heritability, poor coping, abuse, cultural stigma",
      "Serotonin imbalance, learned helplessness, isolation, discrimination",
      "Orbitofrontal dysfunction, negative triad, conflict, urban stress"
    ],
    "answer": "High heritability, poor coping, abuse, cultural stigma",
    "chapter": 2
  },
  {
    "question": "Which are the four dimensions in the Multipath Model of Schizophrenia?",
    "options": [
      "Dopamine dysregulation, cognitive bias, trauma, urban living",
      "Low serotonin, distorted thinking, peer pressure, gender roles",
      "High cortisol, learned helplessness, conflict, cultural expectations",
      "Amygdala dysfunction, impulsivity, abuse, stigma"
    ],
    "answer": "Dopamine dysregulation, cognitive bias, trauma, urban living",
    "chapter": 2
  },
  {
    "question": "Which symptom type includes hallucinations and delusions in schizophrenia?",
    "options": ["Negative symptoms", "Positive symptoms", "Cognitive symptoms", "Prodromal symptoms"],
    "answer": "Positive symptoms",
    "chapter": 3
  },
  {
    "question": "Which of the following is a negative symptom of schizophrenia?",
    "options": ["Hallucinations", "Delusions", "Flat affect", "Disorganized speech"],
    "answer": "Flat affect",
    "chapter": 3
  },
  {
    "question": "What defines the prodromal phase of schizophrenia?",
    "options": [
      "Severe hallucinations and delusions",
      "Mood swings and grandiosity",
      "Social withdrawal and odd beliefs before full psychosis",
      "Sudden onset of panic attacks"
    ],
    "answer": "Social withdrawal and odd beliefs before full psychosis",
    "chapter": 3
  },
  {
    "question": "Which delusion type involves believing others are out to harm you?",
    "options": ["Somatic", "Grandiose", "Jealous", "Persecutory"],
    "answer": "Persecutory",
    "chapter": 3
  },
  {
    "question": "Which type of antipsychotic is associated with high EPS (extrapyramidal symptoms)?",
    "options": ["SSRIs", "Atypical antipsychotics", "MAOIs", "Typical antipsychotics like haloperidol"],
    "answer": "Typical antipsychotics like haloperidol",
    "chapter": 3
  },
  {
    "question": "Which antipsychotic is better for treating negative symptoms of schizophrenia?",
    "options": ["Haloperidol", "Risperidone", "Lithium", "Diazepam"],
    "answer": "Risperidone",
    "chapter": 3
  },
  {
    "question": "What distinguishes panic disorder from panic attacks?",
    "options": [
      "Panic attacks involve trauma; panic disorder involves compulsions",
      "Panic disorder includes repeated attacks and fear of future attacks",
      "Panic disorder is milder than panic attacks",
      "Panic attacks last over an hour; panic disorder is brief"
    ],
    "answer": "Panic disorder includes repeated attacks and fear of future attacks",
    "chapter": 3
  },
  {
    "question": "Cassie was caught in a riptide and now has flashbacks and trouble sleeping for less than a month. What is the likely diagnosis?",
    "options": ["PTSD", "GAD", "Acute Stress Disorder", "Panic Disorder"],
    "answer": "Acute Stress Disorder",
    "chapter": 3
  },
  {
    "question": "What is a key difference between PTSD and Acute Stress Disorder?",
    "options": [
      "PTSD has delusions; Acute Stress Disorder does not",
      "Acute Stress Disorder occurs after 6 months; PTSD occurs within 1 month",
      "PTSD lasts longer than one month; Acute Stress Disorder is less than one month",
      "Only Acute Stress Disorder involves nightmares"
    ],
    "answer": "PTSD lasts longer than one month; Acute Stress Disorder is less than one month",
    "chapter": 3
  },
  {
    "question": "Which anxiety disorder tends to have the earliest age of onset?",
    "options": ["Panic Disorder", "Bipolar Disorder", "GAD", "Phobia"],
    "answer": "Phobia",
    "chapter": 3
  },
  {
    "question": "What is Islamic Trauma Healing (ITH)?",
    "options": [
      "A medication for religious anxiety",
      "A 6-session therapy blending Islamic practices and trauma-focused CBT",
      "A mindfulness meditation retreat",
      "An alternative to SSRIs for Muslim patients"
    ],
    "answer": "A 6-session therapy blending Islamic practices and trauma-focused CBT",
    "chapter": 3
  },
  {
    "question": "What makes Islamic Trauma Healing effective and culturally sensitive?",
    "options": [
      "It replaces therapy with prayer alone",
      "It uses eye movements like EMDR",
      "It combines religious coping with CBT techniques, making therapy more acceptable to some communities",
      "It involves only faith-based counseling without psychology"
    ],
    "answer": "It combines religious coping with CBT techniques, making therapy more acceptable to some communities",
    "chapter": 3
  },
  {
    "question": "What is the difference between fear and anxiety?",
    "options": [
      "Fear is vague; anxiety is specific",
      "Fear is a response to thoughts; anxiety to reality",
      "Fear is immediate; anxiety is future-oriented",
      "There is no difference"
    ],
    "answer": "Fear is immediate; anxiety is future-oriented",
    "chapter": 3
  },
  {
    "question": "Which of the following disorders has high comorbidity with depression?",
    "options": ["OCD", "PTSD", "Social Anxiety Disorder", "Body Dysmorphic Disorder"],
    "answer": "Social Anxiety Disorder",
    "chapter": 3
  },
  {
    "question": "Which of the following therapies includes both exposure and cognitive work?",
    "options": ["Prolonged Exposure (PE)", "CPT", "EMDR", "Systematic Desensitization"],
    "answer": "CPT",
    "chapter": 3
  },
  {
    "question": "Which type of episode in bipolar disorder predicts worse long-term outcomes?",
    "options": [
      "Hypomanic episodes",
      "Manic episodes only",
      "Mixed episodes",
      "Cyclothymic periods"
    ],
    "answer": "Mixed episodes",
    "chapter": 3
  },
  {
    "question": "What biological factor strongly contributes to bipolar disorder?",
    "options": ["Serotonin imbalance", "High heritability", "Negative thoughts", "Urban stress"],
    "answer": "High heritability",
    "chapter": 3
  },
  {
    "question": "How does circadian rhythm disruption impact bipolar disorder?",
    "options": [
      "It causes hallucinations",
      "It leads to better mood stability",
      "It contributes to mood instability and is a treatment focus",
      "It only affects sleep"
    ],
    "answer": "It contributes to mood instability and is a treatment focus",
    "chapter": 3
  },
  {
    "question": "What side effects of antipsychotics most commonly lead to non-adherence?",
    "options": [
      "Improved sleep and memory",
      "Euphoria and addiction",
      "Weight gain, sedation, and movement-related symptoms",
      "Social withdrawal and disorganization"
    ],
    "answer": "Weight gain, sedation, and movement-related symptoms",
    "chapter": 3
  },
  {
    "question": "Which statement accurately compares genetic links across disorders?",
    "options": [
      "Schizophrenia is less heritable than depression",
      "Bipolar I is genetically closer to schizophrenia than Bipolar II",
      "Bipolar II is more like schizophrenia than depression",
      "Depression and bipolar I are genetically identical"
    ],
    "answer": "Bipolar I is genetically closer to schizophrenia than Bipolar II",
    "chapter": 3
  }





];

export default questions;