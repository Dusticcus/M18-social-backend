# M18-social-backend
Video Demonstration: https://drive.google.com/file/d/1Kx3Auj_nvNpACuIfPmEj51rojfOA5WY5/view

# Project
- This project is intended to help solidify skills regard creating a back end API, which you can then query through Insomnia/Postman and confirm work before creating a front end at all.
# Run Program
- Download repo
- Open a terminal within the root directory and install packages with "npm i"
- Once installation is complete, from the same terminal, run "node index.js"
# API Routes and Use
- ## Friend
  - POST: ADD new Friend by ID
    - http://localhost:3001/api/users/USER-ID-HERE/friends/FRIEND-ID-HERE
  - DELETE : Delete Friend by ID
    - http://localhost:3001/api/users/USER-ID-HERE/friends/FRIEND-ID-HERE
- ## User
  - GET: All Users
    - http://localhost:3001/api/users/
  - GET: One User by ID
    - http://localhost:3001/api/users/USER-ID-HERE
  - POST: Create new User
    - http://localhost:3001/api/users
      - "username": "New User Name Here"
      - "email": "new@email.here"
  - POST: Update User by ID
    - http://localhost:3001/api/users/USER-ID-HERE
      - "username":"new name"
  - DELETE: Delete User by ID
    - http://localhost:3001/api/users/USER-ID-HERE
- ## Thought (Posts)
  - GET: Get all Thoughts
    - http://localhost:3001/api/thoughts
  - GET: Get one thought by ID
    - http://localhost:3001/api/thoughts/THOUGHT-ID-HERE
  - POST: Create a new Thought
    - http://localhost:3001/api/thoughts
      - "text":"THOUGHT TEXT GOES HERE"
	  - "username": "USERNAME HERE"
	  - "user": "USER ID HERE"
  - POST: Update Thought by ID
    - http://localhost:3001/api/thoughts/THOUGHT-ID-HERE
      - "text":"NEW TEXT HERE"
  - DELETE: Delete Thought by ID
    - http://localhost:3001/api/thoughts/THOUGHT-ID-HERE
- ## Reaction (Comments)
  - POST: Creat new Reaction
    - http://localhost:3001/api/thoughts/THOUGHT-ID-HERE/reactions
      - "text":"this is a reaction"
	  - "username":"Dusticcus"
  - DELETE: Delete Reaction
    - http://localhost:3001/api/thoughts/6301b64b52e9bdbd82f662a0/reactions
      - "reactionId":"REACTION-ID-HERE"
