import React from 'react';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {boolean} props.fluid
 * @param {React.ReactNode} props.children
 */
export default function TheContainer(props) {
  return (
    <div className={[`mx-auto ${props?.fluid ? 'max-w-[1280px] w-full' : 'container'}`, props?.className].join(' ')}>
      {props?.children}
    </div>
  );
}
