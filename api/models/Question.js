var schema = require('../schemas/Question');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createQuestion = function (question, type, required, key, prefix_group) {
  return {
    question: question,
    type: type,
    required: required,
    key: key,
    prefix_group: prefix_group?1:null
  }
}

var seedData = [
  //General
  createQuestion('How old are you?', 'Number', true, 'General.1'),

  //Housing
  createQuestion('What is the total length of time you have lived on the streets or in shelters? (Years)', 'Number', true, 'Housing.1'),
  createQuestion('In the past three years, how many times have you been housed and then homeless?', 'Number', true, 'Housing.2'),

  //Risks
  createQuestion('In the past six months, how many times have you been to the emergency department/room?', 'Number', true, 'Risks.1'),
  createQuestion('In the past six months, how many times have you had an interaction with the police?', 'Number', true, 'Risks.2'),
  createQuestion('In the past six months, how many times have you been taken to the hospital in an ambulance?', 'Number', true, 'Risks.3'),
  createQuestion('In the past six months, how many times have you used a crisis service, including distress centers or suicide prevention hotlines?', 'Number', true, 'Risks.4'),
  createQuestion('In the past six months, how many times have you been hospitalized as an in-patient, including hospitalizations in a mental health hospital?', 'Number', true, 'Risks.5'),
  createQuestion('Have you been attacked or beaten up since becoming homeless?', 'Boolean', true, 'Risks.6'),
  createQuestion('Threatened to or tried to harm yourself or anyone else in the last year?', 'Boolean', true, 'Risks.7'),
  createQuestion('Do you have any legal stuff going on right now that may result in you being locked up or having to pay fines?', 'Boolean', true, 'Risks.8'),
  createQuestion('Does anybody force or trick you to do things that you do not want to do?', 'Boolean', true, 'Risks.9'),
  createQuestion('Ever do things that may be considered to be risky like exchange sex for money, run drugs for someone, have unprotected sex with someone that you don\'t really know, share a needle, or anything like that?', 'Boolean', true, 'Risks.10'),
  createQuestion('I am going to read types of places people sleep. Please tell me which one that you sleep at most often. (Check only one.)', 'String', true, 'Risks.11'),

  //Socialization
  createQuestion('Is there anybody that thinks you owe them money?', 'Boolean', true, 'Socialization.1'),
  createQuestion('Do you have any money coming in on a regular basis, like a job or government benefit or even working under the table, binning or bottle collecting, sex work, odd jobs, day labor, or anything like that?', 'Boolean', true, 'Socialization.2'),
  createQuestion('Do you have enough money to meet all of your expenses on a monthly basis?', 'Boolean', true, 'Socialization.3'),
  createQuestion('Do you have planned activities each day other than just surviving that bring you happiness and fullfillment?', 'Boolean', true, 'Socialization.4'),
  createQuestion('Do you have any friends, family or other people in your life out of convenience or necessity, but you do not like their company?', 'Boolean', true, 'Socialization.5'),
  createQuestion('Do any friends, family or other people in your life ever take your money, borrow cigarettes, use your drugs, drink your alcohol, or get you to do things you really don\'t want to do?', 'Boolean', true, 'Socialization.6'),
  createQuestion('Surveyor, do you detect signs of poor hygiene or daily living skills?', 'Boolean', true, 'Socialization.7'),

  //Wellness
  createQuestion('Where do you usually go for healthcare or when you\'re not feeling well?', 'String', true, 'Wellness.1'),
  createQuestion('Kidney disease/End stage Renal Disease or Dialysis', 'Boolean', true, 'Wellness.2'),
  createQuestion('History of frostbite, Hypothermia, or Immersion Foot', 'Boolean', true, 'Wellness.3', 'Wellness'),
  createQuestion('Liver disease, Cirrhosis, or End-Stage Liver Disease', 'Boolean', true, 'Wellness.4', 'Wellness'),
  createQuestion('HIV+/AIDS', 'Boolean', true, 'Wellness.5', 'Wellness'),
  createQuestion('History of Heat Stroke/Heat Exhaustion', 'Boolean', true, 'Wellness.6', 'Wellness'),
  createQuestion('Heart disease, Arrhythmia, or Irregular Heartbeat', 'Boolean', true, 'Wellness.7', 'Wellness'),
  createQuestion('Emphysema', 'Boolean', true, 'Wellness.8', 'Wellness'),
  createQuestion('Diabetes', 'Boolean', true, 'Wellness.9', 'Wellness'),
  createQuestion('Asthma', 'Boolean', true, 'Wellness.10', 'Wellness'),
  createQuestion('Cancer', 'Boolean', true, 'Wellness.11', 'Wellness'),
  createQuestion('Hepatitis C', 'Boolean', true, 'Wellness.12', 'Wellness'),
  createQuestion('Tuberculosis', 'Boolean', true, 'Wellness.13', 'Wellness'),
  createQuestion('Surveyor, do you observe signs or symptoms of a serious health condition?', 'Boolean', true, 'Wellness.14'),
  createQuestion('Have you ever had problematic drug or alcohol use, abused drugs or alcohol, or told you do?', 'Boolean', true, 'Wellness.15'),
  createQuestion('Have you ever consumed alcohol and/or drugs almost every day or every other day for the past month?', 'Boolean', true, 'Wellness.16'),
  createQuestion('Have you ever used injection drugs or shots in the last six months?', 'Boolean', true, 'Wellness.17'),
  createQuestion('Have you ever been treated for drug or alcohol problems and returned to drinking or using drugs?', 'Boolean', true, 'Wellness.18'),
  createQuestion('Have you used non-beverage alcohol like cough syrup, mouthwash, rubbing alcohol, cooking wine, or anything like that in the past six months?', 'Boolean', true, 'Wellness.19'),
  createQuestion('Have you blacked out because of your alcohol or drug use in the past month?', 'Boolean', true, 'Wellness.20'),
  createQuestion('Surveyor, do you observe signs or symptoms or problematic alcohol or drug abuse?', 'Boolean', true, 'Wellness.21'),
  createQuestion('Ever been taken to a hospital against your will for a mental health reason?', 'Boolean', true, 'Wellness.22'),
  createQuestion('Gone to the emergency room because you weren\'t feeling 100% well emotionally or because of your nerves?', 'Boolean', true, 'Wellness.23'),
  createQuestion('Spoken with a psychiatrist, psychologist or other mental health professional in the last six months because of your mental health - whether that was voluntary or because someone insisted that you do so?', 'Boolean', true, 'Wellness.24'),
  createQuestion('Had a serious brain injury or head trauma?', 'Boolean', true, 'Wellness.25'),
  createQuestion('Ever been told you have a learning disability or developmental disability?', 'Boolean', true, 'Wellness.26'),
  createQuestion('Do you have any problems concentrating and/or remembering things?', 'Boolean', true, 'Wellness.27'),
  createQuestion('Surveyor, do you detect signs or symptoms or severe, persistent mental illness or severely compromised cognitive functioning?', 'Boolean', true, 'Wellness.28'),
  createQuestion('Have you had any medicines prescribed to you by a doctor that you do not take, sell, had stolen, misplaced, or where the prescriptions were never filled?', 'Boolean', true, 'Wellness.29'),
  createQuestion('Yes or No - Have you experienced any emotional, physical, psychological, sexual or other type of abuse or trauma in your life which you have not sought help for, and/or which has caused your homelessness?', 'Boolean', true, 'Wellness.30'),
]

module.exports = {

  tableName: 'question',
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: attributes,
  seedData: seedData
};
