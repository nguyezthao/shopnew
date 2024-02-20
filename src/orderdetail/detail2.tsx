import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const Detail2: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  console.log(`Detail2 - ID: ${id}`);

  return (
    <div>
      <h2>Detail 2</h2>
      {/* Nội dung của Detail1 */}
    </div>
  );
};

export default Detail2;