export const MEDICAL_DATA = {
    symptoms: [
        {
            "name": "Fever",
            "description": "Elevated body temperature above 98.6°F (37°C)",
            "severity": "moderate",
            "requiresAttention": "immediate if above 103°F"
        },
        {
            "name": "Headache",
            "description": "Pain or discomfort in the head, scalp, or neck",
            "severity": "mild to severe",
            "requiresAttention": "if severe or persistent"
        },
        {
            "name": "Cough",
            "description": "Sudden expulsion of air from the lungs",
            "severity": "mild to severe",
            "requiresAttention": "if persistent or with blood"
        },
        {
            "name": "Sore Throat",
            "description": "Pain or irritation in the throat",
            "severity": "mild",
            "requiresAttention": "if severe or lasting >1 week"
        },
        {
            "name": "Nausea",
            "description": "Sensation of unease in the stomach with urge to vomit",
            "severity": "moderate",
            "requiresAttention": "if persistent or severe"
        }
    ],

    commonConditions: [
        {
            "name": "Common Cold",
            "symptoms": ["cough", "sore throat", "runny nose", "mild fever"],
            "duration": "7-10 days",
            "contagious": true
        },
        {
            "name": "Seasonal Allergies",
            "symptoms": ["sneezing", "itchy eyes", "runny nose"],
            "duration": "varies with exposure",
            "contagious": false
        },
        {
            "name": "Migraine",
            "symptoms": ["severe headache", "nausea", "light sensitivity"],
            "duration": "4-72 hours",
            "contagious": false
        }
    ],

    medications: [
        {
            "name": "Acetaminophen",
            "type": "Pain reliever",
            "uses": ["fever", "pain", "headache"],
            "commonBrands": ["Tylenol"],
            "precautions": "Do not exceed recommended dose, avoid alcohol"
        },
        {
            "name": "Ibuprofen",
            "type": "NSAID",
            "uses": ["pain", "inflammation", "fever"],
            "commonBrands": ["Advil", "Motrin"],
            "precautions": "Take with food, avoid if stomach sensitive"
        },
        {
            "name": "Diphenhydramine",
            "type": "Antihistamine",
            "uses": ["allergies", "cold symptoms", "sleep aid"],
            "commonBrands": ["Benadryl"],
            "precautions": "May cause drowsiness, avoid driving"
        }
    ],

    warningSymptoms: [
        {
            "symptom": "Chest Pain",
            "action": "Seek immediate medical attention",
            "reason": "Possible heart-related emergency"
        },
        {
            "symptom": "Difficulty Breathing",
            "action": "Seek immediate medical attention",
            "reason": "Possible respiratory emergency"
        },
        {
            "symptom": "Severe Headache",
            "action": "Seek immediate medical attention",
            "reason": "Possible neurological concern"
        }
    ],

    generalPrecautions: [
        {
            "id": 1,
            "text": "Always read medication labels carefully",
            "importance": "high"
        },
        {
            "id": 2,
            "text": "Do not mix medications without consulting a healthcare provider",
            "importance": "high"
        },
        {
            "id": 3,
            "text": "Keep track of all symptoms and their duration",
            "importance": "medium"
        }
    ]
};