1. What problem does the context API help solve?
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!

- [ ] What problem does the context API help solve?

It enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are a way to tell the reducer the type of action and what to do to change our state data.
Reducers receive the actions and let the state know what to change accordingly.
Store is where the data is stored that is needed to show or give the user what is needed.
In the end, Store is the single source of data needed by the app.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and component state is local.
Some data are only needed in one component and so there is no need to make them globally accessible.
Other data may be needed in other components and so should be part of the applicaiton state.


- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is middle ware that let's us make code to get control before an action is completed.
We can then have action creations make decisions as to what to do next based on what is going on with the action and can even use other functions to complete tasks.

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

I like the reducer way as it does not have so many parts to juggle and remember to keep all the parts properly updated while developing.
