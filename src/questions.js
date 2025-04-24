const questions = [
  // =============== CHAPTER 1: Psychological Disorders Overview ===============
    {
      "question": "How was mental illness understood during the Prehistoric period (7000–10000 BCE)?",
      "options": [
        "As a biological imbalance",
        "As a result of sin",
        "As demonic possession",
        "As a cognitive dysfunction"
      ],
      "answer": "As demonic possession",
      "chapter": 1
    },
    {
      "question": "What treatment was commonly used in prehistoric times to address mental illness?",
      "options": [
        "SSRIs",
        "Trephination and exorcisms",
        "Cognitive behavioral therapy",
        "Psychoanalysis"
      ],
      "answer": "Trephination and exorcisms",
      "chapter": 1
    },
    {
      "question": "Which Greek physician argued that mental illness had physical causes and should be treated with exercise and diet?",
      "options": [
        "Socrates",
        "Hippocrates",
        "Plato",
        "Galen"
      ],
      "answer": "Hippocrates",
      "chapter": 1
    },
    {
      "question": "During the Greco-Roman period, how was mental illness approached in India?",
      "options": [
        "Through exorcism",
        "Through imprisonment",
        "With yoga and counseling",
        "With surgical procedures"
      ],
      "answer": "With yoga and counseling",
      "chapter": 1
    },
    {
      "question": "What characterized the treatment of mental illness in Europe during the Middle Ages?",
      "options": [
        "Use of antipsychotic medication",
        "Scientific experimentation",
        "Witch hunts and torture",
        "Therapy and medication"
      ],
      "answer": "Witch hunts and torture",
      "chapter": 1
    },
    {
      "question": "Which of the following advocated for humane mental health treatment in 18th–20th century America?",
      "options": [
        "Sigmund Freud",
        "Emil Kraepelin",
        "Benjamin Rush and Dorothea Dix",
        "Carl Jung and Alfred Adler"
      ],
      "answer": "Benjamin Rush and Dorothea Dix",
      "chapter": 1
    },
    {
      "question": "What major contribution did Emil Kraepelin make to the field of mental health?",
      "options": [
        "Inventing lobotomies",
        "Founding the first mental hospital",
        "Classifying mental disorders before the DSM",
        "Developing SSRIs"
      ],
      "answer": "Classifying mental disorders before the DSM",
      "chapter": 1
    },
    {
      "question": "Which treatment was controversially used in the 1950s for severe mental illness?",
      "options": [
        "Talk therapy",
        "Lobotomy (brain surgery)",
        "Electroconvulsive therapy",
        "Antidepressants"
      ],
      "answer": "Lobotomy (brain surgery)",
      "chapter": 1
    },
    {
      "question": "Which of the following medications are commonly used in the 21st century to treat mental illness?",
      "options": [
        "Trephination tools",
        "Lobotomy instruments",
        "SSRIs and antipsychotics",
        "Leeches and bloodletting"
      ],
      "answer": "SSRIs and antipsychotics",
      "chapter": 1
    },
    {
      "question": "Which antipsychotic was one of the first used in modern psychiatric treatment?",
      "options": [
        "Fluoxetine",
        "Chlorpromazine",
        "Lithium",
        "Valium"
      ],
      "answer": "Chlorpromazine",
      "chapter": 1
    },
    {
      "question": "In the multipath model, which of the following are examples of biological influences on mental health?",
      "options": [
        "Bullying and social rejection",
        "Systemic racism and gender roles",
        "Genetics and brain injury",
        "Cognitive distortions and maladaptive coping"
      ],
      "answer": "Genetics and brain injury",
      "chapter": 2
    },
    {
      "question": "What does chronic stress do to the hippocampus in the context of biological factors?",
      "options": [
        "Improves its function",
        "Increases its size",
        "Shrinks it",
        "Has no effect"
      ],
      "answer": "Shrinks it",
      "chapter": 2
    },
    {
      "question": "Which of the following best describes the psychological component of the multipath model?",
      "options": [
        "Systemic oppression and inequality",
        "Neuroplasticity and brain resilience",
        "Personality, temperament, and maladaptive coping",
        "Amygdala and hippocampal volume"
      ],
      "answer": "Personality, temperament, and maladaptive coping",
      "chapter": 2
    },
    {
      "question": "What is a potential psychological response to trauma according to the multipath model?",
      "options": [
        "Increased cortisol",
        "Social withdrawal due to cognitive distortions",
        "Changes in serotonin levels",
        "Inflammation of neural pathways"
      ],
      "answer": "Social withdrawal due to cognitive distortions",
      "chapter": 2
    },
    {
      "question": "How might collectivist cultures express psychological distress?",
      "options": [
        "Through delusions",
        "By somaticizing symptoms",
        "Via hallucinations",
        "By aggressive outbursts"
      ],
      "answer": "By somaticizing symptoms",
      "chapter": 2
    },
    {
      "question": "Which of the following is a social factor in the multipath model?",
      "options": [
        "Bullying and lack of support",
        "Genetic vulnerability",
        "Neuroplasticity",
        "Personality traits"
      ],
      "answer": "Bullying and lack of support",
      "chapter": 2
    },
    {
      "question": "Which statement illustrates the interaction between social support and neuroplasticity?",
      "options": [
        "Chronic discrimination reduces emotional regulation",
        "Supportive relationships enhance brain resilience",
        "Temperament influences stress perception",
        "Trauma leads to social withdrawal"
      ],
      "answer": "Supportive relationships enhance brain resilience",
      "chapter": 2
    },
    {
      "question": "Which of the following is an example of a sociocultural factor in the multipath model?",
      "options": [
        "High levels of cortisol",
        "Gender roles and systemic racism",
        "Avoidant coping styles",
        "Amygdala overactivation"
      ],
      "answer": "Gender roles and systemic racism",
      "chapter": 2
    },
    {
      "question": "What is a potential biological consequence of sociocultural discrimination?",
      "options": [
        "Higher IQ",
        "Increased hippocampal volume",
        "Biological dysregulation due to chronic stress",
        "Improved memory function"
      ],
      "answer": "Biological dysregulation due to chronic stress",
      "chapter": 2
    },
    {
      "question": "Why did Derald develop alcoholism, according to the multipath model?",
      "options": [
        "Due to one traumatic event",
        "As a result of personality traits alone",
        "Due to a mix of biological, psychological, and social factors",
        "Because of cultural influence only"
      ],
      "answer": "Due to a mix of biological, psychological, and social factors",
      "chapter": 2
    },
    {
      "question": "Which type of clinical interview provides the highest reliability across different clinicians?",
      "options": [
        "Unstructured interview",
        "Semi-structured interview",
        "Structured interview",
        "Mental status exam"
      ],
      "answer": "Structured interview",
      "chapter": 3
    },
    {
      "question": "What type of test is the MMPI-2?",
      "options": [
        "A projective personality test",
        "A true/false personality inventory",
        "An IQ test",
        "A neuropsychological assessment"
      ],
      "answer": "A true/false personality inventory",
      "chapter": 3
    },
    {
      "question": "Which test is known for low reliability and uses inkblots to assess personality?",
      "options": [
        "MMPI-2",
        "WAIS",
        "Rorschach test",
        "CBCL"
      ],
      "answer": "Rorschach test",
      "chapter": 3
    },
    {
      "question": "What cognitive abilities does the WAIS test primarily measure?",
      "options": [
        "Emotional intelligence and personality traits",
        "Verbal comprehension and working memory",
        "Reaction time and motor skills",
        "Impulse control and stress tolerance"
      ],
      "answer": "Verbal comprehension and working memory",
      "chapter": 3
    },
    {
      "question": "Which of the following best describes differential diagnosis?",
      "options": [
        "Identifying the genetic basis of mental illness",
        "Comparing multiple treatment options",
        "Ruling out other disorders with overlapping symptoms",
        "Matching a patient to a therapist"
      ],
      "answer": "Ruling out other disorders with overlapping symptoms",
      "chapter": 3
    },
    {
      "question": "What is a major difference between the DSM and the ICD?",
      "options": [
        "ICD uses a categorical approach while DSM uses dimensions",
        "DSM is international, ICD is used only in the U.S.",
        "DSM uses categorical diagnoses; ICD uses dimensional ratings",
        "ICD includes the Cultural Formulation Interview; DSM does not"
      ],
      "answer": "DSM uses categorical diagnoses; ICD uses dimensional ratings",
      "chapter": 3
    },
    {
      "question": "Which level of psychological care would include group therapy three times per week but not require hospitalization?",
      "options": [
        "Prevention",
        "Outpatient",
        "Inpatient",
        "Intensive outpatient"
      ],
      "answer": "Intensive outpatient",
      "chapter": 3
    },
    {
      "question": "What effect occurs when media coverage of suicide increases suicide rates?",
      "options": [
        "Papageno effect",
        "Affect Valuation Theory",
        "Werther effect",
        "Resilience effect"
      ],
      "answer": "Werther effect",
      "chapter": 3
    },
    {
      "question": "Which of the following therapies is specifically designed to treat borderline personality disorder?",
      "options": [
        "CBT",
        "EMDR",
        "DBT",
        "ACT"
      ],
      "answer": "DBT",
      "chapter": 3
    },
    {
      "question": "What does the Cultural Formulation Interview (CFI) in the DSM aim to address?",
      "options": [
        "Diagnosing rare psychiatric disorders",
        "Understanding cultural context and patient beliefs",
        "Selecting appropriate medications",
        "Scoring the MMPI"
      ],
      "answer": "Understanding cultural context and patient beliefs",
      "chapter": 3
    },
    {
      "question": "What is equifinality?",
      "options": [
        "The same cause leading to many different outcomes",
        "Different causes leading to the same outcome",
        "A treatment leading to consistent results",
        "Biological resilience to stress"
      ],
      "answer": "Different causes leading to the same outcome",
      "chapter": 3
    },
    {
      "question": "Which of the following represents the biological domain of resilience?",
      "options": [
        "Having strong friendships",
        "Good sleep that helps regulate mood",
        "Being optimistic about the future",
        "Pride in one's culture"
      ],
      "answer": "Good sleep that helps regulate mood",
      "chapter": 3
    },
    {
      "question": "In Affect Valuation Theory, what emotional state is more highly valued in Western cultures?",
      "options": [
        "Calm and peacefulness",
        "Sadness and reflection",
        "Excitement and high arousal",
        "Numbness and detachment"
      ],
      "answer": "Excitement and high arousal",
      "chapter": 3
    },
    {
      "question": "How does cortisol affect the brain via the glucocorticoid receptor (GR)?",
      "options": [
        "It suppresses neurotransmitter production",
        "It is blocked by GR to reduce stress",
        "It activates GR, which then impacts brain function",
        "It reduces memory by blocking GR"
      ],
      "answer": "It activates GR, which then impacts brain function",
      "chapter": 3
    },
    {
      "question": "Which type of conditioning involves learning by observing others?",
      "options": [
        "Classical conditioning",
        "Operant conditioning",
        "Vicarious conditioning",
        "Reverse conditioning"
      ],
      "answer": "Vicarious conditioning",
      "chapter": 3
    },
    {
      "question": "A 22-year-old reports persistent sadness, loss of interest in activities, difficulty sleeping, and feelings of worthlessness for over two weeks. Based on DSM-5, does this meet criteria for Major Depressive Disorder (MDD)?",
      "options": [
        "Yes, the symptoms meet the duration and functional impact criteria",
        "No, MDD requires symptoms to last at least one month",
        "No, these symptoms suggest Bipolar Disorder",
        "Yes, but only if there is a history of trauma"
      ],
      "answer": "Yes, the symptoms meet the duration and functional impact criteria",
      "chapter": 3
    },
    {
      "question": "A client scores high on impulsivity, unstable self-image, and intense interpersonal relationships. Which evidence-based treatment is most appropriate?",
      "options": [
        "Cognitive Behavioral Therapy (CBT)",
        "Dialectical Behavior Therapy (DBT)",
        "Eye Movement Desensitization and Reprocessing (EMDR)",
        "Exposure Therapy"
      ],
      "answer": "Dialectical Behavior Therapy (DBT)",
      "chapter": 3
    },
    {
      "question": "A client shows high emotional reactivity and impulsive aggression. They report childhood trauma. You suspect Borderline Personality Disorder. What should you do next for a differential diagnosis?",
      "options": [
        "Prescribe antipsychotics immediately",
        "Conduct a projective test like the Rorschach",
        "Use a structured clinical interview to assess for other personality disorders",
        "Rule out schizophrenia based on mood congruence"
      ],
      "answer": "Use a structured clinical interview to assess for other personality disorders",
      "chapter": 3
    },
    {
      "question": "A therapist notes a patient presents with flattened affect, disorganized speech, and social withdrawal. Which tool might help evaluate for possible brain damage contributing to symptoms?",
      "options": [
        "MMPI-2",
        "WAIS",
        "Neuropsychological screening",
        "Projective testing"
      ],
      "answer": "Neuropsychological screening",
      "chapter": 3
    },
    {
      "question": "A 45-year-old immigrant patient presents with chronic fatigue and body aches but no clear medical cause. Which tool should the clinician use to explore cultural influences on the symptoms?",
      "options": [
        "WAIS",
        "DSM-5 Cultural Formulation Interview (CFI)",
        "MMPI-2",
        "Mental Status Exam"
      ],
      "answer": "DSM-5 Cultural Formulation Interview (CFI)",
      "chapter": 3
    },
    {
      "question": "A high school implements an anti-bullying curriculum to reduce future anxiety and depression in students. What level of care is this?",
      "options": [
        "Outpatient care",
        "Intensive outpatient care",
        "Inpatient care",
        "Prevention"
      ],
      "answer": "Prevention",
      "chapter": 3
    },
    {
      "question": "A client with PTSD is referred for EMDR therapy. What is a core component of this approach?",
      "options": [
        "Cognitive restructuring",
        "Exposure to feared objects",
        "Tracking eye movements while recalling trauma",
        "Social skills training"
      ],
      "answer": "Tracking eye movements while recalling trauma",
      "chapter": 3
    },
    {
      "question": "A clinician sees a client with anxiety and starts exposure therapy without assessing cultural factors. The client later disengages. What might explain this?",
      "options": [
        "The therapy was too brief",
        "The client has a personality disorder",
        "Cultural mismatch and clinician bias",
        "Exposure therapy is not evidence-based"
      ],
      "answer": "Cultural mismatch and clinician bias",
      "chapter": 3
    },
    {
      "question": "A 30-year-old reports that watching media stories of suicide has made them feel hopeless. This is an example of what phenomenon?",
      "options": [
        "Papageno effect",
        "Werther effect",
        "Resilience model",
        "Affect Valuation Theory"
      ],
      "answer": "Werther effect",
      "chapter": 3
    },
    {
      "question": "You meet two clients who both developed depression, but one experienced bullying while the other has a family history of mood disorders. What concept does this illustrate?",
      "options": [
        "Multifinality",
        "Equifinality",
        "Operant conditioning",
        "Vicarious learning"
      ],
      "answer": "Equifinality",
      "chapter": 3
    }
  
  
  
  
 
];

export default questions;