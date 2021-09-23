# dotnet-react-typescript-parcel-setup
Working build setup for building a typescript/react app on aspnetcore mvc using Parcel v2

After banging my head against Parcel and the build process too many times, I finally managed to
create a working setup that does what I want it to (more or less). It has the following 
features/properties/requirements/things:

- The base is a dotnet mvc app, so it does NOT have a static index.html file
- The client side app is build with React and Typescript
- The styles are build with SASS
- There are test on the typescript code, using Jest
- The types can be checked with yarn check-ts
- Everything works in Visual Studio Code, no weird warnings or unknown stuff there
