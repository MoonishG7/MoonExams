Feature: Update Personal Information

    Scenario Outline: Update Personal Information Successfully

        Given the user in on the Login Page
        When the user fills in the email 'moonemp@yopmail.com' and password 'autoss#12'
        Then the user should be redirected to the homepage

        When the user clicks on My Space
        And the user clicks on Personal Information
        And the user clicks on Education
        And the user clicks on Certifications
        And the user clicks on Add
        Then a pop up is displayed

        When the user selects the certification '<typeOfCertification>'
        And the user adds his '<scannedCopy>'>
        And the user selects the '<effectiveDate>'
        And the user clicks on Submit
        Then a toast message '<toastMessage1>' is displayed
        And a banner with text '<bannerMessage1>' is displayed

        When the user clicks on Account logo and select Sign out
        Then the user should be redirected to the Login Page

        When the user fills in the email 'moonman@yopmail.com' and password 'autoss#12'
        Then the user should be redirected to the homepage

        When the user clicks on My tasks
        Then the user should find the certification request with same '<details>' and '<requester>' and '<subject>' and '<creationDate>'

        When the user clicks on the certification request
        Then the user should find the certification details with same '<typeOfCertification>' and '<scannedCopy>' and '<effectiveDate>'

        When the user clicks on Approve
        Then a toast message '<toastMessage2>' is displayed and certification request is no longer displayed in My tasks

        When the user clicks on Account logo and select Sign out
        Then the user should be redirected to the Login Page

        When the user fills in the email 'moonhr@yopmail.com' and password 'autoss#12'
        Then the user should be redirected to the homepage

        When the user clicks on My tasks and clicks on OTHER
        Then the approved certification request should be displayed with '<details>' and '<requester>' and '<subject>' and '<creationDate>' and '<status>'

        When the user clicks on Account logo and select Sign out
        Then the user should be redirected to the Login Page

        When the user fills in the email 'moonemp@yopmail.com' and password 'autoss#12'
        Then the user should be redirected to the homepage
        And notification has a count
        
        When the user clicks on My Space
        And the user clicks on Personal Information
        And the user clicks on Education
        And the user clicks on Certifications
        Then a banner with text '<bannerMessage1>' is no longer displayed
        And a banner with approved certification is displayed '<typeOfCertification>' and '<scannedCopy>'

        When the user clicks on Account logo and select Sign out
        Then the user should be redirected to the Login Page




        



