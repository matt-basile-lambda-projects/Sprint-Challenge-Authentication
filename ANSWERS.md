## What is the purpose of using sessions?
- Sessions allow us to to store information about a client. The purpose is to verify that the content displayed is appropriate for the user who's session it is.

##What does bcrypt do to help us store passwords in a secure manner.
- Bcrypt hashes our passwords multiple times so we do not store our passwords in our DB via plain text.


##What does bcrypt do to slow down attackers?
- Brcyrpt does a lot of things but mainly by hashing our passwords it means an attacker needs to have the hash, know the algo used, and how manys rounds were used to generate that single hash. Not the easiest task even with thousands of computers. 

##What are the three parts of the JSON Web Token?
- A JSON Web Token is a string with three parts: Header(info about the token), Payload(the data), Verify Signature(verifies the token has not been tampered with)