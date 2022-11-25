import React from "react";

const Blog = () => {
  return (
    <div className="md:w-9/12 mx-auto p-4">
      <div>
        <h2 className="text-2xl font-bold">
          What are the different ways to manage a state in a React application?
        </h2>
        <br />
        <p>
          There are four main types of state you need to properly manage in your
          React apps:
        </p>
        <br />
        <p>1. Local state</p>
        <br />
        <p>2. Global state</p>
        <br />
        <p>3. Server state</p>
        <br />
        <p>4. URL state</p>
        <br />
        <p>
          Local (UI) state – Local state is data we manage in one or another
          component. Local state is most often managed in React using the
          useState hook. For example, local state would be needed to show or
          hide a modal component or to track values for a form component, such
          as form submission, when the form is disabled and the values of a
          form’s inputs.
        </p>
        <br />
        <p>
          Global (UI) state – Global state is data we manage across multiple
          components. Global state is necessary when we want to get and update
          data anywhere in our app, or in multiple components at least. A common
          example of global state is authenticated user state. If a user is
          logged into our app, it is necessary to get and change their data
          throughout our application. Sometimes state we think should be local
          might become global.
        </p>
        <br />
        <p>
          Server state – Data that comes from an external server that must be
          integrated with our UI state. Server state is a simple concept, but
          can be hard to manage alongside all of our local and global UI state.
          There are several pieces of state that must be managed every time you
          fetch or update data from an external server, including loading and
          error state. Fortunately there are tools such as SWR and React Query
          that make managing server state much easier.
        </p>
        <br />
        <p>
          URL state – Data that exists on our URLs, including the pathname and
          query parameters. URL state is often missing as a category of state,
          but it is an important one. In many cases, a lot of major parts of our
          application rely upon accessing URL state. Try to imagine building a
          blog without being able to fetch a post based off of its slug or id
          that is located in the URL! There are undoubtedly more pieces of state
          that we could identify, but these are the major categories worth
          focusing on for most applications you build.
        </p>
      </div>
      <br />
      <div>
        <h2 className="text-2xl font-bold">
          How does prototypical inheritance work?
        </h2>
        <br />
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <br />
      <div>
        <h2 className="text-2xl font-bold">
          What is a unit test? Why should we write unit tests?
        </h2>
        <br />
        <p>
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
      </div>
      <br />
      <div>
        <h2> React vs. Angular vs. Vue?</h2>
        <br />
        <p>
          React is one of the most popular JavaScript projects with 160k stars
          on GitHub. It’s developed and maintained by Facebook, and it’s used
          internally in many of their projects. Additionally, it powers over 2
          million websites, according to BuiltWith‘s usage statistics.
        </p>
        <br />
        <p>
          Out of the three frameworks, Vue has the most stars on GitHub, with
          176k stars. The project is developed and led by ex-Googler Evan You.
          It’s a very strong, independent project in the open-source community
          and is used by over 1 million websites, according to BuiltWith.
        </p>
        <br />
        <p>
          Angular is developed by Google, but surprisingly it’s not used in some
          of their flagship products such as Search or Youtube. It’s often used
          in enterprise projects, and it powers over 97,000 websites based on
          BuiltWith‘s data. It’s the least starred among the three frameworks,
          with 68k stars on GitHub. However, when switching from Angular 1 to
          Angular 2, they created an entirely new repository instead of
          continuing the AngularJS project, which also has 59k stars.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Blog;
