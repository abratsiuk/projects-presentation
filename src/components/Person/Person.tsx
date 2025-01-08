import { useMemo } from 'react';
import './Person.scss';
import { getPerson } from '../../services/api';
import { IPerson } from '../../interfaces/IPerson';

export const Person = () => {
  const person: IPerson = useMemo(() => getPerson(), []);
  return (
    <div className="Person">
      <img
        className="Person__photo"
        src={`${import.meta.env.BASE_URL}${person.photo}`}
        alt="person photo"
      />
      <h2 className="Person__name">{person.name}</h2>
      <h3 className="Person__position">{person.position}</h3>

      <div className="Person__skype">
        <a href={`skype:${person.skype}?chat`} title="Open Skype">
          <i className="fa-brands fa-skype"></i> {person.skype}
        </a>
      </div>

      <div className="Person__email">
        <a href={`mailto:${person.email}`} title="Send Email">
          <i className="fa-regular fa-envelope"></i> {person.email}
        </a>
      </div>

      <div className="Person__repo">
        <a
          href={person.repo}
          target="_blank"
          rel="noopener noreferrer"
          title="Open GitHub Repository"
        >
          <i className="fa-brands fa-github"></i> repo
        </a>
      </div>

      <div className="Person__cv">
        <a
          href={`${import.meta.env.BASE_URL}${person.cv}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          cv_Aleksandr_Bratsiuk.pdf
        </a>
      </div>
    </div>
  );
};
