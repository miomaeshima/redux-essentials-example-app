## Structure of the (original) repository
    /src
        index.js: the entry point file for the application. It renders the React-Redux <Provider> component and the main <App> component.
        App.js: the main application component. Renders the top navbar and handles client-side routing for the other content.
        index.css: styles for the complete application
        /api
            client.js: a small AJAX request client that allows us to make GET and POST requests
            server.js: provides a fake REST API for our data. Our app will fetch data from these fake endpoints later.
        /app
            Navbar.js: renders the top header and nav content
            store.js: creates the Redux store instance

Create the Posts Slice
Inside of src, create a new features folder, put a posts folder inside of features, and add a new file named postsSlice.js.


Everytime we create a new slice, we need to add its reducer function to our Redux store. We already have a Redux store being created, but right now it doesn't have any agta inside. 

So, open up app/store.js, import the postsReducer function, and update the call to configureStore so that the postsReducer is being passed as a reducer field named posts.

This tells Reudx that we want our top-level state object to have a field named `posts` inside, and all the data for `state.posts` will be updated by the `postsReducer` function when actions are dispatched.

We can confirm all this by opening the Redux DevTools Extention and looking at the current state contents.

## Showing the Posts List

Let's create a React component that shows the list of posts.

All of the code related to our feed posts feature should go in the posts folder, so create a new file named PostsList.js in there.