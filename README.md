# Threads - Next.js Social App

## Overview

Threads is a modern social network application built with Next.js, Prisma, Clerk, TailwindCSS, and various UI libraries. The app allows users to create posts, follow others, receive notifications, edit their profiles, and upload images.

## Technologies Used

- **Next.js**: Powerful React framework for modern web development.
- **Prisma**: ORM for database access and management.
- **Clerk**: User authentication and management.
- **TailwindCSS**: Utility-first CSS for beautiful and flexible UI.
- **Radix UI**: Modern UI component library.
- **UploadThing**: File upload handling.
- **React Hot Toast**: Real-time toast notifications.
- **Styled-components**: CSS-in-JS for React.

## Folder Structure

```
prisma/                # Database schema and migrations
public/                # Static assets (images, favicon, ...)
src/
  app/                 # Next.js app directory (routing, layout, API routes)
  components/          # Reusable UI components
  actions/             # Server-side logic (server actions)
  lib/                 # Utilities, Prisma config, upload, ...
  notifications/       # Notifications page
  profile/             # User profile pages
  tasks/               # Task management page
```

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up database and Prisma:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Clerk Documentation](https://clerk.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---
