import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const Detail1: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  console.log(`Detail1 - ID: ${id}`);

  return (
    <div>
      <h2>Detail 1</h2>
      {/* Nội dung của Detail1 */}
    </div>
  );
};

export default Detail1;
