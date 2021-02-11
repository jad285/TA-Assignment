# TA-Assignment
TA-Assignment Application for The University of Pittsburgh

For Local Testing:
*Both front end and back end servers must be running for full functionality

-Run "yarn start" for react testing (opens on localhost:3000)

-For flask testing (opens on localhost:5000)
    -For first time users you must install a virtual environment inside of the /api directory
        -"virtualenv venv" to create a virtual environment
        -You must additionally install all of the python libraries into the virtual environment (view python libraries section)

    -Cd into /api directory and run "venv\Scripts\activate" to activate virtual machine
    -"set FLASK_APP=api.py" (for mac users replace set with "source"... I think)
    -"flask run" to run the backend

React Libraries:
-React Bootstrap "npm install react-bootstrap bootstrap"

Python Libraries:
-Cd into /api directory and run "pip install -r "requirements.txt"
