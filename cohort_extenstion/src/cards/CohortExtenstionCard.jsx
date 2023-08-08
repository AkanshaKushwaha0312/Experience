import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { Typography, TextLink } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
    card: {
        marginTop: 0,
        marginRight: spacing40,
        marginBottom: 0,
        marginLeft: spacing40
    }
});

const CohortExtenstionCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.card}>
            <Typography variant="h2">
                Experience Demo
            </Typography>
            <Typography>
                <span>
                    To navigate to Google main page.
                </span>
                <TextLink href="https://www.google.com/" target="_blank">
                     Google
                </TextLink>
            </Typography>
        </div>
    );
};

CohortExtenstionCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CohortExtenstionCard);