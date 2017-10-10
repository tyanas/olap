import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import BasicFilters from './BasicFilters';
import BasicTable from './BasicTable';
import { datasets, columnsByDataset } from './data';

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

class StatisticsPage extends Component {
    constructor() {
        super();

        this.state = {
            filters: {
                source: ''
            }
        };

        this.datasetMap = {};

        this.handleFetchDatasets = this.handleFetchDatasets.bind(this);
        this.handleFiltersChange = this.handleFiltersChange.bind(this);

        // on components will/did mount
        this.handleFetchDatasets(datasets);
    }

    handleFetchDatasets(datasets) {
        datasets.forEach(dataset => {
            this.datasetMap[dataset.dataset] = dataset;
        });

        this.sortedDatasets = datasets.sort((a, b) => {
            return a.weight - b.weight;
        });
    }

    handleFiltersChange(newFilters) {
        const {
            filters, // eslint-disable-line no-unused-vars
            ...other
        } = this.state;
        this.setState({ filters: newFilters, ...other });
        console.log('stat', this.state, newFilters); // eslint-disable-line no-console
    }

    render() {
        const { classes } = this.props;
        const { filters } = this.state;
        console.log('render', filters);  // eslint-disable-line no-console
        return (
            <div>
                <Paper className={classes.filters}>
                    <BasicFilters
                        sources={this.sortedDatasets}
                        onSubmit={this.handleFiltersChange}
                        filters={filters} />
                </Paper>
                {filters.source && <Paper className={classes.table}>
                    <BasicTable columns={columnsByDataset(this.datasetMap[filters.source])}/>
                </Paper>}
            </div>
        );
    }
}

StatisticsPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatisticsPage);