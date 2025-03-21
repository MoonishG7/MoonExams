Feature: Login As Employee

    Scenario: Successful Login as an Employee

        Given the user in on the Login Page
        When the user fills in the email 'moonemp@yopmail.com' and password 'autoss#12'
        Then the user should be redirected to the homepage
