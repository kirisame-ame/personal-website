import React from 'react';

const CloseIcon: React.FC = () => (
    <svg className='cursor-pointer transition ease-in-out fill-x-link-hover hover:scale-110 hover:rotate-90' width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export default CloseIcon;