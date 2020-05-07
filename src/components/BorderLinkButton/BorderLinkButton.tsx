import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  linkTo: string;
};

function BorderLinkButton({ label, linkTo }: Props) {
  return <Link to={linkTo}>{label}</Link>;
}

export default BorderLinkButton;
