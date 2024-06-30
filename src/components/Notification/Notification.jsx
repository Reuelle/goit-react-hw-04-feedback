import React from 'react';
import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.css';

export const Notification = ({message}) => (
    <p className={s.notofication_text}>
        {message}
    </p>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}
