import './Technology.scss';
import { ITechnology } from '../../interfaces/ITechnology';
import { TechnologyItem } from '../TechnologyItem';

export const Technology: React.FC<ITechnology> = ({ technology }) => {
  return (
    <div className="Technology">
      {technology.map((item) => (
        <TechnologyItem key={item.name} {...item} />
      ))}
    </div>
  );
};
