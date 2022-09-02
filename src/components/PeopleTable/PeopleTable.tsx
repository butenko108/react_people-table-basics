import React from 'react';
import { Person } from '../../types/Person';
import { PersonItem } from '../PersonItem/PersonItem';

type Props = {
  people: Person[];
  selectedSlug: string;
};

export const PeopleTable: React.FC<Props> = (props) => {
  const { people, selectedSlug } = props;

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped
      is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <PersonItem
            people={people}
            person={person}
            selectedSlug={selectedSlug}
            key={person.slug}
          />
        ))}
      </tbody>
    </table>
  );
};
