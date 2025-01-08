import { Person } from '../Person/Person';
import { Projects } from '../Projects';
import './Home.scss';

export const Home = () => {
  return (
    <div className="Home">
      <Person />
      <Projects />
    </div>
  );
};
