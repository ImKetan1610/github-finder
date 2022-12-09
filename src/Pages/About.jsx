function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is a practice project. You can see the codebase
        <a href="https://github.com/ImKetan1610/github-finder">
          {" "}
          by clicking here
        </a>{" "}
        You can also reach out to me
        <strong>
          <a href="https://github.com/ImKetan1610"> Ketan Makode</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-black">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-black" href="https://github.com/ImKetan1610">
          {" "}
          Ketan Makode
        </a>
      </p>
    </div>
  );
}

export default About;
