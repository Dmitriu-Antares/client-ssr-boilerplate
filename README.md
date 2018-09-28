# Server side rendering with React.js, React Router v4, React Helmet, Redux Sagas, Typescript and CSS Modules

Every FE developer thinks that template on current project is afwul, and create better solution.
So I tried to do my best too :)

It`s only boilerplate with examples of "how to use" components/routes/http req/redux in different situations, 
and it is more about architecture for complex apps,
so there is nothing cool on a interface part (for now).

#Development
Frontend:
```sh
yarn
yarn build-dev
yarn dev
```


#Production
Frontend:
```sh
yarn 
yarn build-prod
yarn start
```
TODO LIST:
- dist folder - chunks in different folder
- think about architecture with styles, because of server imports

SMTH TO THINK ABOUT:
- TDD tests via jest
- Docker
- adding chunks with @react-loadable - real great stuff for performance!

DONE
- enable styling in bundle with postCSS - done
- hotreload for all - done
- recreate PostCSS plugins - done
- add production to webpack - done
- restructure SSR - done
- add decorators for react connect, etc - done
- create better architecture for elems - done
- organize redux with plugins - done
- where to add styles(.css) - done
- organize css architecture: - done
    - choose your methodology - done
    - organize variables - done
    - organize media and libriares - done
- add react-helmet - done
- where I need to add my interfaces - done
- webpack global variables - done
- delete client.js from builded version - done
- enable TSlint and create interfaces - done
- add headers, middlewares - done
- adding images - done
- integrate some handler for axios - done
- adding global medias - done