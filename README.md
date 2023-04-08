# Meurig Jenkins

Portfolio site for Meurig Jenkins.

All content is stored in the [content](./src/content) folder. To make changes to content, edit files in this folder. Any change to a file's content will prompt the site to automatically redeploy with the content updated.

E.g. changing the description of the Hydeout Espresso Martini Advert project:
- Go to the [projects file](./src/content/projects.ts).
- Click on the edit button in the top right of the file.
- Find the section of the file that contains the content for the Martini project.
- Find the description section of the data.
- Update the text (make sure that all languages are updated).

Content that is specific to a particular section of the site is in a file with that name:
- [src/content/home.ts](./src/content/home.ts): Content for the homepage.
- [src/content/projects.ts](./src/content/projects.ts): Content for the projects page and subpages.
- [src/content/about.ts](./src/content/about.ts): Content for the about page.

Content that is sitewide, like the header/footer is in [src/content/site.ts](./src/content/site.ts).
