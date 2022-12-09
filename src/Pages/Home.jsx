import UserResults from "../components/Users/UserResults";
import UserSearch from "../components/Users/UserSearch";


function Home() {
  return <>
  {/* serch component */}
  <UserSearch />
    <UserResults />
  </>;
}

export default Home;
