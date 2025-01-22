// src/utils/mockData.js
const mockData = [
  {
    category: "geography",
    item: "TX",
    claims: 6,
    totalPaid: 345021.27,
    averagePerClaim: 57503.54,
    percentClaims: 30.0,
    percentCosts: 65.0,
    topLossTypes: "PD(4), BI(2)",
    riskScore: 2.25,
    description: [
      {
        description:
          "DALLAS, TX.- AS PER CLMT: INSD DRVR MADE AN UNSAFE LANE SWITCH AND STRUCK CLMT VEH.",
        totalPaid: 602.48,
      },
      {
        description:
          "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        totalPaid: 360.37,
      },
      {
        description:
          "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        totalPaid: 297451.35,
      },
      {
        description:
          "MERKEL, TX- INSD DRVR LOST CONTROL OF VEH DUE TO ICE ON RD. INSD DRVR JACKKNIFED AND CAUSED INSD VEH TO STRIKE OVERPASS GAURD RAIL.",
        totalPaid: 1133.61,
      },
      {
        description: "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        totalPaid: 20473.46,
      },
      {
        description: "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        totalPaid: 25000.0,
      },
    ],
  },
  {
    category: "geography",
    item: "KS",
    claims: 6,
    totalPaid: 140447.68,
    averagePerClaim: 23407.95,
    percentClaims: 30.0,
    percentCosts: 26.5,
    topLossTypes: "BI(3), MEDICAL PAYMENTS(2), PD(1)",
    riskScore: 0.54,
    description: [
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 5.5,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
      {
        description:
          "PARSONS, KS .- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        totalPaid: 140442.18,
      },
      {
        description:
          "PARSONS, KS .- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "geography",
    item: "IL",
    claims: 1,
    totalPaid: 38302.47,
    averagePerClaim: 38302.47,
    percentClaims: 5.0,
    percentCosts: 7.2,
    topLossTypes: "PD(1)",
    riskScore: -0.31,
    description: [
      {
        description: "CICERO, IL - INSD VEH WAS EXITING PROPERTY AND HIT WALL.",
        totalPaid: 38302.47,
      },
    ],
  },
  {
    category: "geography",
    item: "MO",
    claims: 1,
    totalPaid: 7078.24,
    averagePerClaim: 7078.24,
    percentClaims: 5.0,
    percentCosts: 1.3,
    topLossTypes: "PD(1)",
    riskScore: -0.58,
    description: [
      {
        description: "Rolla, MO.- INSD VEH BACKED UP TO CLMT VEH.",
        totalPaid: 7078.24,
      },
    ],
  },
  {
    category: "geography",
    item: "CA",
    claims: 3,
    totalPaid: 17.0,
    averagePerClaim: 5.67,
    percentClaims: 15.0,
    percentCosts: 0.0,
    topLossTypes: "PD(3)",
    riskScore: -0.63,
    description: [
      {
        description:
          "ALPINE, CA - INSD VEH WAS DRVING ON FREEWAY WHEN HE SAW CLMT DRVR MAKING SIGNS, CLMT DRVR STATED THAT INSD VEH THROW A ROCK AT CLMT VEH WINDSHIELD.",
        totalPaid: 11.5,
      },
      {
        description:
          "HEBER, CA- IV WAS DRIVING AND CV MERGED TO LANE AND IV HIT CV.",
        totalPaid: 5.5,
      },
      {
        description:
          "SAN DIEGO, CA, INSD VEH CHANGED LANE AND STRUCK CLMT VEH WITH TRAILER",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "geography",
    item: "TN",
    claims: 1,
    totalPaid: 0.0,
    averagePerClaim: 0.0,
    percentClaims: 5.0,
    percentCosts: 0.0,
    topLossTypes: "PD(1)",
    riskScore: -0.63,
    description: [
      {
        description:
          "WEATHERFORD, TN-------INSD VEH WAS ON LOVES TRUCK STOP PARKED, SUDDENLY CLMT VEH STRUCK INSD VEH. NO MORE DETAILS PROVIDED",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "geography",
    item: "AZ",
    claims: 2,
    totalPaid: 0.0,
    averagePerClaim: 0.0,
    percentClaims: 10.0,
    percentCosts: 0.0,
    topLossTypes: "PD(2)",
    riskScore: -0.63,
    description: [
      {
        description:
          "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        totalPaid: 0,
      },
      {
        description:
          "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "driver",
    item: "Fahrer Mueller",
    claims: 3,
    totalPaid: 297811.72,
    averagePerClaim: 99270.57,
    percentClaims: 15.0,
    percentCosts: 56.1,
    topLossTypes: "PD(2), BI(1)",
    riskScore: 2.64,
    description: [
      {
        description:
          "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        totalPaid: 360.37,
      },
      {
        description:
          "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        totalPaid: 297451.35,
      },
      {
        description:
          "SAN DIEGO, CA, INSD VEH CHANGED LANE AND STRUCK CLMT VEH WITH TRAILER",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "driver",
    item: "Driver Smith",
    claims: 4,
    totalPaid: 148122.9,
    averagePerClaim: 37030.72,
    percentClaims: 20.0,
    percentCosts: 27.9,
    topLossTypes: "PD(3), BI(1)",
    riskScore: 1.02,
    description: [
      {
        description:
          "DALLAS, TX.- AS PER CLMT: INSD DRVR MADE AN UNSAFE LANE SWITCH AND STRUCK CLMT VEH.",
        totalPaid: 602.48,
      },
      {
        description: "Rolla, MO.- INSD VEH BACKED UP TO CLMT VEH.",
        totalPaid: 7078.24,
      },
      {
        description:
          "PARSONS, KS .- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        totalPaid: 140442.18,
      },
      {
        description:
          "PARSONS, KS .- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "driver",
    item: "Водитель Ivanov",
    claims: 2,
    totalPaid: 45473.46,
    averagePerClaim: 22736.73,
    percentClaims: 10.0,
    percentCosts: 8.6,
    topLossTypes: "PD(1), BI(1)",
    riskScore: -0.08,
    description: [
      {
        description: "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        totalPaid: 20473.46,
      },
      {
        description: "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        totalPaid: 25000.0,
      },
    ],
  },
  {
    category: "driver",
    item: "Motorista Silva",
    claims: 1,
    totalPaid: 38302.47,
    averagePerClaim: 38302.47,
    percentClaims: 5.0,
    percentCosts: 7.2,
    topLossTypes: "PD(1)",
    riskScore: -0.16,
    description: [
      {
        description: "CICERO, IL - INSD VEH WAS EXITING PROPERTY AND HIT WALL.",
        totalPaid: 38302.47,
      },
    ],
  },
  {
    category: "driver",
    item: "Autista Rossi",
    claims: 1,
    totalPaid: 1133.61,
    averagePerClaim: 1133.61,
    percentClaims: 5.0,
    percentCosts: 0.2,
    topLossTypes: "PD(1)",
    riskScore: -0.56,
    description: [
      {
        description:
          "MERKEL, TX- INSD DRVR LOST CONTROL OF VEH DUE TO ICE ON RD. INSD DRVR JACKKNIFED AND CAUSED INSD VEH TO STRIKE OVERPASS GAURD RAIL.",
        totalPaid: 1133.61,
      },
    ],
  },
  {
    category: "driver",
    item: "運転手 Tanaka",
    claims: 1,
    totalPaid: 11.5,
    averagePerClaim: 11.5,
    percentClaims: 5.0,
    percentCosts: 0.0,
    topLossTypes: "PD(1)",
    riskScore: -0.57,
    description: [
      {
        description:
          "ALPINE, CA - INSD VEH WAS DRVING ON FREEWAY WHEN HE SAW CLMT DRVR MAKING SIGNS, CLMT DRVR STATED THAT INSD VEH THROW A ROCK AT CLMT VEH WINDSHIELD.",
        totalPaid: 11.5,
      },
    ],
  },
  {
    category: "driver",
    item: "司机 Wang",
    claims: 4,
    totalPaid: 5.5,
    averagePerClaim: 1.38,
    percentClaims: 20.0,
    percentCosts: 0.0,
    topLossTypes: "BI(2), MEDICAL PAYMENTS(2)",
    riskScore: -0.57,
    description: [
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 5.5,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "driver",
    item: "기사 Kim",
    claims: 1,
    totalPaid: 5.5,
    averagePerClaim: 5.5,
    percentClaims: 5.0,
    percentCosts: 0.0,
    topLossTypes: "PD(1)",
    riskScore: -0.57,
    description: [
      {
        description:
          "HEBER, CA- IV WAS DRIVING AND CV MERGED TO LANE AND IV HIT CV.",
        totalPaid: 5.5,
      },
    ],
  },
  {
    category: "driver",
    item: "Conductor García",
    claims: 1,
    totalPaid: 0.0,
    averagePerClaim: 0.0,
    percentClaims: 5.0,
    percentCosts: 0.0,
    topLossTypes: "PD(1)",
    riskScore: -0.57,
    description: [
      {
        description:
          "WEATHERFORD, TN-------INSD VEH WAS ON LOVES TRUCK STOP PARKED, SUDDENLY CLMT VEH STRUCK INSD VEH. NO MORE DETAILS PROVIDED",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "driver",
    item: "Chauffeur Dubois",
    claims: 2,
    totalPaid: 0.0,
    averagePerClaim: 0.0,
    percentClaims: 10.0,
    percentCosts: 0.0,
    topLossTypes: "PD(2)",
    riskScore: -0.57,
    description: [
      {
        description:
          "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        totalPaid: 0,
      },
      {
        description:
          "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "condition",
    item: "Lane Change",
    claims: 5,
    totalPaid: 298419.7,
    averagePerClaim: 59683.94,
    percentClaims: 25.0,
    percentCosts: 56.2,
    topLossTypes: "PD(4), BI(1)",
    riskScore: 2.19,
    description: [
      {
        description:
          "DALLAS, TX.- AS PER CLMT: INSD DRVR MADE AN UNSAFE LANE SWITCH AND STRUCK CLMT VEH.",
        totalPaid: 602.48,
      },
      {
        description:
          "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        totalPaid: 360.37,
      },
      {
        description:
          "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        totalPaid: 297451.35,
      },
      {
        description:
          "HEBER, CA- IV WAS DRIVING AND CV MERGED TO LANE AND IV HIT CV.",
        totalPaid: 5.5,
      },
      {
        description:
          "SAN DIEGO, CA, INSD VEH CHANGED LANE AND STRUCK CLMT VEH WITH TRAILER",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "condition",
    item: "Intersection",
    claims: 2,
    totalPaid: 140442.18,
    averagePerClaim: 70221.09,
    percentClaims: 10.0,
    percentCosts: 26.5,
    topLossTypes: "PD(1), BI(1)",
    riskScore: 0.64,
    description: [
      {
        description:
          "PARSONS, KS .- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        totalPaid: 140442.18,
      },
      {
        description:
          "PARSONS, KS .- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "condition",
    item: "Parking",
    claims: 5,
    totalPaid: 45473.46,
    averagePerClaim: 9094.69,
    percentClaims: 25.0,
    percentCosts: 8.6,
    topLossTypes: "PD(4), BI(1)",
    riskScore: -0.3,
    description: [
      {
        description:
          "WEATHERFORD, TN-------INSD VEH WAS ON LOVES TRUCK STOP PARKED, SUDDENLY CLMT VEH STRUCK INSD VEH. NO MORE DETAILS PROVIDED",
        totalPaid: 0,
      },
      {
        description:
          "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        totalPaid: 0,
      },
      {
        description:
          "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        totalPaid: 0,
      },
      {
        description: "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        totalPaid: 20473.46,
      },
      {
        description: "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        totalPaid: 25000.0,
      },
    ],
  },
  {
    category: "condition",
    item: "Normal",
    claims: 2,
    totalPaid: 38313.97,
    averagePerClaim: 19156.99,
    percentClaims: 10.0,
    percentCosts: 7.2,
    topLossTypes: "PD(2)",
    riskScore: -0.37,
    description: [
      {
        description:
          "ALPINE, CA - INSD VEH WAS DRVING ON FREEWAY WHEN HE SAW CLMT DRVR MAKING SIGNS, CLMT DRVR STATED THAT INSD VEH THROW A ROCK AT CLMT VEH WINDSHIELD.",
        totalPaid: 11.5,
      },
      {
        description: "CICERO, IL - INSD VEH WAS EXITING PROPERTY AND HIT WALL.",
        totalPaid: 38302.47,
      },
    ],
  },
  {
    category: "condition",
    item: "Backing",
    claims: 1,
    totalPaid: 7078.24,
    averagePerClaim: 7078.24,
    percentClaims: 5.0,
    percentCosts: 1.3,
    topLossTypes: "PD(1)",
    riskScore: -0.68,
    description: [
      {
        description: "Rolla, MO.- INSD VEH BACKED UP TO CLMT VEH.",
        totalPaid: 7078.24,
      },
    ],
  },
  {
    category: "condition",
    item: "Ice",
    claims: 1,
    totalPaid: 1133.61,
    averagePerClaim: 1133.61,
    percentClaims: 5.0,
    percentCosts: 0.2,
    topLossTypes: "PD(1)",
    riskScore: -0.74,
    description: [
      {
        description:
          "MERKEL, TX- INSD DRVR LOST CONTROL OF VEH DUE TO ICE ON RD. INSD DRVR JACKKNIFED AND CAUSED INSD VEH TO STRIKE OVERPASS GAURD RAIL.",
        totalPaid: 1133.61,
      },
    ],
  },
  {
    category: "condition",
    item: "Wind",
    claims: 4,
    totalPaid: 5.5,
    averagePerClaim: 1.38,
    percentClaims: 20.0,
    percentCosts: 0.0,
    topLossTypes: "BI(2), MEDICAL PAYMENTS(2)",
    riskScore: -0.75,
    description: [
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 5.5,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "claim-type",
    item: "BI",
    claims: 5,
    totalPaid: 322456.85,
    averagePerClaim: 64491.37,
    percentClaims: 25.0,
    percentCosts: 60.7,
    topLossTypes: "BI(5)",
    riskScore: 1.09,
    description: [
      {
        description:
          "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        totalPaid: 297451.35,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 5.5,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
      {
        description: "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        totalPaid: 25000.0,
      },
      {
        description:
          "PARSONS, KS .- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        totalPaid: 0,
      },
    ],
  },
  {
    category: "claim-type",
    item: "PD",
    claims: 13,
    totalPaid: 208409.81,
    averagePerClaim: 16031.52,
    percentClaims: 65.0,
    percentCosts: 39.3,
    topLossTypes: "PD(13)",
    riskScore: 0.24,
    description: [
      {
        description:
          "DALLAS, TX.- AS PER CLMT: INSD DRVR MADE AN UNSAFE LANE SWITCH AND STRUCK CLMT VEH.",
        totalPaid: 602.48,
      },
      {
        description: "Rolla, MO.- INSD VEH BACKED UP TO CLMT VEH.",
        totalPaid: 7078.24,
      },
      {
        description:
          "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        totalPaid: 360.37,
      },
      {
        description:
          "WEATHERFORD, TN-------INSD VEH WAS ON LOVES TRUCK STOP PARKED, SUDDENLY CLMT VEH STRUCK INSD VEH. NO MORE DETAILS PROVIDED",
        totalPaid: 0,
      },
      {
        description:
          "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        totalPaid: 0,
      },
      {
        description:
          "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        totalPaid: 0,
      },
      {
        description:
          "MERKEL, TX- INSD DRVR LOST CONTROL OF VEH DUE TO ICE ON RD. INSD DRVR JACKKNIFED AND CAUSED INSD VEH TO STRIKE OVERPASS GAURD RAIL.",
        totalPaid: 1133.61,
      },
      {
        description:
          "ALPINE, CA - INSD VEH WAS DRVING ON FREEWAY WHEN HE SAW CLMT DRVR MAKING SIGNS, CLMT DRVR STATED THAT INSD VEH THROW A ROCK AT CLMT VEH WINDSHIELD.",
        totalPaid: 11.5,
      },
      {
        description:
          "HEBER, CA- IV WAS DRIVING AND CV MERGED TO LANE AND IV HIT CV.",
        totalPaid: 5.5,
      },
      {
        description: "CICERO, IL - INSD VEH WAS EXITING PROPERTY AND HIT WALL.",
        totalPaid: 38302.47,
      },
      {
        description: "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        totalPaid: 20473.46,
      },
      {
        description:
          "SAN DIEGO, CA, INSD VEH CHANGED LANE AND STRUCK CLMT VEH WITH TRAILER",
        totalPaid: 0,
      },
      {
        description:
          "PARSONS, KS .- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        totalPaid: 140442.18,
      },
    ],
  },
  {
    category: "claim-type",
    item: "MEDICAL PAYMENTS",
    claims: 2,
    totalPaid: 0.0,
    averagePerClaim: 0.0,
    percentClaims: 10.0,
    percentCosts: 0.0,
    topLossTypes: "MEDICAL PAYMENTS(2)",
    riskScore: -0.63,
    description: [
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
      {
        description:
          "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        totalPaid: 0,
      },
    ],
  },
];

export default mockData;
