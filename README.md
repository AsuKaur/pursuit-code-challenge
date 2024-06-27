# Persuit Code Challenge

Hello and thank you for taking the time to participate in PERSUIT's coding challenge! We’re excited to have you showcase your skills and creativity. This short challenge is designed to give you an opportunity to demonstrate your problem-solving abilities, coding expertise, and how you approach software development tasks. It’s also a great chance for us to get to know each other better and see if there's a good fit.

Before you dive in, here are a few things to keep in mind:

- **Be Yourself**: There's no one-size-fits-all solution. We're interested in seeing how you tackle problems, so feel free to approach this challenge in a way that best reflects your skills and unique approach to coding.
- **Quality Over Quantity**: While we're interested in seeing your thought process and problem-solving skills, focus on writing clean, efficient, well-tested and readable code. Remember, how you solve the problem is as important as the solution itself.
- **Read Carefully**: Make sure to read the challenge instructions and requirements thoroughly before starting. Understanding the problem fully is the first step to a successful solution.
- **Ask Questions**: If anything is unclear or you need further clarification, don't hesitate to reach out. We're here to help and want to make sure you have all the information you need to succeed.
- **Have Fun**: This is an opportunity to challenge yourself and stretch your abilities. Enjoy the process of creating and problem-solving!

The code challenge requires you to complete the below User story however you see fit.

We expect this challenge to take between one and two hours to complete.

## User story

As a user of PERSUIT, I want to see all of my requests in a list on the Request List page.

### Acceptance Criteria

1. When on the Request List Page
   1. There should be a page heading saying "Request List"
   2. There should list of request cards
      1. When the list is loading the text "Loading" should be shown in place of the list
      2. When there is an error with the data fetching the text "Error" should be shown in place of the list
      3. When there are no requests returned by the server the text "No requests" should be shown in place of the list
      4. Each request should be a card
         1. Each card should have
            1. Headline
            2. Date
            3. Name of the user that submitted it
      5. The request list should be sorted by date, with the newest requests first
      6. The list should be paginated
         1. The list should be limited to 10 items per page
         2. There should be a indicator at the end of the list telling the user which page they're on
         3. There should be a button to go to the previous page
            1. The button should be disabled if the user is on the first page
         4. There should be a button to go to the next page
            1. The button should be disabled if the user is on the last page

### Notes

- Styling and layout do not matter except where instructions are specifically given via the acceptance criteria. No bonus points for style.

## Codebase structure

You are provided with a basic monorepo to help you get started as quick as possible. All of the setup required to do the challenge has been done. You are welcome to change the codebase however you see fit.

### Technologies

- Node.js
- Javascript/Typescript
- React

### Apps

- `api`: A minimal [Express.js](https://expressjs.com/) server
  - `requests-data.json` contains JSON data of sample requests relevant to the user story. It's up to you how to use this data.
  - Basic setup is done in `main.ts`
  - API will start via port `3001` with a hello world route at `/`.
- `frontend`: A [Next.js](https://nextjs.org/) frontend app
  - Frontend app will start via port `3000` with default hello world route at `/`
  - The component rendered for `/` can be found in `views/home.tsx`.

### System requirements

- Node.js >= v18.17.0
- NPM >= 8.19.2

### Develop

To develop all apps, run the following command at root or in each app's folder:

```
npm run dev
```

To run tests for all apps, run the following command at root or in each app's folder:

```
npm run test
```

## Submission

Please submit your solution as a Git repo (zipped) privately to your hiring manager's email.
