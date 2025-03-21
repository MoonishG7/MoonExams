Feature: Login As Hr

    Scenario: Successful Login as an Hr

        Given the user in on the Login Page
        When the user fills in the email 'moonhr@yopmail.com' and password 'autoss#12'
        Then the user should be redirected to the homepage
