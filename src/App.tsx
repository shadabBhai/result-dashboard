import SearchStudent from "./components/SearchStudent/SearchStudent";
import DisplayStudentDetails from "./components/DisplayStudentDetails/DisplayStudentDetails";

const App = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Result Dashboard</h1>
      <SearchStudent />
      {/* <DisplayStudentDetails /> */}
    </div>
  );
};

export default App;
