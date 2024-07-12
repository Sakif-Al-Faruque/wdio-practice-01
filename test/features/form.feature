Feature: Authentication test
    
    Scenario: User login
        Given Open the login page
        Then Login page is opened
        When user put username
        And user put password
        And click on login button
        Then user is loggedin
        And user should view the <button_name> button

        Examples:
        |   button_name |
        |   Logout      |
