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

React components can read data from the Redux store using the `useSelector` hook from the Reac-Redux library.

Then, update the routing in`App.js` so that we show the `PostsList` component. Import the `PostsList` component and put it in the return statement. Wrap it in a React Fragment because we're going to add something else to the main page soon.

## Adding New Posts

Let's create an "Add New Post" form to let us write posts and save them.

### Adding the New Post Form

Create `AddPostForm.js` in our `posts` folder. Add a text input for the post title, and a text area for the body of the post.

### Importing the component into App.js

Import the component into App.js and add it right above the <PostsList /> component.

### Saving Posts Entries

Let's update the posts slice to add new post entries to the Redux store

Our posts slice is responsible for handling all updates to the posts data.
In the `createSlice` call, there is an object called `reducers`. Initially, that is empty.
We need to add a reducer function inside there to handle the case of a post being added.

Inside of `reducers`, add a function named `postAdded`, which will receive two arguments: the current `state` vlaue, nd the `action` object that was dispatched. Since the posts slice <em>only</em> knows about the data it's responsible for, the `state` argument will be the array of posts by itself, and not the entire Redux state object.

The `action` object will have our new post entry as the `action.payload` field, and we'll put that new post object into the `state` array.

When we write the `postAdded` reducer function, `createSlice` will automatically generate an `action creator` function with the same name.
We can export that action creator and use it in our UI components to dispatch the action when the user clicks "Save Post".

## Dispatching the "Post Added" Action
Let's add a click handler to the button in the `AddPostForm` to dispatch the `postAdded` action creator and pass in a new post object containing the title and content.

The post objects also need an `id` field. We can generate a random unique ID using `nanoid` function of Redux Toolkit. 

To dispatch actions from a component, we need access to the store's `dispatch` function. We get this bay calling the `useDispatch` hook from React-Redux. We also need to import the `postAdded` action creator into this file. 

Once we have the `dispatch` function in our component, we can call `dispatch(postAdded())` in a click handler. We can take the title and content values from React component `useState` hooks, generate a new ID, and put them together into a new post object and pass that object to `postAdded()`.



