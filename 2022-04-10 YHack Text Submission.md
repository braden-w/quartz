---
date: "2022-06-09"
date modified: "2022-06-15"
title: 2022-04-10 YHack Text Submission
---

# 2022-04-10 YHack Text Submission

## Inspiration
For inspiration, we drew from our experience and those of our friends. What were the pain points of current solutions?
1. Many friends struggled to find out which clubs are out there
2. There is no centralized list of clubs, except for YaleConnect —which itself is very poorly organized
	1. YaleConnect has tags, but these tags do not match clubs and are poorly organized
	2. For example, Yale Computer Science is listed as a Preprofessional group, not a Computer Science group
	3. As a result, many students do not use YaleConnect, and rely solely on word of mouth
3. Outreach and promotion is just really difficult for clubs (There is no “central publicity” for clubs that people actually check)

In summary, YaleConnect, Yale's proprietary hub for clubs, is very difficult to use. Finding new clubs and organizations to join has been difficult outside of world of mouth, and we believe that there is an opportunity to give people a better centralized place to check out clubs!

## What it Does
- Scrape YaleConnect and create our own public API of clubs and organizations on campus
- Use Google Cloud NLP to give clubs better and smarter categorization, based off names and mission statements that we fed to the online model. We can filter based off these categories on our frontend
- For example, Yale Computer Science Society is finally listed as a Computer Science club!
- A better custom frontend for accessing Yale Clubs and Organizations

## How We Built it
- Next.js, React, and Chakra UI
- We built a Python backend in Flask that served clean club data from Postgres. This data was collected through a separate web scraping worker using BeautifulSoup. The API we built is openly available on **YaleOrgs.com** to enable other student developers to make use of the data.

## Challenges We Ran into
- Scraping YaleConnect was complex, as the site has inconsistent formatting and provided data.
- Speed of rendering so many react components (thousands of clubs)

## Accomplishments That We're Proud of
- Creating a public API that can be used by the greater Yale community :) https://yaleorgs.com/
- Creating a workable app in 36 hours

## What We Learned
- How to scrape Campusgroups, Yale's proprietary website (Python)
- How to build a Python Flask server with its own endpoints, authentication, and frontend  (Python)
- How to apply Google Cloud NLP to categorize clubs based on names and mission statements (Python)
- How to apply Twilio for push notifications (Node.js, Typescript)
- How to use Next.js (Next.js)
- How to use React and React hooks (Typescript)
- Different modes of Data Fetching (useSWR)

## What's Next for YaleClubs
- Better backend
- Authentification using CAS
- Faster searching
- Better categorization
