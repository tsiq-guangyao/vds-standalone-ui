
import ReactDOM from 'react-dom';
import React, { Component }  from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

const APIAddr = "http://localhost:8080/standalone/getVendorSchema"
const options = {
    method: 'GET'
}
// fetch(APIAddr, options)
//   .then(body => {
    let body = 
    {
      "vendorRequest": {
        "nameLegalAddrQuery": {
          "type": "object",
          "defaultValue": {"addresses":[{}]},
          "properties": {
            "addresses": {
              "title": "Name Legal Address Query",
              "type": "array",
              "items": {
                "type": "object",
                "required": ["name", "street", "city", "state", "zip"],
                "properties": {
                  "name": {
                    "title": "Name",
                    "type": "string"
                  },
                  "street": {
                    "title": "Street",
                    "type": "string"
                  },
                  "city": {
                    "title": "City",
                    "type": "string"
                  },
                  "state": {
                    "title": "State",
                    "type": "string"
                  },
                  "zip": {
                    "title": "Zip",
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "locationsAndStructuresQuery": {
          "type": "object",
          "defaultValue": {"locationsAndStructures":[{}]},
          "properties": {
            "locationsAndStructures": {
              "title": "Locations And Structures Query",
              "type": "array",
              "items": {
                "type": "object",
                "required": ["name", "street", "city", "state", "zip"],
                "properties": {
                  "name": {
                    "title": "Name",
                    "type": "string"
                  },
                  "street": {
                    "title": "Street",
                    "type": "string"
                  },
                  "city": {
                    "title": "City",
                    "type": "string"
                  },
                  "state": {
                    "title": "State",
                    "type": "string"
                  },
                  "zip": {
                    "title": "Zip",
                    "type": "string"
                  },
                  "structures": {
                    "title": "Structures",
                    "type": "array",
                    "items": {
                      "$ref": "#/definitions/locationStructureDetail"
                    }
                  }
                }
              }
            }
          },
          "definitions": {
            "locationStructureDetail": {
              "type": "object",
              "required": [
                "structureId"
              ],
              "properties": {
                "structureId": {
                  "title": "Structure Id",
                  "type": "string"
                },
                "hasLimit": {
                  "title": "Has limit",
                  "type": "boolean"
                },
                "requiresEstimatedLossCost": {
                  "title": "Requires Estimated Loss Cost",
                  "type": "boolean"
                },
                "constructionTypeToUse": {
                  "title": "Construction Type to Use",
                  "type": "string",
                  "enum": [
                    "FRAME",
                    "JOISTED_MASONRY",
                    "NON_COMBUSTIBLE",
                    "MASONRY_NON_COMBUSTIBLE",
                    "MODIFIED_FIRE_RESISTIVE",
                    "FIRE_RESISTIVE"
                  ]
                },
                "occupancyCode": {
                  "title": "Occupancy Code",
                  "type": "string"
                },
                "sprinklered": {
                  "title": "Sprinkle Red",
                  "type": "boolean"
                },
                "asgr": {
                  "title": "Asgr",
                  "type": "integer"
                },
                "stories": {
                  "title": "Stories",
                  "type": "integer"
                },
                "totalSquareFootage": {
                  "title": "Total Sqr Footage",
                  "type": "integer"
                },
                "percentOccupiedBy": {
                  "title": "Percent Occupied By",
                  "type": "object",
                  "properties": {
                    "insured": {
                      "title": "Insured",
                      "type": "integer"
                    },
                    "apartments": {
                      "title": "Apartments",
                      "type": "integer"
                    },
                    "offices": {
                      "title": "Offices",
                      "type": "integer"
                    },
                    "restaurants": {
                      "title": "Restaurants",
                      "type": "integer"
                    },
                    "retailSales": {
                      "title": "Retail Sales",
                      "type": "integer"
                    },
                    "serviceOccupancies": {
                      "title": "Service Occupancies",
                      "type": "integer"
                    },
                    "manufacturing": {
                      "title": "Manufacturing",
                      "type": "integer"
                    }
                  }
                },
                "windUplift": {
                  "title": "Wind Up lift",
                  "type": "boolean"
                },
                "yearBuilt": {
                  "title": "Year Built",
                  "type": "integer"
                },
                "proMetrixRiskId": {
                  "title": "ProMetrix Risk Id",
                  "type": "string"
                },
                "occupancy": {
                  "title": "Occupancy",
                  "type": "object",
                  "properties": {
                    "useType": {
                      "title": "Use Type",
                      "type": "string"
                    },
                    "occupancyType": {
                      "title": "Occupancy Type",
                      "type": "string"
                    },
                    "supportingWallsType": {
                      "title": "Supporting Walls Type",
                      "type": "string"
                    },
                    "supportingWallsValue": {
                      "title": "Supporting Walls Value",
                      "type": "integer"
                    }
                  }
                }
              }
            }
          }
        },
        "vehicleQuery": {
          "type": "object",
          "defaultValue": {"vehicles":[""]},
          "properties": {
            "vehicles": {
              "title": "Vehicles Query",
              "type": "array",
              "items": {
                "type": "string",
                "title": "VIN"
              }
            }
          }
        },
        "driversQuery": {
          "type": "object",
          "defaultValue": {"drivers":[{}]},
          "properties": {
            "drivers": {
              "title": "Drivers Query",
              "type": "array",
              "items": {
                "$ref": "#/definitions/driver"
              }
            }
          },
          "definitions": {
            "driver": {
              "type": "object",
              "required": ["firstName", "lastName", "dateOfBirth", "licenseDetails"],
              "properties": {
                "firstName": {
                  "title": "First Name",
                  "type": "string"
                },
                "middleName": {
                  "title": "Middle Name",
                  "type": "string"
                },
                "lastName": {
                  "title": "Last Name",
                  "type": "string"
                },
                "dateOfBirth": {
                  "title": "Date of Birth",
                  "type": "string",
                  "format": "date"
                },
                "licenseDetails": {
                  "title": "License Details",
                  "required": ["issuingState", "licenseNumber"],
                  "type": "object",
                  "properties": {
                    "issuingState": {
                      "title": "Issuing State",
                      "type": "string"
                    },
                    "licenseNumber": {
                      "title": "License Number",
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "vendors": {
        "experian": {
          "queryType": "nameLegalAddrQuary",
          "name": "Experian",
          "schemaName": "ExperianSummaryData"
        },
        "fdaEnforcement": {
          "queryType": "nameLegalAddrQuary",
          "name": "FDA Enforcement",
          "schemaName": "FDAEnforcementSummaryData"
        },
        "cpsc": {
          "queryType": "nameLegalAddrQuary",
          "name": "CPSC",
          "schemaName": "CPSCSummaryData"
        },
        "osha": {
          "queryType": "locationsAndStructuresQuery",
          "name": "OSHA",
          "schemaName": "OSHASummaryData"
        },
        "smrCommercial": {
          "queryType": "locationsAndStructuresQuery",
          "name": "SMR Commercial",
          "schemaName": "SMRCommercialSummaryData"
        },
        "hazardHub": {
          "queryType": "locationsAndStructuresQuery",
          "name": "Hazard Hub",
          "schemaName": "HazardHubSummaryData"
        },
        "proMetrixLocation": {
          "queryType": "locationsAndStructuresQuery",
          "name": "ProMetrix Location",
          "schemaName": "ProMetrixLocationSummaryData"
        },
        "carfax": {
          "queryType": "vehicleQuery",
          "name": "Carfax",
          "schemaName": "CarfaxSummaryData"
        },
        "lexisNexis": {
          "queryType": "driverQuery",
          "name": "Lexis Nexis",
          "schemaName": "LexisNexisSummaryData"
        },
        "proMetrixEstimatedLossCost": {
          "queryType": "locationsAndStructuresQuery",
          "name": "Prometrix Extimated Loss Cost",
          "schemaName": "ProMetrixStructureSummaryData"
        },
        "proMetrixStructure": {
          "queryType": "locationsAndStructuresQuery",
          "name": "Prometrix Structure",
          "schemaName": "ProMetrixStructureSummaryData"
        },
        "proMetrixISO360Replacement" : {
          "queryType": "structure",
          "name": "Prometrix ISO 360 Replacement",
          "schemaName": "ProMetrixISO360SummaryData"
        }
      },
      "vendorResponse": {
        "address": "address",
        "locations": "locations",
        "structures": "structures",
        "vehicles": "vehicles",
        "drivers": "drivers"
      },
      "vendorResponseSchema": {
        "nameLegalAddrQuery": {
          "ExperianSummaryData" : {
            "title": "Experian Summary Data",
            "type" : "object",
            "properties" : {
              "intelliscorePlusScore" : {
                "$ref" : "#/definitions/ExperianCreditScore"
              },
              "intelliscorePlusV2RiskClass" : {
                "format" : "int32",
                "type" : "integer"
              },
              "intelliscorePlusV2Score" : {
                "$ref" : "#/definitions/ExperianCreditScore"
              },
              "numDerogatoryLegalItems" : {
                "format" : "int32",
                "type" : "integer"
              },
              "numEmployees" : {
                "$ref" : "#/definitions/NumberOfEmployeesRange"
              },
              "numJudgments" : {
                "format" : "int32",
                "type" : "integer"
              },
              "numLiens" : {
                "format" : "int32",
                "type" : "integer"
              },
              "numYearsInFile" : {
                "format" : "int32",
                "type" : "integer"
              },
              "primaryNaicsCode" : {
                "format" : "int32",
                "type" : "integer"
              }
            },
            "definitions": {
              "ExperianCreditScore" : {
                "type" : "object",
                "required" : [ "hadRecentBankruptcy" ],
                "properties" : {
                  "hadRecentBankruptcy" : {
                    "type" : "boolean"
                  },
                  "value" : {
                    "format" : "double",
                    "type" : "number"
                  }
                }
              },
              "NumberOfEmployeesRange" : {
                "type" : "object",
                "required" : [ "minimumNumEmployees" ],
                "properties" : {
                  "maximumNumEmployees" : {
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "minimumNumEmployees" : {
                    "format" : "int32",
                    "type" : "integer"
                  }
                }
              }
            }
          },
          "FDAEnforcementSummaryData" : {
            "title": "FDA Enforcement Summary Data",
            "type" : "object",
            "properties" : {
              "numEnforcements" : {
                "format" : "int32",
                "type" : "integer"
              }
            }
          },
          "CPSCSummaryData" : {
            "title": "CPSC Summary Data",
            "type": "object",
            "properties": {
              "numViolations": {
                "format": "int32",
                "type": "integer"
              }
            }
          }
        },
        "locationsAndStructuresQuery": {
          "OSHASummaryData" : {
            "title": "OSHA Summary Data",
            "type" : "object",
            "properties" : {
              "numViolations" : {
                "format" : "int32",
                "type" : "integer"
              }
            }
          },
          "SMRCommercialSummaryData" : {
            "title": "SMR Commercial Summary Data",
            "type" : "object",
            "required" : [ "hasPool", "noticeOfDefault" ],
            "properties" : {
              "buildingCondition" : {
                "enum" : [ "UNSOUND", "POOR", "AVERAGE", "FAIR", "GOOD", "EXCELLENT" ],
                "type" : "string"
              },
              "buildingQuality" : {
                "enum" : [ "E_MINUS", "E", "E_PLUS", "D_MINUS", "D", "D_PLUS", "C_MINUS", "C", "C_PLUS", "B_MINUS", "B", "B_PLUS", "A_MINUS", "A", "A_PLUS" ],
                "type" : "string"
              },
              "exteriorWalls" : {
                "enum" : [ "ASBESTOS_SHINGLE", "BRICK", "BRICK_VENEER", "BLOCK", "COMPOSITION", "CONCRETE", "CONCRETE_BLOCK", "GLASS", "LOG", "METAL", "ROCK_AND_STONE", "STUCCO", "TILE", "TILT_UP", "OTHER", "WOOD_SHINGLE", "WOOD", "WOOD_SIDING", "ALUM_OR_VINYL_SIDING", "ADOBE", "NOT_WOOD_SHINGLE", "MARBLE", "COMBINATION", "MASONRY" ],
                "type" : "string"
              },
              "garageParkingNumberOfCars" : {
                "format" : "int32",
                "type" : "integer"
              },
              "hasPool" : {
                "type" : "boolean"
              },
              "noticeOfDefault" : {
                "$ref" : "#/definitions/NoticeOfDefault"
              },
              "numberOfBuildingsOnParcel" : {
                "format" : "int32",
                "type" : "integer"
              },
              "numberOfStories" : {
                "format" : "int32",
                "type" : "integer"
              },
              "taxAssessor" : {
                "$ref" : "#/definitions/TaxAssessor"
              },
              "yearBuilt" : {
                "format" : "int32",
                "type" : "integer"
              }
            },
            "definitions": {
              "NoticeOfDefault" : {
                "type" : "object",
                "required" : [ "numSinceOwnerBoughtThisProperty", "numUnderEarlierOwners" ],
                "properties" : {
                  "dateOfMostRecent" : {
                    "format" : "date",
                    "type" : "string"
                  },
                  "numSinceOwnerBoughtThisProperty" : {
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "numUnderEarlierOwners" : {
                    "format" : "int32",
                    "type" : "integer"
                  }
                }
              },
              "TaxAssessor" : {
                "type" : "object",
                "properties" : {
                  "squareFootage" : {
                    "format" : "int32",
                    "type" : "integer"
                  }
                }
              }
            }
          },
          "HazardHubSummaryData" : {
            "title": "HazardHub Summary Data",
            "type" : "object",
            "properties" : {
              "crime" : {
                "$ref" : "#/definitions/ScoreText"
              },
              "elevationInFeet" : {
                "format" : "double",
                "type" : "number"
              },
              "femaAllFloodParams" : {
                "$ref" : "#/definitions/FemaFloodParams"
              },
              "femaFirmDate" : {
                "$ref" : "#/definitions/FemaFirmDate"
              },
              "fireProtection" : {
                "$ref" : "#/definitions/ScoreText"
              },
              "fireStationDriveDistanceInMiles" : {
                "format" : "double",
                "type" : "number"
              },
              "fireStationType" : {
                "enum" : [ "FULL_TIME", "BLENDED", "VOLUNTEER" ],
                "type" : "string"
              },
              "hazardhubFlood" : {
                "$ref" : "#/definitions/ScoreText"
              },
              "ifBasementYn" : {
                "type" : "boolean"
              },
              "mineSubsidence" : {
                "$ref" : "#/definitions/ScoreText"
              },
              "surgeMax" : {
                "$ref" : "#/definitions/ScoreText"
              },
              "wildfireDescription" : {
                "type" : "string"
              },
              "wildfireDistanceToHighAreaInFeet" : {
                "format" : "double",
                "type" : "number"
              },
              "wildfireRisk" : {
                "enum" : [ "VERY_LOW", "LOW", "MODERATE", "HIGH", "VERY_HIGH" ],
                "type" : "string"
              },
              "wildfireRiskScore" : {
                "format" : "int32",
                "type" : "integer"
              }
            },
            "definitions": {
              "ScoreText" : {
                "type" : "object",
                "properties" : {
                  "score" : {
                    "enum" : [ "A", "B", "C", "D", "E", "F" ],
                    "type" : "string"
                  },
                  "text" : {
                    "type" : "string"
                  }
                }
              },
              "FemaFloodParams" : {
                "type" : "object",
                "properties" : {
                  "floodZone" : {
                    "type" : "string"
                  },
                  "zoneSubtype" : {
                    "type" : "string"
                  }
                }
              },
              "FemaFirmDate" : {
                "type" : "object",
                "properties" : {
                  "currentClass" : {
                    "type" : "string"
                  }
                }
              }
            }
          },
          "ProMetrixLocationSummaryData" : {
            "title": "ProMetrix Location Summary Data",
            "type" : "object",
            "required" : [ "risks" ],
            "properties" : {
              "risks" : {
                "items" : {
                  "$ref" : "#/definitions/ProMetrixRisk"
                },
                "type" : "array"
              }
            },
            "definitions": {
              "ProMetrixRisk" : {
                "type" : "object",
                "required" : [ "riskId" ],
                "properties" : {
                  "address" : {
                    "$ref" : "#/definitions/Address"
                  },
                  "buildingDescription" : {
                    "type" : "string"
                  },
                  "occupantNames" : {
                    "items" : {
                      "type" : "string"
                    },
                    "type" : "array"
                  },
                  "riskId" : {
                    "type" : "string"
                  }
                }
              },
              "Address" : {
                "type" : "object",
                "properties" : {
                  "city" : {
                    "type" : "string"
                  },
                  "state" : {
                    "type" : "string"
                  },
                  "street" : {
                    "type" : "string"
                  },
                  "zip" : {
                    "type" : "string"
                  }
                }
              }
            }
          },
          "ProMetrixStructureSummaryData" : {
            "title": "Promextrix Structure Summary Data",
            "type" : "object",
            "required" : [ "underwritingData" ],
            "properties" : {
              "underwritingData" : {
                "$ref" : "#/definitions/ProMetrixUnderwritingData"
              }
            },
            "definitions": {
              "ProMetrixUnderwritingData" : {
                "type" : "object",
                "properties" : {
                  "bgiConstructionClass" : {
                    "description" : "This value summarises the building materials used and gives a combustibility code. The codes range from 1 - 6 with descriptions for each level.",
                    "enum" : [ "FRAME", "JOISTED_MASONRY", "NON_COMBUSTIBLE", "MASONRY_NON_COMBUSTIBLE", "MODIFIED_FIRE_RESISTIVE", "FIRE_RESISTIVE" ],
                    "type" : "string"
                  },
                  "bgiLossCostSpecific" : {
                    "format" : "double",
                    "type" : "number"
                  },
                  "bgiiEnhancedLossCostSpecific" : {
                    "format" : "double",
                    "type" : "number"
                  },
                  "bgiiWindSymbol" : {
                    "description" : "This is a standard code describing resistivity to wind.",
                    "enum" : [ "B", "AB", "A", "AA", "2A", "4B", "3AB", "C", "D", "CD" ],
                    "type" : "string"
                  },
                  "buildingClass" : {
                    "description" : "This field identifies building construction characteristics. As per the spreadsheet, this is an enum. However, we have only observed the empty string or null as values here.",
                    "enum" : [ "A", "B", "C", "D", "S" ],
                    "type" : "string"
                  },
                  "buildingCodeEffectivenessGrade" : {
                    "description" : "This measures the standards of building codes in a given community, and how well they are enforced. Values range from 1 (best) - 10 (worst), as well as special values 98 and 99. 98: something special to do with Florida. 99: special cases which do not lie within the above possibilities. As this is passed straight into the rating system, we don't carry out any data transformations.",
                    "type" : "string"
                  },
                  "capRiskIndex" : {
                    "description" : "This value measures the potential risk of 'personal and property crimes.' The ranking is on a scale of 1 (safest) - 10 (worst) (we use the old ranking system).",
                    "format" : "int32",
                    "maximum" : 10,
                    "minimum" : 1,
                    "type" : "integer"
                  },
                  "combustibilityLevel" : {
                    "description" : "This value rates the combustibility of a risk, on a scale of 1 (least) - 5 (most) combustible. ",
                    "format" : "int32",
                    "maximum" : 5,
                    "minimum" : 1,
                    "type" : "integer"
                  },
                  "commonHazards" : {
                    "description" : "The strings are probably instances of some enum, but we don't have enough information to deduce the possible values.",
                    "items" : {
                      "type" : "string"
                    },
                    "type" : "array"
                  },
                  "constructionQualityDescription" : {
                    "type" : "string"
                  },
                  "distanceToNearestBodyOfWater" : {
                    "$ref" : "#/definitions/DistanceToWater",
                    "description" : "The requirement 'Water->Distance,BodyOfWaterName' refers to this field. This is presented as a range within which the value lies."
                  },
                  "distanceToOceanOrGulf" : {
                    "$ref" : "#/definitions/DistanceToWater",
                    "description" : "The requirement 'Coast->Distance,BodyOfWaterName' refers to this field. This is presented as a range within which the value lies."
                  },
                  "exteriorWallType" : {
                    "description" : "An enum describing the construction of the walls. We present it as a string because there are many possible values and due to concerns surrounding the accuracy of the data dictionary.",
                    "type" : "string"
                  },
                  "generalComments" : {
                    "items" : {
                      "type" : "string"
                    },
                    "type" : "array"
                  },
                  "hasPool" : {
                    "type" : "boolean"
                  },
                  "hasPreventiveMaintenanceRoofInspectionPrograms" : {
                    "description" : "Indicates whether there are roof maintenance programs in places. It is an enum explaining the frequency of roof maintenance programs. We convert none known to false, and any indications of 'Yes' with an associated frequency to true.",
                    "type" : "boolean"
                  },
                  "isBuildingInd" : {
                    "readOnly" : true,
                    "type" : "boolean"
                  },
                  "lineNumber" : {
                    "type" : "string"
                  },
                  "lossCosts" : {
                    "items" : {
                      "$ref" : "#/definitions/LossCostForBuildingAndOccupants"
                    },
                    "type" : "array"
                  },
                  "name" : {
                    "type" : "string"
                  },
                  "numBuildings" : {
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "numHabitationalOccupancies" : {
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "numParkingSpaces" : {
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "numRestaurantOccupancies" : {
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "numVacantOccupancies" : {
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "numberOfStories" : {
                    "description" : "This value is being treated as a double because it can take on values such as 1.5 (see 'Miscellaneous Documents' on the collage of Prometrix Documentation).",
                    "format" : "double",
                    "type" : "number"
                  },
                  "occupancyDescription" : {
                    "description" : "This value indicates the type of occupancy of the building, e.g. 'Office and banks'. The investigation and dictionary spreadsheets indicate that this field is an enum with ~20 possibilities. We choose to leave it as a string for the sake of simplicity.",
                    "type" : "string"
                  },
                  "onsiteSurveyDate" : {
                    "format" : "date",
                    "type" : "string"
                  },
                  "otherImprovements" : {
                    "type" : "string"
                  },
                  "parkingType" : {
                    "description" : "This is an enum with many different possibilities, as listed in the data dictionary spreadsheet. We present it as a string due to the number of possibilities and questionable accuracy of the data dictionary.",
                    "type" : "string"
                  },
                  "perOccupantDetails" : {
                    "items" : {
                      "$ref" : "#/definitions/OccupantDetails"
                    },
                    "type" : "array"
                  },
                  "ppcFireProtection" : {
                    "description" : "This value measures the quality of fire protection services available in the area. Formerly integers between 1 and 10 inclusive, but now combines numbers and letters. This field was formerly a String, but has now been converted to an enum given restrictions in product.",
                    "enum" : [ "1", "2", "3", "4", "5", "6", "7", "8", "8B", "9", "10", "1X", "2X", "3X", "4X", "5X", "6X", "7X", "8X", "1Y", "2Y", "3Y", "4Y", "5Y", "6Y", "7Y", "8Y", "10W" ],
                    "type" : "string"
                  },
                  "roofCoverAgeInYears" : {
                    "$ref" : "#/definitions/AgeRangeInYears",
                    "description" : "Age of the roof cover. This is presented a range enum by the vendor, which we convert to a standard range."
                  },
                  "roofSolarPanels" : {
                    "description" : "Indicates whether or not a the roof has solar panels. We haven't observed many useful values here so we are relying on the dictionary for boolean mappings.",
                    "type" : "boolean"
                  },
                  "roofSolarPanelsPercentage" : {
                    "description" : "DEPRECATED. We formerly believed that this field was an integer, however we have now learned it is a range. The new field replacing this one is called 'roofSolarPanelsPercentageRange'. We leave the field in here to maintain backwards compatibility. THIS IS NOW ALWAYS RETURNED AS A NULL VALUE. It will be removed from future versions of the API.",
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "roofSolarPanelsPercentageRange" : {
                    "$ref" : "#/definitions/PercentageRange",
                    "description" : "Indicates the percentage of the roof covered by solar panels, if these are present. We have only observed null or 'DOES NOT APPLY' here, but the data dictionary suggests that this is an enum range. THIS FIELD IS THE EVOLUTION OF 'roofSolarPanelsPercentage', WHICH WE PLAN TO DEPRECATE."
                  },
                  "salePriceInDollars" : {
                    "description" : "This quantity is most likely measured in dollars. The data in this field is not necessarily very clean, we have many zero values and nulls from the vendor. Nulls are understandable, but zeros might make things confusing for downstream consumers.",
                    "format" : "int64",
                    "type" : "integer"
                  },
                  "sprinklerCreditLevel" : {
                    "description" : "This credit summarises the sprinkler grading. Anything obtaining a score equal to or above 10 has a 'Receiving credit' rating. If the score is less than 10, either 'No credit' or 'Partial credit' is assigned.",
                    "enum" : [ "NO_CREDIT", "PARTIAL_CREDIT", "RECEIVING_CREDIT" ],
                    "type" : "string"
                  },
                  "sprinklerGrading" : {
                    "description" : "This value provides a grading score for the sprinkler system in a building, on a scale of 0 (worst) - 100 (best).",
                    "format" : "int32",
                    "maximum" : 100,
                    "minimum" : 0,
                    "type" : "integer"
                  },
                  "sprinklerSystemInstalled" : {
                    "type" : "boolean"
                  },
                  "totalCommUnits" : {
                    "description" : "The total number of commercial units.",
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "totalFloorAreaInSquareFeet" : {
                    "description" : "The total area of the building in square feet. Counter-intuitively, this value can be zero (probably meaning incorrect or missing data).",
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "totalUnits" : {
                    "description" : "The total number of units.",
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "vacantOccupancyPercentage" : {
                    "format" : "double",
                    "maximum" : 100,
                    "minimum" : 0,
                    "type" : "number"
                  },
                  "yearBuilt" : {
                    "description" : "This value is replicated in several different places in the same vendor response. Discrepancies between these different places are possible, e.g. 1900 in one place and 1910 in another, as the data investigation shows. We choose the value from an arbitrary place in case of conflict.",
                    "format" : "int32",
                    "type" : "integer"
                  }
                }
              },
              "DistanceToWater" : {
                "type" : "object",
                "properties" : {
                  "bodyOfWaterName" : {
                    "type" : "string"
                  },
                  "distanceRange" : {
                    "$ref" : "#/definitions/DistanceRangeInFeet"
                  }
                }
              },
              "DistanceRangeInFeet" : {
                "type" : "object",
                "required" : [ "minimumDistanceInFeet" ],
                "properties" : {
                  "maximumDistanceInFeet" : {
                    "description" : "Null indicates infinite or unknown",
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "minimumDistanceInFeet" : {
                    "format" : "int32",
                    "type" : "integer"
                  }
                }
              },
              "LossCostForBuildingAndOccupants" : {
                "type" : "object",
                "properties" : {
                  "bgiLossCostSpecific" : {
                    "description" : "This value reports LossCosts for the building and all occupants for given risk",
                    "format" : "double",
                    "type" : "number"
                  },
                  "bgiiEnhancedLossCostSpecific" : {
                    "format" : "double",
                    "type" : "number"
                  },
                  "bgiiLossCostClass" : {
                    "type" : "string"
                  },
                  "classLossCost" : {
                    "$ref" : "#/definitions/ClassLossCost"
                  },
                  "isBuildingInd" : {
                    "readOnly" : true,
                    "type" : "boolean"
                  },
                  "lineNumber" : {
                    "type" : "string"
                  },
                  "name" : {
                    "type" : "string"
                  }
                }
              },
              "ClassLossCost" : {
                "type" : "object",
                "properties" : {
                  "bgiLossCostClass" : {
                    "format" : "double",
                    "type" : "number"
                  }
                }
              },
              "OccupantDetails" : {
                "type" : "object",
                "properties" : {
                  "susceptibility" : {
                    "description" : "This value reports occupant susceptibility on a scale of 1 (Low) - 5 (High). We have frequently observed null values here.",
                    "format" : "int32",
                    "maximum" : 5,
                    "minimum" : 1,
                    "type" : "integer"
                  }
                }
              },
              "AgeRangeInYears" : {
                "type" : "object",
                "required" : [ "minimumAgeInYears" ],
                "properties" : {
                  "maximumAgeInYears" : {
                    "description" : "Null indicates infinite or unknown",
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "minimumAgeInYears" : {
                    "format" : "int32",
                    "type" : "integer"
                  }
                }
              },
              "PercentageRange" : {
                "type" : "object",
                "properties" : {
                  "excludedMinimumPercentage" : {
                    "format" : "double",
                    "maximum" : 100.0,
                    "minimum" : 0.0,
                    "type" : "number"
                  },
                  "includedMaximumPercentage" : {
                    "format" : "double",
                    "maximum" : 100.0,
                    "minimum" : 0.0,
                    "type" : "number"
                  }
                }
              }
            }
          },
          "ProMetrixISO360SummaryData" : {
            "title": "ProMetrix ISO360 Summary Data",
            "type" : "object",
            "properties" : {
              "estimatedReplacementCost" : {
                "format" : "double",
                "type" : "number"
              }
            }
          }
        },
        "vehicleQuery": {
          "CarfaxSummaryData" : {
            "title": "Carfax Summary Data",
            "type" : "object",
            "properties" : {
              "averageMileageInformation" : {
                "$ref" : "#/definitions/AverageMileageInformation"
              },
              "demographicInformationWithLastOdo" : {
                "$ref" : "#/definitions/DemographicInformationWithLastOdo"
              },
              "historyBasedValue1" : {
                "$ref" : "#/definitions/HistoryBasedValue1"
              },
              "ownershipTypes" : {
                "$ref" : "#/definitions/OwnerShipTypes"
              }
            },
            "definitions": {
              "AverageMileageInformation" : {
                "type" : "object",
                "properties" : {
                  "lastOwner" : {
                    "$ref" : "#/definitions/AverageMileageInformationLastOwner"
                  }
                }
              },
              "AverageMileageInformationLastOwner" : {
                "type" : "object",
                "properties" : {
                  "modeledAnnualMileage" : {
                    "format" : "double",
                    "type" : "number"
                  },
                  "recentAverageMileage" : {
                    "format" : "double",
                    "type" : "number"
                  }
                }
              },
              "DemographicInformationWithLastOdo" : {
                "type" : "object",
                "properties" : {
                  "description" : {
                    "$ref" : "#/definitions/DemographicInformationWithLastOdoDescription"
                  }
                }
              },
              "DemographicInformationWithLastOdoDescription" : {
                "type" : "object",
                "properties" : {
                  "bodyStyle" : {
                    "type" : "string"
                  },
                  "grossVehicleWeightRange" : {
                    "$ref" : "#/definitions/WeightRangeInPounds"
                  },
                  "year" : {
                    "format" : "int32",
                    "type" : "integer"
                  }
                }
              },
              "WeightRangeInPounds" : {
                "type" : "object",
                "required" : [ "minimumWeightInPounds" ],
                "properties" : {
                  "maximumWeightInPounds" : {
                    "format" : "int32",
                    "type" : "integer"
                  },
                  "minimumWeightInPounds" : {
                    "format" : "int32",
                    "type" : "integer"
                  }
                }
              },
              "HistoryBasedValue1" : {
                "type" : "object",
                "properties" : {
                  "privateParty" : {
                    "format" : "double",
                    "type" : "number"
                  }
                }
              },
              "OwnerShipTypes" : {
                "type" : "object",
                "properties" : {
                  "current" : {
                    "enum" : [ "PERSONAL", "RENTAL", "COMMERCIAL_USE", "CORPORATE", "CORPORATE_FLEET", "LEASE", "PERSONAL_LEASE", "NON_PROFIT", "TAXI", "GOVERNMENT", "POLICE" ],
                    "type" : "string"
                  }
                }
              }
            }
          }
        },
        "driversQuery": {
          "LexisNexisSummaryData" : {
            "title": "LexisNexis Summary Data",
            "type" : "object",
            "properties" : {
              "numMVRPoints" : {
                "description" : "Number of motor vehicle record points. In cases where there are no violations, or where no violations contain points, this field is null. If a mix of violations with and without points are found, the sum of the found points is returned; the violations without points are ignored.",
                "format" : "int32",
                "type" : "integer"
              }
            }
          }
        }
      }
    }
    
    
    
    ReactDOM.render(<App schema={body}/>, document.getElementById("root"));
  // })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
