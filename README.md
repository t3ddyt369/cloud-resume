# My Cloud Resume Challenge Journey
⭐[My Resume](https://resume.theodore.cloud/) ⭐[Blog Post](https://thedigiverse.hasgnode.dev/)

Welcome to the repository documenting my journey through the Cloud Resume Challenge! This project is an excellent way to transition from cloud certification to a cloud career. Here, I follow the 16 steps of the original Cloud Resume Challenge, available for free, to develop and showcase the skills that cloud and DevOps engineers use in their daily work.

Join me on my journey through the Cloud Resume Challenge as I transition from cloud education to a cloud career. This hands-on project, structured into 16 comprehensive steps, is free for anyone to try. It covers many essential skills that cloud and DevOps engineers use daily, making it an invaluable experience for aspiring professionals like myself looking to break into the industry.

[Cloud Resume Challenge - Azure](https://cloudresumechallenge.dev/docs/the-challenge/azure/)


## Getting Started
The original Cloud Resume Challenge provides detailed instructions for Amazon AWS, Microsoft Azure, or Google Cloud. You can find the guide on the official Cloud Resume Challenge website.

For my journey, I will focus on Microsoft Azure and plan to revisit the challenge for Amazon AWS later.

### My Education and Certifications
Education | Certification

I am pursuing a Bachelor of Science in Cloud Computing, which covers cloud architecture, security, data management, and network infrastructure. This program provides both theoretical and practical skills needed to manage and deploy cloud solutions effectively, ensuring security and reliability in cloud environments.

- CompTIA A+ | Passed
- CompTIA Network+ | Passed
- CompTIA Security+ | Passed
- LPI Linux Essentials | Passed
- CompTIA Cloud+ | Passed
- Microsoft Azure Fundamentals AZ-900 | Passed
- Microsoft Azure Developer Associate AZ-204 | Studying
- Amazon AWS Cloud Practitioner | Passed
- Amazon AWS Cloud Architecture | Pending

## The Challenge Steps

### HTML
Your resume needs to be written in HTML and styled with CSS. Not a Word doc or a PDF. Here is an example of what I mean.

### Static Website
Deploy your HTML resume online as an Azure Storage static website. Although services like Netlify and GitHub Pages are great, we’ll use Azure Storage for this project.

### HTTPS
Ensure the Azure Storage website URL uses HTTPS for security. Use Azure CDN to help with this.

### DNS
Point a custom DNS domain name to the Azure CDN endpoint so your resume can be accessed at something like my-c00l-resume-website.com. Use Azure DNS or any other DNS provider.

### JavaScript
Your resume webpage should include a visitor counter that displays how many people have accessed the site. Write a bit of JavaScript to make this happen.

### Database
The visitor counter will need to retrieve and update its count in a database. Use the Table API of Azure’s CosmosDB for this.

### API
Create an API that accepts requests from your web app and communicates with the database. Use Azure Functions with an HTTP trigger for this.

### Python
Write some code in the Azure Function using Python, a common language used in back-end programs and scripts.

### Test
Include some tests for your Python code. Here are some resources on writing good Python tests.

### Infrastructure as Code
Do not configure your API resources manually. Define them in an Azure Resource Manager (ARM) template on a Consumption plan. This is called “infrastructure as code” or IaC.

### Source Control
Set up a GitHub repository for your backend code. Create another repository for your website code.

### CI/CD (Back End)
Set up GitHub Actions to run your Python tests and deploy your ARM application to Azure when you push updates.

### CI/CD (Front End)
Create GitHub Actions to update the Azure Storage blob with your website code whenever you push updates.

### Blog Post
In the text of your resume, link a short blog post describing some things you learned while working on this project. Dev.to or Hashnode are great places to publish if you don’t have your own blog.

### Conclusion
Join me on my Cloud Resume Challenge journey as I transition from cloud education to a cloud career. This challenge will enhance my resume with practical skills such as HTML, CSS, JavaScript, Python, and CI/CD, among others.

