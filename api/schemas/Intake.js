module.exports = {
  "General_1": {
    "type": "integer",
    "title": "How old are you?"
  },
  "Housing_1": {
    "type": "integer",
    "title": "What is the total length of time you have lived on the streets or in shelters? (Years)"
  },
  "Housing_2": {
    "type": "integer",
    "title": "In the past three years, how many times have you been housed and then homeless again?"
  },
  "Risks_1": {
    "type": "integer",
    "title": "In the past six months, how many times have you been to the emergency department/room?"
  },
  "Risks_2": {
    "type": "integer",
    "title": "In the past six months, how many times have you had an interaction with the police?"
  },
  "Risks_3": {
    "type": "integer",
    "title": "In the past six months, how many times have you been taken to the hospital in an ambulance?"
  },
  "Risks_4": {
    "type": "integer",
    "title": "In the past six months, how many times have you used a crisis service, including distress centers or suicide prevention hotlines?"
  },
  "Risks_5": {
    "type": "integer",
    "title": "In the past six months, how many times have you been hospitalized as an in-patient, including hospitalizations in a mental health hospital?"
  },
  "Risks_6": {
    "type": "string",
    enum: ['yes', 'no', 'refuse'],
    "title": "Have you been attacked or beaten up since becoming homeless?"
  },
  "Risks_7": {
    "type": "string",
    enum: ['yes', 'no', 'refuse'],
    "title": "Threatened to or tried to harm yourself or anyone else in the last year?"
  },
  "Risks_8": {
    "type": "string",
    enum: ['yes', 'no', 'refuse'],
    "title": "Do you have any legal stuff going on right now that may result in you being locked up or having to pay fines?"
  },
  "Risks_9": {
    "type": "string",
    enum: ['yes', 'no', 'refuse'],
    "title": "Does anybody force or trick you to do things that you do not want to do?"
  },
  "Risks_10": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Ever do things that may be considered to be risky like exchange sex for money, run drugs for someone, have unprotected sex with someone that you don't really know, share a needle, or anything like that?"
  },
  "Risks_11": {
    type: "array",
    maxItems: 1,
    title: "I am going to read types of places people sleep. Please tell me which one that you sleep at most often. (Select only one.)",
    items: {
        type: "string",
        enum: ["Shelter", "Street, Sidewalk or Doorway", "Car, Van or RV", "Bus or Subway", "Beach, Riverbed or Park"],
    },
    uniqueItems: true
  },
  "Socialization_1": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Is there anybody that thinks you owe them money?"
  },
  "Socialization_2": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Do you have any money coming in on a regular basis, like a job or government benefit or even working under the table, binning or bottle collecting, sex work, odd jobs, day labor, or anything like that?"
  },
  "Socialization_3": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Do you have enough money to meet all of your expenses on a monthly basis?"
  },
  "Socialization_4": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Do you have planned activities each day other than just surviving that bring you happiness and fullfillment?"
  },
  "Socialization_5": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Do you have any friends, family or other people in your life out of convenience or necessity, but you do not like their company?"
  },
  "Socialization_6": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Do any friends, family or other people in your life ever take your money, borrow cigarettes, use your drugs, drink your alcohol, or get you to do things you really don't want to do?"
  },
  "Socialization_7": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Surveyor, do you detect signs of poor hygiene or daily living skills?",
    "description": "OBSERVATION ONLY - DO NOT ASK"
  },
  "Wellness_1": {
    type: "array",
    maxItems: 1,
    "title": "Where do you usually go for healthcare or when you're not feeling well?",
    items: {
        type: "string",
        enum: ["Hospital", "Clinic", "VA", "Does not go for care"],
    },
    uniqueItems: true
  },
  "Wellness_2": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Kidney disease/End stage Renal Disease or Dialysis",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_3": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "History of frostbite, Hypothermia, or Immersion Foot",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_4": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Liver disease, Cirrhosis, or End-Stage Liver Disease",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_5": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "HIV+/AIDS",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_6": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "History of Heat Stroke/Heat Exhaustion",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_7": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Heart disease, Arrhythmia, or Irregular Heartbeat",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_8": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Emphysema",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_9": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Diabetes",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_10": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Asthma",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_11": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Cancer",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_12": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Hepatitis C",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_13": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Tuberculosis",
      "description": "Do you have now, have you ever had, or has a healthcare provider ever told you that you have"
  },
  "Wellness_14": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Surveyor, do you observe signs or symptoms of a serious health condition?",
      "description": "OBSERVATION ONLY - DO NOT ASK"
  },
  "Wellness_15": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Have you ever had problematic drug or alcohol use, abused drugs or alcohol, or told you do?"
  },
  "Wellness_16": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Have you ever consumed alcohol and/or drugs almost every day or every day for the past month?"
  },
  "Wellness_17": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Have you ever used injection drugs or shots in the last six months?"
  },
  "Wellness_18": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Have you ever been treated for drug or alcohol problems and returned to drinking or using drugs?"
  },
  "Wellness_19": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Have you used non-beverage alcohol like cough syrup, mouthwash, rubbing alcohol, cooking wine, or anything like that in the past six months?"
  },
  "Wellness_20": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Have you blacked out because of your alcohol or drug use in the past month?"
  },
  "Wellness_21": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Surveyor, do you observe signs or symptoms or problematic alcohol or drug abuse?",
      "description": "OBSERVATION ONLY - DO NOT ASK"
  },
  "Wellness_22": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Ever been taken to a hospital against your will for a mental health reason?"
  },
  "Wellness_23": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Gone to the emergency room because you weren't feeling 100% well emotionally or because of your nerves?"
  },
  "Wellness_24": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Spoken with a psychiatrist, psychologist or other mental health professional in the last six months because of your mental health - whether that was voluntary or because someone insisted that you do so?"
  },
  "Wellness_25": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Had a serious brain injury or head trauma?"
  },
  "Wellness_26": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Ever been told you have a learning disability or developmental disability?"
  },
  "Wellness_27": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Do you have any problems concentrating and/or remembering things?"
  },
  "Wellness_28": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Surveyor, do you detect signs or symptoms or severe, persistent mental illness or severely compromised cognitive functioning?",
      "description" : "OBSERVATION ONLY - DO NOT ASK"
  },
  "Wellness_29": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Have you had any medicines prescribed to you by a doctor that you do not take, sell, had stolen, misplaced, or where the prescriptions were never filled?"
  },
  "Wellness_30": {
     "type": "string",     enum: ['yes', 'no', 'refuse'],
    "title": "Yes or No - Have you experienced any emotional, physical, psychological, sexual or other type of abuse or trauma in your life which you have not sought help for, and/or which has caused your homelessness?"
  },
  created: {
    type: 'datetime',
    defaultsTo: function () {
      return new Date();
    }
  },
  complete: {
    type: 'boolean',
  },
  /* DEFINE RELATIONSHIPS HERE SO THEY'RE INCLUDED IN THE FORM -------------- */
  /* THIS CREATES THE CLIENT SIDE ELEMENT AND IS OVERWRITTEN BY THE MODEL --- */
  customer: {
      type: 'integer'
  },
  employee: {
      type: 'integer'
  }
};
