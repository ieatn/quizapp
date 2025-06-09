const questions = [
  {
    "question": "A researcher wants to know if the average test score of a sample of students differs from the national average test score of 75.",
    "options": [
      "One-sample z-test",
      "One-sample t-test",
      "Independent t-test",
      "Dependent t-test"
    ],
    "answer": "One-sample t-test",
    "chapter": 1
  },
  {
    "question": "A psychologist measures anxiety levels in participants before and after a mindfulness training session.",
    "options": [
      "Independent t-test",
      "Dependent t-test",
      "One-way ANOVA",
      "Pearson r"
    ],
    "answer": "Dependent t-test",
    "chapter": 1
  },
  {
    "question": "A study examines whether there is an association between gender (male, female) and preference for a new product (like, dislike).",
    "options": [
      "One-way ANOVA",
      "Chi-square test of independence",
      "Pearson r",
      "One-sample t-test"
    ],
    "answer": "Chi-square test of independence",
    "chapter": 1
  },
  {
    "question": "Researchers want to know if there is a relationship between hours of sleep and GPA among college students. Both variables are measured on a continuous scale.",
    "options": [
      "Spearman r",
      "Pearson r",
      "One-way ANOVA",
      "Goodness-of-fit chi-square"
    ],
    "answer": "Pearson r",
    "chapter": 1
  },
  {
    "question": "A nutritionist tests whether three different diets (low-carb, low-fat, Mediterranean) lead to different mean weight losses after 8 weeks.",
    "options": [
      "One-way ANOVA",
      "Two-way ANOVA",
      "Independent t-test",
      "Dependent t-test"
    ],
    "answer": "One-way ANOVA",
    "chapter": 1
  },
  {
    "question": "A teacher wants to know if the distribution of letter grades (A, B, C, D, F) in her class matches the expected distribution based on school policy.",
    "options": [
      "Goodness-of-fit chi-square",
      "Chi-square test of independence",
      "One-way ANOVA",
      "Independent t-test"
    ],
    "answer": "Goodness-of-fit chi-square",
    "chapter": 1
  },
  {
    "question": "Researchers want to know if the relationship between age group (child, adolescent, adult) and favorite ice cream flavor (chocolate, vanilla, strawberry) is significant.",
    "options": [
      "One-way ANOVA",
      "Chi-square test of independence",
      "Goodness-of-fit chi-square",
      "Dependent t-test"
    ],
    "answer": "Chi-square test of independence",
    "chapter": 1
  },
  {
    "question": "A company tests whether employees' job satisfaction scores differ by both department (HR, Sales, IT) and work location (Remote, On-site).",
    "options": [
      "One-way ANOVA",
      "Two-way ANOVA",
      "Independent t-test",
      "Pearson r"
    ],
    "answer": "Two-way ANOVA",
    "chapter": 1
  },
  {
    "question": "A researcher wants to see if there is a monotonic relationship between class rank in science and class rank in history for a group of students.",
    "options": [
      "Pearson r",
      "Spearman r",
      "One-way ANOVA",
      "Goodness-of-fit chi-square"
    ],
    "answer": "Spearman r",
    "chapter": 1
  },
  {
    "question": "A scientist wants to compare the mean blood pressure of patients before and after taking a new medication.",
    "options": [
      "Independent t-test",
      "Dependent t-test",
      "One-way ANOVA",
      "Pearson r"
    ],
    "answer": "Dependent t-test",
    "chapter": 1
  },
  {
    "question": "A college dean believed that car ownership among students leads to lower grades. To test this hypothesis, she obtained a random sample of student car owners and non-owners and looked up their GPAs. She assessed whether car owners and non-car owners differed in GPA.",
    "options": [
      "Independent t-test",
      "Dependent t-test",
      "One-way ANOVA",
      "Pearson r"
    ],
    "answer": "Independent t-test",
    "chapter": 1
  },
  {
    "question": "The time from conception to birth in humans is approximately normally distributed, with a mean of 280.5 days and a standard deviation of 8.4 days. We obtain a random sample of college-educated women with newborns and assess whether this sample's gestation lengths are similar to those in the general population.",
    "options": [
      "One-sample z-test",
      "One-sample t-test",
      "Independent t-test",
      "Chi-square goodness-of-fit"
    ],
    "answer": "One-sample z-test",
    "chapter": 1
  },
  {
    "question": "The effect of a curriculum designed to develop children's critical viewing attitudes toward television programs was investigated. Eighteen second-grade children participated in the curriculum. A specially developed TV Comprehension Test was administered prior to the introduction of the curriculum and then again at its conclusion. The researchers assessed whether there was a difference between pretest and posttest scores.",
    "options": [
      "Independent t-test",
      "Dependent t-test",
      "One-way ANOVA",
      "Pearson r"
    ],
    "answer": "Dependent t-test",
    "chapter": 1
  },
  {
    "question": "A sample of 100 first graders in two school districts were classified as poor readers, average readers, or accelerated readers. The State Superintendent assessed whether school district and reading level were related.",
    "options": [
      "Chi-square test of independence",
      "Chi-square goodness-of-fit",
      "One-way ANOVA",
      "Independent t-test"
    ],
    "answer": "Chi-square test of independence",
    "chapter": 1
  },
  {
    "question": "A researcher examined the effect of playing with educational toys for six months on motor skill development. Half of the participants were randomly assigned to the play group; the remaining half didn't play with the toys.",
    "options": [
      "Independent t-test",
      "Dependent t-test",
      "One-way ANOVA",
      "Pearson r"
    ],
    "answer": "Independent t-test",
    "chapter": 1
  },
  {
    "question": "A researcher assessed whether room temperature (°F) and heart rate are related.",
    "options": [
      "Pearson r",
      "Spearman r",
      "One-way ANOVA",
      "Independent t-test"
    ],
    "answer": "Pearson r",
    "chapter": 1
  },
  {
    "question": "To measure the effect of time of day on test performance, a multiple-choice general knowledge test was administered to a sample of 40 college students. Equal numbers of students were randomly assigned to take the test at 8AM, 11AM, 2PM, or 5PM. Scores were compared across the groups.",
    "options": [
      "One-way ANOVA",
      "Two-way ANOVA",
      "Independent t-test",
      "Chi-square test of independence"
    ],
    "answer": "One-way ANOVA",
    "chapter": 1
  },
  {
    "question": "An experiment was performed to determine the effects of sustained physical activity on hand steadiness. Participants' hand steadiness was recorded for fifteen subjects prior to a physical activity and then again immediately following the activity.",
    "options": [
      "Dependent t-test",
      "Independent t-test",
      "One-way ANOVA",
      "Pearson r"
    ],
    "answer": "Dependent t-test",
    "chapter": 1
  },
  {
    "question": "Participants were randomly assigned to drive in a simulation car with one of five colors of warning lights on the instrument panel. Reaction time to the onset of a light was compared across the five colors of lights.",
    "options": [
      "One-way ANOVA",
      "Two-way ANOVA",
      "Independent t-test",
      "Chi-square test of independence"
    ],
    "answer": "One-way ANOVA",
    "chapter": 1
  },
  {
    "question": "The same study design was used as in the previous question, but the researcher assessed whether light color AND gender were predictive of reaction time.",
    "options": [
      "Two-way ANOVA",
      "One-way ANOVA",
      "Independent t-test",
      "Pearson r"
    ],
    "answer": "Two-way ANOVA",
    "chapter": 1
  },
  {
    "question": "A principal randomly selects 60 students from her school and asks them to identify their favorite colors (red, orange, yellow, green, blue, or purple). She wonders whether the colors are equally represented.",
    "options": [
      "Chi-square goodness-of-fit",
      "Chi-square test of independence",
      "One-way ANOVA",
      "Independent t-test"
    ],
    "answer": "Chi-square goodness-of-fit",
    "chapter": 1
  },
  {
    "question": "Students in a study-abroad program were randomly assigned to study in Mexico, Spain, Venezuela, or Puerto Rico. The number of years of Spanish language courses taken by the students was also recorded (one, two, or three or more years). Upon returning, students took a test of Spanish language mastery. Investigators assessed whether country and years of study predicted language mastery.",
    "options": [
      "Two-way ANOVA",
      "One-way ANOVA",
      "Independent t-test",
      "Pearson r"
    ],
    "answer": "Two-way ANOVA",
    "chapter": 1
  }
];

export default questions;