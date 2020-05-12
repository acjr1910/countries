import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  className: string;
};

function BackButton({ className }: Props) {
  return (
    <Link className={className} to="/">
      BackButton
    </Link>
  );
}

export default BackButton;
