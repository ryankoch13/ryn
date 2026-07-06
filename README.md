# Ryn

A mobile-first live chat application built with React Native, Expo, Supabase, and Clerk.

Ryn is a real-time messaging app focused on clean navigation, direct conversations, authenticated user flows, and image-supported chat. The project was built as a practical full-stack mobile app using modern React Native tooling and a backend powered by Supabase.

## Overview

Ryn allows users to sign in, discover other users, start direct message channels, and exchange messages in a mobile chat interface. It combines Expo Router for file-based navigation, Clerk for authentication, Supabase for backend data, and React Query for client-side data fetching and cache updates.

The goal of this project is to demonstrate a production-style React Native architecture with authenticated routes, reusable UI components, typed backend data, and real-time chat behavior.

## Features

* User authentication with Clerk
* Protected app routes for signed-in users
* Direct message channel creation
* Live chat interface
* Message sending with text and image support
* Image picking from the device library
* Supabase-backed users, channels, channel members, and messages
* React Query-powered data fetching and cache invalidation
* Supabase client provider with authenticated session support
* Drawer, tab, and stack navigation using Expo Router
* Mobile-first styling with NativeWind and Tailwind CSS
* TypeScript support throughout the app

## Tech Stack

* React Native
* Expo
* Expo Router
* TypeScript
* Supabase
* Clerk
* TanStack React Query
* NativeWind
* Tailwind CSS
* Expo Image Picker
* Expo Secure Store
* React Navigation Drawer

## Project Structure

```bash
ryn/
├── assets/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── sign-in.tsx
│   │   │   └── sign-up.tsx
│   │   └── (drawer)/
│   │       └── (home)/
│   │           ├── (tabs)/
│   │           ├── channel/
│   │           └── new/
│   ├── components/
│   │   ├── ChannelListItem.tsx
│   │   ├── MessageInput.tsx
│   │   ├── MessageList.tsx
│   │   ├── MessageListItem.tsx
│   │   ├── SupaImage.tsx
│   │   ├── UserList.tsx
│   │   └── UserListItem.tsx
│   ├── data/
│   ├── providers/
│   │   ├── ChannelProvider.tsx
│   │   └── SupabaseProvider.tsx
│   ├── types/
│   └── utils/
├── supabase/
├── app.json
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Expo CLI or Expo through `npx`
* iOS Simulator, Android Emulator, or the Expo Go app

### Installation

Clone the repository:

```bash
git clone https://github.com/ryankoch13/ryn.git
```

Navigate into the project directory:

```bash
cd ryn
```

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
touch .env
```

Add the required environment variables:

```bash
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Start the development server:

```bash
npm start
```

Then open the app using Expo Go, an iOS simulator, or an Android emulator.

## Available Scripts

```bash
npm start
```

Starts the Expo development server.

```bash
npm run ios
```

Starts the app in the iOS simulator.

```bash
npm run android
```

Starts the app in the Android emulator.

```bash
npm run web
```

Starts the app in a web browser.

```bash
npm run supa:types
```

Generates TypeScript types from the linked Supabase project schema.

## Backend Notes

Ryn uses Supabase for backend data and storage. The app expects Supabase tables for users, channels, channel memberships, and messages.

The hosted Supabase project may need to be active and properly configured before the app can run with full chat functionality. If the database project is paused or inactive, authentication may still load, but user discovery, channel creation, and messaging features may not work until Supabase is restored.

## Authentication

Authentication is handled with Clerk. The app uses
