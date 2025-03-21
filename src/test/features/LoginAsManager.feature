Feature: Login As Manager

    Scenario: Successful Login as an Manager

        Given the user in on the Login Page
        When the user fills in the email 'moonman@yopmail.com' and password 'autoss#12'
        Then the user should be redirected to the homepage
