import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import BasicFilters from './BasicFilters';
import BasicTable from './BasicTable';

const styles = theme => ({
    filters: {
        padding: theme.spacing.unit
    },
    table: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
});

function StatisticsPage(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.filters}>
                <BasicFilters />
            </Paper>
            <Paper className={classes.table}>
                <BasicTable />
            </Paper>
        </div>
    );
}

StatisticsPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatisticsPage);