# Assignment 4 (Bank of React)

## Submitting

**Due Friday 7/2 at 11:59 PM. Can work in groups of up to 4 people. Please put all group members' names and GitHub usernames in the readme. Submit a link to the repo on Blackboard.**

## Point Breakdown (40 pts)
- (30 pts) Assignment functionality
- (10 pts) Code documentation (proper commenting), code organization (no sloppy code, well-formatted and easy to read), following git feature branch workflow, creating pull requests when merging feature branches, small and frequent commits with appropriate commit messages, etc.


## Lesson Objectives

* Describe the difference between server-side and client-side routing
* Add client-side routing to our React apps using React Router
* Set up React Router to enable common browser behavior
* Understand built in React Router components (Route, Router, Switch, Link, Redirect)

## Client-side Routing

Client-side `routing` is a bit of a misnomer. 

On the server, `routing` generally refers to the way we 
define the URLs and [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) resources that make up our application. Whether we are asking for data from the database or persisting data, our server needs to know where the data lives. Server `routes` help us keep track of this information.

In the browser, things are a little different. When we build Single-Page Applications, we render our data inside of the browser. The data lives on a server, so our data's "addresses" have been defined elsewhere. We only need to know what these pre-defined addresses are to consume them. 
We'll still have a lot of different `views` for our data, and we won't want to show all of them on the page at once. Client-side `routing` is how we describe which views are shown on the page at any given time.

## Routing in React
There is no way to handle client-side routing in the React library.  Instead, there are multiple libraries available to handle this specific task.  The library that is the most popular solution for client-side routing is called `React Router`. Checkout the [official docs](https://reacttraining.com/react-router/).

## Setting up React Router

React Router allows us to swap out sets of components using familiar "routing" patterns, rather than writing lots of complicated `if-statements` in our JavaScript.

To demonstrate the power of this tool, we're going to build a personal banking application, where we can
independently display the Debits and Credits made to each account.

### Set up:

Before we jump into React Router, let's create a new React application:

```bash
$ create-react-app bank-of-react
```

Let's start up our application and make sure everything looks good before we move on.

### Installing React Router:


React Router is packaged up nicely in `npm`. We can use `npm` to quickly pull the Router 
code into our application. The package we'll need is `react-router-dom`:

```bash
$ npm i react-router-dom
```

### Setting Up the Router:

* Now that we've pulled in the React Router code, we need to create a new Router within our application. Because React is not a browser-only framework, the React Router team has provided for us a few different routers, specific to each environment. For our browser-rendered React applications, we'll want to use the `BrowserRouter`. 

Go into `App.js` and pull in the `BrowserRouter` as a component called `Router`. 

Let's also take the opportunity to clear out our React boilerplate and replace it with "Hello, World!":
    
```jsx harmony
    import React, {Component} from 'react';
    import {BrowserRouter as Router} from 'react-router-dom';
    
    class App extends Component {
      render() {
        return (
            <div className="App">
              Hello, World!
            </div>
        );
      }
    }
    
    export default App;
  ```

* Once we've imported our Router, the only set-up left is to wrap our top-level component inside 
of a `<Router />` component, like so:

    ```jsx harmony
    import React, {Component} from 'react';
    import {BrowserRouter as Router} from 'react-router-dom';
    
    class App extends Component {
      render() {
        return (
            <Router>
              <div className="App">
                Hello, World!
              </div>
            </Router>
        );
      }
    }
    
    export default App;
    ```

### Creating Routes

* Let's add a Home component to our application. The first thing we'll need to do is create our component:

```jsx harmony
    // src/components/Home.js
    
    import React, { Component } from 'react';
    
    class Home extends Component {
      render() {
        return (
            <div>
              <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
              <h1>Bank of React</h1>
            </div>
        );
      }
    }
    
    export default Home;
```

* Now that we have a nicely packaged `Home` component, we want to display this component on the 
page instead of "Hello, World!". We could simply mount this component on the `App.js` 
component, like we've done in the past. This would work absolutely fine, but what would happen once 
we navigate away from this page? 

    **How would we get back to the `Home` page that we set up?**
    
* We could create a "flag" on the `state` of the main component called `showHomePage` and whenever 
`showHomePage === true` we'd replace everything else with the `Home` component. This would work, but 
in the long run we'd have to pass `showHomePage` as a `prop` to any component that needed to link back 
to the `Home` component. 

    This may seem doable for a small application. However, if we were to scale this to any 
    reasonably-sized app, we'd quickly see that every component would need `if-statements` for each
    and every page it could possibly link to. Our component structure would quickly become 
    unmanageable.
    
* Instead of simply mounting our `Home` component, let's instead assign a `Route` to it. We can do this by importing the `Route` component from `react-router-dom` and mounting it within our `App.js`. 
Let's try it out:

    ```jsx harmony
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
    import Home from './components/Home';
    
    class App extends Component {
      render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
              </Switch>
            </Router>
        );
      }
    }
    
    export default App;
    ```
    
* If we check the browser, we should now see our Home page rendered instead of the previous "Hello,
World!". Let's break down the new syntax:

    ```jsx harmony
    ...
    <Route exact path="/" component={Home}/>
    ...
    ```
    
* The first thing we should notice is that adding `Routes` to our application is the same as mounting 
any other component. All we have to do is import it and mount it with some props passed in. The props 
that we are using tell the `Route` to mount a `Home` component any time the browser sees a request to 
_exactly_ the '/' route. The `exact` prop is very important, so the browser doesn't show 
our `Home` page when we add any other paths after the initial `/`.

**By Default, more than one route can be rendered at a time. We don't have a use case to show multiple routes, so we will wrap our code in a `<Switch>` component to make sure we only show the results of one route at a time. For more info about `<Switch>`, check out [this link](https://reacttraining.com/react-router/web/api/Switch).**

### Passing Props to Routes
* Now let's add some `props` to our `Home` component. On our banking home page, we want to view our account balance. Let's create an `AccountBalance` component and pass the balance as a `prop`. Since we need to use this information elsewhere, we'll keep the value on the `state` of our `App.js`.

    ```jsx harmony
    // src/components/AccountBalance.js
  
    import React, {Component} from 'react';
    
    class AccountBalance extends Component {
      render() {
        return (
            <div>
              Balance: {this.props.accountBalance}
            </div>
        );
      }
    }
    
    export default AccountBalance;
    ```

    ```jsx harmony
    // src/components/Home.js
  
    import React, {Component} from 'react';
    import AccountBalance from './AccountBalance';
    
    class Home extends Component {
      render() {
        return (
            <div>
              <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
              <h1>Bank of React</h1>
              
              <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
      }
    }
    
    export default Home;
    ```

    ```jsx harmony
    // src/components/App.js
    ...
    constructor() {
        super();
    
        this.state = {
          accountBalance: 14568.27
        }
      }
    ...
    ```
    
* Now we have all of the pieces set up. We just need to tell our `"/" Route` to pass the `accountBalance` 
as a prop each time it loads the `Home` component. We might try something like this:

    ```jsx harmony
    <Route exact path="/" component={<Home accountBalance={this.state.accountBalance}/>}/>
    ```

* ...but if we check the browser we'll see that this throws an error. `Route` components expect us to 
pass a "reference" to a component as our `component=` prop. This means we can't pass an already-built 
component, like the one above. Fortunately, there is a very simple alternative:
    
```jsx harmony
    ...
    render() {
    
      const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    
      return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
          </div>
        </Router>
      );
    }
    ...
```

* The `component` prop won't accept a pre-built component, but React Router has provided 
an alternative `render` method that will. All we have to do is save our component as a variable 
and pass it straight in as a `prop`.

    Now we can refresh the page and see our `Home` page with a proper `AccountBalance`.
    
  * Notice the difference between the `render` and `component` prop.  **If you need to pass props at the `Router` level, you must use render... otherwise use the `component` prop.**
    
### Linking to Routes

* Now that we have set up a Route for our `Home` component, we can navigate back to the component at any time. 
Let's build out a `UserProfile` page and create a `Route` for it in our `App.js`:

    ```jsx harmony
    // src/components/UserProfile.js
    
    import React, {Component} from 'react';
    
    class UserProfile extends Component {
      render() {
        return (
            <div>
              <h1>User Profile</h1>
    
              <div>Username: {this.props.userName}</div>
              <div>Member Since: {this.props.memberSince}</div>
            </div>
        );
      }
    }
    
    export default UserProfile;
    ```
  
    ```jsx harmony
    // src/App.js
    
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom';
    import Home from './components/Home';
    import UserProfile from './components/UserProfile';
    
    class App extends Component {
    
      constructor() {
        super();
    
        this.state = {
          accountBalance: 14568.27,
          currentUser: {
            userName: 'joe_shmo',
            memberSince: '07/23/96',
          }
        }
      }
    
      render() {
    
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
        );
    
        return (
            <Router>
              <div>
                <Route exact path="/" render={HomeComponent}/>
                <Route exact path="/userProfile" render={UserProfileComponent}/>
              </div>
            </Router>
        );
      }
    
    }
    
    export default App;
    ```

* If we type `http://localhost:3000/userProfile` into our browser, we see our new `UserProfile` on the screen.
This isn't a great user experience. Let's instead add a link to our `UserProfile` from the `Home` 
component. React Router provides another very simple solution for this: the `Link` component.

    ```jsx harmony
    import React, {Component} from 'react';
    import AccountBalance from './AccountBalance';
    import {Link} from 'react-router-dom';
    
    class Home extends Component {
      render() {
        return (
            <div>
              <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
              <h1>Bank of React</h1>
    
              <Link to="/userProfile">User Profile</Link>
    
              <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
      }
    }
    
    export default Home;
    ```

* React Router's `Link` component takes a prop `to=` that tells us where we want to redirect. **We can link to any of our components, even within child components, as long as a `Route` has been initialized before the `Link` in our tree of components.**

### Linking Back to the Home Component

* We are now able to view our `UserProfile` component through the `Home` page link, but we are left stranded once we get there. Let's improve our user experience by adding a link back to the `Home` component inside of the `UserProfile` component.

    ```jsx harmony
    // components/UserProfile.js
    import {Link} from 'react-router-dom';
    
    ...
    
    render() {
      return (
        ...
        
        <Link to="/">Return to Home</Link>
      );
    }


### Programattic Redirects

While the `<Link>` component is powerful, it requires a user interaction to navigate to another route.  There are plenty of use cases that require a redirect outside of user clicks.  One common example is wanting to redirect after a form is submitted.  When this happens, we need to use the `<Redirect>` component that is built into React Router.  Let's take a look at this mock `Sign In` component that we can add to our bank.

```js
  // App.js
  ...
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  ...
  const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
  ...
  <Route exact path="/login" render={LogInComponent}/>
  ...
```

```js
// Login.js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default LogIn
```

### Functionality Requirements:

Add more features to the banking app (see below). You will need to access the following API endpoints:

* The Debits index endpoint is located at `https://moj-api.herokuapp.com/debits`
* The Credits index endpoint is located at `https://moj-api.herokuapp.com/credits`

### Suggestions:

Create 2 new components for displaying the credits page and the debits page

Your `App` component should have:
* state containing `accountBalance` (number), `currentUser` (object), `debits` (array), and `credits` (array)
* two functions, `addCredit` and `addDebit` that update the state based on user input
* lifecycle method `componentDidMount()`; API requests should go here

#### Updating the Account Balance 

```text
Making the Account Balance dynamic:

GIVEN I am on any page displaying the Account Balance
WHEN I view the Account Balance display area
THEN I should see an Account Balance that accurately represents my Debits subtracted from my Credits
AND I should be able to see a negative account balance if I have more Debits than Credits
```

#### Adding Debits
```text
Viewing the Debits page:

GIVEN I am on the Home Page
WHEN I click on 'Debits'
THEN I should be redirected to the Debits page
AND I should see a title of 'Debits' on the page
```

```text
Displaying debits:

GIVEN I am on the Debits page
WHEN I view the Debits display area
THEN I should see all of my debits displayed
AND each Debit should display a Debit description
AND each Debit should display a Debit amount
AND each Debit should display a Debit date
```

```text
Adding debits:

GIVEN I am on the Debits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Debits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
```

```text
Viewing the Account Balance on the Debits page:

GIVEN I am on the Debits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

#### Adding Credits

```text
Viewing the Credits page:

GIVEN I am on the Home Page
WHEN I click on 'Credits'
THEN I should be redirected to the Credits page
AND I should see a title of 'Credits' on the page
```

```text
Displaying credits:

GIVEN I am on the Credits page
WHEN I view the Credits display area
THEN I should see all of my Credits displayed
AND each Credit should display a Credit description
AND each Credit should display a Credit amount
AND each Credit should display a Credit date
```

```text
Adding Credits:

GIVEN I am on the Credits page
WHEN I enter a new Credit description
AND WHEN I enter a new Credit amount
AND WHEN I click 'Add Credit'
THEN I should see my new credit added to the Credits display area with the current date
AND I should see my Account Balance updated to reflect the new Credit
```

```text
Viewing the Account Balance on the Credits page:

GIVEN I am on the Credits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```