// const packages = [
//   {
//     id: 1,
//     img: "/assets/images/team/1.jpg",
//     name: "Basic Care Package",
//     job: "৳ 4,000 / Day",
//     desc: "This package is suitable for patients requiring basic psychiatric or addiction care under professional supervision in a structured and supportive environment.",

//   },
//   {
//     id: 2,
//     img: "/assets/images/team/2.jpg",
//     name: "Standard Care Package",
//     job: "৳ 7,000 / Day",
//     desc: "Designed for patients who require structured treatment, enhanced comfort, and comprehensive therapy for psychiatric or addiction recovery.",
//   },
//   {
//     id: 3,
//     img: "/assets/images/team/3.jpg",
//     name: "Premium Recovery Package",
//     job: "৳ 10,000 / Day",
//     desc: "A comprehensive and intensive recovery package offering maximum comfort, personalized care, and advanced therapeutic services for long-term treatment and rehabilitation.",
//   },
//   {
//     id: 4,
//     img: "/assets/images/team/4.jpg",
//     name: "OUTPATIENT PACKAGE",
//     job: "৳ 2,000 / Visit",
//     desc: "Ideal for patients who require regular psychiatric consultation and counseling without residential admission.",
//   },
// ];

// export default packages;


const packagesArray = [
  {
    id: 1,
    category: "🟢 CATEGORY – 1",
    name: "Basic Care Package",
    job: "৳ 4,000 / Day",
    img: "/assets/images/team/1.jpg",
    description:
      "Suitable for patients requiring basic psychiatric or addiction care under professional supervision in a structured and supportive environment.",
    accommodation:
      "Shared non-AC / standard room with attached bathroom, basic furniture, personal cabinet, ceiling fan, clean bedding, and common recreational area.",
    includes: [
      "Room charges and regular meals",
      "Basic medical advice and supervision",
      "Nursing care and skilled attendant support",
      "Individual counseling sessions",
      "Group therapy sessions",
      "Light physical exercise",
      "Religious & motivational sessions",
      "Recreational activities",
    ],
    excludes: [
      "Diagnostic tests at actual",
      "Specialized doctor consultation at actual",
      "Medicines at actual",
      "Laundry & personal services",
      "Personal items and extra food",
      "Special family counseling sessions",
    ],
    terms: [
      "Minimum 15 days’ payment during admission",
      "Advance payment required for continuation",
      "All dues must be cleared before discharge",
    ],
    relatedServices: ["Psychiatric Treatment", "Counseling", "Residential Care"],
  },
  {
    id: 2,
    category: "🔵 CATEGORY – 2",
    name: "Standard Care Package",
    job: "৳ 7,000 / Day",
    img: "/assets/images/team/2.jpg",
    description:
      "Designed for patients who require structured treatment, enhanced comfort, and comprehensive therapy for psychiatric or addiction recovery.",
    accommodation:
      "Twin sharing AC deluxe room with attached bath, geyser, refrigerator, flower pot, daily fruits basket, personal cabinet, gym & fitness studio access, unit box, smart TV, private balcony, and rooftop garden access.",
    includes: [
      "Room charges and nutritious meals",
      "Psychiatric consultation & basic medical advice",
      "24/7 nursing care & skilled supervision",
      "Individual counseling sessions",
      "Group therapy by addiction counselors & psychologists",
      "Yoga & meditation sessions",
      "Weekly NA meeting",
      "Outing and recreational programs",
      "Weekly support group programs",
      "Physical exercise & training by gym instructor",
      "Religious & spiritual lecture programs",
    ],
    excludes: [
      "All diagnostic tests at actual",
      "Specialized consultancy charges",
      "Property damage or breakage cost",
      "Escorting services if required",
      "Dope tests during admission & discharge",
      "Ambulance or special transport services",
      "Cost of medicines at actual",
      "Laundry, saloon & personal services",
      "Personal expenses (extra food, cigarettes, etc.)",
      "Special family counseling sessions",
    ],
    terms: [
      "Minimum 15 days’ payment required at admission",
      "Fortnightly advance payment from second week",
      "All dues must be cleared at discharge",
    ],
    relatedServices: [
      "Drug Addiction Rehabilitation",
      "Inpatient Care",
      "Counseling",
    ],
  },
  {
    id: 3,
    category: "🔴 CATEGORY – 3",
    name: "Premium Recovery Package",
    job: "৳ 10,000 / Day",
    img: "/assets/images/team/3.jpg",
    description:
      "A comprehensive and intensive recovery package offering maximum comfort, personalized care, and advanced therapeutic services for long-term treatment and rehabilitation.",
    accommodation:
      "Single occupancy AC premium room with attached bath, geyser, refrigerator, daily fruits & nutrition basket, personal wardrobe, smart TV, high-speed internet access, private sitting area, balcony, and rooftop garden access.",
    includes: [
      "Room charges and customized meal plan",
      "Daily psychiatrist supervision",
      "24/7 nursing and skilled attendant support",
      "Personalized treatment & recovery plan",
      "Individual therapy sessions",
      "Intensive group therapy programs",
      "Family counseling sessions",
      "Advanced relapse prevention planning",
      "Yoga, meditation & mindfulness therapy",
      "Gym, fitness & physical training",
      "Recreational, outing & wellness activities",
      "Religious & motivational sessions",
    ],
    excludes: [
      "Specialized investigations and diagnostics",
      "External consultant fees",
      "Emergency or special ambulance services",
      "Medicines and medical supplies",
      "Personal care services and extras",
    ],
    terms: [
      "Minimum 15 days’ advance payment required",
      "Payments to be made fortnightly in advance",
      "All dues must be settled before discharge",
    ],
    relatedServices: [
      "Psychiatric Treatment",
      "Addiction Rehabilitation",
      "Holistic Therapy",
    ],
  },
  {
    id: 4,
    category: "🟡 DAY CARE / OUTPATIENT PACKAGE",
    name: "OPD Mental Health Care",
    job: "৳ 2,000 / Visit",
    img: "/assets/images/team/4.jpg",
    description:
      "Ideal for patients who require regular psychiatric consultation and counseling without residential admission.",
    accommodation: "No residential stay required (Outpatient service).",
    includes: [
      "Psychiatric consultation",
      "Psychological counseling session",
      "Medication review",
      "Follow-up guidance",
    ],
    excludes: ["Medicines at actual", "Diagnostic investigations", "Emergency services"],
    terms: ["Payment required per visit", "Appointment-based service"],
    relatedServices: ["Psychiatric Consultation", "Psychological Counseling"],
  },
];

export default packagesArray;
