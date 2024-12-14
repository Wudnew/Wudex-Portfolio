import PropTypes from 'prop-types';
import React from 'react';

function ButtonPrimary({
    href,
    target = '_self',
    label,
    icon,
    classes = '' // Ensure classes has a default empty string
}) {
    const buttonClasses = `btn btn-primary ${classes}`; // Fix class concatenation

    if (href) {
        return (
            <a 
                href={href}
                target={target}
                className={buttonClasses}
            >
                {icon && (
                    <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span>
                )}
                {label}
            </a>
        );
    } else {
        return (
            <button className={buttonClasses}>
                {icon && (
                    <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span>
                )}
                {label}
            </button>
        );
    }
}


function ButtonOutLine({
    href,
    target = '_self',
    label,
    icon,
    classes = '' // Ensure classes has a default empty string
}) {
    const buttonClasses = `btn btn-outline ${classes}`; // Fix class concatenation

    if (href) {
        return (
            <a 
                href={href}
                target={target}
                className={buttonClasses}
            >
                {icon && (
                    <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span>
                )}
                {label}
            </a>
        );
    } else {
        return (
            <button className={buttonClasses}>
                {icon && (
                    <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span>
                )}
                {label}
            </button>
        );
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
};

ButtonOutLine.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
};

export { ButtonPrimary, ButtonOutLine };