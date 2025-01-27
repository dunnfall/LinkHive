![LinkHive Logo](/public/LinkHive.png)
<p align="center">Self-hosted bookmark manager.</p>


### Contents
- [Contents](#contents)
- [About LinkHive](#about-linkhive)
- [Setup](#setup)
- [Local Development Setup](#local-development-setup)
- [To dockerize the application](#to-dockerize-the-application)
- [Features](#features)
- [Roadmap](#roadmap)

### About LinkHive
LinkHive is a self-hosted bookmark manager built with NextJS.

### Setup
Currently LinkHive is still in development and not suggested in any way to be used in production.
### Local Development Setup
Will update these instructions cleaner if/when it becomes a higher priority.

This is a ReactJS app using NextJS. So you'll need all of the dependencies that come along with that.

There also might need to be some prep that involves Prisma. Maybe running `npx prisma db push` and `npx prisma db seed`?

Create a `.env` containing:
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=say_lalisa_love_me_lalisa_love_me_hey
```

Run `npm run dev`


### To dockerize the application 
```
docker build -t linkhive-app .
docker run -p 3000:3000 linkhive-app
```

### Features
- You can have bookmarked links

### Roadmap
- [x] CRUD operations on links
- [x] Navigation
- [x] Docker support
- [ ] Multi-user support
- [ ] Hexagonal links
- [ ] Status checking for links
