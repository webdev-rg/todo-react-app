import React, { act } from 'react'

export const useStateActive = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prevActive) => !prevActive);
  };
  return {
    active,
    toggleActive
  }
}
