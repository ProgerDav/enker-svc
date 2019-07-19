db.students.remove({});
db.students.insertMany([{
  "email": "mesrobk@gmail.com",
  "firstName": "Mesrob",
  "lastName": "Kyurkchyan",
  "password": "password",
  "learningTargets": [
    "Animation",
    "Game Development",
    "Filmmaking"
  ],
  "location": "Gyumri"
}, {
  "email": "davit@gmail.com",
  "firstName": "Davit",
  "lastName": "Gyulnazaryan",
  "password": "password",
  "learningTargets": [
    "Game Development",
    "Web Development",
    "Programming"
  ],
  "location": "Yerevan"
}
])

db.students.createIndex({ lastName: "text", firstName: "text", location: "text" })
db.students.createIndex({ learningTargets: 1})
