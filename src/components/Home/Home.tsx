import { Person } from '../Person/Person';
import { Projects } from '../Projects';
import './Home.scss';

export const Home = () => {
  return (
    <div className="Home">
      <div className="Home__person">
        <Person />
      </div>
      <div className="Home__projects">
        <Projects type="small" />
      </div>
    </div>
  );
};
